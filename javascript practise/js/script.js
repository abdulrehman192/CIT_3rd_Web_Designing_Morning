console.log("Hello World");
// use for sigle line comment
/* use for multiline comment */

// variables in javascripts
// numbers in javascript
var a = 15;
console.log(a);
var b = 10;
var sum = a + b;
console.log(sum);

var n = 125.2698;
var m = sum + n;
console.log(m);

// string in javascript
var x = 'Hello, this is a string';
console.log(x);

// boolean in javascript

var check = false;
console.log(check);
check = true;
console.log(check);

// arrays in javascript
//indexing     0        1       2       3          4
let names = ["Ali", "Hassan", "Yasir", "Zain", "Rehman"];
console.log(names[4]);

// objects in javascript

let student = {
    "Name": 'Ali',
    "Roll No": 'CIT-005',
    "Class": 'CIT',
    "Age": 25,
    "Subjects": ["Web", "Graphics", "Mobile Apps"],
    "Active": true
};

console.log(student);

// Operators in javascript
// arithmatic operators => +,-,*,/,%

let i = 25;
let j = 15;
let add = i + i;
console.log("Add = "+ add);
let sub = i - j;
console.log("Sub = "+ sub);
let multi = i * j;
console.log("Multi = "+ multi);
let div = i / j;
console.log("Div = "+ div);
let mod = i % j;
console.log("Mod = "+ mod);

// comparison operators
i = 25;
let o = "25";
console.log(i + o);
check = (i == o); // loosely  comparison opertor
console.log("loosely comparison : "+ check);

check = (i === o); //tightly comparison operator
console.log("tightly comparison : "+ check);

check = (i != 25); // not equal to operator
console.log("not equal operator : " + check);

check = (i > 20); // greater than operator
console.log("greater than operator : " + check);

check = (i < 20); // less than operator
console.log("less than operator : " + check);

check = (i <= 20); //less than or equal to operator
console.log("less than or equal to operator : " + check);

check = (i >= 20); //greater than or equal to operator
console.log("greater than or equal to operator : " + check);

// logical operators => AND, OR, NOT

check = (i >= 20) && (i <= 24); //when left and right both are true then overall result will be true
console.log("AND : "+ check); 

check = (i >= 20) || (i <= 24); //when left and right both are false then overall result will be false
console.log("OR : "+ check); 

check = !check; //Not Operator or bit shifting Operator
console.log("Not : "+ check);

// conditional structure or if-else statement

let age = 25;
if(age >= 18)
{
    console.log("You are 18+ ");
}
else
{
    console.log("You are under 18");
}

// series of if-else statement

//calculate the grade using marks

let marks = prompt("Enter Your Marks");
marks = Number(marks); //type casting

if(marks >= 50 && marks <= 60)
{
    console.log("Your Grade is D");
}
else if(marks > 60 && marks <= 70)
{
    console.log("Your Grade is C");
}
else if(marks > 70 && marks <=80)
{
    console.log("Your Grade is B");
}
else if(marks > 80 && marks <= 90)
{
    console.log("Your Grade is A");
}
else if(marks > 90 && marks <=100)
{
    console.log("Your Grade is A+")
}
else if( marks >=0 && marks < 50)
{
    console.log("You are Fail");
}
else
{
    console.log("Invalid Input")
}

let username = prompt("Enter username");
let password = prompt("Enter Password");

if(username === "Admin" && password === "pakistan")
{
    console.log("Login Successfully");
}
else
{
    console.log("Incorrect username or password");
}

// switch case statement

a = 25;
b = 10;

let operation = "-";

