from flask import Flask, send_from_directory
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/<path:path>")
def serve_static_content(path):
    return send_from_directory("/home/cpe124-g1/potplants/finalCode", path)

if __name__ == "__main__":
    app.run(port=3000)
