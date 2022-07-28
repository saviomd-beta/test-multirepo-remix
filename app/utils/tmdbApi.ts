interface MovieDetailsParams {
  movieId: number;
}

const tmdbApi = {
  key: "6f875d4fba2e999f480afa6275a08f75",
  methods: {
    moviesDetails: ({ movieId }: MovieDetailsParams) => `movie/${movieId}`,
    moviesPopular: () => "movie/popular",
  },
  url: "https://api.themoviedb.org/3/",
};

export default tmdbApi;
