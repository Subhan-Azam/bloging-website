import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import BlogCard from "@/components/blogCard/BlogCard";

export type BlogCardsProps = SliceComponentProps<Content.BlogCardsSlice>;

const BlogCards: FC<BlogCardsProps> = ({ slice }) => {
  return (
    <>
      <div className="relative flex flex-wrap justify-center gap-[20px]">
        <div className="absolute top-70 left-7 w-[500px] h-[150px] bg-[#0964B1] rounded-full filter blur-[55px] opacity-80 rotate-[35deg]  -z-10"></div>
        {slice.primary.cards.map((card, index) => (
          <BlogCard key={index} data={card} />
        ))}
        <div className="absolute bottom-20 -right-5 w-[500px] h-[150px] bg-[#0964B1] rounded-full filter blur-[30px] opacity-80 rotate-[35deg] -z-10"></div>
      </div>
    </>
  );
};

export default BlogCards;
