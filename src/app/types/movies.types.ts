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

/* API */

export interface ApiResponse {
  page: number;
  results: any[];
  total_pages: number;
  total_results: number;
}

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genres: Genre[];
  id: number;
  media_type: string;
  original_language: string;
  original_title?: string;
  first_air_date?: string;
  original_name?: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date?: string;
  runtime: number;
  tagline?: string;
  title?: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface Genre {
  id: number;
  name: string;
}

