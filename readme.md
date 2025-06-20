Age-Based Motivational Message System

A simple JavaScript program that displays personalized messages based on the user's age, with input validation and motivational messages.
Key Features

    Interactive interface using prompt() and alert()

    Optional username (default value: "Friend")

    Strict age validation (only positive integers 1-120)

    Personalized motivational messages:

        For users under 18 years

        For users 18 years or older

    Clear error messages for invalid inputs

How to Use

    Browser Execution:

        Copy the JavaScript code

        Open browser console (F12)

        Paste the code and press Enter

    HTML Execution:
    html

    <!DOCTYPE html>
    <html>
    <head>
        <title>Age-Based Message System</title>
    </head>
    <body>
        <script src="age-messages.js"></script>
    </body>
    </html>

    Examples:

A. Input:
Name: (empty)
Age: 16

Output:
Hello!
At 16 years old, you have a whole future ahead of you.
Keep learning and growing!
Every line of code you write brings you closer to your dreams.

B. Input:
Name: Maria
Age: 25

Output:
Hello Maria!
At 25 years old, you have great life experience.
The world of programming is full of opportunities for you.
Keep moving forward and reach your goals!

C. Input:
Age: "sixteen"

Output:
Please enter only positive whole numbers. Example: 16
