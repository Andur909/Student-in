#Name: Varesh L.
#Date: 04/20/2025
#End: Unknown

from flask import Flask, render_template, redirect

app = Flask(__name__)

@app.route('/')
def home():
    return redirect('/main')

@app.route('/main')
def main():
    return render_template('main.html')

@app.route('/profile')
def profile():
    return render_template('profile.html')

@app.route('/login')
def login():
    return render_template('log_in.html')

if __name__ == '__main__':
    app.run()
