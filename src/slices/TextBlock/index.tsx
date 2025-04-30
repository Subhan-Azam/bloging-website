import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";


export type TextBlockProps = SliceComponentProps<Content.TextBlockSlice>;

const TextBlock: FC<TextBlockProps> = ({ slice }) => {
  return (
    <section
      className="text-block"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="w-full max-w-[956px] mx-auto mb-[42px] px-5">
        <PrismicRichText field={slice.primary.text} />
      </div>
    </section>
  );
};

export default TextBlock;
