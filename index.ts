// class User{
//     public email: string;
//     private name: string;
//     private readonly city: string ="jaipur";
//     constructor(email:string,name:string){
//         this.email = email;
//         this.name = name;
//         this.city = "delhi";
//     }
// }

class User{

    protected _courseCount = 1;
    private readonly city: string ="jaipur";
    constructor(
        public email:string,
        public name:string
        // private userId:string
    )
    {
        this.email = email;
        this.name = name;
        this.city = "delhi";
    }
    private deleteToken(){
        console.log("Deleting token");
    }
    get getAppleEmail():string {
        return `apple${this.email}`
    }
    get courseCount():number {
        return this._courseCount
    }
    set courseCount(courseNum){
        if(courseNum <= 1){
            throw new Error("Course count should be greater than 1")
        }
        this._courseCount = courseNum;
    }
}

class SubUser extends User {
    isFamily: boolean = true;
    changeCourseCount(){
        this._courseCount = 4;
    }
}

const hitesh = new User("a@mail.com","hitesh");
