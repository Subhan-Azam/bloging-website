import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { asImageSrc } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Button from "../components/blogCard/Button";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("blog").catch(() => notFound());

  return (
    <>
      <div className="relative overflow-hidden bg-[#130D29]">
        <div className="absolute top-50 -right-40 w-96 h-56 bg-[#0964B1] rounded-full filter blur-[55px] opacity-80 -rotate-[35deg]"></div>

        <div className="relative z-10">
          <Navbar />

          <SliceZone slices={page.data.slices} components={components} />

          <div className="flex justify-center mt-[50px] mb-[69px]">
            <Button
              style="border border-[#01CFFF] text-[#01CFFF] rounded-[100px] w-[94px] h-[40px] font-[500] text-[11px] hover:bg-[#01CFFF] hover:text-black "
              title="View more"
            />
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("blog").catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
    openGraph: {
      images: [{ url: asImageSrc(page.data.meta_image) ?? "" }],
    },
  };
}
