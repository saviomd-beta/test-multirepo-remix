import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <Link to="/collapse">collapse</Link>
        </li>
        <li>
          <a href="/collapse-nohydration">collapse with nohydration</a>
        </li>
        <li>
          <Link to="/movie-search">movie search</Link>
        </li>
        <li>
          <Link to="/movies">movies</Link>
        </li>
        <li>
          <a href="/nohydration">nohydration (anchor)</a>
        </li>
        <li>
          <Link to="/nohydration">nohydration (Link)</Link>
        </li>
        <li>
          <hr />
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
