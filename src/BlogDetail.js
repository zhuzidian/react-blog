import { useHistory, useParams } from "react-router-dom"
import useFetch from "./useFetch"

export default function BlogDetail() {
  const { id } = useParams()
  const { data: blog, isLoading, error } = useFetch(`http://localhost:4000/blog/${id}`)
  const history = useHistory()

  const handleDelete = () => {
    fetch('http://localhost:4000/blog/' + id, {
      method: 'delete'
    }).then(() => {
      history.push('/')
    })
  }

  return (
    <div className="blog-detail">
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>{blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleDelete}>delete</button>
        </article>
      )}
    </div>
  )
}