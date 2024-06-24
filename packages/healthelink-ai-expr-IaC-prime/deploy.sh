#!/bin/bash

source ~/.secrets.d/healthelink-infra.env

cd docker/

## Create docker network appliance ##

docker network create appliance

## Vanna-ai ##

#Working Directory
cd vanna-ai/
echo -e  "OPENAI_API_KEY=${OPENAI_API_KEY}\nMODEL_NAME=${MODEL_NAME}\nREMOTE_HOST=${REMOTE_HOST}\nREMOTE_PASSWD=${REMOTE_PASSWD}\nREMOTE_UNAME=${REMOTE_UNAME}\nDB_NAME=${DB_NAME}\nPORT=${PORT}\nJWT_SECRET=${JWT_SECRET}\nSSCHEMA_NAMES=${SCHEMA_NAMES}\nPOSTGRES_USER=${POSTGRES_USER}\nPOSTGRES_PASSWORD=${POSTGRES_PASSWORD}\nPOSTGRES_DATABASE=${POSTGRES_DATABASE}"  > .env

##Run Docker Compose
docker-compose build  && docker-compose up -d


## Anythingllm ##

#Working Directory
cd ../anything-llm/
echo -e  "LLM_PROVIDER=${LLM_PROVIDER}\nOPEN_AI_KEY=${OPEN_AI_KEY}\nOPEN_MODEL_PREF=${OPEN_MODEL_PREF}\nANTHROPIC_API_KEY=${ANTHROPIC_API_KEY}\nANTHROPIC_MODEL_PREF=${ANTHROPIC_MODEL_PREF}\nEMBEDDING_ENGINE=${EMBEDDING_ENGINE}\nVECTOR_DB=${VECTOR_DB}\nJWT_SECRET=${JWT_SECRET}\nSTORAGE_DIR=${STORAGE_DIR}" > .env
docker-compose build  && docker-compose up -d

## Litellm and Ollama ##

#Working Directory
cd ../litellm-proxy
echo -e "OPENAI_KEY=${OPENAI_KEY}\nLITELLM_MASTER_KEY=${LITELLM_MASTER_KEY}\nUI_USERNAME=${UI_USERNAME}\nUI_PASSWORD=${UI_PASSWORD}\nSTORE_MODEL_IN_DB=${STORE_MODEL_IN_DB}\nLITELLM_DATABASE=${LITELLM_DATABASE}\nLITELLM_POSTGRES_USER=${LITELLM_POSTGRES_USER}\nLITELLM_POSTGRES_PASSWORD=${LITELLM_POSTGRES_PASSWORD}\nDATABASE_URL=${DATABASE_URL}\nOLLAMA_API_BASE=${OLLAMA_API_BASE}" > .env

##Run Docker Compose
docker-compose build  && docker-compose up -d
