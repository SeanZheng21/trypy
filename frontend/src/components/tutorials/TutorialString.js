import React, {Component} from 'react';
import {Link} from "react-router-dom";
import "../stylesheet/Tutorial.css";
import {HashLink as HLink} from "react-router-hash-link";
import TutorialSideBar from "./TutorialSideBar";


export class TutorialString extends Component {

    constructor(props) {
        super(props);
        this.exClick = this.exClick.bind(this);
        let answers = [`brian = "Hello life!"`,
            `# Assign your variables below, each on its own line!
caesar = "Graham"
praline = "John"
viking = "Teresa"
# Put your variables above this line
print caesar
print praline
print viking`,
            `'This isn\\'t flying, this is falling with style!'`,
            `fifth_letter = "MONTY"[4]

print fifth_letter`,
            `len('Taylor Swift')`,
            `'Taylor Swift'.lower()`,
            `'Taylor Swift'.upper()`,
            `pi = 3.14
pi_in_str = str(pi)
print(pi_in_str)`,
            `concat_str = "Spam " + "and "+ "eggs"
print(concat_str)`,
            `print("The value of pi is around " + str(3.14))`,
            `Let's not go to Camelot. 'Tis a silly place.`,
            `my_string = "Taylor Swift"
print(len(my_string))
print(my_string.upper())`
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
                    <div className="strings">
                        <h1 className="main-title">Python String</h1>
                        <h1>Introduction</h1>
                        <p>
                            String is a useful data type. A string can contain letters, numbers, and symbols.
                            Strings need to be within quotes.
                        </p>
                        <pre><code>
                            name = "Ryan"<br/>
                            age = "19"<br/>
                            food = "cheese"
                        </code></pre>
                        <p>
                            In the above example, we create a variable name and set it to the string value "Ryan".
                            We also set age to "19" and food to "cheese".
                        </p>
                        <h3>Exercise 1:</h3>
                        <p>Create a new variable brian and assign it the string "Hello life!".</p>
                        <Link to="/playground" className="nav-link">Try it out in the playground</Link>
                        <button className="btn btn-info btn-sm"
                                                onClick={this.exClick.bind(this, 0)}>Answer</button>
                        <div className="ex-answer">
                            <pre><code>{this.state.displayedAnswers[0]}</code></pre>
                        </div>

                        <h3>Exercise 2:</h3>
                        <p>Set the following variables to their respective phrases:</p>
                        <ul>
                            <li>Set caesar to "Graham"</li>
                            <li>Set praline to "John"</li>
                            <li>Set viking to "Teresa"</li>
                        </ul>
                        <pre><code>
                            # Assign your variables below, each on its own line!<br/>
                            <br/>
                            # Put your variables above this line<br/>
                            <br/>
                            print caesar<br/>
                            print praline<br/>
                            print viking
                        </code></pre>
                        <Link to="/playground" className="nav-link">Try it out in the playground</Link>
                        <button className="btn btn-info btn-sm"
                                                onClick={this.exClick.bind(this, 1)}>Answer</button>
                        <div className="ex-answer">
                            <pre><code>{this.state.displayedAnswers[1]}</code></pre>
                        </div>
                    </div>

                    <div className="escape">
                        <h1>Escaping characters</h1>
                        <p>
                            There are some characters that cause problems. For example:
                        </p>
                        <pre><code>
                            'There's a snake in my boot!'
                        </code></pre>
                        <p>
                            This code breaks because Python thinks the apostrophe in 'There's'
                            ends the string. We can use the backslash to fix the problem, like this:
                        </p>
                        <pre><code>
                            'There\'s a snake in my boot!'
                        </code></pre>

                        <h3>Exercise:</h3>
                        <p>The string below is broken. Fix it using the escape backslash!</p>
                        <pre><code>
                            'This isn't flying, this is falling with style!'
                        </code></pre>

                        <Link to="/playground" className="nav-link">Try it out in the playground</Link>
                        <button className="btn btn-info btn-sm"
                                                onClick={this.exClick.bind(this, 2)}>Answer</button>
                        <div className="ex-answer">
                            <pre><code>{this.state.displayedAnswers[2]}</code></pre>
                        </div>
                    </div>

                    <div className="idx-access">
                        <h1>Access by Index</h1>
                        <p>
                            Each character in a string is assigned a number, this number is called the index.
                        </p>
                        <pre><code>
                            c = "cats"[0]<br/>
                            n = "Ryan"[3]
                        </code></pre>
                        <p>
                            In the above example, we create a new variable called c and set it to "c",
                            the character at index zero of the string "cats".
                        </p>
                        <p>
                            Next, we create a new variable called n and set it to "n", the character at
                            index three of the string "Ryan".
                        </p>
                        <p>Notice that in the first “cat” example we are calling the 0th letter of “cat”
                            and getting “c” in return. This is because in Python indices begin counting at 0.
                            Therefore, in the string “cats”, the first letter, “c”, is at the 0th index and
                            the last letter, “s”, is at the 3rd index.
                        </p>
                        <p> Another example: The string "PYTHON" has six characters, numbered 0 to 5,
                            as shown below:</p>
                        <pre><code>
+---+---+---+---+---+---+<br/>
| P | Y | T | H | O | N |<br/>
+---+---+---+---+---+---+<br/>
 &nbsp; 0   1   2   3   4   5
                        </code></pre>
                        <p>So if you wanted "Y", you could just type "PYTHON"[1] (always start counting from 0!)</p>

                        <h3>Exercise:</h3>
                        <p> Assign the variable fifth_letter equal to the fifth letter of the string “MONTY”.
                            Remember that the fifth letter is not at index 5. Start counting your indices from zero.</p>
                        <pre><code>
                            fifth_letter = <br/>
                            <br/>
                            print fifth_letter
                        </code></pre>

                        <Link to="/playground" className="nav-link">Try it out in the playground</Link>
                        <button className="btn btn-info btn-sm"
                                                onClick={this.exClick.bind(this, 3)}>Answer</button>
                        <div className="ex-answer">
                            <pre><code>{this.state.displayedAnswers[3]}</code></pre>
                        </div>
                    </div>

                    <div className="length">
                        <h1>String Length</h1>
                        <p>
                            Now that we know how to store strings, let’s see how we can change them using
                            string methods. String methods let you perform specific tasks for strings.
                            We’ll focus on four string methods:
                        </p>
                        <ul>
                            <li>len()</li>
                            <li>String.lower()</li>
                            <li>String.upper()</li>
                            <li>str()</li>
                        </ul>
                        <p>Methods lower() and upper() are methods of string while methods len() and str() can work
                            on other data types</p>
                        <p>The method len() gets the length (the number of characters) of a string!</p>
                        <pre><code>
                            parrot = "Norwegian Blue"<br/>
                            print(len(parrot))
                        </code></pre>
                        <p>
                            We first create a variable named parrot and set it to the string "Norwegian Blue". Then
                            we print the number of characters in "Norwegian Blue" using the method len().
                        </p>

                        <h3>Exercise:</h3>
                        <p> Calculate the length of string 'Taylor Swift'</p>
                        <Link to="/playground" className="nav-link">Try it out in the playground</Link>
                        <button className="btn btn-info btn-sm"
                                                onClick={this.exClick.bind(this, 4)}>Answer</button>
                        <div className="ex-answer">
                            <pre><code>{this.state.displayedAnswers[4]}</code></pre>
                        </div>
                    </div>

                    <div className="lower">
                        <h1>lower()</h1>
                        <p>
                            You can use the lower() method to get rid of all the capitalization in your strings.
                            You call lower() like so:
                        </p>
                        <pre><code>
                            "Ryan".lower()
                        </code></pre>
                        <p>
                            which will return "ryan".
                        </p>

                        <h3>Exercise:</h3>
                        <p> Covert string 'Taylor Swift' to lower case</p>
                        <Link to="/playground" className="nav-link">Try it out in the playground</Link>
                        <button className="btn btn-info btn-sm"
                                                onClick={this.exClick.bind(this, 5)}>Answer</button>
                        <div className="ex-answer">
                            <pre><code>{this.state.displayedAnswers[5]}</code></pre>
                        </div>
                    </div>

                    <div className="upper">
                        <h1>upper()</h1>
                        <p>
                            Now your string is 100% lower case! A similar method exists to make a string
                            completely upper case.
                        </p>
                        <pre><code>
                            parrot = "norwegian blue"<br/>
                            print(parrot.upper())
                        </code></pre>
                        <p>
                            which will return "NORWEGIAN BLUE".
                        </p>
                        <h3>Exercise:</h3>
                        <p> Covert string 'Taylor Swift' to upper case</p>
                        <Link to="/playground" className="nav-link">Try it out in the playground</Link>
                        <button className="btn btn-info btn-sm"
                                                onClick={this.exClick.bind(this, 6)}>Answer</button>
                        <div className="ex-answer">
                            <pre><code>{this.state.displayedAnswers[6]}</code></pre>
                        </div>
                    </div>

                    <div className="str-py">
                        <h1>str()</h1>
                        <p>
                            Now let’s look at str(), which is a little less straightforward. The str() method
                            turns non-strings into strings! For example, the following code would turn 2 into "2".
                        </p>
                        <pre><code>
                            str(2)
                        </code></pre>

                        <h3>Exercise:</h3>
                        <p> Create a variable pi and set it to 3.14. Then create a string from the variable
                            pi using str()</p>
                        <Link to="/playground" className="nav-link">Try it out in the playground</Link>
                        <button className="btn btn-info btn-sm"
                                                onClick={this.exClick.bind(this, 7)}>Answer</button>
                        <div className="ex-answer">
                            <pre><code>{this.state.displayedAnswers[7]}</code></pre>
                        </div>
                    </div>

                    <div className="concatenation">
                        <h1>String Concatenation</h1>
                        <p>
                            You know about strings, and you know about arithmetic operators. Now let’s combine the two!
                        </p>
                        <pre><code>
                            print("Life " + "of " + "Brian")
                        </code></pre>
                        <p>This will print out the phrase Life of Brian.</p>
                        <p>The + operator between strings will ‘add’ them together, one after the other.
                            Notice that there are spaces inside the quotation marks after Life and of so that we
                            can make the combined string look like 3 words.</p>
                        <p>
                            Combining strings together like this is called concatenation. Let’s try
                            concatenating a few strings together now!
                        </p>
                        <h3>Exercise:</h3>
                        <p> Print the concatenated strings "Spam ", "and ", "eggs" on line 3, just like the
                            example above. Make sure you include the spaces at the end of "Spam " and "and ".
                        </p>
                        <Link to="/playground" className="nav-link">Try it out in the playground</Link>
                        <button className="btn btn-info btn-sm"
                                                onClick={this.exClick.bind(this, 8)}>Answer</button>
                        <div className="ex-answer">
                            <pre><code>{this.state.displayedAnswers[8]}</code></pre>
                        </div>
                    </div>

                    <div className="conversion">
                        <h1>Explicit String Conversion</h1>
                        <p>
                            Sometimes you need to combine a string with something that isn’t a string.
                            In order to do that, you have to convert the non-string into a string.
                        </p>
                        <pre><code>
                            print("I have " + str(2) + " coconuts!")
                        </code></pre>
                        <p>This will print I have 2 coconuts!.</p>
                        <p>The str() method converts non-strings into strings. In the above example,
                            you convert the number 2 into a string and then you concatenate the strings
                            together just like in the previous exercise.</p>

                        <h3>Exercise:</h3>
                        <p> You will get an error running the following code. Use str() to turn 3.14 into a
                            string. Then run the code again.
                        </p>
                        <pre><code>
                            print("The value of pi is around " + 3.14)
                        </code></pre>
                        <Link to="/playground" className="nav-link">Try it out in the playground</Link>
                        <button className="btn btn-info btn-sm"
                                                onClick={this.exClick.bind(this, 9)}>Answer</button>
                        <div className="ex-answer">
                            <pre><code>{this.state.displayedAnswers[9]}</code></pre>
                        </div>
                    </div>

                    <div className="formatting">
                        <h1>String Formatting</h1>
                        <p>
                            When you want to print a variable with a string, there is a better method than
                            concatenating strings together.
                        </p>
                        <pre><code>
                            name = "Mike"<br/>
                            print "Hello %s" % (name)
                        </code></pre>
                        <p>The % operator after the string is used to combine a string with variables.
                            The % operator will replace the %s in the string with the string variable
                            that comes after it.
                        </p>
                        <p>If you’d like to print a variable that is an integer, you can “pad” it with zeros
                            using %02d. The 0 means “pad with zeros”, the 2 means to pad to 2 characters wide,
                            and the d means the number is a signed integer (can be positive or negative).
                        </p>
                        <p>
                            You need the same number of %s terms in a string as the number of variables in parentheses:
                        </p>
                        <code><pre>
                            print "The %s who %s %s!" % ("Knights", "say", "Ni")<br/>
                            # This will print "The Knights who say Ni!"
                        </pre></code>

                        <h3>Exercise:</h3>
                        <p> What do you think the following code will do? Click Run when you think you know.
                        </p>
                        <pre><code>
                            string_1 = "Camelot"<br/>
                            string_2 = "place"<br/>
                            print "Let's not go to %s. 'Tis a silly %s." % (string_1, string_2)
                        </code></pre>
                        <Link to="/playground" className="nav-link">Try it out in the playground</Link>
                        <button className="btn btn-info btn-sm"
                                                onClick={this.exClick.bind(this, 10)}>Answer</button>
                        <div className="ex-answer">
                            <pre><code>{this.state.displayedAnswers[10]}</code></pre>
                        </div>
                    </div>

                    <div className="review">
                        <h1>Review</h1>
                        <p>
                            Great job! You’ve learned a lot in this unit, including:
                        </p>
                        <ul>
                            <li>Ways to create strings</li>
                            <li>String methods</li>
                            <li>Printing a string</li>
                            <li>Advanced printing techniques</li>
                        </ul>
                        <pre><code>
                            'Alpha'<br/>
                            "Bravo"<br/>
                            str(3)<br/>
                            <br/>
                            len("Charlie")<br/>
                            "Delta".upper()<br/>
                            "Echo".lower()<br/>
                            <br/>
                            print "Foxtrot"<br/>
                            <br/>
                            g = "Golf"<br/>
                            h = "Hotel"<br/>
                            print "%s, %s" % (g, h)
                        </code></pre>

                        <h3>Exercise:</h3>
                        <p> Let’s wrap it all up!</p>
                        <p> First create the variable my_string and set it to any string you’d like.</p>
                        <p> Then use len() to print the length of my_string.</p>
                        <p> Finally print the .upper() case version of my_string.</p>

                        <Link to="/playground" className="nav-link">Try it out in the playground</Link>
                        <button className="btn btn-info btn-sm"
                                                onClick={this.exClick.bind(this, 11)}>Answer</button>
                        <div className="ex-answer">
                            <pre><code>{this.state.displayedAnswers[11]}</code></pre>
                        </div>
                    </div>
                </div>
                <TutorialSideBar/>
            </div>
        );
    }
}

export default TutorialString;