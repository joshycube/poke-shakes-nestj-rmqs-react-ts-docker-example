docker stop codapp
docker stop codmicro1
docker stop codapi
docker stop codmq
docker stop codmongo

cd containers-dev
docker-compose up -d