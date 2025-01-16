from flask import Flask, request, render_template, session
import random

app = Flask(__name__)
app.secret_key = "supersecretkey"  # Needed for session management

@app.route("/", methods=["GET", "POST"])
def home():
    # Initialize the random number in the session if not already set
    if "random_number" not in session:
        session["random_number"] = random.randint(1, 10)

    message = None

    if request.method == "POST":
        try:
            user_guess = int(request.form["guess"])  # Get the user's guess from the form
            random_number = session["random_number"]

            if user_guess == random_number:
                message = "Congratulations! You guessed the correct number!"
                session.pop("random_number")  # Reset the game
            else:
                message = "Try again! Your guess is incorrect."
        except ValueError:
            message = "Invalid input. Please enter a valid number between 1 and 10."

    return render_template("index.html", message=message)

if __name__ == "__main__":
    app.run(debug=True)
