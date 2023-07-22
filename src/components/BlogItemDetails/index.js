import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'

class BlogItemDetails extends Component {
  state = {blogsDetails: {}, isLoading: true}

  componentDidMount() {
    this.getDetailedBlogsContent()
  }

  getDetailedBlogsContent = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedData = {
      id: data.id,
      title: data.title,
      topic: data.topic,
      author: data.author,
      content: data.content,
      avatarUrl: data.avatar_url,
      imageUrl: data.image_url,
    }
    this.setState({blogsDetails: updatedData, isLoading: false})
  }

  render() {
    const {blogsDetails, isLoading} = this.state
    const {id, imageUrl, avatarUrl, content, author, title} = blogsDetails

    const blogContent = (
      <div className="content-cont">
        <h1 className="blog-title">{title}</h1>
        <div className="avatar-cont-profile">
          <img src={avatarUrl} alt={`avatar${id}`} className="profile-design" />
          <p className="blogger">{author}</p>
        </div>
        <img src={imageUrl} alt={title} className="content-img" />
        <p className="content">{content}</p>
      </div>
    )

    const contentCont = (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          blogContent
        )}
      </div>
    )

    return contentCont
  }
}

export default BlogItemDetails
