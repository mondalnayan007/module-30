
const marks = [50, 61, 47, 41];
const doSomething = marks.map(x => {
    const  square = x*x;
    const double = x*2;
    return [square,double]
});
// console.log(doSomething);

const friends = [
   {name:"sakib",age:35,district:"Dhaka"},
   {name:"tamim",age:45,district:"barishal"},
   {name:"sakib",age:55,district:"Gazipur"}
]

const age = friends.map(friend => friend.age)
console.log(age)

