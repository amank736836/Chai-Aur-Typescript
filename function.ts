function addTwo(num:number):number{
    return num + 2;
    // return "kumar";
}

// console.log(addTwo(5));
// console.log(addTwo("5"));

function getUpper(val:string){
    return val.toUpperCase();
}

// console.log(getUpper("4"));

function signUpUser(name: string,email: string,isPaid: boolean = false){
    console.log(name,email,isPaid);
}

// signUpUser("aman","aman@mail.com",true);

// let loginUser = (name,email,isPaid) => {
let loginUser = (name:string,email:string,isPaid:boolean = true) => {
    console.log(name,email,isPaid);
}

// loginUser("aman","a@a.com");

let myValue = addTwo(5);

// console.log(myValue);

// function getValue(myVal:number):boolean{
//     if(myVal > 5){
//         return true;
//     }
//     return "200 OK";
// }

const getHello = (s:string):string => {
    return s;
}

// getHello("Hello");
// console.log(getHello("Hello"));

let heros = ["thor" , "spiderman" , "ironman"]
// let heros = [1 , 2 , 3]

// console.log(heros);

heros = heros.map((hero:string):string => {
    // return `hero is ${hero}`
    // return hero + 2;
    return hero + 2;
})

// console.log(heros);

function consoleError(errmsg:string):void{
    console.log(errmsg);
    // return 1;
}

function handleError(errmsg:string):never{
    // console.log(errmsg);
    throw new Error(errmsg);
    // return 1;
}

consoleError("ksdj");