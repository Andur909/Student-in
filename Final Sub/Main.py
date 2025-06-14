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

#Login
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

@app.route('/login')
def login():
    return render_template("log_in.html")

# Wordle
@app.route('/wordle', methods=["GET"])
def wordle_main():
    return render_template('wordle.html')

#Wordle to ge the word
@app.route('/get_word', methods=["POST"])
def get_word():
    lang = request.form.get("lang")

    #Stores the words
    english_words = [
        "apple", "grape", "tiger", "blaze", "train",
        "crane", "light", "smile", "plant", "brain",
        "globe", "brush", "zebra", "crown", "flame",
        "stone", "quake", "shine", "brave", "magic"
    ]

    spanish_words = [
        "perro", "echar", "cable", "rojos", "verde",
        "noche", "clave", "lindo", "reina", "fuego",
        "vapor", "tarde", "nadar", "ojito", "raton",
        "hojas", "salud", "jugar", "plaza", "silla"
    ]

    #Word Picket
    #Pciks the word at random depending on the language chosen
    if lang == "english":
        return random.choice(english_words)
    elif lang == "spanish":
        return random.choice(spanish_words)
    else:
        return "error"

@app.route('/calculator')
def calculator():
    return render_template("calculator.html")

@app.route('/about')
def about():
    return render_template("about.html")

@app.route('/converter')
def converter():
    return render_template("converter.html")

@app.route('/sign_up', methods=["GET"])
def sign_up():
    return render_template("sign_up.html")

#After A long time finally works
if __name__ == '__main__':
    app.run(debug=True)
