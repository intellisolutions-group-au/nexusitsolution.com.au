import { blogs } from "@/data/blogs";
import BlogDetailClient from "./BlogDetailClient";

export function generateStaticParams() {
  return blogs.map((post) => ({
    slug: post.slug,
  }));
}

export default function Page() {
  return <BlogDetailClient />;
}
