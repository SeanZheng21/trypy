import React, {Component} from 'react';
import {Link} from "react-router-dom";
import TutorialSideBar from "./TutorialSideBar";

export class TutorialList extends Component {
    constructor(props) {
        super(props);
        this.exClick = this.exClick.bind(this);
        let answers = [`numbers = [5, 6, 7, 8]
res = numbers[1] + numbers[3]
print(res)
`,
        `zoo_animals = ["pangolin", "cassowary", "sloth", "tiger"]
zoo_animals[-1] = "cat"`,
        `suitcase = [] 
suitcase.append("sunglasses")

# Your code here!
suitcase.append("bathing suit")
suitcase.append("laptop")
suitcase.append("passport")

list_length = len(suitcase) # Set this to the length of suitcase

print "There are %d items in the suitcase." % (list_length)
print suitcase`,
        `suitcase = ["sunglasses", "hat", "passport", "laptop", "suit", "shoes"]

first = suitcase[0:2]
middle = suitcase[2:4]
last =  suitcase[4:6]`,
        `animals = "catdogfrog"
cat = animals[:3]
dog = animals[3:6]
frog = animals[6:]`,
        `animals = ["aardvark", "badger", "duck", "emu", "fennec fox"]
duck_index = animals.index("duck")
animals.insert(duck_index, "cobra")
print(animals)`,
        `my_list = [1,9,3,8,5,7]
for number in my_list:
  print(number * 2)`,
        `start_list = [5, 3, 1, 2, 4]
square_list = []

for elt in start_list:
  square_list.append(elt ** 2)
square_list.sort()
print square_list`,
        `residents = {'Puffin' : 104, 'Sloth' : 105, 'Burmese Python' : 106}
print(residents['Sloth'])
print(residents['Burmese Python'])`,
        `menu = {} # Empty dictionary

menu['Fish Alfredo'] = 14.50
menu['Beef Alfredo'] = 15.50
menu['Pork Alfredo'] = 16.50

print "There are " + str(len(menu)) + " items on the menu."
print menu`,
        `# key - animal_name : value - location 
zoo_animals = { 'Unicorn' : 'Cotton Candy House',
'Sloth' : 'Rainforest Exhibit',
'Bengal Tiger' : 'Jungle House',
'Atlantic Puffin' : 'Arctic Exhibit',
'Rockhopper Penguin' : 'Arctic Exhibit'}

del zoo_animals['Sloth']
del zoo_animals['Bengal Tiger']
zoo_animals['Rockhopper Penguin'] = 'foo'

print zoo_animals`,
        `inventory = {
  'gold' : 500,
  'pouch' : ['flint', 'twine', 'gemstone'], # Assigned a new list to 'pouch' key
  'backpack' : ['xylophone','dagger', 'bedroll','bread loaf']
}

inventory['pocket'] = ['seashell', 'strange berry', 'lint']
inventory['backpack'].sort()
inventory['backpack'].remove('dagger')
inventory['gold'] += 50`];
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
        return (<div className="row">
            <div className="column left">
                <div className="intro-list">
                    <h1>Introduction to Lists</h1>
                    <p>
                        Lists are a datatype you can use to store a collection of different pieces of information
                        as a sequence under a single variable name. (Datatypes you’ve already learned about include
                        strings, numbers, and booleans.) You can assign items to a list with an expression of the form
                    </p>
                    <pre><code>
                        list_name = [item_1, item_2]
                    </code></pre>
                    <p>with the items in between brackets. A list can also be empty: empty_list = [].
                        Lists are very similar to strings, but there are a few key differences.</p>
                </div>

                <div className="list-index">
                    <h1>Access by Index</h1>
                    <p>
                        You can access an individual item on the list by its index. An index is like an address that
                        identifies the item’s place in the list. The index appears directly after the list name, in
                        between brackets, like this: list_name[index].
                    </p>
                    <p>
                        List indices begin with 0, not 1! You access the first item in a list like this: list_name[0].
                        The second item in a list is at index 1: list_name[1]. Computer scientists love to start
                        counting from zero.
                    </p>
                    <p>
                        A list index behaves like any other variable name! It can be used to access as well as assign
                        values. Here's an example:
                    </p>
                    <pre><code>
                        {`zoo_animals = ["pangolin", "cassowary", "sloth", "tiger"]
zoo_animals[0]
# Gets the value "pangolin"

zoo_animals[2] = "hyena"
# Changes "sloth" to "hyena"`}
                    </code></pre>

                    <h3>Exercise 1:</h3>
                    <p>
                        Write a statement that prints the result of adding the second and fourth items of the list.
                        Make sure to access the list by index!
                    </p>
                    <pre><code>
                        {`numbers = [5, 6, 7, 8]
                    
print "Adding the numbers at indices 0 and 2..."
print numbers[0] + numbers[2]
print "Adding the numbers at indices 1 and 3..."
# Your code here!
                    `}
                    </code></pre>

                    <Link to="/playground" className="nav-link">Try it out in the playground</Link>
                    <button className="btn btn-info btn-sm"
                                            onClick={this.exClick.bind(this, 0)}>Answer</button>
                    <div className="ex-answer">
                        <pre><code>{this.state.displayedAnswers[0]}</code></pre>
                    </div>

                    <h3>Exercise 2:</h3>
                    <p>
                        Write an assignment statement that will replace the item that currently holds the value
                        "tiger" with another animal (as a string). It can be any animal you like.
                    </p>
                    <pre><code>
                        {`zoo_animals = ["pangolin", "cassowary", "sloth", "tiger"]
# Your code here!
                    `}
                    </code></pre>

                    <Link to="/playground" className="nav-link">Try it out in the playground</Link>
                    <button className="btn btn-info btn-sm"
                                            onClick={this.exClick.bind(this, 1)}>Answer</button>
                    <div className="ex-answer">
                        <pre><code>{this.state.displayedAnswers[1]}</code></pre>
                    </div>
                </div>

                <div className="list-length">
                    <h1>Late Arrivals & List Length</h1>
                    <p>A list doesn’t have to have a fixed length. You can add items to the end of a
                        list any time you like! Simply use append() to add elements to the end of the list.
                        You can also use len(your_list) to get the length of the list.
                    </p>
                    <pre><code>
                        {`letters = ['a', 'b', 'c']
letters.append('d')
print len(letters)
print letters`}
                    </code></pre>
                    <p>
                        In the above example, we first create a list called letters.
                        Then, we add the string 'd' to the end of the letters list.
                        Next, we print out 4, the length of the letters list.
                        Finally, we print out ['a', 'b', 'c', 'd'].
                    </p>

                    <h3>Exercise:</h3>
                        <p>
                            Append three more items to the suitcase list, just like the second line of the example
                            above. (Maybe bring a bathing suit?) Then, set list_length equal to the length of the
                            suitcase list.
                        </p>
                        <pre><code>
                            {`suitcase = [] 
suitcase.append("sunglasses")

# Your code here!

list_length = ________ # Set this to the length of suitcase

print "There are %d items in the suitcase." % (list_length)
print suitcase`}
                        </code></pre>

                        <Link to="/playground" className="nav-link">Try it out in the playground</Link>
                        <button className="btn btn-info btn-sm"
                                                onClick={this.exClick.bind(this, 2)}>Answer</button>
                        <div className="ex-answer">
                            <pre><code>{this.state.displayedAnswers[2]}</code></pre>
                        </div>
                </div>

                <div className="list-slicing">
                    <h1>List Slicing</h1>
                    <p>Sometimes, you only want to access a portion of a list. Consider the following code:
                    </p>
                    <pre><code>
                        {`letters = ['a', 'b', 'c', 'd', 'e']
slice = letters[1:3]
print slice
print letters`}
                    </code></pre>
                    <p>
                        First, we create a list called letters. Then, we take a subsection of the list and store it
                        in the slice list. We do this by defining the indices we want to include after the name of
                        the list: letters[1:3]. In Python, when we specify a portion of a list in this manner, we
                        include the element with the first index, 1, but we exclude the element with the second
                        index, 3.
                    </p>
                    <p>
                        Next, we print out slice, which will print ['b','c']. Remember, in Python indices always
                        start at 0, so the 1 element is actually b. Finally, we print out ['a', 'b', 'c', 'd', 'e'],
                        notice that we did not modify the original letters list.
                    </p>

                    <h3>Exercise:</h3>
                        <p>Create a list called middle containing only the two middle items from suitcase.</p>
                        <p>Create a list called last made up only of the last two items from suitcase.</p>
                    <pre><code>
                        {`suitcase = ["sunglasses", "hat", "passport", "laptop", "suit", "shoes"]

# The first and second items (index zero and one)
first = suitcase[0:2]

# Third and fourth items (index two and three)
middle = 

# The last two items (index four and five)
last =  `}
                    </code></pre>

                    <Link to="/playground" className="nav-link">Try it out in the playground</Link>
                    <button className="btn btn-info btn-sm"
                                            onClick={this.exClick.bind(this, 3)}>Answer</button>
                    <div className="ex-answer">
                        <pre><code>{this.state.displayedAnswers[3]}</code></pre>
                    </div>



            </div>

                <div className="str-list-slicing">
                    <h1>Slicing Lists and Strings</h1>
                    <p>
                        You can slice a string exactly like a list! In fact, you can think of strings as lists of
                        characters: each character is a sequential item in the list, starting from index 0. If
                        your list slice includes the very first or last item in a list (or a string), the index
                        for that item doesn’t have to be included.
                    </p>
                    <pre><code>
                        {`my_list[:2]
# Grabs the first two items
my_list[3:]
# Grabs the fourth through last items`}
                    </code></pre>

                    <h3>Exercise:</h3>
                        <p>Assign to dog a slice of animals from index 3 up until but not including index 6.</p>
                        <p>Assign to frog a slice of animals from index 6 until the end of the string.</p>
                    <pre><code>
                        {`animals = "catdogfrog"

# The first three characters of animals
cat = animals[:3]

# The fourth through sixth characters
dog = 

# From the seventh character to the end
frog = `}
                    </code></pre>

                    <Link to="/playground" className="nav-link">Try it out in the playground</Link>
                    <button className="btn btn-info btn-sm"
                                            onClick={this.exClick.bind(this, 4)}>Answer</button>
                    <div className="ex-answer">
                        <pre><code>{this.state.displayedAnswers[4]}</code></pre>
                    </div>
                </div>

                <div className="order">
                    <h1>Maintaining Order</h1>
                    <p>Sometimes you need to search for an item in a list.</p>
                    <pre><code>
                        {`animals = ["ant", "bat", "cat"]
print animals.index("bat")`}
                    </code></pre>
                    <p>
                        First, we create a list called animals with three strings. Then, we print the first index
                        that contains the string "bat", which will print 1.
                    </p>

                    <p>We can also insert items into a list.</p>
                    <pre><code>
                        {`animals.insert(1, "dog")
print animals`}
                    </code></pre>
                    <p>
                        insert "dog" at index 1, which moves everything down by 1.
                        We print out ["ant", "dog", "bat", "cat"]
                    </p>

                    <h3>Exercise:</h3>
                        <p>
                            Use the .index(item) function to find the index of "duck". Assign that result to a
                            variable called duck_index.
                        </p>
                        <p>Then .insert(index, item) the string "cobra" at that index.</p>
                    <pre><code>
                        {`animals = ["aardvark", "badger", "duck", "emu", "fennec fox"]
duck_index = # Use index() to find "duck"`}
                    </code></pre>

                    <Link to="/playground" className="nav-link">Try it out in the playground</Link>
                    <button className="btn btn-info btn-sm"
                                            onClick={this.exClick.bind(this, 5)}>Answer</button>
                    <div className="ex-answer">
                        <pre><code>{this.state.displayedAnswers[5]}</code></pre>
                    </div>
                </div>

                <div className="for-loop">
                    <h1>For Loop</h1>
                    <p>If you want to do something with every item in the list, you can use a for loop. If you’ve
                        learned about for loops in JavaScript, pay close attention! They’re different in Python.</p>
                    <pre><code>
                        {`for variable in list_name:
  # Do stuff!`}
                    </code></pre>
                    <p>
                        A variable name follows the for keyword; it will be assigned the value of each list item
                        in turn. Then in list_name designates list_name as the list the loop will work on.
                        The line ends with a colon (:) and the indented code that follows it will be executed once
                        per item in the list.
                    </p>
                    <h3>Exercise:</h3>
                    <p>
                        Write a statement in the indented part of the for-loop that prints a number equal
                        to 2 * number for every list item.
                    </p>
                    <pre><code>
                        {`my_list = [1,9,3,8,5,7]

for number in my_list:
  # Your code here
  `}
                    </code></pre>

                    <Link to="/playground" className="nav-link">Try it out in the playground</Link>
                    <button className="btn btn-info btn-sm"
                                            onClick={this.exClick.bind(this, 6)}>Answer</button>
                    <div className="ex-answer">
                        <pre><code>{this.state.displayedAnswers[6]}</code></pre>
                    </div>
                </div>

                <div className="sort-list">
                    <h1>Sort</h1>
                    <p>If your list is a jumbled mess, you may need to sort() it.</p>
                    <pre><code>
                        {`animals = ["cat", "ant", "bat"]
animals.sort()

for animal in animals:
  print animal`}
                    </code></pre>
                    <p>
                        First, we create a list called animals with three strings. The strings are not in
                        alphabetical order. Then, we sort animals into alphabetical order. Note that .sort()
                        modifies the list rather than returning a new list. Then, for each item in animals, we
                        print that item out as "ant", "bat", "cat" on their own line each.
                    </p>
                    <h3>Exercise:</h3>
                    <p>
                        Write a for-loop that iterates over start_list and .append()s each number squared
                        (x ** 2) to square_list. Then sort square_list!
                    </p>
                    <pre><code>
                        {`start_list = [5, 3, 1, 2, 4]
square_list = []`}
                    </code></pre>

                    <Link to="/playground" className="nav-link">Try it out in the playground</Link>
                    <button className="btn btn-info btn-sm"
                                            onClick={this.exClick.bind(this, 7)}>Answer</button>
                    <div className="ex-answer">
                        <pre><code>{this.state.displayedAnswers[7]}</code></pre>
                    </div>
                </div>

                <div className="dictionary">
                    <h1>Dictionary</h1>
                    <p>
                        A dictionary is similar to a list, but you access values by looking up a key instead of an
                        index. A key can be any string or number. Dictionaries are enclosed in curly braces, like so:
                    </p>
                    <pre><code>
                        {`d = {'key1' : 1, 'key2' : 2, 'key3' : 3}`}
                    </code></pre>
                    <p>
                        his is a dictionary called d with three key-value pairs. The key 'key1' points to the
                        value 1, 'key2' to 2, and so on. Dictionaries are great for things like phone books
                        (pairing a name with a phone number), login pages (pairing an e-mail address with a username),
                        and more!
                    </p>
                    <h3>Exercise:</h3>
                    <p>
                        Print the values stored under the 'Sloth' and 'Burmese Python' keys. Accessing dictionary
                        values by key is just like accessing list values by index:
                    </p>
                    <pre><code>
                        {`# Assigning a dictionary with three key-value pairs to residents:
residents = {'Puffin' : 104, 'Sloth' : 105, 'Burmese Python' : 106}

print residents['Puffin'] # Prints Puffin's room number`}
                    </code></pre>

                    <Link to="/playground" className="nav-link">Try it out in the playground</Link>
                    <button className="btn btn-info btn-sm"
                                            onClick={this.exClick.bind(this, 8)}>Answer</button>
                    <div className="ex-answer">
                        <pre><code>{this.state.displayedAnswers[8]}</code></pre>
                    </div>
                </div>

                <div className="new-entries">
                    <h1>New Entries</h1>
                    <p>
                        Like Lists, Dictionaries are mutable. This means they can be changed after they are created.
                        One advantage of this is that we can add new key/value pairs to the dictionary after it is
                        created like so:
                    </p>
                    <pre><code>
                        {`dict_name[new_key] = new_value`}
                    </code></pre>
                    <p>
                        An empty pair of curly braces {} is an empty dictionary, just like an empty pair of [] is an
                        empty list.
                    </p>
                    <p>
                        The length len() of a dictionary is the number of key-value pairs it has. Each pair counts
                        only once, even if the value is a list. (That’s right: you can put lists inside dictionaries!)
                    </p>
                    <h3>Exercise:</h3>
                    <p>
                        Add at least three more key-value pairs to the menu variable, with the dish name
                        (as a "string") for the key and the price (a float or integer) as the value.
                    </p>
                    <pre><code>
                        {`menu = {} # Empty dictionary
menu['Chicken Alfredo'] = 14.50 # Adding new key-value pair
print menu['Chicken Alfredo']

# Your code here: Add some dish-price pairs to menu!




print "There are " + str(len(menu)) + " items on the menu."
print menu`}
                    </code></pre>

                    <Link to="/playground" className="nav-link">Try it out in the playground</Link>
                    <button className="btn btn-info btn-sm"
                                            onClick={this.exClick.bind(this, 9)}>Answer</button>
                    <div className="ex-answer">
                        <pre><code>{this.state.displayedAnswers[9]}</code></pre>
                    </div>
                </div>

                <div className="modify-entries">
                    <h1>Modify Entries</h1>
                    <p>
                        Because dictionaries are mutable, they can be changed in many ways. Items can be removed from
                        a dictionary with the del command, which removes the key key_name and its associated value
                        from the dictionary.
                    </p>
                    <pre><code>
                        {`del dict_name[key_name]`}
                    </code></pre>
                    <p>A new value can be associated with a key by assigning a value to the key, like so:</p>
                    <pre><code>
                        {`dict_name[key] = new_value`}
                    </code></pre>
                    <h3>Exercise:</h3>
                    <p>
                        Delete the 'Sloth' and 'Bengal Tiger' items from zoo_animals using del. Set the value
                        associated with 'Rockhopper Penguin' to anything other than 'Arctic Exhibit'.
                    </p>
                    <pre><code>
                        {`# key - animal_name : value - location 
zoo_animals = { 'Unicorn' : 'Cotton Candy House',
'Sloth' : 'Rainforest Exhibit',
'Bengal Tiger' : 'Jungle House',
'Atlantic Puffin' : 'Arctic Exhibit',
'Rockhopper Penguin' : 'Arctic Exhibit'}
# A dictionary (or list) declaration may break across multiple lines

# Removing the 'Unicorn' entry. (Unicorns are incredibly expensive.)
del zoo_animals['Unicorn']`}
                    </code></pre>

                    <Link to="/playground" className="nav-link">Try it out in the playground</Link>
                    <button className="btn btn-info btn-sm"
                                            onClick={this.exClick.bind(this, 10)}>Answer</button>
                    <div className="ex-answer">
                        <pre><code>{this.state.displayedAnswers[10]}</code></pre>
                    </div>
                </div>

                <div className="last-example">
                    <h1>Last Example</h1>
                    <p>Let’s go over a few last notes about dictionaries</p>
                    <pre><code>
                        {`my_dict = {
  "fish": ["c", "a", "r", "p"],
  "cash": -4483,
  "luck": "good"
}
print my_dict["fish"][0]`}
                    </code></pre>
                    <p>In the example above, we created a dictionary that holds many types of values.
                        The key "fish" has a list, the key "cash" has an int, and the key "luck" has a string.
                        Finally, we print the letter "c". When we access a value in the dictionary like
                        my_dict["fish"], we have
                        direct access to that value (which happens to be a list). We can access the item
                        at index 0 in the list stored by the key "fish".</p>

                    <h3>Exercise:</h3>
                    <p>
                        Add a key to inventory called 'pocket' Set the value of 'pocket' to be a list consisting
                        of the strings 'seashell', 'strange berry', and 'lint' .sort() the items in the list
                        stored under the 'backpack' key
                    </p>
                    <p>
                        Then .remove('dagger') from the list of items stored under the 'backpack' key.
                        Add 50 to the number stored under the 'gold' key
                    </p>
                    <pre><code>
                        {`inventory = {
  'gold' : 500,
  'pouch' : ['flint', 'twine', 'gemstone'], # Assigned a new list to 'pouch' key
  'backpack' : ['xylophone','dagger', 'bedroll','bread loaf']
}

# Adding a key 'burlap bag' and assigning a list to it
inventory['burlap bag'] = ['apple', 'small ruby', 'three-toed sloth']

# Sorting the list found under the key 'pouch'
inventory['pouch'].sort() 

# Your code here
`}
                    </code></pre>

                    <Link to="/playground" className="nav-link">Try it out in the playground</Link>
                    <button className="btn btn-info btn-sm"
                                            onClick={this.exClick.bind(this, 11)}>Answer</button>
                    <div className="ex-answer">
                        <pre><code>{this.state.displayedAnswers[11]}</code></pre>
                    </div>
                </div>
            </div>
            <TutorialSideBar />
        </div>);
    }
}

export default TutorialList;