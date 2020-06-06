import React, {Component} from 'react';
import {Link} from "react-router-dom";
import TutorialSideBar from "./TutorialSideBar";

export class TutorialLoop extends Component {
    constructor(props) {
        super(props);
        this.exClick = this.exClick.bind(this);
        let answers = [`count = 0

while count < 10:
  print "Hello, I am a while and count is", count
  count += 1`,
        `num = 1

while num < 11:  # Fill in the condition
  print(num ** 2)
  num += 1`,
        `choice = raw_input('Enjoying the course? (y/n)')

while choice != 'y' and choice != 'n': 
  choice = raw_input("Sorry, I didn't catch that. Enter again: ")`,
        `count = 0

while count < 10:
  print count
  count += 1
`,
        `from random import randint

# Generates a number from 1 through 10 inclusive
random_number = randint(1, 10)

guesses_left = 3
# Start your game!
while guesses_left > 0:
  guess = int(raw_input("Your guess: "))
  if guess == 5:
    print('You win!')
    break
  guesses_left -= 1
else:
  print('You lose.')`,
        `word = "python!"
for l in word:
  print l`,
        `phrase = "A bird in the hand..."

for char in phrase:
  if char.lower() == 'a':
    print 'X', 
  else:
    print char,

#Don't delete this print statement!
print`,
        `d = {'a': 'apple', 'b': 'berry', 'c': 'cherry'}
for key in d:
  print(key + ' ' + d[key])`,
        `list_a = [3, 9, 17, 15, 19]
list_b = [2, 4, 8, 10, 30, 40, 50, 60, 70, 80, 90]

for a, b in zip(list_a, list_b):
  print(str(max(a, b)))`];
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
                    <div className="while-loop">
                        <h1 className="main-title">Python Loops</h1>
                        <h1>While Loop</h1>
                        <p>
                            The while loop is similar to an if statement: it executes the code inside of it if some
                            condition is true. The difference is that the while loop will continue to execute as long
                            as the condition is true. In other words, instead of executing if something is true, it
                            executes while that thing is true.
                        </p>
                        <pre><code>
                        {`count = 0

if count < 5:
  print "Hello, I am an if statement and count is", count

while count < 5:
  print "Hello, I am a while and count is", count
  count += 1`}
                    </code></pre>
                        <p>Line 6 decides when the loop will be executed. So, “as long as count is less than 5,” the
                            loop will continue to execute. Line 8 increases count by 1. This happens over and over until
                            count equals 5.</p>
                        <p> Pay attention to the count += 1 statement. If your program has no way to
                            increase count, your loop could go on forever and become an infinite loop which could crash
                            your computer/browser!</p>
                        <h3>Exercise:</h3>
                        <p>
                            Change the loop so that it counts from 0 up to 9 (inclusive).
                        </p>
                        <pre><code>
                        {`count = 0

while count < 5:
  print "Hello, I am a while and count is", count
  count += 1`}
                    </code></pre>

                        <Link to="/playground" className="nav-link">Try it out in the playground</Link>
                        <button className="btn btn-info btn-sm"
                                onClick={this.exClick.bind(this, 0)}>Answer
                        </button>
                        <div className="ex-answer">
                            <pre><code>{this.state.displayedAnswers[0]}</code></pre>
                        </div>
                    </div>

                    <div className="loop-condition">
                        <h1>Loop Condition</h1>
                        <p>
                            The condition is the expression that decides whether the loop is going to continue being
                            executed or not. There are 5 steps to this program:
                        </p>
                        <ol>
                            <li>The loop_condition variable is set to True</li>
                            <li>The while loop checks to see if loop_condition is True. It is, so the loop is entered.
                            </li>
                            <li> The print statement is executed.</li>
                            <li> The variable loop_condition is set to False.</li>
                            <li> The while loop again checks to see if loop_condition is True. It is not, so the loop is
                                not executed a second time.
                            </li>
                        </ol>
                        <pre><code>
                        {`loop_condition = True

while loop_condition:
  print "I am a loop"
  loop_condition = False`}
                    </code></pre>

                        <h3>Exercise 1:</h3>
                        <p>Create a while loop that prints out all the numbers from 1 to 10 squared (1, 4, 9, 16, … ,
                            100), each on their own line.
                        </p>
                        <ul>
                            <li>Fill in the blank space so that our while loop goes from 1 to 10 inclusive.</li>
                            <li>Inside the loop, print the value of num squared. The syntax for squaring a number is num
                                ** 2.
                            </li>
                            <li>Increment num.
                            </li>
                        </ul>

                        <Link to="/playground" className="nav-link">Try it out in the playground</Link>
                        <button className="btn btn-info btn-sm"
                                onClick={this.exClick.bind(this, 1)}>Answer
                        </button>
                        <div className="ex-answer">
                            <pre><code>{this.state.displayedAnswers[1]}</code></pre>
                        </div>

                        <h3>Exercise 2:</h3>
                        <p>A common application of a while loop is to check user input to see if it is valid. For
                            example, if you ask the user to enter y or n and they instead enter 7, then you should
                            re-prompt them for input.
                        </p>
                        <p>Fill in the loop condition so the user will be prompted for a choice over and over while
                            choice does not equal 'y' and choice does not equal 'n'.</p>
                        <pre><code>
                            {`choice = raw_input('Enjoying the course? (y/n)')

while ________:  # Fill in the condition (before the colon)
  choice = raw_input("Sorry, I didn't catch that. Enter again: ")`}
                        </code></pre>
                        <Link to="/playground" className="nav-link">Try it out in the playground</Link>
                        <button className="btn btn-info btn-sm"
                                onClick={this.exClick.bind(this, 2)}>Answer
                        </button>
                        <div className="ex-answer">
                            <pre><code>{this.state.displayedAnswers[2]}</code></pre>
                        </div>
                    </div>

                    <div className="infinite-loop">
                        <h1>Infinite loops</h1>
                        <p>An infinite loop is a loop that never exits. This can happen for a few reasons:</p>
                        <ol>
                            <li>The loop condition cannot possibly be false (e.g. while 1 != 2)</li>
                            <li>The logic of the loop prevents the loop condition from becoming false.</li>
                        </ol>
                        <p>Example:</p>
                        <pre><code>
                        {`count = 10
while count > 0:
  count += 1 # Instead of count -= 1`}
                    </code></pre>

                        <h3>Exercise:</h3>
                        <p>The loop in the editor has two problems: it’s missing a colon (a syntax error) and count is
                            never incremented (logical error). The latter will result in an infinite loop, so be sure to
                            fix both before running!
                        </p>
                        <pre><code>
                            {`count = 0

while count < 10 
  print count
`}
                        </code></pre>

                        <Link to="/playground" className="nav-link">Try it out in the playground</Link>
                        <button className="btn btn-info btn-sm"
                                onClick={this.exClick.bind(this, 3)}>Answer
                        </button>
                        <div className="ex-answer">
                            <pre><code>{this.state.displayedAnswers[3]}</code></pre>
                        </div>
                    </div>

                    <div className="break">
                        <h1>Break</h1>
                        <p>The break is a one-line statement that means “exit the current loop.” An alternate way to
                            make our counting loop exit and stop executing is with the break statement.</p>
                        <pre><code>
                            {`count = 0

while True:
  print count
  count += 1
  if count >= 10:
    break
`}
                        </code></pre>
                        <ol>
                            <li>First, create a while with a condition that is always true. The simplest way is shown.
                            </li>
                            <li>Using an if statement, you define the stopping condition. Inside the if, you write
                                break, meaning “exit the loop.”
                            </li>
                        </ol>
                        <p>The difference here is that this loop is guaranteed to run at least once.</p>
                    </div>

                    <div className="while-else">
                        <h1>While / else</h1>
                        <p>Something completely different about Python is the while/else construction. while/else is
                            similar to if/else, but there is a difference: the else block will execute anytime the loop
                            condition is evaluated to False. This means that it will execute if the loop is never
                            entered or if the loop exits normally. If the loop exits as the result of a break, the else
                            will not be executed.</p>
                        <pre><code>
                            {`import random

print "Lucky Numbers! 3 numbers will be generated."
print "If one of them is a '5', you lose!"

count = 0
while count < 3:
  num = random.randint(1, 6)
  print num
  if num == 5:
    print "Sorry, you lose!"
    break
  count += 1
else:
  print "You win!"
`}
                        </code></pre>

                        <p>In this example, the loop will break if a 5 is generated, and the else will not execute.
                            Otherwise, after 3 numbers are generated, the loop condition will become false and the else
                            will execute.</p>

                        <h3>Exercise:</h3>
                        <p>In this exercise, allow the user to guess what the number is 3 times. Remember, raw_input turns user input into a string, so we use int() to make it a number again.
                        </p>
                        <pre><code>
                            {`from random import randint

# Generates a number from 1 through 10 inclusive
random_number = randint(1, 10)

guesses_left = 3
# Start your game!

`}
                        </code></pre>

                        <Link to="/playground" className="nav-link">Try it out in the playground</Link>
                        <button className="btn btn-info btn-sm"
                                onClick={this.exClick.bind(this, 4)}>Answer
                        </button>
                        <div className="ex-answer">
                            <pre><code>{this.state.displayedAnswers[4]}</code></pre>
                        </div>
                    </div>

                    <div className="for-loop">
                        <h1>For Loop</h1>
                        <p>The following code creates a for loop that prompts the user for a hobby 3 times.</p>
                        <pre><code>
                            {`hobbies = []
for _ in range(3):
  hobby =  raw_input("Tell me one of your favorite hobbies: ")
  hobbies.append(hobby)

print hobbies`}
                        </code></pre>
                        <p>
                            It saves the result of each prompt in a hobby variable append each one to hobbies.
                            Then it prints hobbies after the for loop.
                        </p>
                        <h3>Exercise 1:</h3>
                        <p>Using a for loop, you can print out each individual character in a string. Just like this:</p>
                        <pre><code>
                            {`thing = "spam!"

for c in thing:
  print c`}
                        </code></pre>
                        <p>Write another for loop so that each character in 'python!' is printed one at a time.</p>

                        <Link to="/playground" className="nav-link">Try it out in the playground</Link>
                        <button className="btn btn-info btn-sm" onClick={this.exClick.bind(this, 5)}>Answer</button>
                        <div className="ex-answer">
                            <pre><code>{this.state.displayedAnswers[5]}</code></pre>
                        </div>

                        <h3>Exercise 2:</h3>
                        <p>Let’s filter out the letter "A" from our string "A bird in the hand..."</p>
                        <p>Write another for loop so that each character in 'python!' is printed one at a time.</p>
                        <p> First do the following for each character in the phrase. If char is an "A" or char is an
                            "a", print "X", instead of char. Make sure to include the trailing comma. Otherwise (else:),
                            please print char, with the trailing comma.</p>
                        <Link to="/playground" className="nav-link">Try it out in the playground</Link>
                        <button className="btn btn-info btn-sm" onClick={this.exClick.bind(this, 6)}>Answer</button>
                        <div className="ex-answer">
                            <pre><code>{this.state.displayedAnswers[6]}</code></pre>
                        </div>
                    </div>

                    <div className="for-list">
                        <h1>Looping over lists</h1>
                        <p>Perhaps the most useful (and most common) use of for loops is to go through a list.</p>
                        <pre><code>
                            {`numbers  = [7, 9, 12, 54, 99]
print "This list contains: "
for num in numbers:
  print num`}
                        </code></pre>
                        <p>
                            On each iteration, the variable num will be the next value in the list. So, the first time
                            through, it will be 7, the second time it will be 9, then 12, 54, 99, and then the loop will
                            exit when there are no more values in the list.
                        </p>
                    </div>

                    <div className="for-dict">
                        <h1>Looping over dictionaries</h1>
                        <p>You may be wondering how looping over a dictionary would work. Would you get the key or the
                            value? The short answer is: you get the key which you can use to get the value.</p>
                        <pre><code>
                            {`d = {'x': 9, 'y': 10, 'z': 20}
for key in d:
  if d[key] == 10:
    print "This dictionary has the value 10!"`}
                        </code></pre>
                        <p>
                            First, we create a dictionary with strings as the keys and numbers as the values.
                            Then, we iterate through the dictionary, each time storing the key in key.
                            Next, we check if that key’s value is equal to 10.
                            If so, we print "This dictionary has the value 10!"
                        </p>

                        <h3>Exercise:</h3>
                        <p>Print the key, followed by a space, followed by the value associated with that key.</p>
                        <pre><code>
                            {`d = {'a': 'apple', 'b': 'berry', 'c': 'cherry'}

for key in d:
  # Your code here!
  `}
                        </code></pre>
                        <Link to="/playground" className="nav-link">Try it out in the playground</Link>
                        <button className="btn btn-info btn-sm" onClick={this.exClick.bind(this, 7)}>Answer</button>
                        <div className="ex-answer">
                            <pre><code>{this.state.displayedAnswers[7]}</code></pre>
                        </div>
                    </div>

                    <div className="counting">
                        <h1>Counting as you go</h1>
                        <p>A weakness of using this for-each style of iteration is that you don’t know the index of the
                            thing you’re looking at. Generally this isn’t an issue, but at times it is useful to know
                            how far into the list you are. Thankfully the built-in enumerate function helps with
                            this.</p>
                        <p>enumerate works by supplying a corresponding index to each element in the list that you pass
                            it. Each time you go through the loop, index will be one greater, and item will be the next
                            item in the sequence. It’s very similar to using a normal for loop with a list, except this
                            gives us an easy way to count how many items we’ve seen so far.</p>
                        <pre><code>
                            {`choices = ['pizza', 'pasta', 'salad', 'nachos']

print 'Your choices are:'
for index, item in enumerate(choices):
  print index + 1, item
  
  >>>Your choices are:
1 pizza
2 pasta
3 salad
4 nachos`}
                        </code></pre>
                    </div>

                    <div className="multiple-lists">
                        <h1>Multiple lists</h1>
                        <p>It’s also common to need to iterate over two lists at once. This is where the built-in zip
                            function comes in handy. zip will create pairs of elements when passed two lists, and will
                            stop at the end of the shorter list. zip can handle three or more lists as well!</p>

                        <pre><code>
                            {`list_a = [3, 9, 17, 15, 19]
list_b = [2, 4, 8, 10, 30, 40, 50, 60, 70, 80, 90]

for a, b in zip(list_a, list_b):
  print(str(a) + ' ' + str(b))
  
  >>>3 2
9 4
17 8
15 10
19 30`}
                        </code></pre>

                        <h3>Exercise:</h3>
                        <p>Compare each pair of elements and print the larger of the two.</p>
                        <pre><code>
                            {`list_a = [3, 9, 17, 15, 19]
list_b = [2, 4, 8, 10, 30, 40, 50, 60, 70, 80, 90]`}
                        </code></pre>
                        <Link to="/playground" className="nav-link">Try it out in the playground</Link>
                        <button className="btn btn-info btn-sm" onClick={this.exClick.bind(this, 8)}>Answer</button>
                        <div className="ex-answer">
                            <pre><code>{this.state.displayedAnswers[8]}</code></pre>
                        </div>
                    </div>
                </div>

                <TutorialSideBar/>
            </div>
        );
    }
}

export default TutorialLoop;