# 3D Dice Roller

This repository hosts the Docker setup for a 3D Dice Roller web application. It utilizes the `@3d-dice/dice-ui` and `@3d-dice/dice-box` libraries to render interactive 3D dice that users can roll by interacting with the page.

## Features
- Rolling a variety of dice by clicking anywhere on the page.
- Displaying roll results in an overlay.
- Customizable themes and colors for dice.
- Responsive design that works on both desktop and mobile devices.

## Getting Started

### Prerequisites
- [Docker](https://www.docker.com/get-started)

### Installation
1. Clone the repository
```bash
git clone https://github.com/pmietlicki/docker-3d-dice.git
```

2. Navigate to the project directory
```bash
cd docker-3d-dice
```

3. Build the Docker image
```bash
docker build -t 3d-dice .
```

4. Run the Docker container
```bash
docker run -d -p 8080:80 --name 3d-dice 3d-dice
```

Now the application should be running at [http://localhost:8080](http://localhost:8080).

### Usage
- To roll the dice, simply click anywhere on the page.
- The dice configuration is displayed on the page, and clicking again will re-roll the same dice.
- To change the dice configuration, modify the dice notation in the `src/index.js` file and rebuild the Docker image.

## Configuration
The application configuration can be modified by editing the `src/index.js` file. Here you can change the dice notation to roll different dice, as well as customize the appearance and behavior of the dice.

## Documentation
- For more information on how the dice rolling and rendering works, check out the documentation for [@3d-dice/dice-ui](https://fantasticdice.games/docs/usage/methods) and [@3d-dice/dice-box](https://fantasticdice.games/docs/usage/config).

## License
This project is open source and available under the [MIT License](LICENSE).

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue.