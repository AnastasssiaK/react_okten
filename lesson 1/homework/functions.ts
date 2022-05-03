// 2) протипизировать функции:
//
// const user = {
//     name:"Max",
//     age:18,
//     gender:'male'
// }
//
// function sum(a,b){
//     return a+b
// }
// function showSum(a,b){
//     console.log(a + b);
// }
//
// function incAge(someUser, inc){
//     someUser.age+=inc
//     return someUser
// }
//
// console.log(sum(1, 2));
// showSum(2,3)
// incAge(user, 2)

type UserType = {name:string, age: number, gender: string};

  export  const user:UserType = {
        name:"Max",
        age:18,
        gender:'male',
    }

console.log(user);


type SumType = (a:number,b: number)=>number;
type ShowType = (a:number,b: number) => void;

export const sum: SumType = (a,b) => {
    return a+b
}

export const showSum: ShowType = (a,b) => {
    console.log(a + b);
}

export function incAge(someUser:UserType, inc:number){
    someUser.age+=inc
    return someUser
}

console.log(sum(1, 2));
showSum(2,3);
console.log(incAge(user, 2));



////////////////////////////////////////////////////////////////////////////////////////////
// 2) протипизировать функции:
// interface IUser {
//     name: string;
//     age: number;
//     gender: string
// }
//
// const user: IUser = {
//     name: "Max",
//     age: 18,
//     gender: 'male'
// }
//
// const sum = (a: number, b: number): number => a + b;
//
// const showSum = (a: number, b: number): void => {
//     console.log(a + b);
// };
//
// const incAge = (someUser: IUser, inc: number): IUser => {
//     someUser.age += inc
//     return someUser
// };
//
// console.log(sum(1, 2));
// showSum(2, 3)
// incAge(user, 2)
//

////////////////////////////////////////////////////

// type Name = 'Max' | 'Kira' | 'Karina' | 'Olha'
//
// interface IUser {
//     id?: number
//     name: Name
// }
//
// interface Iuser2 extends IUser {
//     age: number
// }
//
// const user: Required<Iuser2> = {name: 'Kira', id: null, age: 23}
//
// const str = 'sdfsdf'
//
// console.log(typeof str);
//
//
// class User{
//     constructor(public name:string, public age:number) {
//     }
//     getName():string{
//         return this.name
//     }
// }
//
// interface functional {
//     getAge:()=>number
// }
// class User2 extends User implements functional{
//
//     constructor(name: string, age: number) {
//         super(name, age);
//     }
//
//     getAge(): number {
//         return this.age;
//     }
// }