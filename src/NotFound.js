import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="not-found">
      <h2>sorry</h2>
      <p>ページが見つかりません</p>
      <Link to="/">Back to the homepage...</Link>
    </div>
  )
}