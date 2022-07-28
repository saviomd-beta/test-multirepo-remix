import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import type { IMovieDetails } from "~/types";
import { fetchTmdb, tmdbApi } from "~/utils";

export async function loader() {
  const { moviesPopular } = tmdbApi.methods;
  const { results } = await fetchTmdb({ path: moviesPopular() });
  return json(
    results.map(({ id, overview, title }: IMovieDetails) => {
      return {
        id,
        overview,
        title,
      };
    })
  );
}

export default function Movies() {
  const movies = useLoaderData();
  return (
    <div>
      <h1>Movies</h1>
      <ul>
        {movies.map(({ id, overview, title }: IMovieDetails) => (
          <li key={id}>
            <h2>
              <a href={`/movie/${id}`}>{title}</a>
            </h2>
            <div>{overview}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
