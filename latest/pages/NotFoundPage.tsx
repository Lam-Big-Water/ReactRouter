import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
        <div>
            <h1>Something is wrong ...</h1>
            <Link to='/'>Back to Home</Link>
        </div>
  )
}

export default NotFoundPage