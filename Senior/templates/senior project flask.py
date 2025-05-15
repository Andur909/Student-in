Python 3.13.3 (tags/v3.13.3:6280bb5, Apr  8 2025, 14:47:33) [MSC v.1943 64 bit (AMD64)] on win32
from flask import Flask, render_template, redirect, url_for, request, session

... app = Flask(__name__)
... app.key = "key" 
... 
... 
... users = {}
... 
... @app.route('/')
... def login():
...     return render_template("login.html")
... 
... @app.route('/signup')
... def signup():
...     return render_template("signup.html")
... 
... @app.route('/signup', methods=["POST"])
... def signup_post():
...     username = request.form.get("username")
...     password = request.form.get("password")
...     if username in users:
...         return "Username already exists", 400
...     users[username] = password
...     session['username'] = username
...     return redirect(url_for("home"))
... 
... @app.route('/login', methods=["POST"])
... def login_post():
...     username = request.form.get("username")
...     password = request.form.get("password")
...     if users.get(username) == password:
...         session['username'] = username
...         return redirect(url_for("home"))
...     return "Invalid credentials", 401
... 
... @app.route('/home')
... def home():
...     if 'username' not in session:
...         return redirect(url_for("login"))
...     return render_template("home.html", username=session['username'])
... 
... @app.route('/profile')
... def profile():
...     if 'username' not in session:
...         return redirect(url_for("login"))
...     return render_template("profile.html", username=session['username'])
... 
... @app.route('/calculator')
... def calculator():
...     return render_template("calculator.html")
... 
... @app.route('/wordle')
... def wordle():
...     return render_template("wordle.html")
... 
... @app.route('/logout')
... def logout():
...     session.clear()
...     return redirect(url_for("login"))
... 
... if __name__ == '__main__':
...     app.run(debug=True)
