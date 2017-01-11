/* * * ./app/Comments/Model/comment.ts * * */
export class Comment {
    constructor(
        public id: Date, 
        public author: string, 
        public text:string
        ){}
}