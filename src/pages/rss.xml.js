import rss from "@astrojs/rss";
import siteConfig from "../site-config";
import { getCollection } from "astro:content";

export async function GET(context) {
  const blog = await getCollection("blog");

  const feed = await rss({
    title: siteConfig.title,
    description: siteConfig.description,
    site: context.site || siteConfig.site,
    stylesheet: "/rss/style.xsl",
    items: blog.map((post) => {
      return {
        ...post.data,
        link: `/blog/${post.id}/`,
        pubDate: post.data.pubDate,
        author: `${post.data.author}`,
      };
    }),
  });

  return new Response(feed.body, {
    headers: {
      "Content-Type": "application/xml",
      "X-Content-Type-Options": "nosniff",
      "Content-Disposition": "inline",
    },
  });
}
