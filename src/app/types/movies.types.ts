export interface Movies {
    id: string,
    name: string,
    url: string,
    date: string,
    age:string,
    genre: string,
    time: string,
    rate: number,
    tagline: string,
    sinopse: string,
    creatorsOverview: Creators[]
};

export interface Creators {
    name: string,
    position: string
}