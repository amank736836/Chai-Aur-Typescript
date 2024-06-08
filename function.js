function addTwo(num) {
    return num + 2;
    // return "kumar";
}
// console.log(addTwo(5));
// console.log(addTwo("5"));
function getUpper(val) {
    return val.toUpperCase();
}
// console.log(getUpper("4"));
function signUpUser(name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    console.log(name, email, isPaid);
}
// signUpUser("aman","aman@mail.com",true);
// let loginUser = (name,email,isPaid) => {
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = true; }
    console.log(name, email, isPaid);
};
// loginUser("aman","a@a.com");
var myValue = addTwo(5);
// console.log(myValue);
// function getValue(myVal:number):boolean{
//     if(myVal > 5){
//         return true;
//     }
//     return "200 OK";
// }
var getHello = function (s) {
    return s;
};
// getHello("Hello");
// console.log(getHello("Hello"));
var heros = ["thor", "spiderman", "ironman"];
// let heros = [1 , 2 , 3]
// console.log(heros);
heros = heros.map(function (hero) {
    // return `hero is ${hero}`
    // return hero + 2;
    return hero + 2;
});
// console.log(heros);
function consoleError(errmsg) {
    console.log(errmsg);
}
consoleError("ksdj");
