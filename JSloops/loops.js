// 1. Write a JavaScript program that displays the largest integer among two integers.
// Click me to see the solution
var a=4;
var b=6;
if(a>b){
    console.log(a);
}
else{
    console.log(b);
}

// 2. Write a JavaScript conditional statement to find the sign of the product of three numbers. Display an alert box with the specified sign.
// Sample numbers : 3, -7, 2
// Output : The sign is -
// Click me to see the solution
var x=1;
var y=-2;
var z=3;
var k=x*y*z;
if(k<0){
    console.log("The sigh is -");
}


// 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the results.
// Sample numbers : 0, -1, 4
function sort(x,y,z){
    if (x > y && x > z) {
        if (y > z) {
            console.log(x + ", " + y + ", " + z);
        } 
        else {
            console.log(x + ", " + z + ", " + y);
        }
    } 
    else if (y > x && y > z) {
        if (x > z) {
            console.log(y + ", " + x + ", " + z);
        } 
        else {
            console.log(y + ", " + z + ", " + x);
        }
    } 
    else if (z > x && z > y) {
        if (x > y) {
            console.log(z + ", " + x + ", " + y);
        } 
        else {
            console.log(z + ", " + y + ", " + x);
        }
    } 
}
sort(0,-1,4);
// Output : 4, 0, -1
// Click me to see the solution

// 4. Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the results.
// Sample numbers : -5, -2, -6, 0, -1
function large(a,b,c,d,f){
    if (a > b && a > c && a > d && a > f) {
        console.log(a);
    } 
    else if (b > a && b > c && b > d && b > f) {
        console.log(b);
    } 
    else if (c > a && c > b && c > d && c > f) {
        console.log(c);
    } 
    else if (d > a && d > c && d > b && d > f) {
        console.log(d);
    } 
    else {
        console.log(f);
    } 
}
large(-5, -2, -6, 0, -1);
// Output : 0


// 5. Write a JavaScript for loop that iterates from 0 to 15. For each iteration, it checks if the current number is odd or even, and displays a message on the screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"
function evenOdd(n){
    for(i=0;i<=n;i++){
        if(i%2==0){
            console.log(`${i} is even`);
        }
        else{
            console.log(`${i} is odd`);
        }
    }
}
evenOdd(15);

// 6. Write a JavaScript program that computes the average marks of the following students. Then, this average is used to determine the corresponding grade
function Avg(a,b,c,d,e){
    var sum=a+b+c+d+e;
    var avg=sum/5;
    
    if (avg < 60) {
        console.log("Grade: F");
    } 
    else if (avg < 70) {
        console.log("Grade: D");
    } 
    else if (avg < 80) {
        console.log("Grade: C");
    } 
    else if (avg < 90) {
        console.log("Grade: B");
    } 
    else if (avg <= 100) {
        console.log("Grade: A");
    } 
    
}
Avg(80,77,88,90,79);

//Write a JavaScript program that iterates integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for multiples of five print "Buzz". For numbers multiples of both three and five print
for(i=1;i<=100;i++){
    if(i%3==0 &&i%5==0){
        console.log( i+" "+"FizzBuzz");
    }
    else if(i%3==0){
        console.log(i+" "+"Fizz");

    }
    else if(i%5==0){
        console.log(i+" "+"Buzz");
        
    }
}
//





