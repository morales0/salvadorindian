import styles from "./blog.module.scss";

type BlogProps = {
  title: string,
  date: string,
  tags?: string[],
  htmlContent: string,
  className?: string
}

const Blog = ({ title, date, tags, htmlContent, className }: BlogProps) => {
  return (
    <div className={`${styles.blog} ${className}`}>
      <header>
        <h1>{title}</h1>
        <hr className="border-t-2 mb-3 border-gray-200" />
        <div>{date}</div>
        <div>
          <span>Tags:</span>
        </div>
      </header>
      <article
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </div>
  )
}

export default Blog