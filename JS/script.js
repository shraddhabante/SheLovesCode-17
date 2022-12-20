
// task
// revise let & const & var diff
// arrow function & prev function diff
// create multiple, division, subtraction function with fat arrow
multiple = () => 10 * 4;
console.log(multiple());

subtract = () => 30 - 10;
console.log(subtract());

division = () => {
    return 40 / 4;
}
console.log(division());

// array helper functions: map, filter, find, some, reduce, every
// map
const strArr = ['black', 'black', 'yello', 'red', 'blue'];
const strMap = strArr.map((ele, i, str) => {
    return ele;
});
console.log(strMap);
// filter
const num1 = [34, 12, 56, 80, 90, 67];
const numFilter = num1.filter(e => e >= 70);
console.log(numFilter);
// find
const numFind = num1.find((e) => e > 70);
console.log(numFind);
// some
const numSome = num1.some((e) => e > 10);
console.log(numSome);
// reduce
const numReduce = num1.reduce((sub, num) => sub - num);
console.log(numReduce);
// every
const numEvery = num1.every((e) => e >= 80);
console.log(numEvery);

// task: use e6
// 1.check if all the property values(firstName) in an array of object is same or not

const empData =
    [
        {
            firstName: '',
            id: 1,
            age: 12
        }, {
            firstName: '',
            id: 2,
            age: 12
        }, {
            firstName: '',
            id: 3,
            age: 12
        },
    ];
const result = empData.filter((e) => {
    return e.firstName == ' ';
});
console.log(result);

// 2. get the value of the first element in an array that has value greater than 20
const maxNum = [34, 56, 10, 15, 78, 90];
const maxFind = maxNum.find(e => e > 20);
console.log(maxFind);


// 3. get the value of the first element in an array that has value less than 20
const minNum = [34, 50, 10, 15, 56];
const minFind = minNum.find(e => e < 20);
console.log(minFind);

// 4. filter data based on a id(property) in an array of objects: pick any random id value
const randomId = empData.filter((e) => e.id == 3);
console.log(randomId);

// 5. round off all the decimal numbers in an array and sum all the values [9.8, 9.7, 4.5, 3.4]
const numArr = [9.8, 9.7, 4.5, 3.4];
Math.round(numArr);
const reduceArr = numArr.reduce((total, num) => total + num);
console.log(reduceArr);

// 6.get all the person name based on age greater than and equal to 18, eligible to vote
const personData = [
    {
        firstName: 'joe',
        age: 24
    },
    {
        firstName: 'alina',
        age: 12
    },
    {
        firstName: 'alex',
        age: 20
    },
];
const voteResult = personData.filter((e) => {
    return e.age >= 18;
});
console.log(voteResult);

// 7. sum all the elements of an array [90, 89, 56, 45]
const sumArr = [90, 89, 56, 45];
const arrReduce = sumArr.reduce((add, num) => add + num);
console.log(arrReduce);

// 8. check element is odd or even in an array [90, 89, 56, 45]
const evenOdd = [90, 89, 56, 45];
const evenResult = evenOdd.filter((e) => {
    return e % 2 == 0;
});
console.log(evenResult);
const oddResult = evenOdd.filter((e) => {
    return e % 2 != 0;
});
console.log(oddResult);


// 9. sum of all the salaries and display final sum value
const empSalary = [
    {
        salary: 56000,
    },
    {
        salary: 90000
    }
];
const total = empSalary[0].salary + empSalary[1].salary
console.log(total);

// 10. concat all array elements ['red', 'pink', 'orange', 'red']: 'redpinkorangered'
const stringArr=['red', 'pink', 'orange', 'red'];
const strReduce=stringArr.reduce((concat,str)=>concat+str);
console.log(strReduce);

//task
//create a class Car: city(),specialFeature()
//name, brand, color, manufacture
class Car {
    constructor(name, brand, color, manufacture) {
        this.name = name;
        this.brand = brand;
        this.color = color;
        this.manufacture = manufacture;
    }
    city(c) {
        console.log(this.brand + " " + "is manufactured in " + c);
    }
    specialFeature(price, speed) {
        console.log(this.brand + " " + price + " " + speed);
    }
}
const firstCar = new Car("Tata-Motors", "Tata_Safari", "black", 1998);
console.log(firstCar);
firstCar.city("mumbai");
firstCar.specialFeature(200000, 50)

//create a class Book: type_of_book()
//no. of pages, type of pages, author
class Book{
    constructor(noPages,author,price){
        this.noPages=noPages;
        this.author=author;
        this.price=price
    }
    type_of_book(bookType){
        console.log(bookType);
    }
}
const bookOne=new Book(200,'Palmer',225);
console.log(bookOne);
bookOne.type_of_book("Historical fiction")

//create a class Animal: walk(), eat(), climb()
//gender, name, disease
class Animal {
    constructor(gender, name, disease) {
        this.gender = gender;
        this.name = name;
        this.disease = disease;
    }
    walk() {
        console.log("I can Walk");
    }
    eat() {
        console.log("I eat a food");
    }
    climb() {
        console.log("I can climb");
    }
}
const petAnimal = new Animal('M', 'Cat', 'vomating');
console.log(petAnimal);
petAnimal.walk();
petAnimal.eat();
petAnimal.climb();