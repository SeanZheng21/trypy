import React, {Component} from 'react';
import {Link} from "react-router-dom";
import "../stylesheet/Tutorial.css";
import { HashLink as HLink } from 'react-router-hash-link';

export class TutorialSyntax extends Component {

    constructor(props) {
        super(props);
        this.exClick = this.exClick.bind(this);
        let answers = [`print "foo"`,
                `print("foo")`,
                `my_name = "Taylor Swift"
print("Hello " + my_name + " !")`,
                `print("How do you make a hot dog stand?")
print("You take away its chair!")`,
                `todays_date = "March 31, 2023"`,
                `product = 12 * 34`,
                `remainder = 1398 % 11`,
                `september_rainfall = 5.16
annual_rainfall += september_rainfall

october_rainfall = 7.20
annual_rainfall += october_rainfall

november_rainfall = 5.06
annual_rainfall += november_rainfall

december_rainfall = 4.06
annual_rainfall += december_rainfall`,
            `city_name = "St. Potatosburg"
# The population of the city
city_pop = 340000`,
            `cucumbers = 5
price_per_cucumber = 3.25
total_cost = cucumbers * price_per_cucumber
print(total_cost)
# The type of total_cost is float`,
            `cucumbers = 100
num_people = 6

whole_cucumbers_per_person = cucumbers / num_people
print(whole_cucumbers_per_person)

float_cucumbers_per_person = float(cucumbers) / num_people
print(float_cucumbers_per_person)`,
            `haiku = """The old pond,
A frog jumps in:
Plop!"""`,
            `maria_name = 'Maria'
maria_age = 21

age_is_12 = maria_age == 12
name_is_maria = maria_name == 'Maria'`,
            `float_1 = 0.25
float_2 = 40.0

product = float_1 * float_2
big_string = 'The product was ' + str(product)`,
            `skill_completed = "Python Syntax"
exercises_completed = 13

#The amount of points for each exercise may change, because points don't exist yet
points_per_exercise = 5
point_total = 100
point_total += exercises_completed * points_per_exercise

print('I got ' + str(point_total) + ' points!')`
            ];
        this.state = this.generateInitialState(answers);
    }

    generateInitialState(answer_arr) {
        let correctAnswers = answer_arr;
        let displayedAnswers = [];
        let exAnswer = [];
        for (let elt in answer_arr) {
            displayedAnswers.push(`>>> hidden <<<`);
            exAnswer.push(false);
        }
        return {
            correctAnswers,
            displayedAnswers,
            exAnswer
        }
    }

    exClick = (id) => {
        let resAnswers = [];
        let resDisplay = [];
        for (let i = 0; i < this.state.exAnswer.length; i++) {
            if (i === id) {
                resAnswers.push(!this.state.exAnswer[i]);
            } else {
                resAnswers.push(this.state.exAnswer[i]);
            }
            if (!resAnswers[i]) {
                resDisplay.push(`>>> hidden <<<`);
            } else {
                resDisplay.push(this.state.correctAnswers[i]);
            }
        }
        this.setState({
            ...this.state,
            exAnswer: resAnswers,
            displayedAnswers: resDisplay
        })
    };


