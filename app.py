from flask import Flask
from .config import config
from .routes.index import index


app = Flask(__name__)
app.config.from_object(config)
app.register_blueprint(index)
