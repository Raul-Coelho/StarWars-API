export class Specie{
    constructor(
        public name: string,
        public classification: string,
        public designation: string,
        public average_height: string,
        public skin_colors: string,
        public hair_colors: string,
        public eye_colors: string[],
        public average_lifespan: string,
        public homeworld: string,
        public language:string,
        public people:string[],
        public films: string[],
        public created: string,
        public edited: string,
        public url: string,
    ){}
}