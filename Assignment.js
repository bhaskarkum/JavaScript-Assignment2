// Assignment 1----------------------------

var Rectangle = function(width,height) //declaring object with "constructor function"
{
    this.width = width;
    this.height = height;
    this.area = function()
    {
        console.log("Area of the Rectangle is: " +this.width * this.height);
    }
} 

var myRect1 = new Rectangle(2,4); 
var myRect2 = new Rectangle(8,2);
var myRect3 = new Rectangle(2,6);
var myRect4 = new Rectangle(5,4);

console.log(myRect1.width);
console.log(myRect1.height);
myRect1.area();
console.log("\n");
console.log(myRect2.width); 
console.log(myRect2.height);
myRect2.area();
console.log("\n")
console.log(myRect3.width); 
console.log(myRect3.height);
myRect3.area();
console.log("\n")
console.log(myRect4.width);
console.log(myRect4.height);
myRect4.area();
console.log("\n")



// Assignment 2----------------------------

Rectangle.prototype.getArea = function()
{
    console.log("Getting Area using prototype property : " +this.width * this.height);
}

console.log(Rectangle.prototype);
myRect1.getArea(); 
myRect2.getArea();
myRect3.getArea();
myRect4.getArea();

// Assignment 3----------------------------

Rectangle.prototype.getAreaForRect = function(width,height)  //this is because of Global scope and LOcal scope.
{
    console.log("Getting Area using prototype property : " +width * height);
}

console.log(Rectangle.prototype);
myRect1.getAreaForRect(2,3); 
myRect2.getAreaForRect(8,6);
myRect3.getAreaForRect(5,3);
myRect4.getAreaForRect(1,6);

// Assignment 4----------------------------

var obj = {
    firstName : "Bhaskar",
    lastName : "Kumar"
};
console.log(obj);

// Assignment 5

var ob = {
    firstName : "Bhaskar",
    middleName : "kr",
    lastName : "jaiswal"
};
console.log(ob);


// Assignment 6----------------------------

var myString = new String('5 + 5')
eval(myString.toString());
console.log(eval(myString.toString()));

/*var String = {
    firstName:"Bhaskar",
    lastName:"Kumar"
}
console.log(String.prototype);*/

// Assignment 7----------------------------


const myString = '{"firstName":"Bhaskar",  "lastName":"Kumar"}';
const ob = JSON.parse(myString);
ob.firstName = eval("(" +ob.firstName+")");


// Assignment 8----------------------------

function Person(firstName,lastName,age,skills,dateOfbirth,address,married,profession)
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.skills = skills;
    this.dateOfbirth = dateOfbirth;
    this.address = address;
    this.married = married;
    this.profession = profession;
}

Person1 = new Person("Bhaskar","Kumar",80,['java','c#'],"28/01/1995",{city:"Ranchi",pincode:834001},"false","Developer");
Person2 = new Person("Ak","kumar",25,["C","c#"],"24/02/1999",{city:"Patna",pincode:862021},"false","Analyst");

console.log(Person1);
console.log(Person2);

print=function()       
{
    console.log(Person1);
    console.log(Person2);
}();


// Assignment 9----------------------------

function Person(firstName,lastName,age,skills,dateOfbirth,address,married,profession)
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.skills = skills;
    this.dateOfbirth = dateOfbirth;
    this.address = address;
    this.married = married;
    this.profession = profession;
}
Vishal= new Person("Vishal","Kumar",78,['java','c#'],"01/01/1999",{city:"Bangalore",pincode:67856},"false","Analyst");
Pranav= new Person("Pranav",44,["html","css"],"03/07/1995","false","SrAnalyst");
Prakash= new Person("Prakash",20,"08/09/2001","false","student");

var Pranav = Object.create(Vishal); //inheriting the common properties/storing Vishal object in Pranav
var Prakash = Object.create(Pranav);  //it has become Heirarchical inheritance now--> Vishal is a supermost class 
//var Prakash = Object.create(Vishal);
print = function()
{
    console.log(Vishal);
    console.log(Pranav.lastName);
    console.log(Pranav.address);
    console.log(Prakash.lastName);
    console.log(Prakash.skills);
    console.log(Prakash.address);
    console.log(Prakash.firstName);
}();



// Assignment 10----------------------------

function Account(accountNumber,accountHolderName,accountBalance) 
{
    this.accountNumber = accountNumber;
    this.accountHolderName = accountHolderName;
    this.accountBalance = accountBalance;
}
function Savings(isSalary,accountNumber,accountHolderName,accountBalance)
{
    this.isSalary = isSalary;
    this.accountNumber = accountNumber;
    this.accountHolderName = accountHolderName;
    this.accountBalance = accountBalance;
    this.withdraw = function(amount)
    {
        if(this.accountBalance > 0 && this.accountBalance < 100)
        {
            console.log("Insuffient balance! You have less than 100 rs.");
        } 
        if((this.accountBalance >= 100 && this.accountBalance <= 500) && amount === 200)
        {
            this.accountBalance = this.accountBalance - amount;
            console.log("Your money after debiting : " + this.accountBalance);
        }
        if((this.accountBalance > 500 && this.accountBalance <= 5000) && amount === 500 || amount === 2000);
        {
            this.accountBalance = this.accountBalance - amount;
            console.log("Your money after debiting : " + this.accountBalance);
        }
        if((this.accountBalance > 5000) && amount === 200 || amount === 500 || amount ===2000)
        {
            this.accountBalance = this.accountBalance - amount;
            console.log("Your money after debiting : " + this.accountBalance);
        }
        if(this.accountBalance <= 0)
        {
            console.log("ATM says! I cant give you the money, Please deposit some amount to withdraw later, Now Please go!");
        }
      
    };
    this.getCurrentBalance = function()
    {
        console.log("Your current Account balance is : " + this.accountBalance);
    };
}
function Current(odLimit,accountNumber,accountHolderName,accountBalance)
{
    this.odLimit = odLimit;
    this.accountNumber = accountNumber;
    this.accountHolderName = accountHolderName;
    this.accountBalance = accountBalance;
    this.withdraw = function(amount)
    {
        if(odLimit > 500)
        {
            if((this.accountBalance > 500 && this.accountBalance < 2000) && amount === 200 || amount === 500)
            {
                this.accountBalance = this.accountBalance - amount;
                console.log("Your balance after debiting the money is : " +this.accountBalance);
            }
            if((this.accountBalance > 2000) && amount=== 200 || amount === 500 || amount === 2000)
            {
                this.accountBalance = this.accountBalance - amount;
                console.log("Your balance after debiting the money is : " +this.accountBalance);
            }
        } 
        else
        {  
            console.log("Your odLimit for Current acocunt is less than 500");
        }  
    };
    this.getCurrentBalance = function()
    {
        console.log("Your current Account balance is : " + this.accountBalance);
    };
       
}

var obj1 = new Account(321345,"Rohit",462022;
console.log(obj1);
//var Savings = Object.create(Account); //inheriting the common properties
//var Current = Object.create(Account); //inheriting the common properties

var objSavings = new Savings("true",98765,"Kujur",462021); //creating Savings object
console.log(objSavings);
console.log(objSavings.withdraw(500));
console.log(objSavings.getCurrentBalance());

var objCurrent = new Current(550,9876543,"Appo",462000); //creating Current object
console.log(objCurrent);
console.log(objCurrent.withdraw(2000));
console.log(objCurrent.getCurrentBalance());