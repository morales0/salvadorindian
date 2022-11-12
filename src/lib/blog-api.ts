import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { remark } from "remark";
import html from "remark-html";

const blogDir = path.join(process.cwd(), "src/content");

// Return the most recent blog post data and content
export const getLatestBlogPost = async () => {
  const fileName = `hello.md`;
  const filePath = path.join(blogDir, "hello.md");
  const fileContents = fs.readFileSync(filePath);

  const matterResult = matter(fileContents);
  const remarkResult = await remark().use(html).process(matterResult.content);
  const htmlContent = remarkResult.toString();

  const data = {
    id: fileName.replace(/\.md$/, ""),
    htmlContent,
    ...matterResult.data,
  };

  return data;
};
