interface User2 {
    readonly dbId:number
    email:string,
    userId:number,
    googleId?:string
    // startTrail: () => string
    startTrail():string
    getCoupon(couponname:string,value:number):number
}

interface User2 {
    githubToken:string
}

interface Admin extends User2{
    role:"admin" | "ta" | "learner"
}

let aman:Admin = {
    dbId:22,
    name:"Aman",
    email:"a@mail.com",
    userId:2211,
    role:"admin",
    githubToken:"aman",
    startTrail: () => {
        return "trail started";
        // return 1;
    },
    // getCoupon: () => {
    //     return 10;
    // },
    getCoupon: (name:"hitesh10" , off:12) => {
        return 10;
    },
    isAdmin: true
}

aman.email = "a@a.com";
// aman.dbId = 33;
