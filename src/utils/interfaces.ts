export interface INasaApiData {
    data: {
        title: string;
        url:  string;
        hdurl: string;
        date: Date
    }
}

export interface INasaImdbApiData {
    data: {
        poster_path:  string;
        original_title: string;
        imdb_id: string;
        status: string;
        overview: string;
        budget: number;
        revenue: number;
        vote_average: number
        release_date: Date;
        genres: Array<{name: string}>
    }
}