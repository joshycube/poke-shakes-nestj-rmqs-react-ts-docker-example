docker stop codmq-dev
docker stop codmongo-dev

cd containers
docker-compose up -d --build --remove-orphans