FROM msdaf/nginx-alpine-python

WORKDIR /usr/share/nginx/html

COPY dist/ .

WORKDIR /usr/share/nginx/registry

COPY registry/ .

RUN pip3 install -r requirements.txt
RUN flask run --host=0.0.0.0
