import React, {Component} from 'react';
import {Link} from "react-router-dom";
import TutorialSideBar from "./TutorialSideBar";

export class TutorialFile extends Component {
    constructor(props) {
        super(props);
        this.exClick = this.exClick.bind(this);
        let answers = [`my_list = [i ** 2 for i in range(1, 11)]
my_file = open("output.txt", "w")
for num in my_list:
  my_file.write(str(num) + '\\n')
my_file.close()`,
            `my_file = open('output.txt', 'r')
print(my_file.read())
my_file.close()`
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
        return(
            <div className="row">
                <div className="column left">
                    <div className="io-intro">
                        <h1>File Input / Output</h1>
                        <p>Until now, the Python code you’ve been writing comes from one source and only goes to one
                            place:
                            you type it in at the keyboard and its results are displayed in the console. But what if you
                            want to read information from a file on your computer, and/or write that information to
                            another
                            file? This process is called file I/O (the “I/O” stands for “input/output”), and Python has
                            a
                            number of built-in functions that handle this for you.</p>
                        <pre><code>
                        {`my_list = [i ** 2 for i in range(1, 11)]
# Generates a list of squares of the numbers 1 - 10

f = open("output.txt", "w")

for item in my_list:
  f.write(str(item) + "\\n")

f.close()`}
                    </code></pre>
                    </div>

                    <div className="open-file-func">
                    <h1>The open() Function</h1>
                    <p>Let’s walk through the process of writing to a file one step at a time. The first code that you
                        saw executed in the previous exercise was this:</p>
                    <pre><code>
                        {`f = open("output.txt", "w")`}
                    </code></pre>
                    <p>This told Python to open output.txt in "w" mode (“w” stands for “write”). We stored the result of
                        this operation in a file object, f. Doing this opens the file in write-mode and prepares Python
                        to send data into the file.</p>
                </div>

                    <div className="write-file">
                        <h1>The write() Function</h1>
                        <p>Now it’s time to write some data to a new .txt file. We added the list comprehension from the
                            first exercise to the code in the editor. Our goal in this exercise will be to write each
                            element of that list to a file called output.txt. The output.txt file that you write to will
                            be
                            created in your current folder - for simplicity, the folder has been hidden. output.txt will
                            list each number on its own line. We can write to a Python file like so:</p>
                        <pre><code>
                        {`my_file.write("Data to be written")`}
                    </code></pre>
                        <p>The .write() method takes a string argument, so we’ll need to do a few things here: You must
                            close the file. You do this simply by calling my_file.close() (we did this for you in the
                            last
                            exercise). If you don’t close your file, Python won’t write to it properly. From here on
                            out,
                            you gotta close your files!</p>

                        <h3>Exercise:</h3>
                        <p>Iterate over my_list to get each value. Use my_file.write() to write each value to a text
                            file
                            called, output.txt. Make sure to call str() on the iterating data so .write() will accept
                            it.
                            Make sure to add a newline (+ "\n") after each element to ensure each will appear on its own
                            line.</p>
                        <p>Use my_file.close() to close the file when you’re done. Passing the exercise means that you
                            successfully wrote my_list to output.txt!</p>
                        <pre><code>
                            {`my_list = [i ** 2 for i in range(1, 11)]

my_file = open("output.txt", "w")

# Add your code below!
`}
                    </code></pre>

                        <Link to="/playground" className="nav-link">Try it out in the playground</Link>
                        <button className="btn btn-info btn-sm"
                                onClick={this.exClick.bind(this, 0)}>Answer
                        </button>
                        <div className="ex-answer">
                            <pre><code>{this.state.displayedAnswers[0]}</code></pre>
                        </div>
                    </div>

                    <div className="read-file">
                        <h1>Read File</h1>
                        <p>Finally, we want to know how to read from our output.txt file. As you might expect, we do
                            this with the read() function, like so:</p>
                        <pre><code>
                        {`print my_file.read()`}
                        </code></pre>
                        <h3>Exercise:</h3>
                        <p>Declare a variable, my_file, and set it equal to the file object returned by calling open()
                            with both "output.txt" and "r". Next, print the result of using .read() on my_file, like the
                            example above. Make sure to .close() your file when you’re done with it! All kinds of doom
                            will happen if you don’t.</p>

                        <Link to="/playground" className="nav-link">Try it out in the playground</Link>
                        <button className="btn btn-info btn-sm"
                                onClick={this.exClick.bind(this, 1)}>Answer
                        </button>
                        <div className="ex-answer">
                            <pre><code>{this.state.displayedAnswers[1]}</code></pre>
                        </div>
                    </div>

                    <div className="read-line">
                        <h1>Read Lines</h1>
                        <p>What if we want to read from a file line by line, rather than pulling the entire file in at
                            once. Thankfully, Python includes a .readline() method that does exactly that.</p>
                        <p>If you open a file and call .readline() on the file object, you’ll get the first line of the
                            file; subsequent calls to .readline() will return successive lines.</p>
                        <pre><code>
                        {`# Content of text.txt
I'm the first line of the file!
I'm the second line.
Third line here, boss.`}
                        </code></pre>

                        <pre><code>
                        {`my_file = open('text.txt', 'r')
print(my_file.readline())
>>> I'm the first line of the file!
print(my_file.readline())
>>> I'm the second line.
print(my_file.readline())
>>> Third line here, boss.
my_file.close()`}
                        </code></pre>

                    </div>

                    <div className="with-as">
                        <h1>The 'with' and 'as' Keywords</h1>
                        <p>Is there a way to get Python to automatically close our files for us?</p>
                        <p>Of course there is. This is Python. You may not know this, but file objects contain a special
                            pair of built-in methods: __enter__() and __exit__(). The details aren’t important, but what
                            is important is that when a file object’s __exit__() method is invoked, it automatically
                            closes the file. How do we invoke this method? With with and as. The syntax looks like
                            this:</p>
                        <pre><code>
                        {`with open("file", "mode") as variable:
  # Read or write to the file`}
                        </code></pre>
                        <p> Check out this example. Note that we don’t explicitly close() our file, and
                            remember that if we don’t close a file, our data will get stuck in the buffer.
                            Success! is written to a file called text.txt.</p>
                    </div>

                    <div className="file-closed">
                        <h1>File Closed?</h1>
                        <p>Finally, we’ll want a way to test whether a file we’ve opened is closed. Sometimes we’ll have
                            a lot of file objects open, and if we’re not careful, they won’t all be closed. How can we
                            test this?</p>
                        <pre><code>
                        {`f = open("bg.txt")
f.closed
# False
f.close()
f.closed
# True`}
                        </code></pre>
                        <p> Python file objects have a closed attribute which is True when the file is closed and False
                            otherwise. By checking file_object.closed, we’ll know whether our file is closed and can
                            call close() on it if it’s still open.</p>
                    </div>
                </div>
                <TutorialSideBar/>
            </div>
        );
    }
}

export default TutorialFile;