cd containers
docker-compose up -d
cd ..
cd client
docker rm codwebapp || true
docker build -t react-docker-app .
docker run --name codwebapp -it -p 8080:80 react-docker-app