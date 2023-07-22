import {Component} from 'react'
import Loader from 'react-loader-spinner'
import BlogItem from '../BlogItem/index'
import './index.css'

class BlogList extends Component {
  state = {blogData: [], isLoading: true}

  componentDidMount() {
    this.getBlogsListData()
  }

  getBlogsListData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const updatedData = data.map(eachBlog => ({
      id: eachBlog.id,
      author: eachBlog.author,
      topic: eachBlog.topic,
      title: eachBlog.title,
      avatarUrl: eachBlog.avatar_url,
      imageUrl: eachBlog.image_url,
    }))

    this.setState({blogData: updatedData, isLoading: false})
  }

  render() {
    const {isLoading, blogData} = this.state
    console.log(blogData)
    const element = (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <ul className="blog-list-set-cont">
            {blogData.map(eachBlog => (
              <BlogItem key={eachBlog.id} blogDetails={eachBlog} />
            ))}
          </ul>
        )}
      </div>
    )

    return element
  }
}

export default BlogList
