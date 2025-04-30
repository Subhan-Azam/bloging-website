import { createClient } from "@/prismicio";
import React from "react";
import NavClient from "./Navbar";

export default async function Navbar() {
  const client = createClient();
  const navbar = await client.getSingle("navbar");

  return <NavClient navbar={navbar} />;
}
