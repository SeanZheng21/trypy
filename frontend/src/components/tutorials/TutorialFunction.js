import React, {Component} from 'react';
import {Link} from "react-router-dom";
import TutorialSideBar from "./TutorialSideBar";

export class TutorialFunction extends Component {
    constructor(props) {
        super(props);
        this.exClick = this.exClick.bind(this);
        let answers = [`def spam():
  print("Eggs!")

# Define the spam function above this line.
spam()`,
        `def power(base, exponent): 
  result = base ** exponent
  print "%d to the power of %d is %d." % (base, exponent, result)

power(37, 4)`,
        `def one_good_turn(n):
  return n + 1
    
def deserves_another(n):
  return one_good_turn(n) + 2`,
        `def cube(number):
  return number ** 3

def by_three(number):
  if number % 3 == 0:
    return cube(number)
  else:
    return False`,
        `from math import sqrt

print(sqrt(25))`,
        `absolute = abs(-42)

print absolute`,
        `print(type(1))
print(type(1.))
print(type('1'))`,
        `def shut_down(s):
  if s == 'yes':
    return 'Shutting down'
  elif s == 'no':
    return 'Shutdown aborted'
  else:
    return 'Sorry'`,
        `def distance_from_zero(elt):
  if type(elt) == type(1) or type(elt) == type(1.):
    return abs(elt)
  else:
    return 'Nope'

distance_from_zero(-5)
distance_from_zero(3.2)
distance_from_zero('foo')`];
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
                    <div className="intro">
                        <h1 className="main-title">Functions</h1>
                        <h1>Introduction</h1>
                        <p>
                            You might have considered the situation where you would like to reuse a piece of code,
                            just with a few different values. Instead of rewriting the whole code, it’s much cleaner
                            to define a function, which can then be used repeatedly.
                        </p>
                        <p>
                            Check out the following code. We’ve defined two functions: tax to calculate the tax
                            on a bill, and tip to compute the tip. See how much of the code you understand
                            at first glance (we’ll explain it all soon).
                        </p>
                        <pre><code>
                            {`def tax(bill):
  """Adds 8% tax to a restaurant bill."""
  bill *= 1.08
  print "With tax: %f" % bill
  return bill

def tip(bill):
  """Adds 15% tip to a restaurant bill."""
  bill *= 1.15
  print "With tip: %f" % bill
  return bill
  
meal_cost = 100
meal_with_tax = tax(meal_cost)
meal_with_tip = tip(meal_with_tax)`}
                        </code></pre>
                    </div>

                    <div className="structure">
                        <h1>Function Structure</h1>
                        <p>
                            Functions are defined with two components:
                        </p>
                        <p>
                            1. The header, which includes the def keyword, the name of the function, and any parameters
                            the function requires. Here’s an example:
                        </p>
                        <pre><code>
                            {`def hello_world(): # There are no parameters`}
                        </code></pre>
                        <p>
                            2. The body, which describes the procedures the function carries out.
                            The body is indented, just like conditional statements.
                        </p>
                        <pre><code>
                            {`print("Hello World!")`}
                        </code></pre>
                        <p>Here’s the full function pieced together:</p>
                        <pre><code>
                            {`def hello_world():
  print "Hello World!"`}
                        </code></pre>

                        <h3>Exercise:</h3>
                        <p>Go ahead and create a function, spam, that prints the string "Eggs!" to the console.
                            Don’t forget to include a comment of your own choosing (enclose it in triple quotes!).</p>
                        <Link to="/playground" className="nav-link">Try it out in the playground</Link>
                        <button className="btn btn-info btn-sm"
                                                onClick={this.exClick.bind(this, 0)}>Answer</button>
                        <div className="ex-answer">
                            <pre><code>{this.state.displayedAnswers[0]}</code></pre>
                        </div>
                    </div>

                    <div className="call-response">
                        <h1>Call and Response</h1>
                        <p>
                            After defining a function, it must be called to be implemented. In the previous exercise,
                            spam() in the last line told the program to look for the function called spam and execute
                            the code inside it. Here is another example with parameters:
                        </p>
                        <pre><code>
                            {`def square(n):
  """Returns the square of a number."""
  squared = n ** 2
  print "%d squared is %d." % (n, squared)
  return squared
  
square(10)`}
                        </code></pre>
                        <p>We’ve set up a function, square. Then we call it on the number 10 using square(10)</p>
                    </div>

                    <div className="param">
                        <h1>Parameters and Arguments</h1>
                        <p>
                            Let’s take another look at the definition of the function square from the previous exercise:
                        </p>
                        <pre><code>
                            {`def square(n):`}
                        </code></pre>
                        <p>Here, n is a parameter of square. A parameter is a variable that is an input to a function.
                            It says, “Later, when square is used, you’ll be able to input any value you want, but for
                            now we’ll call that future value n.” A function can have any number of parameters.</p>
                        <p>The values of the parameters passed into a function are known as the arguments.
                            Recall in the previous example, we called: py square(10). Here, the function square was
                            called with the parameter n set to the argument 10.</p>
                        <p>Typically, when you call a function, you should pass in the same number of arguments
                            as there are parameters. </p>
                        <p>To summarize: When defining a function, placeholder variables are called parameters.
                            When using, or calling, a function, inputs into the function are called arguments.</p>

                        <h3>Exercise:</h3>
                        <p>Check out the following function, power. It should take two arguments,
                            a base and an exponent, and raise the first to the power of the second.
                            It’s currently broken, however, because its parameters are missing.</p>
                        <p>Replace the ___s with the parameters base and exponent and then call the power
                            function with a base of 37 and an exponent of 4.</p>
                        <pre><code>
                            {`def power(___, ___):  # Add your parameters here!
  result = base ** exponent
  print "%d to the power of %d is %d." % (base, exponent, result)

power(__, __)  # Add your arguments here!`}
                        </code></pre>

                        <Link to="/playground" className="nav-link">Try it out in the playground</Link>
                        <button className="btn btn-info btn-sm"
                                                onClick={this.exClick.bind(this, 1)}>Answer</button>
                        <div className="ex-answer">
                            <pre><code>{this.state.displayedAnswers[1]}</code></pre>
                        </div>
                    </div>

                    <div className="func-call-func">
                        <h1>Functions Calling Functions</h1>
                        <p>
                            We’ve seen functions that can print text or do simple arithmetic, but functions can
                            be much more powerful than that. For example, a function can call another function:
                        </p>
                        <pre><code>
                            {`def fun_one(n):
  return n * 5

def fun_two(m):
  return fun_one(m) + 7`}
                        </code></pre>

                        <h3>Exercise 1:</h3>
                        <p>Let’s look at the two functions in the editor: one_good_turn (which adds 1 to the
                            number it takes in as an argument) and deserves_another (which adds 2).</p>
                        <p>Change the body of deserves_another so that it always adds 2 to the output of
                            one_good_turn.</p>
                        <pre><code>
                            {`def one_good_turn(n):
  return n + 1
    
def deserves_another(n):
  return n + 2`}
                        </code></pre>

                        <Link to="/playground" className="nav-link">Try it out in the playground</Link>
                        <button className="btn btn-info btn-sm"
                                                onClick={this.exClick.bind(this, 2)}>Answer</button>
                        <div className="ex-answer">
                            <pre><code>{this.state.displayedAnswers[2]}</code></pre>
                        </div>

                        <h3>Exercise 2:</h3>
                        <p>
                            First, def a function called cube that takes an argument called number. Don’t forget
                            the parentheses and the colon! Make that function return the cube of that number
                            (i.e. that number multiplied by itself and multiplied by itself once again).
                        </p>
                        <p>
                            Define a second function called by_three that takes an argument called number.
                            if that number is divisible by 3, by_three should call cube(number) and return
                            its result. Otherwise, by_three should return False. Don’t forget that if and else
                            statements need a : at the end of that line!
                        </p>

                        <Link to="/playground" className="nav-link">Try it out in the playground</Link>
                        <button className="btn btn-info btn-sm"
                                                onClick={this.exClick.bind(this, 3)}>Answer</button>
                        <div className="ex-answer">
                            <pre><code>{this.state.displayedAnswers[3]}</code></pre>
                        </div>
                    </div>

                    <div className="import-modules">
                        <h1>Import and Modules</h1>
                        <p>
                            A module is a file that contains definitions—including variables and functions
                            that you can use once it is imported. Before we try any fancy importing, let’s
                            see what Python already knows about square roots.
                        </p>
                        <pre><code>
                            {`print(sqrt(25))
                            
>>> Traceback (most recent call last):
  File "python", line 1, in <module>
NameError: name 'sqrt' is not defined`}
                        </code></pre>
                        <p>We would expect to equal five. Instead, it throws an error. Python said: NameError:
                            name 'sqrt' is not defined. Python doesn’t know what square roots are—yet.</p>
                        <p>There is a Python module named math that includes a number of useful variables and
                            functions, and sqrt() is one of those functions. In order to access math, all you
                            need is the import keyword. When you simply import a module this way, it’s called
                            a generic import.</p>
                        <p>We need to do two things here:</p>
                        <ul>
                            <li>Type import math before the print statement.</li>
                            <li>Insert math. before sqrt() so that it has the form math.sqrt(). This tells Python
                                not only to import math, but to get the sqrt() function from within math.
                            </li>
                        </ul>
                        <pre><code>
                            {`import math

print(math.sqrt(25))
"""Prints 5.0"""`}
                        </code></pre>
                    </div>

                    <div className="func-imports">
                        <h1>Function Imports</h1>
                        <p>
                            Nice work! Now Python knows how to take the square root of a number. However, we only
                            really needed the sqrt function, and it can be frustrating to have to keep typing
                            math.sqrt().
                        </p>
                        <p>
                            It’s possible to import only certain variables or functions from a given module.
                            Pulling in just a single function from a module is called a function import, and
                            it’s done with the from keyword:
                        </p>
                        <pre><code>
                            {`from module import function`}
                        </code></pre>
                        <p>Now you can just type sqrt() to get the square root of a number—no more math.sqrt()! </p>

                        <h3>Exercise:</h3>
                        <p>Let’s import only the sqrt function from math this time.
                            (You don’t need the () after sqrt in the from math import sqrt bit.) Then use it
                            to calculate the square root of 25.
                        </p>

                        <Link to="/playground" className="nav-link">Try it out in the playground</Link>
                        <button className="btn btn-info btn-sm"
                                                onClick={this.exClick.bind(this, 4)}>Answer</button>
                        <div className="ex-answer">
                            <pre><code>{this.state.displayedAnswers[4]}</code></pre>
                        </div>
                    </div>

                    <div className="univ-imports">
                        <h1>Universal Imports</h1>
                        <p>
                            Great! We’ve found a way to handpick the variables and functions we want from modules.
                            What if we still want all of the variables and functions in a module but don’t want to
                            have to constantly type math.? Universal import can handle this for you. The syntax
                            for this is:
                        </p>
                        <pre><code>
                            {`from module import *`}
                        </code></pre>
                        <p> For instance, the following line import everything from the math module </p>
                        <pre><code>
                            {`from math import *`}
                        </code></pre>
                        <p>
                            Universal imports may look great on the surface, but they’re not a good idea for
                            one very important reason: they fill your program with a ton of variable and
                            function names without the safety of those names still being associated with
                            the module(s) they came from.
                        </p>
                        <p>
                            So it’s best to stick with either import module and type module.name or just import
                            specific variables and functions from various modules as needed.
                        </p>
                    </div>

                    <div className="some-funcs">
                        <h1>Useful functions</h1>
                        <h2>max()</h2>
                        <p>
                            The max() function takes any number of arguments and returns the largest one.
                            (“Largest” can have odd definitions here, so it’s best to use max() on integers
                            and floats, where the results are straightforward, and not on other objects,
                            like strings.) For example, max(1,2,3) will return 3 (the largest number in the
                            set of arguments).
                        </p>
                        <pre><code>
                            {`maximum = max(1,2,3)
 # maximum is 3`}
                        </code></pre>

                        <h2>min()</h2>
                        <p>min() then returns the smallest of a given series of arguments.</p>
                        <pre><code>
                            {`minimum = min(5,2.5,3)
 # minimum is 2.5`}
                        </code></pre>

                        <h2>abs()</h2>
                        <p>The abs() function returns the absolute value of the number it takes as an argument—that is,
                            that number’s distance from 0 on an imagined number line. For instance, 3 and -3 both
                            have the same absolute value: 3. The abs() function always returns a positive value, and
                            unlike max() and min(), it only takes a single number.</p>

                        <h3>Exercise:</h3>
                        <p>Set absolute equal to the absolute value of -42</p>
                        <Link to="/playground" className="nav-link">Try it out in the playground</Link>
                        <button className="btn btn-info btn-sm"
                                                onClick={this.exClick.bind(this, 5)}>Answer</button>
                        <div className="ex-answer">
                            <pre><code>{this.state.displayedAnswers[5]}</code></pre>
                        </div>

                        <h2>type()</h2>
                        <p>Finally, the type() function returns the type of the data it receives as an argument.
                            If you ask Python to do the following:</p>
                        <pre><code>
                            {`print type(42)
<type 'int'>

print type(4.2)
<type 'float'>

print type('spam')
<type 'str'>`}
                        </code></pre>
                        <h3>Exercise:</h3>
                        <p>Have Python print out the type of an int, a float, and a str string in the editor.
                            You can pick any values on which to call type(), so long as they produce one of each.</p>
                        <Link to="/playground" className="nav-link">Try it out in the playground</Link>
                        <button className="btn btn-info btn-sm"
                                                onClick={this.exClick.bind(this, 6)}>Answer</button>
                        <div className="ex-answer">
                            <pre><code>{this.state.displayedAnswers[6]}</code></pre>
                        </div>
                    </div>

                    <div className="review">
                        <h1>Review</h1>


                        <h3>Exercise 1:</h3>
                        <p>
                            First, def a function, shut_down, that takes one argument s. Don’t forget the parentheses
                            or the colon!Then, if the shut_down function receives an s equal to "yes", it should return
                            "Shutting down". Alternatively, elif s is equal to "no", then the function should return
                            "Shutdown aborted". Finally, if shut_down gets anything other than those inputs,
                            the function should return "Sorry"
                        </p>

                        <Link to="/playground" className="nav-link">Try it out in the playground</Link>
                        <button className="btn btn-info btn-sm"
                                                onClick={this.exClick.bind(this, 7)}>Answer</button>
                        <div className="ex-answer">
                            <pre><code>{this.state.displayedAnswers[7]}</code></pre>
                        </div>

                        <h3>Exercise 2:</h3>
                        <p> Perfect! Last but not least, let’s review the built-in functions you’ve learned
                            about in this lesson. </p>
                        <p> First, def a function called distance_from_zero, with one argument (choose any argument
                            name you like). If the type of the argument is either int or float, the function should
                            return the absolute value of the function input. Otherwise, the function should return
                            "Nope" </p>
                        <p> Hint: to compare types, you can use  type(xxx) == type(1.)</p>
                        <Link to="/playground" className="nav-link">Try it out in the playground</Link>
                        <button className="btn btn-info btn-sm"
                                                onClick={this.exClick.bind(this, 8)}>Answer</button>
                        <div className="ex-answer">
                            <pre><code>{this.state.displayedAnswers[8]}</code></pre>
                        </div>
                    </div>
                </div>

                <TutorialSideBar />
            </div>
        );
    }
}

export default TutorialFunction;