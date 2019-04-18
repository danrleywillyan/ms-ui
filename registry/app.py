import os
import urllib
from time import sleep
import py_eureka_client.eureka_client as eureka_client

# The flowing code will register your server to eureka server and also start to send heartbeat every 30 seconds
def registry():
    # no spaces or underscores, this needs to be url-friendly
    service_name = 'ui'

    # This needs to be an IP accessible by anyone that
    # may want to discover, connect and/or use your service.
    flask_port = 5000
    ip = 'localhost' #'127.0.0.1'
    your_rest_server_port = 8447

    home_page_url = 'manage/info'
    manage_health_path = 'manage/health'
    eureka_url = 'http://discovery:8761/eureka'

    try:
        sleep(15)
        registry_client, discovery_client = eureka_client.init(eureka_server=eureka_url,
                                                               app_name=service_name,
                                                               instance_ip=ip,
                                                               instance_port=your_rest_server_port)

        registry_client.send_heart_beat()
        # discovery_client.start()
    except Exception as e:
        return registry()

import json
from flask import Flask, send_from_directory

# set the project root directory as the static folder, you can set others.
app = Flask(__name__)

@app.route('/manage/health')
def manage_health():
    return json.dumps({'status':'UP'})

@app.route('/manage/info')
def manage_info():
    return json.dumps({'app':'ui'})

@app.route('/')
def dist():
    return app.send_static_file('index.html')

@app.route('/<path:path>')
def static_proxy(path):
  # send_static_file will guess the correct MIME type
  return send_from_directory('./', path)
