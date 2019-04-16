FROM nginx:alpine

RUN apk --update add python3
RUN pip3 install --upgrade pip

COPY nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/share/nginx/html

COPY dist/ .

WORKDIR /usr/share/nginx/registry

COPY registry/ .

RUN pip3 install -r requirements.txt
RUN flask run --host=0.0.0.0
