import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { unified } from "unified";
import html from "remark-html";
import remarkParse from "remark-parse";

/* const blogDir = path.join(process.cwd(), "src/content");

// Return the most recent blog post data and content
export const getLatestBlogPost = async () => {
  const fileName = `hello.md`;
  const filePath = path.join(blogDir, "welcome.md");
  const fileContents = fs.readFileSync(filePath);

  const matterResult = matter(fileContents);
  const remarkResult = await unified().use(remarkParse).use(html).process(matterResult.content);
  const htmlContent = remarkResult.toString();

  const data = {
    id: fileName.replace(/\.md$/, ""),
    htmlContent,
    ...matterResult.data,
  };

  return data;
}; */
