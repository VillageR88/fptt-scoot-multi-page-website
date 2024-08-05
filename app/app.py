from flask import Flask, render_template, send_from_directory
import logging

app = Flask(__name__, static_folder="static", template_folder="templates")


def metadata():
    return {
        "title": "Scoot multi-page website",
        "description": "Scoot multi-page website",
    }


@app.route("/")
def index():
    return render_template("index.html", metadata=metadata())


@app.route("/robots.txt")
def robots_txt():
    try:
        return send_from_directory(app.static_folder, "robots.txt")
    except FileNotFoundError:
        logging.error("robots.txt not found")
        return "robots.txt not found", 404


if __name__ == "__main__":
    app.run(debug=True)
