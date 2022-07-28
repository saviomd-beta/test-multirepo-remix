import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const handle = { noHydration: true };

export async function loader() {
  return json({
    title: "title",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias debitis maiores, totam delectus, veniam pariatur ad repellat optio voluptates, nisi animi eligendi? Nam fuga explicabo dicta architecto quaerat est autem.",
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
