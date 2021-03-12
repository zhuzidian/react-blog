import { useState } from "react"
import { useHistory } from 'react-router-dom'

export default function Create() {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [author, setAuthor] = useState('mario')
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()

    const blog = { title, body, author }

    fetch('http://localhost:4000/blog', {
      method: 'post',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(blog)
    }).then(() => {
      console.log('new blog added')
      history.push('/')
    })
  }

  return (
    <div className="create">
      <h2>Add a new Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Blog body</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />

        <label>Blog author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>

        <button>Add Blog</button>
      </form>
    </div>
  )
}