# Utilisez l'image de base Nginx Alpine
FROM nginx:alpine

# Copiez tous les fichiers et répertoires du répertoire courant dans le répertoire de contenu statique de Nginx
COPY . /usr/share/nginx/html/

# Supprimez le Dockerfile du répertoire de contenu statique
RUN rm /usr/share/nginx/html/Dockerfile

# Exposez le port 80 pour le trafic HTTP
EXPOSE 80

# Commande pour démarrer Nginx en premier plan (de cette façon, Docker peut suivre le processus)
CMD ["nginx", "-g", "daemon off;"]