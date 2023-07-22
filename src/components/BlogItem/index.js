import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {id, author, avatarUrl, imageUrl, title, topic} = blogDetails

  const listOfBlogs = (
    <Link to={`/blogs/${id}`} className="link-design">
      <li className="blog-list-cont">
        <img src={imageUrl} alt={`images${id}`} className="blog-post-img" />
        <div className="user-blog-cont">
          <p className="topic">{topic}</p>
          <h1 className="title">{title}</h1>
          <div className="avatar-cont">
            <img src={avatarUrl} alt={`avatar${id}`} className="avatar-img" />
            <p className="author-name">{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )

  return listOfBlogs
}

export default BlogItem
