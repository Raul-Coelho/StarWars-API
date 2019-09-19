export class Vehicle{
    constructor(
        public name: string,
        public model: string,
        public manufacturer: string,
        public cost_in_credits: string,
        public length: string,
        public max_atmosphering_speed: string,
        public crew: string,
        public passengers: string,
        public cargo_capacity: string,
        public consumables:string,
        public vehicle_class:string,
        public pilots: string,
        public films: string[],
        public created: string,
        public edited: string,
        public url: string,
    ){}
}