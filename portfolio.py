import flask
#import sklearn
from flask import Flask,redirect, url_for, request,render_template,send_file,jsonify
#from bottle import static_file
import werkzeug
import pandas as pd
from werkzeug.utils import secure_filename
from flask import get_flashed_messages
from flask import flash
#from werkzeug import FileWrapper
#from io import BytesIO
from flask import Flask, Response
from flask import send_from_directory

app=Flask(__name__)
@app.route("/")
def index():
    return render_template("mainpage.html")


if __name__=="__main__":
    app.run(debug=True)