// import { useRouteError } from "react-router-dom";
import {Link} from "react-router-dom";
import styles from "./NotFound.module.css";

const NotFound = () => {
//   const error: unknown = useRouteError();
//   console.error(error);

  return (
    <div className={styles.notFoundContainer}>
      <h1>
        Sorry, the page you were looking for was not found.
        {/* {(error as Error)?.message || (error as { statusText?: string })?.statusText} */}
      </h1>
      <Link to="/" className="link-button">Return to Home</Link>
    </div>
  );
};

export default NotFound;
