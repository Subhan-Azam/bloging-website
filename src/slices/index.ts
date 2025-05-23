import dynamic from "next/dynamic";

export const components = {
  blog_cards: dynamic(() => import("./BlogCards")),
  blog_hero_section: dynamic(() => import("./BlogHeroSection")),
  blog_herosection: dynamic(() => import("./HeroSection")),
  image_block: dynamic(() => import("./ImageBlock")),
  text_block: dynamic(() => import("./TextBlock")),
};
