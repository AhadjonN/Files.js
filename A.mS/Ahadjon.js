/*let a = [];
const len = parseInt(prompt());
for (let i = 0; i < len; i++) {
    a[i] = []
    for (let j = 0; j < len; j++) {
        if (i === j || i === len - j - 1) {
            a[i][j] = 1;
        } else if (j > i && j < len - i) {
            a[i][j] = 3;
        } else if (j > i) {
            a[i][j] = 4;
        } else if (i > j && j < len - i) {
            a[i][j] = 2;   
        } else if (i > j) {
            a[i][j] = 5;
        }
    
    }
}   
console.log(a);*/
/*----------------------------------------------------------------------------------*/
/*let arr = ["css", "php", "php", "css", "php", "css", "java", "script", "script", "html", "html"];
for (let i = 0; i < arr.length; i++) {
    const a = arr[i];
    for (let j = 1; j < arr.length; j++) {
        const b = arr[j];
        if (a === b) {
            arr.splice(j, 1);
    
        }
    }
}   
console.log(arr)*/
/*---------------------------------------------------------------------------------------*/
/*let v = []
let arr_1 = ['yanvar', 'fevral', 'mart', 'aprel', 'may']
let mesyats = arr_1.toString()
console.log(mesyats)


let a = []
let str = "";
let arr = ['yanvar', 'fevral', 'mart', 'aprel', 'may']
let f = arr.length
for (i = 0; i < f; i++) {
    let b = arr[i]
    str += (i === 0 ? '' : '*') + b
}
console.log(str)*/
/*---------------------------------------------------------------------------------------*/
/*let arr = ["css", "php", "php", "css", "java", "script", "script", "html", "html"]
for (let i = 1; i < arr.length; i++) {
    const a = arr[i];
    for (let j = 0; j < i; j++) {
        const b = arr[j];
        if (a === b) {

            console.log(a)
        }
    }
}*/
/*---------------------------------------------------------------------------------------*/
/*let a = []
for (i = 0; i <= 100; i++) {
    let b = (Math.floor(Math.random() * 100))
    if (!a.includes(b)) {
        a[i] = b;
    }
}
console.log(a);*/
/*---------------------------------------------------------------------------------------*/
/*let array1 = [5, 2, 1, -6, 8];
let array2 = [5, 2, 1, -9, 7];
let array3 = array1.concat(array2)
let arr = [...new Set(array3)]
console.log(arr);*/
/*---------------------------------------------------------------------------------------*/
/*function Person(first, last, age, gender, interests, hobbi) {
    this.name = {
        first: first,
        last: last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.hobbi = hobbi
    this.bio = function () {
        alert(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] +
            " " + 'and' + " " + this.interests[2] + ' ' + 'my live game' + " " + "is" + ' ' + this.hobbi[0] + ' ' + ' ' + this.hobbi[1] + '.');
    };
};
let person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing', 'shuter'], ['Dota', 'in CsGo']);
person1['age']
person1.interests[1]
person1.hobbi[1]
person1.bio()*/
/*Teacher.prototype.greeting = function () {
    var prefix;

    if (this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {
        prefix = 'Mr.';
    } else if (this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {
        prefix = 'Mrs.';
    } else {
        prefix = 'Mx.';
    }

    alert('Hello. My name is ' + prefix + ' ' + this.name.last + ', and I teach ' + this.subject + '.');*/
};