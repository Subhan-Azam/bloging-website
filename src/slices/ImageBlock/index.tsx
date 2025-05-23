import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Image from "next/image";

export type ImageBlockProps = SliceComponentProps<Content.ImageBlockSlice>;

const ImageBlock: FC<ImageBlockProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="mx-auto flex flex-col items-center justify-center my-[50px] px-5"
    >
      <div className="w-full max-w-[956px] aspect-[956/466] relative">
        <Image
          className="object-cover w-full h-full"
          src={slice.primary.image?.url || ""}
          alt={slice.primary.image?.alt || "Blog image"}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 956px"
        />
      </div>
    </section>
  );
};

export default ImageBlock;
