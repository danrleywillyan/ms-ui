import py_eureka_client.eureka_client as eureka_client

# TODO: retrieve config
# http://discovery:8761/configuration/autosprocessuais-pecas-textos-default.json

# no spaces or underscores, this needs to be url-friendly
service_name = 'ui'

# This needs to be an IP accessible by anyone that
# may want to discover, connect and/or use your service.
ip = 'localhost' #'127.0.0.1'
port = 5000

home_page_url = 'manage/info'
manage_health_path = 'manage/health'
eureka_url = 'http://172.17.0.1:8761/eureka'

your_rest_server_port = 5000
# The flowing code will register your server to eureka server and also start to send heartbeat every 30 seconds
registry_client, discovery_client = eureka_client.init(eureka_server=eureka_url,
                                                       app_name=service_name,
                                                       instance_ip=ip,
                                                       instance_port=your_rest_server_port)

registry_client.send_heart_beat()
# discovery_client.start()

import json
from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello():
    return "Hello World!"

@app.route("/manage/health")
def manage_health():
    return json.dumps({"status":"UP"})


@app.route("/manage/info")
def manage_info():
    return json.dumps({"app":"autosprocessuais-pecas-textos"})
