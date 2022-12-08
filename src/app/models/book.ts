export class Book{
    constructor(
        public id:number,
        public title: string,
        public autor: string,
        public imagen: string,
        public description: string,
        public price: number,
        public status: string,
        public createdAt: any,
        public updatedAt: any

    ){}
}