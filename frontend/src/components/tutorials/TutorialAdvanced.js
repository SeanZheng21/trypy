import React, {Component} from 'react';
import {Link} from "react-router-dom";
import TutorialSideBar from "./TutorialSideBar";

export class TutorialAdvanced extends Component {
    constructor(props) {
        super(props);
        this.exClick = this.exClick.bind(this);
        let answers = [`my_dict = {
  "foo": "bar",
  "asdf": 1,
  "jkl;": []
}
print(my_dict.items())`,
        `even_squares = [x ** 2 for x in range(1, 12) if (x % 2) == 0]

print even_squares
>>>[4, 16, 36, 64, 100]`,
        `cubes_by_four = [x ** 3 for x in range(1, 11) if ((x ** 3) % 4) == 0]
print(cubes_by_four)`,
        `my_list = range(1, 11)
print(my_list[::2])
>>>[1, 3, 5, 7, 9]`,
        `to_21 = range(1, 22)
odds = to_21[::2]
print odds
middle_third = [x for x in to_21 if x in range(8, 15)]
print(middle_third)

>>>[1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21]
[8, 9, 10, 11, 12, 13, 14]`,
        `languages = ["HTML", "JavaScript", "Python", "Ruby"]

# Add arguments to the filter()
print filter(lambda wd: wd == "Python", languages)
`];
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
                    <div className="dict-iterator">
                        <h1>Iterators for Dictionaries</h1>
                        <p>Let’s start with iterating over a dictionary. Recall that a dictionary is just a collection
                            of keys and values. We can use the .items() method to get the key/value pairs in a
                            dictionary. It doesn’t return key/value pairs in any specific order.</p>
                        <pre><code>
                            {`d = {
  "Name": "Guido",
  "Age": 56,
  "BDFL": True
}
print d.items()
# => [('BDFL', True), ('Age', 56), ('Name', 'Guido')]`}
                        </code></pre>

                        <h3>Exercise:</h3>
                        <p>Create your own Python dictionary with two or three
                            key/value pairs. Then, print the result of calling the my_dict.items().</p>
                        <Link to="/playground" className="nav-link">Try it out in the playground</Link>
                        <button className="btn btn-info btn-sm" onClick={this.exClick.bind(this, 0)}>Answer</button>
                        <div className="ex-answer">
                            <pre><code>{this.state.displayedAnswers[0]}</code></pre>
                        </div>
                    </div>

                    <div className="keys-values">
                        <h1>keys() and values()</h1>
                        <p>While .items() returns an array of tuples with each tuple consisting of a key/value pair from
                            the dictionary:</p>
                        <ul>
                            <li>The .keys() method returns a list of the dictionary’s keys</li>
                            <li>The .values() method returns a list of the dictionary’s values</li>
                        </ul>
                        <pre><code>
                            {`my_dict = {
  "foo": "bar",
  "asdf": 1,
  "jkl;": []
}

for key in my_dict.keys():
  print(key)
>>>foo
jkl;
asdf

for value in my_dict.values():
  print(value)
>>>bar
[]
1`}
                        </code></pre>
                    </div>

                    <div className="in-operator">
                        <h1>The 'in' Operator</h1>
                        <p>For iterating over lists, tuples, dictionaries, and strings, Python also includes a special
                            keyword: in. You can use in very intuitively, like so:</p>
                        <pre><code>
                            {`for number in range(5):
  print number,

d = { 
  "name": "Eric",
  "age": 26
}

for key in d:
  print key, d[key],

for letter in "Eric":
  print letter,  # note the comma!`}
                        </code></pre>
                        <p>In the example above, first we create and iterate through a range, printing out 0 1 2 3 4.
                            Note that the trailing comma ensures that we keep printing on the same line.</p>
                        <p>Next, we create a dictionary and iterate through, printing out age 26 name Eric. Dictionaries
                            have no specific order.</p>
                        <p>Finally, we iterate through the letters of a string, printing out E r i c.</p>
                    </div>

                    <div className="build-list">
                        <h1>Building Lists</h1>
                        <p>Let’s say you wanted to build a list of the numbers from 0 to 50 (inclusive). We could do this
                            pretty easily:</p>
                        <pre><code>
                            {`my_list = range(51)`}
                        </code></pre>
                        <p>But what if we wanted to generate a list according to some logic—for example, a list of all
                            the even numbers from 0 to 50?</p>
                        <p>Python’s answer to this is the list comprehension. List comprehensions are a powerful way to
                            generate lists using the for/in and if keywords we’ve learned.</p>
                        <pre><code>
                            {`evens_to_50 = [i for i in range(51) if i % 2 == 0]
print(evens_to_50)`}
                        </code></pre>
                    </div>

                    <div className="comprehension-syntax">
                        <h1>List Comprehension Syntax</h1>
                        <p>Here’s a simple example of list comprehension syntax:</p>
                        <pre><code>
                            {`new_list = [x for x in range(1, 6)]
# => [1, 2, 3, 4, 5]`}
                        </code></pre>
                        <p>This will create a new_list populated by the numbers one to five. If you want those numbers
                            doubled, you could use:</p>
                        <pre><code>
                            {`doubles = [x * 2 for x in range(1, 6)]
# => [2, 4, 6, 8, 10]`}
                        </code></pre>
                        <p>And if you only wanted the doubled numbers that are evenly divisible by three:</p>
                        <pre><code>
                            {`doubles_by_3 = [x * 2 for x in range(1, 6) if (x * 2) % 3 == 0]
# => [6]`}
                        </code></pre>

                        <h3>Exercise 1:</h3>
                        <p> Use a list comprehension to build a list called even_squares . Your even_squares
                            list should include the squares of the even numbers between 1 to 11. Your list should start
                            [4, 16, 36...] and go from there..</p>
                        <Link to="/playground" className="nav-link">Try it out in the playground</Link>
                        <button className="btn btn-info btn-sm" onClick={this.exClick.bind(this, 1)}>Answer</button>
                        <div className="ex-answer">
                            <pre><code>{this.state.displayedAnswers[1]}</code></pre>
                        </div>

                        <h3>Exercise 2:</h3>
                        <p> Use a list comprehension to create a list, cubes_by_four.
                            The comprehension should consist of the cubes of the numbers 1 through 10 only if the cube
                            is evenly divisible by four. Finally, print that list to the console. Note that in this
                            case, the cubed number should be evenly divisible by 4, not the original number.</p>
                        <Link to="/playground" className="nav-link">Try it out in the playground</Link>
                        <button className="btn btn-info btn-sm" onClick={this.exClick.bind(this, 2)}>Answer</button>
                        <div className="ex-answer">
                            <pre><code>{this.state.displayedAnswers[2]}</code></pre>
                        </div>
                    </div>

                    <div className="slicing-syntax">
                        <h1>List Slicing Syntax</h1>
                        <p>Sometimes we only want part of a Python list. Maybe we only want the first few elements;
                            maybe we only want the last few. Maybe we want every other element! List slicing allows us
                            to access elements of a list in a concise manner. The syntax looks like this:</p>
                        <pre><code>
                            {`[start:end:stride]`}
                        </code></pre>
                        <p>Where start describes where the slice starts (inclusive), end is where it ends (exclusive),
                            and stride describes the space between items in the sliced list. For example, a stride of 2
                            would select every other item from the original list to place in the sliced list.</p>
                        <pre><code>
                            {`l = [i ** 2 for i in range(1, 11)]
# Should be [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

print l[2:9:2]
>>>[9, 25, 49, 81]`}
                        </code></pre>
                        <p>If you don’t pass a particular index to the list slice, Python will pick a default.The
                            default starting index is 0. The default ending index is the end of the list. The default
                            stride is 1.</p>

                        <h3>Exercise 1:</h3>
                        <p> Use list slicing to print out every odd element of my_list= range(1, 11) from start to
                            finish. Omit the start and end index. You only need to specify a stride.</p>
                        <Link to="/playground" className="nav-link">Try it out in the playground</Link>
                        <button className="btn btn-info btn-sm" onClick={this.exClick.bind(this, 3)}>Answer</button>
                        <div className="ex-answer">
                            <pre><code>{this.state.displayedAnswers[3]}</code></pre>
                        </div>

                        <h3>Exercise 2:</h3>
                        <p> Create a list, to_21, that’s just the numbers from 1 to 21, inclusive.</p>
                        <p> Create a second list, odds, that contains only the odd numbers in the to_21 list (1, 3, 5,
                            and so on). Use list slicing for this one instead of a list comprehension.
                        </p>
                        <p> Finally, create a third list, middle_third, that’s equal to the middle third of to_21, from
                            8 to 14, inclusive.</p>
                        <Link to="/playground" className="nav-link">Try it out in the playground</Link>
                        <button className="btn btn-info btn-sm" onClick={this.exClick.bind(this, 4)}>Answer</button>
                        <div className="ex-answer">
                            <pre><code>{this.state.displayedAnswers[4]}</code></pre>
                        </div>
                    </div>

                    <div className="lambda">
                        <h1>Anonymous Functions</h1>
                        <p>One of the more powerful aspects of Python is that it allows for a style of programming
                            called functional programming, which means that you’re allowed to pass functions around just
                            as if they were variables or values. Sometimes we take this for granted, but not all
                            languages allow this! Check out the code at the right. See the lambda bit?</p>
                        <pre><code>
                            {`lambda x: x % 3 == 0
#Is the same as
def by_three(x):
  return x % 3 == 0`}
                        </code></pre>
                        <p>Only we don’t need to actually give the function a name; it does its work and returns a value
                            without one. That’s why the function the lambda creates is an anonymous function.</p>
                        <p>When we pass the lambda to filter, filter uses the lambda to determine what to filter, and
                            the second argument (my_list, which is just the numbers 0 – 15) is the list it does the
                            filtering on.</p>
                        <pre><code>
                            {`my_list = range(16)
print filter(lambda x: x % 3 == 0, my_list)
>>>[0, 3, 6, 9, 12, 15]`}
                        </code></pre>

                        <h3>Exercise:</h3>
                        <p> Fill in the first part of the filter function with a lambda. The lambda should ensure that
                            only "Python" is returned by the filter. Fill in the second part of the filter function with
                            languages, the list to filter.</p>
                        <pre><code>
                            {`languages = ["HTML", "JavaScript", "Python", "Ruby"]

# Add arguments to the filter()
print filter(_______, _______)`}
                        </code></pre>
                        <Link to="/playground" className="nav-link">Try it out in the playground</Link>
                        <button className="btn btn-info btn-sm" onClick={this.exClick.bind(this, 5)}>Answer</button>
                        <div className="ex-answer">
                            <pre><code>{this.state.displayedAnswers[5]}</code></pre>
                        </div>
                    </div>
                </div>
                <TutorialSideBar/>
            </div>
        );
    }
}

export default TutorialAdvanced;