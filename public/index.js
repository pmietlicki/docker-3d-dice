import DiceBox from "https://unpkg.com/@3d-dice/dice-box@1.0.10/dist/dice-box.es.min.js";
const { BoxControls, DisplayResults, DicePicker } = DiceUI;

let Box = new DiceBox("#dice-box", {
  assetPath: "assets/",
  origin: "https://unpkg.com/@3d-dice/dice-box@1.0.10/dist/",
  theme: "default",
  themeColor: "#feea03",
  offscreen: true,
  scale: 6
});

// document.addEventListener("DOMContentLoaded", async () => {
Box.init().then(async (world) => {
  // console.log("Box is ready");

  const Controls = new BoxControls({
    themes: ["default", "rust", "diceOfRolling", "gemstone"],
    themeColor: world.config.themeColor,
    onUpdate: (updates) => {
      Box.updateConfig(updates);
    }
  });
  Controls.themeSelect.setValue(world.config.theme);

  Box.onThemeConfigLoaded = (themeData) => {
    if (themeData.themeColor) {
      Controls.themeColorPicker.setValue(themeData.themeColor);
    }
  };

  // create display overlay
  const Display = new DisplayResults("#dice-box");

  // // create Roller Input
  const Roller = new DicePicker({
    target: "#dice-box",
    onSubmit: (notation) => Box.roll(notation),
    onClear: () => {
      Box.clear();
      Display.clear();
    },
    onReroll: (rolls) => {
      // loop through parsed roll notations and send them to the Box
      rolls.forEach((roll) => Box.add(roll, roll.groupId));
    },
    onResults: (results) => {
      //console.log(results);
      Display.showResults(results);
    }
  });

  // pass dice rolls to Advanced Roller to handle
  Box.onRollComplete = (results) => {
    Roller.handleResults(results);
  };

  // Ajout d'un gestionnaire d'événements de clic
  addEventListener('click', async (event) => {
    // Vérification du type d'élément sur lequel l'utilisateur a cliqué
    const tagName = event.target.tagName.toUpperCase();
    if (tagName === 'BUTTON' || tagName === 'IMG') {
      // Si l'utilisateur a cliqué sur un bouton ou une image, ne rien faire
      return;
    }
    Box.clear();
    const outputDiv = document.querySelector('.output');
    const text = outputDiv.textContent.trim();

    if (text) {
        const diceNotations = text.split('+').map(item => item.trim());
        Box.roll(diceNotations);
    }
  });

  Box.roll(["4d20", "4d12", "4d10", "4d8", "4d6", "4d4"]);
});