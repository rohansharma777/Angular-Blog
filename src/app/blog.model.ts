
export class Blog{

    constructor(
        public title: string,
        public content: string,
        public date?: Date,
        public votes?: number
    ){
           
    }
    
    like(){
        this.votes += 1;
    }
    
    dislike(){
        this.votes -= 1
        if(this.votes<0) this.votes=0;
    }

}