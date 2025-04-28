import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ImageBlog`.
 */
export type ImageBlogProps = SliceComponentProps<Content.ImageBlogSlice>;

/**
 * Component for "ImageBlog" Slices.
 */
const ImageBlog: FC<ImageBlogProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for image_blog (variation: {slice.variation}) Slices
    </section>
  );
};

export default ImageBlog;
