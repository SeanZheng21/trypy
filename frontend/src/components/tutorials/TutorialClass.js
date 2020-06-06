import React, {Component} from 'react';
import {Link} from "react-router-dom";
import TutorialSideBar from "./TutorialSideBar";

export class TutorialClass extends Component {
    constructor(props) {
        super(props);
        this.exClick = this.exClick.bind(this);
        let answers = [`class Animal(object):
  pass`,
            `class Animal(object):
  def __init__(self, name):
    self.name = name

zebra = Animal("Jeffrey")
print(zebra.name)`,
            `class Animal(object):
  def __init__(self, name, age, is_hungry):
    self.name = name
    self.age = age
    self.is_hungry = is_hungry`,
            `class Animal(object):
  """Makes cute animals."""
  is_alive = True
  health = "good"
  def __init__(self, name, age):
    self.name = name
    self.age = age
  
  def description(self):
    print(self.name)
    print(str(self.age))

sloth = Animal("Mr.sloth", 5)
ocelot = Animal("Mr.ocelot", 3)
hippo = Animal("Mr.hippo", 3)
print(sloth.health)
print(ocelot.health)
print(hippo.health)`,
            `my_cart = ShoppingCart("Taylor")
my_cart.add_item("Reputation Album", 9.99)
>>>Reputation Album added.`,
            `class Triangle(Shape):
  def __init__(self, side1, side2, side3):
    self.side1 = side1
    self.side2 = side2
    self.side3 = side3`,
            `class PartTimeEmployee(Employee):
  def __init__(self, employee_name):
    super(self, employee_name)

  def calculate_wage(self, hours):
    self.hours = hours
    return hours * 12.00 `,
            `class PartTimeEmployee(Employee):
  def __int__(self, employee_name):
    super(self, employee_name)

  def calculate_wage(self, hours):
    self.hours = hours
    return hours * 12.00 

  def full_time_wage(self, hours):
    return super(PartTimeEmployee, self).calculate_wage(hours)

milton = PartTimeEmployee("Milton")
print(milton.full_time_wage(10))
>>> 200`
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
                    <h1 className="main-title">Introduction to Python Class</h1>
                    <div className="intro-class">
                        <h1>Why Use Classes?</h1>
                        <p>Python is an object-oriented programming language, which means it manipulates programming
                            constructs called objects. You can think of an object as a single data structure that
                            contains data as well as functions; the functions of an object are called its methods. For
                            example, any time you call</p>
                        <pre><code>
                        {`len("Eric")`}
                        </code></pre>
                        <p>Python is checking to see whether the string object you passed it has a length, and if it does,
                            it returns the value associated with that attribute. When you call</p>
                        <pre><code>
                            {`my_dict.items()`}
                        </code></pre>
                        <p>Python checks to see if my_dict has an items() method (which all dictionaries have) and executes
                            that method if it finds it.</p>
                        <p>But what makes "Eric" a string and my_dict a dictionary? The fact that they’re instances of the
                            str and dict classes, respectively. A class is just a way of organizing and producing objects
                            with similar attributes and methods.</p>
                        <p>Here's an example of a "Fruit" class, we will explain it in detail in the following sections.</p>
                        <pre><code>
                            {`class Fruit(object):
      """A class that makes various tasty fruits."""
      def __init__(self, name, color, flavor, poisonous):
        self.name = name
        self.color = color
        self.flavor = flavor
        self.poisonous = poisonous
    
      def description(self):
        print "I'm a %s %s and I taste %s." % (self.color, self.name, self.flavor)
    
      def is_edible(self):
        if not self.poisonous:
          print "Yep! I'm edible."
        else:
          print "Don't eat me! I am super poisonous."
    
    lemon = Fruit("lemon", "yellow", "sour", False)
    
    lemon.description()
    lemon.is_edible()
    `}
                        </code></pre>
                    </div>

                    <div className="syntax">
                        <h1>Class Syntax</h1>
                        <p>A basic class consists only of the class keyword, the name of the class, and the class from
                            which the new class inherits in parentheses. (We’ll get to inheritance soon.) For now, our
                            classes will inherit from the object class, like so:</p>
                        <pre><code>
                            {`class NewClass(object):
  # Class magic here`}
                        </code></pre>
                        <p>This gives them the powers and abilities of a Python object. By convention, user-defined
                            Python class names start with a capital letter.</p>

                        <h3>Exercise:</h3>
                        <p>
                            Create a class called Animal. For now, in the body of your class, use the pass keyword.
                            (pass doesn’t do anything, but it’s useful as a placeholder in areas of your code where
                            Python expects an expression.)
                        </p>

                        <Link to="/playground" className="nav-link">Try it out in the playground</Link>
                        <button className="btn btn-info btn-sm"
                                onClick={this.exClick.bind(this, 0)}>Answer
                        </button>
                        <div className="ex-answer">
                            <pre><code>{this.state.displayedAnswers[0]}</code></pre>
                        </div>
                    </div>

                    <div className="class-init">
                        <h1>__init__ Constructor</h1>
                        <p>We’d like our classes to do more than… well, nothing, so we’ll have to replace our pass with
                            something else. You may have noticed in our example back in the first exercise that we
                            started our class definition off with an odd-looking function: __init__(). This function is
                            required for classes, and it’s used to initialize the objects it creates. __init__() always
                            takes at least one argument, self, that refers to the object being created. You can think of
                            __init__() as the function that “boots up” each object the class creates.</p>
                        <p>The __init__ for the Animal class should look like this:</p>
                        <pre><code>
                            {`class Animal(object):
  def __init__(self):
    pass`}
                        </code></pre>
                        <p> We remove the pass statement in your class definition, then  define an __init__()
                            function for the Animal class. Pass it the argument self for now; we’ll explain how this
                            works in greater detail in the next section. Finally, put the pass into the body of the
                            __init__() definition, since it will expect an indented block.</p>

                        <p>Excellent! Let’s make one more tweak to our class definition, then go ahead and instantiate
                            (create) our first object.</p>
                        <p>So far, __init__() only takes one parameter: self. This is a Python convention; there’s
                            nothing magic about the word self. However, it’s overwhelmingly common to use self as the
                            first parameter in __init__(), so you should do this so that other people will understand
                            your code.</p>
                        <p>The part that is magic is the fact that self is the first parameter passed to __init__().
                            Python will use the first parameter that __init__() receives to refer to the object being
                            created; this is why it’s often called self, since this parameter gives the object being
                            created its identity.</p>
                        <pre><code>
                            {`class Animal(object):
  def __init__(self, name):
    self.name = name`}
                        </code></pre>
                        <p> We pass __init__() a second parameter, name. In the body of __init__(), let the function know
                            that name refers to the created object’s name by typing self.name = name. (This will become
                            crystal clear in the next section.)</p>
                    </div>

                    <div className="instantiate-object">
                        <h1>Instantiating Object</h1>
                        <p>Now we’re ready to start creating objects. We can access attributes of our objects using dot
                            notation. Here’s how it works:</p>
                        <pre><code>
                            {`class Square(object):
  def __init__(self):
    self.sides = 4

my_shape = Square()
print my_shape.sides`}
                        </code></pre>
                        <p> First we create a class named Square with an attribute sides.
                            Outside the class definition, we create a new instance of Square named my_shape and access
                            that attribute using my_shape.sides.</p>
                        <h3>Exercise:</h3>
                        <p>
                            Outside the Animal class definition, create a variable named zebra and set it equal to
                            Animal("Jeffrey"). Then print out zebra‘s name.
                        </p>

                        <Link to="/playground" className="nav-link">Try it out in the playground</Link>
                        <button className="btn btn-info btn-sm"
                                onClick={this.exClick.bind(this, 1)}>Answer
                        </button>
                        <div className="ex-answer">
                            <pre><code>{this.state.displayedAnswers[1]}</code></pre>
                        </div>
                    </div>

                    <div className="init-self">
                        <h1>More on __init__() and self</h1>
                        <p>Now that you’re starting to understand how classes and objects work, it’s worth delving a bit
                            more into __init__() and self. They can be confusing!</p>
                        <p>
                            As mentioned, you can think of __init__() as the method that “boots up” a class’ instance
                            object: the init bit is short for “initialize.”
                        </p>
                        <p>The first argument __init__() gets is used to refer to the instance object, and by
                            convention, that argument is called self. If you add additional arguments—for instance, a
                            name and age for your animal—setting each of those equal to self.name and self.age in the
                            body of __init__() will make it so that when you create an instance object of your Animal
                            class, you need to give each instance a name and an age, and those will be associated with
                            the particular instance you create.</p>

                        <h3>Exercise:</h3>
                        <p>
                            Add a third attribute, is_hungry to __init__(). We should be able to create the 3 instances
                            zebra, giraffe, and panda as following:
                        </p>
                        <pre><code>
                            {`# Class definition
class Animal(object):
  """Makes cute animals."""
  # For initializing our instance objects
  def __init__(self, name, age):
    self.name = name
    self.age = age

# Note that self is only used in the __init__()
# function definition; we don't need to pass it
# to our instance objects.

zebra = Animal("Jeffrey", 2, True)
giraffe = Animal("Bruce", 1, False)
panda = Animal("Chad", 7, True)`}
                        </code></pre>
                        <Link to="/playground" className="nav-link">Try it out in the playground</Link>
                        <button className="btn btn-info btn-sm"
                                onClick={this.exClick.bind(this, 2)}>Answer
                        </button>
                        <div className="ex-answer">
                            <pre><code>{this.state.displayedAnswers[2]}</code></pre>
                        </div>
                    </div>

                    <div className="class-scope">
                        <h1>Class Scope</h1>
                        <p>Another important aspect of Python classes is scope. The scope of a variable is the context
                            in which it’s visible to the program.</p>
                        <p>
                            It may surprise you to learn that not all variables are accessible to all parts of a Python
                            program at all times. When dealing with classes, you can have variables that are available
                            everywhere (global variables), variables that are only available to members of a certain
                            class (member variables), and variables that are only available to particular instances of a
                            class (instance variables).
                        </p>
                        <p>The same goes for functions: some are available everywhere, some are only available to
                            members of a certain class, and still others are only available to particular instance
                            objects.</p>

                        <p>Check out the following code. Note that each individual animal gets its own name and age
                            (since they’re all initialized individually), but they all have access to the member
                            variable is_alive, since they’re all members of the Animal class. </p>
                        <pre><code>
                            {`class Animal(object):
  """Makes cute animals."""
  is_alive = True
  def __init__(self, name, age):
    self.name = name
    self.age = age

zebra = Animal("Jeffrey", 2)
giraffe = Animal("Bruce", 1)
panda = Animal("Chad", 7)

print zebra.name, zebra.age, zebra.is_alive
print giraffe.name, giraffe.age, giraffe.is_alive
print panda.name, panda.age, panda.is_alive

>>>Jeffrey 2 True
Bruce 1 True
Chad 7 True`}
                        </code></pre>
                    </div>

                    <div className="methods">
                        <h1>Methods</h1>
                        <p>When a class has its own functions, those functions are called methods. You’ve already seen
                            one such method: __init__(). But you can also define your own methods!</p>
                        <p>
                            We add a method, description, to the Animal class. Using two separate print statements, it
                            should print out the name and age of the animal it’s called on. Then, we create an instance
                            of Animal, hippo (with whatever name and age you like), and call its description method.
                        </p>
                        <pre><code>
                            {`class Animal(object):
  """Makes cute animals."""
  is_alive = True
  def __init__(self, name, age):
    self.name = name
    self.age = age
  
  def description(self):
    print(self.name)
    print(str(self.age))`}
                        </code></pre>
                    </div>

                    <div className="member-variables">
                        <h1>Member Variables</h1>
                        <p>A class can have any number of member variables. These are variables that are available to
                            all members of a class.</p>
                        <p>
                            We add a method, description, to the Animal class. Using two separate print statements, it
                            should print out the name and age of the animal it’s called on. Then, we create an instance
                            of Animal, hippo (with whatever name and age you like), and call its description method.
                        </p>
                        <pre><code>
                            {`hippo = Animal("Jake", 12)
cat = Animal("Boots", 3)
print hippo.is_alive
>>> True
hippo.is_alive = False
print hippo.is_alive
>>> False
print cat.is_alive
>>> True`}
                        </code></pre>
                        <p>In the example above, we create two instances of an Animal. Then we print out True, the
                            default value stored in hippo’s is_alive member variable. Next, we set that to False and
                            print it out to make sure. Finally, we print out True, the value stored in cat’s is_alive
                            member variable. We only changed the variable in hippo, not in cat.</p>
                        <h3>Exercise:</h3>
                        <p>
                            Let’s add another member variable to Animal. After line 3, add a second member variable
                            called health that contains the string "good".
                        </p>
                        <p>Then, create two new Animals: sloth and ocelot. (Give them whatever names and ages you like.)
                            Finally, on three separate lines, print out the health of your hippo, sloth, and ocelot.</p>
                        <pre><code>
                            {`class Animal(object):
  """Makes cute animals."""
  is_alive = True
  def __init__(self, name, age):
    self.name = name
    self.age = age
  
  def description(self):
    print(self.name)
    print(str(self.age))`}
                        </code></pre>
                        <Link to="/playground" className="nav-link">Try it out in the playground</Link>
                        <button className="btn btn-info btn-sm"
                                onClick={this.exClick.bind(this, 3)}>Answer
                        </button>
                        <div className="ex-answer">
                            <pre><code>{this.state.displayedAnswers[3]}</code></pre>
                        </div>
                    </div>

                    <div className="shopping-cart-example">
                        <h1>Shopping Cart Example</h1>
                        <p>Classes like Animal and Fruit make it easy to understand the concepts of classes and
                            instances, but you probably won’t see many zebras or lemons in real-world programs.</p>
                        <p>
                            However, classes and objects are often used to model real-world objects. The code in the
                            editor is a more realistic demonstration of the kind of classes and objects you might find
                            in commercial software. Here we have a basic ShoppingCart class for creating shopping cart
                            objects for website customers; though basic, it’s similar to what you’d see in a real
                            program.
                        </p>
                        <pre><code>
                            {`class ShoppingCart(object):
  """Creates shopping cart objects
  for users of our fine website."""
  items_in_cart = {}
  def __init__(self, customer_name):
    self.customer_name = customer_name

  def add_item(self, product, price):
    """Add product to the cart."""
    if not product in self.items_in_cart:
      self.items_in_cart[product] = price
      print product + " added."
    else:
      print product + " is already in the cart."

  def remove_item(self, product):
    """Remove product from the cart."""
    if product in self.items_in_cart:
      del self.items_in_cart[product]
      print product + " removed."
    else:
      print product + " is not in the cart."
`}
                        </code></pre>

                        <h3>Exercise:</h3>
                        <p>
                            Create an instance of ShoppingCart called my_cart. Initialize it with any values you like,
                            then use the add_item method to add an item to your cart.
                        </p>
                        <Link to="/playground" className="nav-link">Try it out in the playground</Link>
                        <button className="btn btn-info btn-sm"
                                onClick={this.exClick.bind(this, 4)}>Answer
                        </button>
                        <div className="ex-answer">
                            <pre><code>{this.state.displayedAnswers[4]}</code></pre>
                        </div>
                    </div>

                    <div className="inheritance">
                        <h1>Inheritance</h1>
                        <p>Inheritance is a tricky concept, so let’s go through it step by step.</p>
                        <p>
                            Inheritance is the process by which one class takes on the attributes and methods of
                            another, and it’s used to express an is-a relationship. For example, a Panda is a bear, so a
                            Panda class could inherit from a Bear class. However, a Toyota is not a Tractor, so it
                            shouldn’t inherit from the Tractor class (even if they have a lot of attributes and methods
                            in common). Instead, both Toyota and Tractor could ultimately inherit from the same Vehicle
                            class.
                        </p>
                        <p>Check out the following code. We’ve defined a class, Customer, as well as a
                            ReturningCustomer class that inherits from Customer. Note that we don’t define the
                            display_cart method in the body of ReturningCustomer, but it will still have access to that
                            method via inheritance.</p>
                        <pre><code>
                            {`class Customer(object):
  """Produces objects that represent customers."""
  def __init__(self, customer_id):
    self.customer_id = customer_id

  def display_cart(self):
    print "I'm a string that stands in for the contents of your shopping cart!"

class ReturningCustomer(Customer):
  """For customers of the repeat variety."""
  def display_order_history(self):
    print "I'm a string that stands in for your order history!"

monty_python = ReturningCustomer("ID: 12345")
monty_python.display_cart()
>>> I'm a string that stands in for the contents of your shopping cart!
monty_python.display_order_history()
>>> I'm a string that stands in for your order history!`}
                        </code></pre>

                        <h3>Exercise:</h3>
                        <p>
                            Create an instance of ShoppingCart called my_cart. Initialize it with any values you like,
                            then use the add_item method to add an item to your cart.
                        </p>
                        <Link to="/playground" className="nav-link">Try it out in the playground</Link>
                        <button className="btn btn-info btn-sm"
                                onClick={this.exClick.bind(this, 4)}>Answer
                        </button>
                        <div className="ex-answer">
                            <pre><code>{this.state.displayedAnswers[4]}</code></pre>
                        </div>
                    </div>

                    <div className="inheritance-syntax">
                        <h1>Inheritance Syntax</h1>
                        <p>In Python, inheritance works like this:</p>
                        <pre><code>
                            {`class DerivedClass(BaseClass):
  # code goes here`}
                        </code></pre>
                        <p>where DerivedClass is the new class you’re making and BaseClass is the class from which that
                            new class inherits.</p>

                        <h3>Exercise:</h3>
                        <p>On lines 1-4, we’ve created a class named Shape.</p>
                        <p>Create your own class, Triangle, that inherits from Shape. Inside the Triangle class, write
                            an __init__() function that takes four arguments: self, side1, side2, and side3.
                            Inside the __init__() function, set self.side1 = side1, self.side2 = side2, and self.side3 =
                            side3.</p>
                        <pre><code>
                            {`class Shape(object):
  """Makes shapes!"""
  def __init__(self, number_of_sides):
    self.number_of_sides = number_of_sides

# Add your Triangle class below!
`}
                        </code></pre>
                        <Link to="/playground" className="nav-link">Try it out in the playground</Link>
                        <button className="btn btn-info btn-sm"
                                onClick={this.exClick.bind(this, 5)}>Answer
                        </button>
                        <div className="ex-answer">
                            <pre><code>{this.state.displayedAnswers[5]}</code></pre>
                        </div>
                    </div>

                    <div className="override">
                        <h1>Override</h1>
                        <p>Sometimes you’ll want one class that inherits from another to not only take on the methods
                            and attributes of its parent, but to override one or more of them.</p>
                        <pre><code>
                            {`class Employee(object):
  def __init__(self, name):
    self.name = name
  def greet(self, other):
    print "Hello, %s" % other.name

class CEO(Employee):
  def greet(self, other):
    print "Get back to work, %s!" % other.name

ceo = CEO("Emily")
emp = Employee("Steve")
emp.greet(ceo)
# Hello, Emily
ceo.greet(emp)
# Get back to work, Steve!`}
                        </code></pre>
                        <p>Rather than have a separate greet_underling method for our CEO, we override (or re-create)
                            the greet method on top of the base Employee.greet method. This way, we don’t need to know
                            what type of Employee we have before we greet another Employee.</p>

                        <h3>Exercise:</h3>
                        <p>Create a new class, PartTimeEmployee, that inherits from Employee. Give your derived class a
                            calculate_wage method that overrides Employee‘s. It should take self and hours as
                            arguments.</p>
                        <p>Because PartTimeEmployee.calculate_wage overrides Employee.calculate_wage, it still needs to
                            set self.hours = hours. It should return the part-time employee’s number of hours worked
                            multiplied by 12.00 (that is, they get $12.00 per hour instead of $20.00).</p>
                        <Link to="/playground" className="nav-link">Try it out in the playground</Link>
                        <button className="btn btn-info btn-sm"
                                onClick={this.exClick.bind(this, 6)}>Answer
                        </button>
                        <div className="ex-answer">
                            <pre><code>{this.state.displayedAnswers[6]}</code></pre>
                        </div>
                    </div>

                    <div className="super">
                        <h1>Super</h1>
                        <p>On the flip side, sometimes you’ll be working with a derived class (or subclass) and realize
                            that you’ve overwritten a method or attribute defined in that class’ base class (also called
                            a parent or superclass) that you actually need. Have no fear! You can directly access the
                            attributes or methods of a superclass with Python’s built-in super call. The syntax looks
                            like this, where m() is a method from the base class:</p>
                        <pre><code>
                            {`class Derived(Base):
  def m(self):
    return super(Derived, self).m()`}
                        </code></pre>
                        <h3>Exercise:</h3>
                        <p>First, inside your PartTimeEmployee class: Add a new method called full_time_wage with the
                            arguments self and hours. That method should return the result of a super call to the
                            calculate_wage method of PartTimeEmployee‘s parent class. Use the example above for
                            help.</p>
                        <p>Then, after your class: Create an instance of the PartTimeEmployee class called milton. Don’t
                            forget to give it a name. Finally, print out the result of calling his full_time_wage
                            method. You should see his wage printed out at $20.00 per hour! (That is, for 10 hours, the
                            result should be 200.00.)</p>
                        <Link to="/playground" className="nav-link">Try it out in the playground</Link>
                        <button className="btn btn-info btn-sm"
                                onClick={this.exClick.bind(this, 7)}>Answer
                        </button>
                        <div className="ex-answer">
                            <pre><code>{this.state.displayedAnswers[7]}</code></pre>
                        </div>
                    </div>

                    <div className="review-class">
                        <h1>Review</h1>
                        <p>Analyze the following classes, what do they do and how can you use them?</p>
                        <p>Try to rewrite them on your own. If you are not sure about some concepts,
                        go back to the previous sections and check them out.</p>
                        <pre><code>
                            {`class Triangle(object):
  number_of_sides = 3
  def __init__(self, angle1, angle2, angle3):
    self.angle1 = angle1
    self.angle2 = angle2
    self.angle3 = angle3

  def check_angles(self):
    return (self.angle1 + self.angle2 + self.angle3) == 180

class Equilateral(Triangle):
  angle = 60
  def __init__(self):
    super(Equilateral, self).__init__(60, 60, 60)

my_triangle = Triangle(90, 30, 60)
print(my_triangle.number_of_sides)
print(my_triangle.check_angles())
`}
                        </code></pre>
                    </div>
                </div>
                <TutorialSideBar/>
            </div>
        );
    }
}

export default TutorialClass;