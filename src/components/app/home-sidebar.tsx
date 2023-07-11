import BlogPostCard, { BlogPostProps } from "./blogpost-card"
import styles from '@styles/Home.module.css'

type HomeSidebarProps = {
  recentBlogs: BlogPostProps[]
}

const HomeSidebar = ({ recentBlogs }: HomeSidebarProps) => {
  return (
    <aside className={`${styles.home_aside}`}>
      <div>
        <h1>Recent Blogs</h1>
        <hr className="border-t-2 mb-3 border-gray-200" />
        <div className="flex flex-wrap gap-4">
          {recentBlogs.map((post, i) => (
            <BlogPostCard
              key={`index-post-card-${i}`}
              {...post}
            />
          ))}
        </div>
      </div>
    </aside>
  )
}

export default HomeSidebar