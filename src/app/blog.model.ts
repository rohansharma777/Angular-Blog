
export class Blog{

    constructor(
        public title: string,
        public content: string,
        public date?: Date,
        public vote?: number
    ){

    }
    
}