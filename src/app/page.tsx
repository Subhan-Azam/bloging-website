// import { type Metadata } from "next";
// import { notFound } from "next/navigation";
// import { asImageSrc } from "@prismicio/client";
// import { SliceZone } from "@prismicio/react";

// import { createClient } from "@/prismicio";
// import { components } from "@/slices";

// export default async function Page() {
//   const client = createClient();
//   const page = await client.getSingle("blog").catch(() => notFound());

//   return <SliceZone slices={page.data.slices} components={components} />;
// }

// export async function generateMetadata(): Promise<Metadata> {
//   const client = createClient();
//   const page = await client.getSingle("blog").catch(() => notFound());

//   return {
//     title: page.data.meta_title,
//     description: page.data.meta_description,
//     openGraph: {
//       images: [{ url: asImageSrc(page.data.meta_image) ?? "" }],
//     },
//   };
// }

import React from "react";

const page = () => {
  return <div>Home</div>;
};

export default page;
