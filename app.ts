export * from './lesson 1/homework';
export * from './app2'

// // const show = (a: number, b: number): number | string => {
// //     return {}
// // }
//
//
// // const user = {name: 'Max', age: 15}
//
//
// // const showUser = (user: { name: string, age: number }): void => {
// //     user.
// // }
// // const user: { name: string, age: number } = {age: 45, name: 'Max'}
// //
// // console.log(user);
//
//
// // const show = (a: number, b: number): { name: string, age: number}  => {
// //     return {}
// // }
// type UniqId = number
//
// interface IUser<Type, G> { // T by default
//     id?: UniqId,
//     name: string,
//     age: number
//     // address: IAddress
//     arr: Type[]
//     arr2: G[]
// }
//
// interface IAddress {
//     street: string,
//     house: number
// }
//
//
// // const user: Partial<IUser> = {}
// // const user: IUser<string, number> = {name: 'Max', age: 15, arr: ['1', '2', '3'], arr2: [2]}
// //
// // console.log(user);
// //
// // type StateType = [string, (a: number, b: number) => number]
// //
// // const useState: StateType = ['text', (a, b) => {
// //     return a + b
// // }]
// //
// // let [first, second] = useState;
// //
// // console.log(first);
// // console.log(second(3, 4));
// //
// // interface IMyArray{
// //     arr:[number, string, IUser<number, string>]
// // }
// //
// // const my:IMyArray = {arr:[4,'ee',{name:'dddd', age:1, arr:[1,2,3], arr2:['s']}, 333]}
//
//
// // class User {
// //     constructor(private readonly id: number, protected name: string, public age: number) {
// //         this.id = id;
// //         this.name = name;
// //         this.age = age;
// //     }
// //
// //     getId(): number {
// //         return this.id
// //     }
// //
// //     setId(newId: number): void {
// //         this.id = newId
// //     }
// // }
// //
// // const user: User = {name: 'Max', age: 5}
// //
// //
// // let user1 = new User(13, 'Kira', 15);
// // user1.getId()
// // user1.
//
//
// interface IShapeActions {
//     area: () => number;
//     perimeter: () => number;
// }
//
// interface Issss{
//     hhh:(a:string, b:string)=>void;
// }
//
// class Triangle implements IShapeActions, Issss {
//     constructor(public a: number, private b: number, private c: number) {
//     }
//
//     hhh(a: string, b: string){
//         console.log(a+b)
//     }
//
//     area(): number {
//         return this.a * this.b * this.c
//     }
//
//     perimeter(): number {
//         return this.a + this.b + this.c
//     }
//
//
// }
//
// class Rectangle implements IShapeActions {
//     constructor(private a: number, private b: number) {
//     }
//
//     area(): number {
//         return this.a * this.b
//     }
//
//     perimeter(): number {
//         return this.a + this.b
//     }
//
//
// }
//
// const shapes: IShapeActions[] = [new Triangle(1, 2, 3), new Rectangle(2, 7), new Triangle(1, 5, 8)]
//
// for (let shape of shapes) {
//     console.log(shape.area());
//     console.log(shape.perimeter());
// }
// let rectangle = new Rectangle(2, 7);
// rectangle.

