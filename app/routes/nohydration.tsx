import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const handle = { noHydration: true };

export async function loader() {
  return json({
    title: "no hydration",
    description: "page without remix hydration but with console.log script",
  });
}

export default function NoHydration() {
  const data = useLoaderData();

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <script
        dangerouslySetInnerHTML={{
          __html: `
          console.log('client js without hydration');
        `,
        }}
      />
    </div>
  );
}
