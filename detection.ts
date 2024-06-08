function detectType(val: number | string){
// function detectType(val: number | string | number[]){
    if(typeof val === 'string'){
        return val.toLowerCase();
    }
    return val + 3;
}

function provideId(id:string | null){
    if(!id){
        console.log('No id provided');
        return;
    }
    id.toLowerCase();
}

function printAll(strs : string | string[] | null){
    if(strs){
        if(typeof strs === 'string'){
            console.log(strs);
        }
        else{
            for(const str of strs){
                console.log(str);
            }
        }
    }
}

interface User {
    name:string,
    email:string,
}

interface Admin {
    name:string,
    email:string,
    isAdmin:boolean,
}

function isAdminAccount(account: User | Admin){
    if("isAdmin" in account){
        return account.isAdmin;
    }
}

// new Array();

function logValue(x:Date | string){
    if(x instanceof Date){
        console.log(x.toUTCString());
    }else{
        console.log(x.toUpperCase());
    }
}

type Fish = {swim:() => void}
type Bird = {fly:() => void}

function isFish(pet : Fish | Bird): pet is Fish{
    return (pet as Fish).swim !== undefined;
}

function getFood(pet:Fish | Bird){
    if(isFish(pet)){
        pet.swim();
        return 'Fish Food';
    }
    pet.fly();
    return 'Bird Food';
}

interface Circle{
    kind: "circle",
    radius:number,
}

interface Square{
    kind: "square",
    side:number,
}

interface Triangle{
    kind: "triangle",
    base:number,
    height:number,
}

interface Rectangle{
    kind: "rectangle",
    width:number,
    length:number,
}

type Shape = Circle | Square | Triangle | Rectangle;

function getTrueShape(shape:Shape){
    if(shape.kind === "circle"){
        return Math.PI * shape.radius ** 2;
    }
    // return shape.side * shape.side;
    if(shape.kind === "square"){
        return shape.side ** 2;
    }
    if(shape.kind === "triangle"){
        return 0.5 * shape.base * shape.height;
    }
    return shape.width * shape.length;
}

function getArea(shape:Shape){
    switch(shape.kind){
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side ** 2;
        case "triangle":
            return 0.5 * shape.base * shape.height;
        case "rectangle":
            return shape.width * shape.length;
        default:
            const _defaultforshape:never = shape;
            return _defaultforshape;
    }
}