switch(operation)
{
    case "+":
       console.log("Sum = "+ (a + b)); 
       break;
    case "-":
        console.log("Sub = "+ (a - b)); 
       break;
    case "*":
        console.log("Multi = "+ (a * b)); 
       break;
    case "/":
        console.log("Div = "+ (a / b)); 
       break;
    case "%":
        console.log("Mod = "+ (a % b)); 
       break;
    default:
        console.log("Invalid Input");
        break;
}


    // Iterative structure
    // Loops => repeat the same work

    //for loop

    for(let i = 1; i <= 10; i++)
    {
        console.log("Hello World " + i);
    }

    // while loop

    let v = 1;  //initializer
    while(v <= 100) //condition
    {
        console.log(v +" Hello World ");
        v++;  // step counter / increament 
    }

    // do - while loop

    v = 1;
    do
    {
        console.log("Hello Dear " + v);
        v++;
    }while(v <= 10)


    //print the multiplication table of given number
    // 2 * 1 = 2
    // 2 * 2 = 4
    // 2 * 3 = 6
    
    let num = 5;
    for(let i = 1; i <= 10; i++)
    {
        console.log(num + " * " + i + " = " + (num * i));
    }

    // sum the first 100 natural number
    // 1+2+3+4+5+6+7+89......+100

    sum = 0;
    for(let i = 1; i <= 100; i++)
    {
        sum = sum + i;
    }

    console.log("Sum = "+ sum);

    // print 50 even numbers

    for(let i = 1 ; i <= 50; i++)
    {
        if(i % 2 == 0)
        {
            console.log(i);
        }
    }

    // draw the given pattern
    /*

    *
    **
    ***
    ****
    *****
    ******
    *******
    ********

    */


    let pattern = "";
    for(let i = 1; i <= 8; i++)
    {
        pattern = pattern + "*";
        // pattern += "*";
        console.log(pattern);
    }

    /*

    1
    12
    123
    1234
    12345
    123456
    1234567
    12345678

    */

     pattern = "";
    for(let i = 1; i <= 8; i++)
    {
        pattern = pattern + i;
        // pattern += "*";
        console.log(pattern);
    }

    let characters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    // for in loops

    for(let elem in characters)
    {
        console.log(characters[elem]);
    }

    for(let i = 0; i < characters.length; i++)
    {
        console.log(characters[i]);
    }

    
    // nested loops 

    //outer loop
    for(let i = 1; i <= 10; i++)
    {
        console.log("Outer loop "+ i);
        //inner loop
        for(let j =1 ; j <= 10; j++)
        {
            console.log("Inner Loop "+ j);
        }
    }

    // find the given number is prime or not

    num = 76;
    let count = 0;
    for(let i = 2; i <= num; i++)
    {
        if(num % i == 0)
        {
            console.log(i);
            count++;
        }
    }

    if(count == 1)
    {
        console.log(num + " is a prime number");
    }
    else
    {
        console.log(num + " is a composite number");
    }


    //functions in javascript

    // example function

    //function definition
    function printHelloWorld()
    {
        console.log("Hello World");
    }

    // function call
    printHelloWorld();

    // there are 4 types of function

    // function with no return and no perameter

    function print_name(){
        console.log("Abdul Rehman");
    }

    print_name();

    // function with return and no perameter

    function get_name()
    {
        return "My name is Rehman";
    }

    let data = get_name();
    console.log(data);

    // function with no return and with perameter

    function add2nums(a , b)
    {
        console.log("sum = " + (a+b));
    }

    add2nums(12, 15);
    add2nums(12, 45);

    //funtion with return and with perameters

    function multiply(a, b)
    {
        return a * b;
    }

    let res = multiply(10,2);

    console.log(res);
    res = multiply(17,82);

    console.log(res);

    
    // objects 
    let car = {
        "Name": 'Honda Civic',
        "Model": 2022,
        "Engine Power": '1800CC',
        "Color": 'Black',
        "Doors": 4,
        "runing": function()
        {
            console.log("Car is running");
        },
        "stopped": function()
        {
            console.log("Car is stopped");
        }
    };

    console.log(car.Name);
    console.log(car.Model);

    car.Model = 2023;
    console.log(car.Model);
    car.runing();


    let copy = car; //reference to the object
    copy.Name = "Honda City";
    console.log(car);
    console.log(copy);

    // global variables
    let firstName = "Ali";
    let lastName = "Ahmad";
    let address = "Okara";

    function Person(first, last, addr)
    {
        this.firstName = first;
        this.lastName = last;
        this.address = addr;
    }

    let father = new Person("Abdul", "Rehman", "Okara");
    let mother = new Person("Hina", "Rehman", "Okara");

    //global variable call
    console.log(firstName);
    
    console.log(father.firstName);

    console.log(mother.firstName);

    // page redirection in javascript

    function redirect()
    {
        let url = "https://www.google.com";
        window.location.replace(url);
    }

    // page refresh in javascript

    function refresh()
    {
        window.location.reload();
    }

    // auto refresh page

    function autorefresh(time)
    {
        window.setTimeout(
            window.location.reload(),
            time
        );
    }

    // show alert

    function showAlert()
    {
        alert("Hi I am a alert dialogue from javascript")
    }


    // show confirmation
    function showConfirm()
    {
        confirm("Do you want to delete this record?");
    }