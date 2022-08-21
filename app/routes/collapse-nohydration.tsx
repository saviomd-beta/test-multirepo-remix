import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import Collapse from "../components/Collapse";

export const handle = { noHydration: true };

export async function loader() {
  return json({
    title: "collapse components",
    description: "collapse components with remix hydration",
  });
}

export default function CollapseNoHydrationPage() {
  const data = useLoaderData();

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <Collapse>
        <div>conteudo 1</div>
      </Collapse>
      <Collapse>
        <div>conteudo 2</div>
      </Collapse>
    </div>
  );
}
