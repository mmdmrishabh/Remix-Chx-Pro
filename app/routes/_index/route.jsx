import { json, redirect } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";

import { login } from "../../shopify.server";

import indexStyles from "./style.css";

export const links = () => [{ rel: "stylesheet", href: indexStyles }];

export default function App() {
  const { showForm } = useLoaderData();

  return (
    <div className="index">
      <a href="/app"></a>
    </div>
  );
}
