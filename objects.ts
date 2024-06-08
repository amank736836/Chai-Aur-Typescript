// const User = {
//     name: "Aman",
//     email: "aman@mail.com",
//     isActive: true
// }

// function createUser({name:string,isPaid:boolean}){
    // console.log(`${name} has email ${email} and is ${isPaid ? "active" : "inactive"}`);
// }

// let newUser = {name:"Aman",isPaid:false,email:"hah.com"};

// createUser({name:"Aman",isPaid:false,email:"hah.com"});
// createUser(newUser);

// function createCourse():{name:string,price:number}{
//     return {name:"React",price:399};
// }

// type User = {
//     name: string,
//     email: string,
//     isActive: boolean
// }

// type Mystring = string;

// function createUser(user:User) : User{
//     console.log(`${user.name} has email ${user.email} and is ${user.isActive ? "active" : "inactive"}`);
//     return {name:user.name+"dds",email:"",isActive:true};
// }

// createUser({name:"Aman",email:"",isActive:true});

// console.log(createUser({name:"Aman",email:"",isActive:true}));

type User = {
    readonly _id:string
    name:string,
    email:string,
    isActive:boolean
    creditcardDetails?:number
}

let myUser:User = {
    _id:"123",
    name:"Aman",
    email:"a@mail.com",
    isActive:true
}

type cardNumber = {
    cardnumber : string
}

type cardDate = {
    cardDate : string
}

type cardDetails = cardNumber & cardDate & {
    cvv:number
};


myUser.email = "h@mail.com";
// myUser._id = "asa";


// function createUser(u:User){

// }