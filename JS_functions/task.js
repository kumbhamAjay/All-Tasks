function arithmetic(a,b){
    console.log(a+b);
    console.log(a-b);
    console.log(a*b);
    console.log(a/b);
}
arithmetic(4,3);


function square(x){
    return x*x;
}
console.log("Square of given number is- "+square(6));


function maxOfTwo(a,b){
    var l=a>b?a:b;
    return l;
}
console.log(maxOfTwo(6,8));

function interest(p,t,r){
    let interest=p*t*r/100;
    return interest;
}
console.log(interest(1000,12,2));