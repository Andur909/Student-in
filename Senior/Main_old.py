from flask import Flask, render_template, request, redirect
import random
import os.path
from os import path

app = Flask(__name__)

@app.route('/', methods=["GET", "POST"])
def main():
    files = ["usernames", "passwords", "addressinfo"]
    for file_name in files:
        full_path = file_name + ".txt"
        if not path.exists(full_path):
            with open(full_path, 'w') as f:
                pass

    if request.method == 'GET':
        return render_template('log_in.html')
    else:
        return GetLogin()

def GetLogin():
    global startup, userindex, runtime
    runtime = 0
    logorsign = request.form['button']

    if logorsign == "login":
        user = request.form.get('txt_login_username')
        ps = request.form.get('txt_login_password')
        startup = "Log_In"
    else:
        user = request.form.get('txt_signin_username')
        ps = request.form.get('txt_signin_password')
        startup = "Sign_Up"

    with open("usernames.txt", "r+") as f:
        storedusers = f.readline().split(",")

    userindex = 0

    if storedusers != [""]:
        while userindex < len(storedusers):
            if user == storedusers[userindex]:
                if startup == "Sign_Up":
                    return render_template('log_in.html', start_type=startup, error_start="Username already exists")
                else:
                    with open("passwords.txt", "r+") as f:
                        storedps = f.readline().split(",")
                    if ps == storedps[userindex]:
                        return redirect('/main')
                    else:
                        return render_template('log_in.html', start_type=startup, error_start="Password is incorrect")
            userindex += 1

        if startup == "Sign_Up":
            with open("usernames.txt", "a") as f:
                f.write(user + ",")
            with open("passwords.txt", "a") as f:
                f.write(ps + ",")
            userindex -= 1
            return redirect('/main')
        else:
            return render_template('log_in.html', start_type=startup, error_start="Username is incorrect")

    else:
        with open("usernames.txt", "a") as f:
            f.write(user + ",")
        with open("passwords.txt", "a") as f:
            f.write(ps + ",")
        with open("addressinfo.txt", "a") as f:
            f.write(" , , , , , @")
        return redirect('/main')

@app.route('/main')
def main_page():
    return render_template("main.html")

@app.route('/profile')
def profile():
    return render_template("profile.html")

@app.route('/login')
def login():
    return render_template("log_in.html")

# 🔁 Wordle game route
@app.route('/wordle', methods=["GET"])
def wordle_main():
    return render_template('wordle.html')

# 🧠 Get a random word from a list based on selected language
@app.route('/get_word', methods=["POST"])
def get_word():
    lang = request.form.get("lang")

    english_words = [
        "apple", "grape", "tiger", "blaze", "train",
        "crane", "light", "smile", "plant", "brain",
        "globe", "brush", "zebra", "crown", "flame",
        "stone", "quake", "shine", "brave", "magic"
    ]

    spanish_words = [
        "perro", "gatoo", "luzzz", "rojos", "verde",
        "noche", "clave", "lindo", "reina", "fuego",
        "vapor", "tarde", "pazzz", "ojito", "raton",
        "hojas", "salud", "jugar", "plaza", "silla"
    ]

    if lang == "english":
        return random.choice(english_words)
    elif lang == "spanish":
        return random.choice(spanish_words)
    else:
        return "error"

if __name__ == '__main__':
    app.run(debug=True)
