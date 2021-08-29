export class User {
    constructor(
        public name:string,
        public followers:number,
        public following:number,
        public public_repos:number,
        public url:string,
        public avatar_url:string,
        public login:string){

    }
}