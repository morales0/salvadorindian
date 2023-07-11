import Layout from "../../components/ui/layout/layout";

const mockPostData = [
  {
    title: "Pupusas",
    date: "10-23-2022",
    preview:
      "This is a preview for an amazing article on pupusas! this is mock data to test out layout and routing capabilities on Next.JS",
  },
  {
    title: "Samosas",
    date: "9-23-2022",
    preview: "This is a preview for an amazing article on samosas!",
  },
];

const Blog = () => {
  return (
    <div>
      <div className="my-6 mx-auto font-bold text-lg max-w-3xl px-8">
        Our blog
      </div>
      <div className="flex flex-col gap-5 px-8 mx-auto max-w-3xl">
        {mockPostData.map(({ title, date, preview }, i) => {
          return (
            <div key={`blog-post-${i}`}>
              <h2>{title}</h2>
              <span className="text-xs text-gray-500">{date}</span>
              <p>{preview}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
