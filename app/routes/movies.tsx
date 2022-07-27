import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export async function loader() {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=6f875d4fba2e999f480afa6275a08f75"
  );
  const { results } = await res.json();
  return json(
    results.map(({ id, overview, title }) => {
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
        {movies.map(({ id, overview, title }) => (
          <li key={id}>
            <h2>{title}</h2>
            <div>{overview}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
