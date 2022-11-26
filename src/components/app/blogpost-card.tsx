export type BlogPostProps = {
  title: string,
  date: string,
  preview: string
}

const BlogPostCard = ({ title, date, preview }: BlogPostProps) => {
  return (
    <div className={`
      cursor-pointer
    `}>
      <h2 className="font-bold text-lg">{title}</h2>
      <span className="text-xs text-gray-500">{date}</span>
      <p>{preview}</p>
    </div>
  )
}

export default BlogPostCard