    render() {
        return (
            <div className="row">
                <div className="column left">
                    <h1>Python Syntax Basics</h1>
                    <div className="hello-world">
                        <h1>Hello World!</h1>
                        <p>
                            If programming is the act of teaching a computer to have a conversation
                            with a user, it would be most useful to first teach the computer how to
                            speak. In Python, this is accomplished with the print statement.
                        </p>
                        <pre><code>print "Hello, world!"<br/>
                            print "Water—there is not a drop of water there!<br/>
                            Were Niagara but a cataract of sand, would you travel <br/>
                            your thousand miles to see it?"
                        </code></pre>
                        <h3>Exercise:</h3>
                        <p>Using a print statement, output a message of your choosing to the terminal.</p>
                        <Link to="/playground" className="nav-link">Try it out in the playground</Link>
                        <button className="btn btn-info btn-sm"
                                                onClick={this.exClick.bind(this, 0)}>Answer</button>
                        <div className="ex-answer">
                            <pre><code>{this.state.displayedAnswers[0]}</code></pre>
                        </div>
                    </div>

                    <div className="print-statements">
                        <h1>Print Statements</h1>
                        <p>
                            There are two different Python versions. Both Python 2 and Python 3 are
                            used throughout the globe. The most significant difference between the
                            two is how you write a print statement. In Python 3, print has parentheses.
                        </p>
                        <pre><code>print("Hello World!")<br/>
                                    print("Deep into distant woodlands winds a mazy way, reaching<br/>
                                    to overlapping spurs of mountains bathed in their hill-side blue.")
                        </code></pre>
                        <p>In this course we will be using Python 2. If you go on to write Python 3
                            it will be useful to note this key difference.</p>
                        <h3>Exercise:</h3>
                        <p>Print something using Python 3’s syntax.</p>
                        <Link to="/playground" className="nav-link">Try it out in the playground</Link>
                        <button className="btn btn-info btn-sm"
                                                onClick={this.exClick.bind(this, 1)}>Answer</button>
                        <div className="ex-answer">
                            <pre><code>{this.state.displayedAnswers[1]}</code></pre>
                        </div>
                    </div>

                    <div className="strings">
                        <h1>Strings</h1>
                        <p>
                            When printing things in Python, we are supplying a text block that we want
                            to be printed. Text in Python is considered a specific type of data called
                            a string. A string, so named because they’re a series of letters, numbers,
                            or symbols connected in order — as if threaded together by string. Strings
                            can be defined in different ways:
                        </p>
                        <pre><code>print "This is a good string"<br />
                                   print 'You can use single quotes or double quotes for a string'
                        </code></pre>
                        <p>Above we printed two things that are strings and then attempted to print
                            two things that are not strings. While double-quotes (“) and single-quotes
                            (‘) are both acceptable ways to define a string, a string needs to be
                            opened and closed by the same type of quote mark.</p>
                        <p>We can combine multiple strings using +, like so:</p>
                        <pre><code>
                            print "This is " + "a good string"
                        </code></pre>
                        <p>This code will print out “This is a good string”.</p>
                        <h3>Exercise:</h3>
                        <p>Try adding your name to the print statement with the + operator so that
                            this Python program prints “Hello [your_name]”</p>
                        <Link to="/playground" className="nav-link">Try it out in the playground</Link>
                        <button className="btn btn-info btn-sm"
                                                onClick={this.exClick.bind(this, 2)}>Answer</button>
                        <div className="ex-answer">
                            <pre><code>{this.state.displayedAnswers[2]}</code></pre>
                        </div>
                    </div>

                    <div className="handling-errors">
                        <h1>Handling Errors</h1>
                        <p>
                            As we get more familiar with the Python programming language, we run into
                            errors and exceptions. These are complaints that Python makes when it doesn’t
                            understand what you want it to do. Everyone runs into these issues, so it is
                            a good habit to read and understand them. Here are some common errors that we
                            might run into when printing strings:
                        </p>
                        <pre><code>
                            print "Mismatched quotes will cause a SyntaxError'<br />
                            print Without quotes will cause a NameError
                        </code></pre>
                        <p>
                            If the quotes are mismatched Python will notice this and inform you that your
                            code has an error in its syntax because the line ended (called an EOL) before
                            the double-quote that was supposed to close the string appeared. The program
                            will abruptly stop running with the following message:
                        </p>
                        <pre><code>
                            SyntaxError: EOL while scanning a string literal
                        </code></pre>
                        <p>This means that a string wasn’t closed, or wasn’t closed with the same
                            quote-character that started it.</p>
                        <p>
                            Another issue you might run into is attempting to create a string without
                            quotes at all. Python treats words not in quotes as commands, like the print
                            statement. If it fails to recognize these words as defined (in Python or by
                            your program elsewhere) Python will complain the code has a NameError. This
                            means that Python found what it thinks is a command, but doesn’t know what it
                            means because it’s not defined anywhere.
                        </p>
                        <h3>Exercise:</h3>
                        <p>We’ve written two print statements that will raise errors. One has mismatched
                            quotes and the other has no quotes at all.
                        </p>
                        <pre><code>
                            print("How do you make a hot dog stand?')<br />
                            print(You take away its chair!)
                        </code></pre>
                        <p>Fix the two print statements to successfully debug the program!</p>
                        <Link to="/playground" className="nav-link">Try it out in the playground</Link>
                        <button className="btn btn-info btn-sm"
                                                onClick={this.exClick.bind(this, 3)}>Answer</button>
                        <div className="ex-answer">
                            <pre><code>{this.state.displayedAnswers[3]}</code></pre>
                        </div>
                    </div>

                    <div className="variables">
                        <h1>Variables</h1>
                        <p>
                            In Python, and when programming in general, we need to build systems for
                            dealing with data that changes over time. That data could be the location
                            of a plane, or the time of day, or the television show you’re currently
                            watching. The only important thing is that it may be different at different
                            times. Python uses variables to define things that are subject to change.
                        </p>
                        <pre><code>
                            greeting_message = "Welcome to Trypy!"<br />
                            current_excercise = 5
                        </code></pre>
                        <p>
                            In the above example, we defined a variable called greeting_message and
                            set it equal to the string “Welcome to Trypy!”. It also defined a variable
                            called current_exercise and set it equal to the number 5.
                        </p>

                        <h3>Exercise:</h3>
                        <p>
                            Create a variable called todays_date and assign a value that will represent
                            today’s date to that variable.
                        </p>
                        <Link to="/playground" className="nav-link">Try it out in the playground</Link>
                        <button className="btn btn-info btn-sm"
                                                onClick={this.exClick.bind(this, 4)}>Answer</button>
                        <div className="ex-answer">
                            <pre><code>{this.state.displayedAnswers[4]}</code></pre>
                        </div>
                    </div>

                    <div className="arithmetic">
                        <h1>Arithmetic</h1>
                        <p>
                            One thing computers are capable of doing exceptionally well is performing
                            arithmetic. Addition, subtraction, multiplication, division, and other numeric
                            calculations are easy to do in most programming languages, and Python is no
                            exception. Some examples:
                        </p>
                        <pre><code>
                            mirthful_addition = 12381 + 91817<br/>
                            amazing_subtraction = 981 - 312<br/>
                            trippy_multiplication = 38 * 902<br/>
                            happy_division = 540 / 45<br/>
                            sassy_combinations = 129 * 1345 + 120 / 6 - 12
                        </code></pre>
                        <p>
                            Above are a number of arithmetic operations, each assigned to a variable.
                            The variable will hold the final result of each operation. Combinations of
                            arithmetical operators follow the usual order of operations.
                        </p>
                        <p>
                            Python also offers a companion to division called the modulo operator.
                            The modulo operator is indicated by % and returns the remainder after
                            division is performed.
                        </p>

                        <pre><code>
                            is_this_number_odd = 15 % 2<br/>
                            is_this_number_divisible_by_seven = 133 % 7
                        </code></pre>
                        <p>
                            In the above code block, we use the modulo operator to find the remainder
                            of 15 divided by 2. Since 15 is an odd number the remainder is 1.
                        </p>
                        <p>
                            We also check the remainder of 133 / 7. Since 133 divided by 7 has no remainder,
                            133 % 7 evaluates to 0.
                        </p>

                        <h3>Exercise 1:</h3>
                        <p>
                            Multiply two numbers together and assign the result to a variable called product.
                        </p>
                        <Link to="/playground" className="nav-link">Try it out in the playground</Link>
                        <button className="btn btn-info btn-sm"
                                                onClick={this.exClick.bind(this, 5)}>Answer</button>
                        <div className="ex-answer">
                            <pre><code>{this.state.displayedAnswers[5]}</code></pre>
                        </div>

                        <h3>Exercise 2:</h3>
                        <p>
                            What is the remainder when 1398 is divided by 11? Save the results in a variable
                            called remainder.
                        </p>
                        <Link to="/playground" className="nav-link">Try it out in the playground</Link>
                        <button className="btn btn-info btn-sm"
                                                onClick={this.exClick.bind(this, 6)}>Answer</button>
                        <div className="ex-answer">
                            <pre><code>{this.state.displayedAnswers[6]}</code></pre>
                        </div>
                    </div>

                    <div className="updating-variables">
                        <h1>Updating Variables</h1>
                        <p>
                            Changing the contents of a variable is one of the essential operations.
                            As the flow of a program progresses, data should be updated to reflect
                            changes that have happened.
                        </p>
                        <pre><code>
                            fish_in_clarks_pond = 50<br/>
                            <br/>
                            print "Catching fish"<br/>
                            <br/>
                            number_of_fish_caught = 10<br/>
                            fish_in_clarks_pond = fish_in_clarks_pond - number_of_fish_caught
                        </code></pre>
                        <p>
                            In the above example, we start with 50 fish in a local pond. After
                            catching 10 fish, we update the number of fish in the pond to be the
                            original number of fish in the pond minus the number of fish caught.
                            At the end of this code block, the variable fish_in_clarks_pond is equal
                            to 40.
                        </p>
                        <p>
                            Updating a variable by adding or subtracting a number to the original
                            contents of the variable has its own shorthand to make it faster and
                            easier to read.
                        </p>

                        <pre><code>
                            money_in_wallet = 40<br/>
                            sandwich_price = 7.50<br/>
                            sales_tax = .08 * sandwich_price<br/>
                            <br/>
                            sandwich_price += sales_tax<br/>
                            money_in_wallet -= sandwich_price<br/>
                        </code></pre>
                        <p>
                            In the above example, we use the price of a sandwich to calculate sales
                            tax. After calculating the tax we add it to the total price of the sandwich.
                            Finally, we complete the transaction by reducing our money_in_wallet by the
                            cost of the sandwich (with tax).
                        </p>

                        <h3>Exercise:</h3>
                        <p>
                            We’re trying to figure out how much it rained in the past year! Update the
                            annual_rainfall variable to include the values from September to December.
                        </p>
                        <pre><code>
                            january_to_june_rainfall = 1.93 + 0.71 + 3.53 + 3.41 + 3.69 + 4.50<br/>
                            annual_rainfall = january_to_june_rainfall<br/>
                            <br/>
                            july_rainfall = 1.05<br/>
                            annual_rainfall += july_rainfall<br/>
                            <br/>
                            august_rainfall = 4.91<br/>
                            annual_rainfall += august_rainfall<br/>
                            <br/>
                            september_rainfall = 5.16<br/>
                            october_rainfall = 7.20<br/>
                            november_rainfall = 5.06<br/>
                            december_rainfall = 4.06
                        </code></pre>
                        <Link to="/playground" className="nav-link">Try it out in the playground</Link>
                        <button className="btn btn-info btn-sm"
                                                onClick={this.exClick.bind(this, 7)}>Answer</button>
                        <div className="ex-answer">
                            <pre><code>{this.state.displayedAnswers[7]}</code></pre>
                        </div>
                    </div>

                    <div className="comments-python">
                        <h1>Comments</h1>
                        <p>
                            Most of the time, code should be written in such a way that it is easy to
                            understand on its own. However, if you want to include a piece of information
                            to explain a part of your code, you can use the # sign. A line of text preceded
                            by a # is called a comment. The machine does not run this code — it is only
                            for humans to read. When you look back at your code later, comments may help
                            you figure out what it was intended to do.
                        </p>
                        <pre><code>
                            # this variable counts how many rows of the spreadsheet we have:<br/>
                            row_count = 13
                        </code></pre>

                        <h3>Exercise:</h3>
                        <p>
                           Add a comment above the declaration of city_pop with a description of what
                            you think the variable contains.
                        </p>
                        <pre><code>
                            city_name = "St. Potatosburg"<br/>
                            <br/>
                            city_pop = 340000
                        </code></pre>
                        <Link to="/playground" className="nav-link">Try it out in the playground</Link>
                        <button className="btn btn-info btn-sm"
                                                onClick={this.exClick.bind(this, 8)}>Answer</button>
                        <div className="ex-answer">
                            <pre><code>{this.state.displayedAnswers[8]}</code></pre>
                        </div>
                    </div>

                    <div className="numbers-python">
                        <h1>Numbers</h1>
                        <p>
                            Variables can also hold numeric values. The simplest kind of number in Python
                            is the integer, which is a whole number with no decimal point:
                        </p>
                        <pre><code>
                            int1 = 1<br/>
                            int2 = 10<br/>
                            int3 = -5
                        </code></pre>
                        <p>
                            A number with a decimal point is called a float. You can define floats with
                            numbers after the decimal point or by just including a decimal point at the end:
                        </p>
                        <pre><code>
                            float1 = 1.0<br/>
                            float2 = 10.<br/>
                            float3 = -5.5
                        </code></pre>
                        <p>
                            You can also define a float using scientific notation, with e indicating the power of 10:
                        </p>
                        <pre><code>
                            # this evaluates to 150:<br/>
                            float4 = 1.5e2
                        </code></pre>

                        <h3>Exercise:</h3>
                        <p>
                           This exercise is slightly more difficult than the previous ones. Take your time solving it
                            step by step. Good luck!
                        </p>
                        <p>You are going shopping. Let’s make a grocery list so that you can plan your budget.</p>
                        <p>
                            Store the number of cucumbers you want to buy in a variable called cucumbers. Make sure
                            it’s at least 1, and that it’s the appropriate datatype! The store doesn’t sell partial
                            cucumbers.
                        </p>
                        <p>
                            Each cucumber costs 3.25 doubloons. Store the price per cucumber in a variable called
                            price_per_cucumber.
                        </p>
                        <p>
                            Create a new variable called total_cost which is the product of how many cucumbers you
                            are going to buy and the cost per cucumber.
                        </p>
                        <p>
                            Print out total_cost. What datatype is it?
                        </p>
                        <Link to="/playground" className="nav-link">Try it out in the playground</Link>
                        <button className="btn btn-info btn-sm"
                                                onClick={this.exClick.bind(this, 9)}>Answer</button>
                        <div className="ex-answer">
                            <pre><code>{this.state.displayedAnswers[9]}</code></pre>
                        </div>
                    </div>

                    <div className="division-python">
                        <h1>Two Types of Division</h1>
                        <p>
                            In Python, when we divide two integers, we get an integer as a result. When the
                            quotient is a whole number, this works fine:
                        </p>
                        <pre><code>
                            quotient = 6/2<br/>
                            # the value of quotient is now 3, which makes sense
                        </code></pre>
                        <p>
                            However, if the numbers do not divide evenly, the result of the division is
                            truncated into an integer. In other words, the quotient is rounded down to a
                            whole number. This can be surprising when you expect to receive a decimal and
                            you receive a rounded-down integer:
                        </p>
                        <pre><code>
                            quotient = 7/2<br/>
                            # the value of quotient is 3, even though the result of the division here is 3.5
                        </code></pre>
                        <p>
                            To yield a float as the result instead, programmers often change either the numerator
                            or the denominator (or both) to be a float:
                        </p>
                        <pre><code>
                            quotient1 = 7./2<br/>
                            # the value of quotient1 is 3.5<br/>
                            quotient2 = 7/2.<br/>
                            # the value of quotient2 is 3.5<br/>
                            quotient3 = 7./2.<br/>
                            # the value of quotient3 is 3.5
                        </code></pre>
                        <p>
                            An alternative way is to use the float() method:
                        </p>
                        <pre><code>
                            quotient1 = float(7)/2 <br/>
                            # the value of quotient1 is 3.5
                        </code></pre>

                        <h3>Exercise:</h3>
                        <p>
                           You have come home from the grocery store with 100 cucumbers to split amongst yourself
                            and your 5 roommates (6 people total).
                        </p>
                        <p>Create a variable cucumbers that holds 100 and num_people that holds 6.</p>
                        <p>
                            Create a variable called whole_cucumbers_per_person that is the integer result of
                            dividing cucumbers by num_people.
                        </p>
                        <p> Print whole_cucumbers_per_person to the console.</p>
                        <p>
                            You realize that the numbers don’t divide evenly and you don’t want to throw out
                            the remaining cucumbers. Create a variable called float_cucumbers_per_person that
                            holds the float result of dividing cucumbers by num_people.
                        </p>
                        <p>Print float_cucumbers_per_person to the console.</p>

                        <Link to="/playground" className="nav-link">Try it out in the playground</Link>
                        <button className="btn btn-info btn-sm"
                                                onClick={this.exClick.bind(this, 10)}>Answer</button>
                        <div className="ex-answer">
                            <pre><code>{this.state.displayedAnswers[10]}</code></pre>
                        </div>
                    </div>

                    <div className="multi-line-strings">
                        <h1>Multi-line Strings</h1>
                        <p>
                            We have seen how to define a string with single quotes and with double quotes.
                            If we want a string to span multiple lines, we can also use triple quotes:
                        </p>
                        <pre><code>
                            address_string = """136 Whowho Rd<br/>
                            Apt 7<br/>
                            Whosville, WZ 44494"""
                        </code></pre>
                        <p>
                            This address spans multiple lines, and is still contained in one variable, address_string.
                        </p>
                        <p>When a string like this is not assigned to a variable, it works as a multi-line comment.
                            This can be helpful as your code gets more complex:
                        </p>
                        <pre><code>
                            """The following piece of code does the following steps:<br/>
                            takes in some input<br/>
                            does An Important Calculation<br/>
                            returns the modified input and a string that says "Success!" or "Failure..."<br/>
                            """<br/>
                            ... a complicated piece of code here...
                        </code></pre>

                        <h3>Exercise:</h3>
                        <p>
                           Create a variable called haiku and store this haiku as a multi-line string:
                        </p>
                        <pre><code>
                            The old pond,<br/>
                            A frog jumps in:<br/>
                            Plop!
                        </code></pre>
                        <Link to="/playground" className="nav-link">Try it out in the playground</Link>
                        <button className="btn btn-info btn-sm"
                                                onClick={this.exClick.bind(this, 11)}>Answer</button>
                        <div className="ex-answer">
                            <pre><code>{this.state.displayedAnswers[11]}</code></pre>
                        </div>
                    </div>

                    <div className="booleans">
                        <h1>Booleans</h1>
                        <p>
                            Sometimes we have a need for variables that are either true or false.
                            This datatype, which can only ever take one of two values, is called a boolean.
                            In Python, we define booleans using the keywords True and False:
                        </p>
                        <pre><code>
                            a = True<br/>
                            b = False
                        </code></pre>
                        <p>
                            A boolean is actually a special case of an integer. A value of True corresponds to an
                            integer value of 1, and will behave the same. A value of False corresponds to an integer
                            value of 0.
                        </p>

                        <h3>Exercise:</h3>
                        <p>
                            Someone has introduced themselves to you using the following comments.
                        </p>
                        <pre><code>
                            # Hi! I'm Maria and I live in script.py.<br/>
                            # I'm an expert Python coder.<br/>
                            # I'm 21 years old and I plan to program cool stuff forever.
                        </code></pre>
                        <p>
                           Read the comments and then create a variable called age_is_12 and set it to be True
                            or False depending on if this person’s age is 12.
                        </p>
                        <p>
                            Create a variable called name_is_maria and set it to be True or False depending
                            on if this person’s name is Maria.
                        </p>
                        <Link to="/playground" className="nav-link">Try it out in the playground</Link>
                        <button className="btn btn-info btn-sm"
                                                onClick={this.exClick.bind(this, 12)}>Answer</button>
                        <div className="ex-answer">
                            <pre><code>{this.state.displayedAnswers[12]}</code></pre>
                        </div>
                    </div>

                    <div className="value-error">
                        <h1>ValueError</h1>
                        <p>
                            Python automatically assigns a variable the appropriate datatype based on the value
                            it is given. A variable with the value 7 is an integer, 7. is a float, "7" is a string.
                            Sometimes we will want to convert variables to different datatypes. For example, if we
                            wanted to print out an integer as part of a string, we would want to convert that integer
                            to a string first. We can do that using str():
                        </p>
                        <pre><code>
                            age = 13<br/>
                            print "I am " + str(age) + " years old!"
                        </code></pre>
                        <p>This would print:</p>
                        <pre><code>
                            >>> "I am 13 years old!"
                        </code></pre>
                        <p>
                            Similarly, if we have a string like "7" and we want to perform arithmetic operations on it,
                            we must convert it to a numeric datatype. We can do this using int():
                        </p>
                        <pre><code>
                            number1 = "100"<br/>
                            number2 = "10"<br/>
                            <br/>
                            string_addition = number1 + number2 <br/>
                            #string_addition now has a value of "10010"<br/>
                            <br/>
                            int_addition = int(number1) + int(number2)<br/>
                            #int_addition has a value of 110
                        </code></pre>
                        <p>
                            If you use int() on a floating point number, it will round the number down.
                            To preserve the decimal, you can use float():
                        </p>
                        <pre><code>
                            string_num = "7.5"<br/>
                            print int(string_num)<br/>
                            print float(string_num)
                        </code></pre>
                        <pre><code>
                            >>> 7<br/>
                            >>> 7.5
                        </code></pre>

                        <h3>Exercise:</h3>
                        <p>
                            Create a variable called product that contains the result of multiplying
                            the float value of float_1 and float_2.
                        </p>
                        <pre><code>
                            float_1 = 0.25<br/>
                            float_2 = 40.0
                        </code></pre>
                        <p>Create a string called big_string that says:</p>
                        <pre><code>
                            The product was X
                        </code></pre>
                        <p>with the value of product where the X is.</p>
                        <Link to="/playground" className="nav-link">Try it out in the playground</Link>
                        <button className="btn btn-info btn-sm"
                                                onClick={this.exClick.bind(this, 13)}>Answer</button>
                        <div className="ex-answer">
                            <pre><code>{this.state.displayedAnswers[13]}</code></pre>
                        </div>
                    </div>

                    <div className="review">
                        <h1>Review</h1>
                        <p>
                            Great! So far we’ve looked at:
                        </p>
                        <ul>
                            <li>Print statements</li>
                            <li>How to create, modify, and use variables</li>
                            <li>Arithmetic operations like addition, subtraction, division, and multiplication</li>
                            <li>How to use comments to make your code easy to understand</li>
                            <li>Different data types, including strings, ints, floats, and booleans</li>
                            <li>Converting between data types</li>
                        </ul>
                        <p> Let’s apply all of the concepts you have learned one more time! Good luck!</p>

                        <h3>Exercise:</h3>
                        <p>Create a variable called skill_completed and set it equal to the string "Python Syntax".</p>
                        <p>Create a variable called exercises_completed and set it equal to 13. Create another variable
                            called points_per_exercise and set it equal to 5.</p>
                        <p>Create a variable called point_total and set it equal to 100.</p>
                        <p>Update point_total to be what it was before plus the result of multiplying
                            exercises_completed and points_per_exercise.</p>
                        <p>Add a comment above your declaration of points_per_exercise that says:</p>
                        <pre><code>
                            The amount of points for each exercise may change, because points don't exist yet
                        </code></pre>
                        <p>Print a string to the console that says:</p>
                        <pre><code>
                            I got X points!
                        </code></pre>
                        <p>with the value of point_total where X is.</p>

                        <Link to="/playground" className="nav-link">Try it out in the playground</Link>
                        <button className="btn btn-info btn-sm"
                                                onClick={this.exClick.bind(this, 14)}>Answer</button>
                        <div className="ex-answer">
                            <pre><code>{this.state.displayedAnswers[14]}</code></pre>
                        </div>
                    </div>
                </div>

                <div className="column right fixed">
                    <h2>Tutorials</h2>
                    <ul>
                        <li><HLink to="/tutorial-home">Python Overview</HLink></li>
                        <li><HLink to="/tutorial-syntax">Python Syntax</HLink></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default TutorialSyntax;
