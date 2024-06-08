// let score:number | string | boolean = 33;
let score:number | string  = 33;

score = 44;

score = "55";

type User1 = {
    name : string,
    id:number
}

type Admin = {
    username:string,
    id:number
}

let hitesh:User1 | Admin = {
    name:"Aman",
    id:33
}

hitesh = {
    username:"ak",
    id:33
}

function getDbId(id:number | string){
    if(typeof id === "string"){
        id.toLowerCase();
    }
    //making some API calls
    console.log(`DB id is: ${id}`);
}

//array

const data:number[] = [1,2,3,4]
const data2:string[] = ["1","2","3","4"]
const data3:number[] | string[] | boolean[] = [1,2,3,4]
const data4:(number | string | boolean)[] = [1,2,3,"4",true]

let pi:3.14 = 3.14;

let seatAllotment:"aisle" | "middle" | "window";

seatAllotment = "aisle";
seatAllotment = "middle";
seatAllotment = "window";
// seatAllotment = "crew";





