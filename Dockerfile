FROM gaesi/nginx-alpine-python

WORKDIR /usr/share/nginx/registry

COPY registry/ .
COPY dist/ ./static

RUN pip3 install -r requirements.txt
ENTRYPOINT flask run --host=0.0.0.0
