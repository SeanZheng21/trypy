import React, {Component} from 'react';
import {Link} from "react-router-dom";
import TutorialSideBar from "./TutorialSideBar";

export class TutorialControl extends Component {
    constructor(props) {
        super(props);
        this.exClick = this.exClick.bind(this);
        let answers = [
            `bool_one = True
bool_two = True
bool_three = True
bool_four = False
bool_five = False`,
        `# Make me true!
bool_one = 3 < 5

# Make me false!
bool_two = 3 > 5

# Make me true!
bool_three = 3 != 5

# Make me false!
bool_four = 3 == 5

# Make me true!
bool_five = 3 <= 5
        `,
        `# False and False
bool_one = False
# -(-(-(-2))) == -2 and 4 >= 16 ** 0.5
bool_two = False
# 19 % 4 != 300 / 10 / 10 and False
bool_three = False
# -(1 ** 2) < 2 ** 0 and 10 % 10 <= 20 - 10 * 2
bool_four = True
# True and True
bool_five = True`,
        `bool_one = True
bool_two = False
bool_three = True`,
        `bool_one = False
bool_two = True
bool_three = False`,
        `response = 'Y'

answer = "Left"
if answer == "Left":
    print "This is the Verbal Abuse Room, you heap of parrot droppings!"`,
            `def using_control_once():
    if 'foo' != 'bar':
        return "Success #1"

def using_control_again():
    if 5 < 100:
        return "Success #2"

print using_control_once()
print using_control_again()`,
            `answer = "'Tis but a scratch!"

def black_knight():
    if answer == "'Tis but a scratch!":
        return True
    else:             
        return False       

def french_soldier():
    if answer == "Go away, or I shall taunt you a second time!":
        return True
    else:             
        return False`,
            `def greater_less_equal_5(answer):
    if answer > 5:
        return 1
    elif answer < 5:          
        return -1
    else:
        return 0
        
print greater_less_equal_5(4)
print greater_less_equal_5(5)
print greater_less_equal_5(6)
`,`# Complete the if and elif statements!
def grade_converter(grade):
    if grade >= 90:
        return "A"
    elif grade >= 80:
        return "B"
    elif grade >= 70:
        return "C"
    elif grade >= 65:
        return "D"
    else:
        return "F"
         
print grade_converter(92)
print grade_converter(70)
print grade_converter(61)
`

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
                    <h1>CONDITIONALS & CONTROL FLOW</h1>
                    <div className="intro">
                        <h1>Go With the Flow</h1>
                        <p>Just like in real life, sometimes we’d like our code to be able to make decisions.</p>
                        <p>
                            The Python programs we’ve written so far have had one-track minds: they can add two
                            numbers or print something, but they don’t have the ability to pick one of these
                            outcomes over the other.
                        </p>
                        <p>
                            <strong>Control flow</strong> gives us this ability to choose among outcomes based
                            on what else is happening in the program.
                        </p>
                        <p>
                            Check out the code in the editor. You’ll see the type of program you’ll be able to write
                            once you’ve mastered control flow. Click Run to see what happens!
                        </p>
                        <Link to="/playground" className="nav-link">Try it out in the playground</Link>
                        <pre><code>
                        def clinic():<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;print "You've just entered the clinic!"<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;print "Do you take the door on the left or the right?"<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;answer = raw_input("Type left or right and hit 'Enter'.").lower()<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;if answer == "left" or answer == "l":<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print "This is the Verbal Abuse Room, you heap of parrot droppings!"<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;elif answer == "right" or answer == "r":<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print "Of course this is the Argument Room, I've told you that already!"<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;else:<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print "You didn't pick left or right! Try again."<br/>
                                <br/>
                        <br/>
                        clinic()<br/>
                        </code></pre>
                    </div>

                    <div className="Compare Closely!">
                        <h1>Compare Closely!</h1>
                        <p>Let’s start with the simplest aspect of control flow: comparators. There are six:</p>
                        <ul>
                            <li>Equal to (==)</li>
                            <li>Not equal to (!=)</li>
                            <li>Less than (&lt;)</li>
                            <li>Less than or equal to (&lt;=)</li>
                            <li>Greater than (&gt;)</li>
                            <li>Greater than or equal to (&gt;=)</li>
                        </ul>
                        <pre><code>
                            # Equal to (==)<br/>
                            >>> 2 == 2<br/>
                            True<br/>
                            >>> 2 == 5<br/>
                            False<br/>
                            <br/>
                            #Not equal to (!=)<br/>
                            >>> 2 != 5<br/>
                            True<br/>
                            >>> 2 != 2<br/>
                            False<br/>
                            <br/>
                            # Less than (&lt;)<br/>
                            >>> 2 &lt; 5<br/>
                            True<br/>
                            >>> 5 &lt; 2<br/>
                            False<br/>
                            <br/>
                            # Less than or equal to (&lt;=)<br/>
                            >>> 2 &lt;= 2<br/>
                            True<br/>
                            >>> 5 &lt;= 2<br/>
                            False <br/>
                            <br/>
                            # Greater than (&gt;)<br/>
                            >>> 5 &gt; 2<br/>
                            True<br/>
                            >>> 2 &gt; 5<br/>
                            False<br/>
                            <br/>
                            # Greater than or equal to (&gt;=)<br/>
                            >>> 5 &gt;= 5<br/>
                            True<br/>
                            >>> 2 &gt;= 5<br/>
                            False
                        </code></pre>
                        <p>Comparators check if a value is (or is not) equal to, greater than (or equal to),
                            or less than (or equal to) another value. Note that == compares whether two things
                            are equal, and = assigns a value to a variable.
                        </p>

                        <h3>Exercise 1:</h3>
                        <p>Set each variable to True or False depending on what you think the result will be.
                            For example, 1 &lt; 2 will be True, because one is less than two.</p>
                        <ul>
                            <li>Set bool_one equal to the result of 17 &lt; 328</li>
                            <li>Set bool_two equal to the result of 100 == (2 * 50)</li>
                            <li>Set bool_three equal to the result of 19 &lt;= 19</li>
                            <li>Set bool_four equal to the result of -22 >= -18</li>
                            <li>Set bool_five equal to the result of 99 != (98 + 1)</li>
                        </ul>
                        <Link to="/playground" className="nav-link">Try it out in the playground</Link>
                        <button className="btn btn-info btn-sm"
                                                onClick={this.exClick.bind(this, 0)}>Answer</button>
                        <div className="ex-answer">
                            <pre><code>{this.state.displayedAnswers[0]}</code></pre>
                        </div>

                        <h3>Exercise 2:</h3>
                        <p>
                            For each boolean value in the editor, write an expression that evaluates to that value.
                            Remember, comparators are: ==, !=, &gt;, &gt;=, &lt;, and &lt;=.Use at least three
                            different ones! Don’t just use True and False! That’s cheating!
                        </p>
                        <pre><code>
                            # Make me true!<br/>
                            bool_one = 3 &lt; 5<br/>
                            <br/>
                            # Make me false!<br/>
                            bool_two =<br/>
                            <br/>
                            # Make me true!<br/>
                            bool_three = <br/>
                            <br/>
                            # Make me false!<br/>
                            bool_four =<br/>
                            <br/>
                            # Make me true!<br/>
                            bool_five =
                        </code></pre>
                        <Link to="/playground" className="nav-link">Try it out in the playground</Link>
                        <button className="btn btn-info btn-sm"
                                                onClick={this.exClick.bind(this, 1)}>Answer</button>
                        <div className="ex-answer">
                            <pre><code>{this.state.displayedAnswers[1]}</code></pre>
                        </div>
                    </div>

                    <div className="boolean-operators">
                        <h1>Boolean Operators</h1>
                        <p>Boolean operators compare statements and result in boolean values.
                            There are three boolean operators:</p>
                        <ul>
                            <li>and, which checks if both the statements are True;</li>
                            <li>or, which checks if at least one of the statements is True;</li>
                            <li>not, which gives the opposite of the statement.</li>
                        </ul>
                        <table>
                            <tr>
                                <th>A</th>
                                <th>B</th>
                                <th>A AND B</th>
                                <th>A OR B</th>
                                <th>NOT A</th>
                            </tr>
                            <tr>
                                <td>True</td>
                                <td>True</td>
                                <td>True</td>
                                <td>True</td>
                                <td>False</td>
                            </tr>
                            <tr>
                                <td>True</td>
                                <td>False</td>
                                <td>False</td>
                                <td>True</td>
                                <td>False</td>
                            </tr>
                            <tr>
                                <td>False</td>
                                <td>True</td>
                                <td>False</td>
                                <td>True</td>
                                <td>True</td>
                            </tr>
                            <tr>
                                <td>False</td>
                                <td>False</td>
                                <td>False</td>
                                <td>False</td>
                                <td>True</td>
                            </tr>
                        </table>
                        <p>Boolean operators aren’t just evaluated from left to right. Just like with arithmetic
                            operators, there’s an order of operations for boolean operators:</p>
                        <ol>
                            <li>not is evaluated first;</li>
                            <li>and is evaluated next;</li>
                            <li>or is evaluated last.</li>
                        </ol>
                        <p>For example, True or not False and False returns True. Parentheses () ensure your
                            expressions are evaluated in the order you want. Anything in parentheses is evaluated
                            as its own unit.</p>
                    </div>

                    <div className="and">
                        <h1>AND</h1>
                        <p>The boolean operator and returns True when the expressions on both sides of and are true.
                            For instance:</p>
                        <ul>
                            <li>1 &lt; 2 and 2 &lt; 3 is True.</li>
                            <li>1 &lt; 2 and 2 &gt; 3 is False.</li>
                        </ul>

                        <h3>Exercise :</h3>
                        <p>Let’s practice with and. Assign each variable to the appropriate boolean value.</p>
                        <ul>
                            <li>Set bool_one equal to the result of: False and False</li>
                            <li>Set bool_two equal to the result of: -(-(-(-2))) == -2 and 4 &gt;= 16 ** 0.5</li>
                            <li>Set bool_three equal to the result of: 19 % 4 != 300 / 10 / 10 and False</li>
                            <li>Set bool_four equal to the result of: -(1 ** 2) &lt; 2 ** 0 and
                                10 % 10 &lt;= 20 - 10 * 2</li>
                            <li>Set bool_five equal to the result of: True and True</li>
                        </ul>
                        <Link to="/playground" className="nav-link">Try it out in the playground</Link>
                        <button className="btn btn-info btn-sm"
                                                onClick={this.exClick.bind(this, 2)}>Answer</button>
                        <div className="ex-answer">
                            <pre><code>{this.state.displayedAnswers[2]}</code></pre>
                        </div>
                    </div>

                    <div className="or">
                        <h1>OR</h1>
                        <p>The boolean operator or returns True when at least one expression on either side of or
                            is true. For example:</p>
                        <ul>
                            <li>1 &lt; 2 and 2 &gt; 3 is True.</li>
                            <li>1 &gt; 2 and 2 &gt; 3 is False.</li>
                        </ul>

                        <h3>Exercise :</h3>
                        <p>Time to practice with or! Assign each variable to the appropriate boolean value.</p>
                        <ul>
                            <li>Set bool_one equal to the result of: 2 ** 3 == 108 % 100 or 'Cleese' == 'King Arthur'</li>
                            <li>Set bool_two equal to the result of: 100 ** 0.5 >= 50 or False</li>
                            <li>Set bool_three equal to the result of: True or True</li>
                        </ul>
                        <Link to="/playground" className="nav-link">Try it out in the playground</Link>
                        <button className="btn btn-info btn-sm"
                                                onClick={this.exClick.bind(this, 3)}>Answer</button>
                        <div className="ex-answer">
                            <pre><code>{this.state.displayedAnswers[3]}</code></pre>
                        </div>
                    </div>

                    <div className="not">
                        <h1>NOT</h1>
                        <p>The boolean operator not returns True for false statements and False for true statements.</p>
                        <p>For example: not False will evaluate to True, while not 41 &gt; 40 will return False.</p>

                        <h3>Exercise :</h3>
                        <p>Let’s get some practice with not. Assign each variable to the appropriate boolean value.</p>
                        <ul>
                            <li>Set bool_one equal to the result of: not True</li>
                            <li>Set bool_two equal to the result of: not 3 ** 4 &lt; 4 ** 3</li>
                            <li>Set bool_three equal to the result of: not not False</li>
                        </ul>
                        <Link to="/playground" className="nav-link">Try it out in the playground</Link>
                        <button className="btn btn-info btn-sm"
                                                onClick={this.exClick.bind(this, 4)}>Answer</button>
                        <div className="ex-answer">
                            <pre><code>{this.state.displayedAnswers[4]}</code></pre>
                        </div>
                    </div>

                    <div className="if-conditional-syntax">
                        <h1>If Conditional Statement Syntax</h1>
                        <p>if is a conditional statement that executes some specified code after checking if
                            its expression is True. Here’s an example of if statement syntax:</p>
                        <pre><code>
                            if 8 &lt; 9:<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;print "Eight is less than nine!"
                        </code></pre>
                        <p>In this example, 8 &lt; 9 is the checked expression and print "Eight is less than nine!"
                            is the specified code.</p>
                        <p>Pay attention to the indentation before the print statement. This space, called white space,
                            is how Python knows we are entering a new block of code. Python accepts many different
                            kinds of indentation to indicate blocks. In this lesson, we use four spaces but elsewhere
                            you might encounter two-space indentation or tabs (which Python will see as different
                            from spaces).</p>
                        <p>
                            If the indentation from one line to the next is different and there is no command
                            (like if) that indicates an incoming block then Python will raise an IndentationError.
                            These errors could mean, for example, that one line had two spaces but the next one
                            had three. Python tries to indicate where this error happened by printing the line
                            of code it couldn’t parse and using a ^ to point to where the indentation was different
                            from what it expected.
                        </p>
                        <h3>Exercise 1:</h3>
                        <p> Will the above print statement print to the console? Set response to 'Y' if you think so,
                            and 'N' if you think not.</p>
                        <pre><code>
                            response = <br/>
                            answer = "Left"<br/>
                            if answer == "Left":<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;print "This is the Verbal Abuse Room, you heap of parrot droppings!"
                        </code></pre>
                        <Link to="/playground" className="nav-link">Try it out in the playground</Link>
                        <button className="btn btn-info btn-sm"
                                                onClick={this.exClick.bind(this, 5)}>Answer</button>
                        <div className="ex-answer">
                            <pre><code>{this.state.displayedAnswers[5]}</code></pre>
                        </div>

                        <h3>Exercise 2:</h3>
                        <p> In the editor you’ll see two functions. Don’t worry about anything unfamiliar.
                            We’ll explain soon enough.</p>
                        <p>Replace the underline on line 2 with an expression that returns True, then replace the
                            underline on line 6 with an expression that returns True.</p>
                        <p>If you do it successfully, then both "Success #1" and "Success #2" are printed.</p>
                        <pre><code>
                            {`def using_control_once():
    if _______:
        return "Success #1"

def using_control_again():
    if _______:
        return "Success #2"

print using_control_once()
print using_control_again()`}
                        </code></pre>
                        <Link to="/playground" className="nav-link">Try it out in the playground</Link>
                        <button className="btn btn-info btn-sm"
                                                onClick={this.exClick.bind(this, 6)}>Answer</button>
                        <div className="ex-answer">
                            <pre><code>{this.state.displayedAnswers[6]}</code></pre>
                        </div>
                    </div>

                    <div className="else-conditional-syntax">
                        <h1>Else Conditional Statement Syntax</h1>
                        <p>The else statement complements the if statement. An if/else pair says: “If this
                            expression is true, run this indented code block; otherwise, run this code after
                            the else statement.” Unlike if, else doesn’t depend on an expression. For example:</p>
                        <pre><code>
                            {`if 8 > 9:
  print "I don't get printed!"
else:
  print "I get printed!"`}
                        </code></pre>
                        <p>Will display "I get printed!" because 8 > 9 is False</p>
                        <h3>Exercise :</h3>
                        <p> Complete the else statements. Note the indentation for each line!</p>
                        <pre><code>
                            {`answer = "'Tis but a scratch!"

def black_knight():
    if answer == "'Tis but a scratch!":
        return True
    else:             
        return        # Make sure this returns False

def french_soldier():
    if answer == "Go away, or I shall taunt you a second time!":
        return True
    else:             
        return        # Make sure this returns False`}
                        </code></pre>
                        <Link to="/playground" className="nav-link">Try it out in the playground</Link>
                        <button className="btn btn-info btn-sm"
                                                onClick={this.exClick.bind(this, 7)}>Answer</button>
                        <div className="ex-answer">
                            <pre><code>{this.state.displayedAnswers[7]}</code></pre>
                        </div>
                    </div>

                    <div className="nested-conditional-syntax">
                        <h1>Elif Conditional Statement Syntax</h1>
                        <p>elif is short for “else if.” It means exactly what it sounds like: “otherwise,
                            if the following expression is true, do this!”</p>
                        <pre><code>
                            {`if 8 > 9:
  print "I don't get printed!"
elif 8 < 9:
  print "I get printed!"
else:
  print "I also don't get printed!"`}
                        </code></pre>
                        <p>In the example above, the elif statement is only checked if the original if
                            statement is False.</p>
                        <h3>Exercise :</h3>
                        <p> On line 2, fill in the if statement to check if answer is greater than 5.
                        </p>
                        <p>On line 4, fill in the elif so that the function outputs -1 if answer is less than 5.</p>
                        <pre><code>
                            {`def greater_less_equal_5(answer):
    if ________:
        return 1
    elif ________:          
        return -1
    else:
        return 0
        
print greater_less_equal_5(4)
print greater_less_equal_5(5)
print greater_less_equal_5(6)`}
                        </code></pre>
                        <Link to="/playground" className="nav-link">Try it out in the playground</Link>
                        <button className="btn btn-info btn-sm"
                                                onClick={this.exClick.bind(this, 8)}>Answer</button>
                        <div className="ex-answer">
                            <pre><code>{this.state.displayedAnswers[8]}</code></pre>
                        </div>
                    </div>

                    <div className="review">
                        <h1>Review</h1>
                        <p>Really great work! Here’s what you’ve learned in this unit:</p>
                        <pre><code>
                            {`# Comparators
3 < 4
5 >= 5
10 == 10
12 != 13

# Boolean Operators
True or False 
(3 < 4) and (5 >= 5)
this() and not that()

# Conditional Statements
if this_might_be_true():
  print "This really is true."
elif that_might_be_true():
  print "That is true."
else:
  print "None of the above."`}
                        </code></pre>
                        <p>Now let's get some final practice!</p>
                        <h3>Exercise :</h3>
                        <p> There is the outline of a function called grade_converter(). The purpose of this function
                            is to take a number grade (1-100), defined by the variable grade, and to return the
                            appropriate letter grade (A, B, C, D, or F).
                        </p>
                        <p>Your task is to complete the function by creating appropriate if and elif statements
                            that will compare the input grade with a number and then return a letter grade.</p>
                        <p>Your function should return the following letter grades:</p>
                        <ul>
                            <li>90 or higher should get an “A”</li>
                            <li>80 - 89 should get a “B”</li>
                            <li>70 - 79 should get a “C”</li>
                            <li>65 - 69 should get a “D”</li>
                            <li>Anything below a 65 should receive an “F”</li>
                        </ul>
                        <pre><code>
                            {`# Complete the if and elif statements!
def grade_converter(grade):
    if _____:
        return "A"
    elif _____:
        return "B"
    elif _____:
        return "C"
    elif _____:
        return "D"
    else:
        return "F"
      
# This should print an "A"      
print grade_converter(92)

# This should print a "C"
print grade_converter(70)

# This should print an "F"
print grade_converter(61)`}
                        </code></pre>

                        <Link to="/playground" className="nav-link">Try it out in the playground</Link>
                        <button className="btn btn-info btn-sm"
                                                onClick={this.exClick.bind(this, 9)}>Answer</button>
                        <div className="ex-answer">
                            <pre><code>{this.state.displayedAnswers[9]}</code></pre>
                        </div>
                    </div>
                </div>

                <TutorialSideBar />
            </div>
        );
    }
}

export default TutorialControl;