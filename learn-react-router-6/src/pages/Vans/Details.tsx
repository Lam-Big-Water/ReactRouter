import { Link, useLocation, useLoaderData } from "react-router-dom";
import { getVans } from "../../fetch";
import styles from "./Details.module.css";


// confusing
export function loader({params}: any) {
  console.log(params)
  return getVans(params.id)
}

const Details = () => {
  const location = useLocation();
  const detail = useLoaderData();

  const search = location.state?.search || "";
  const type = location.state?.type || "all";

  const detailsElement = (
    
    <div className={styles.vanDetailContainer}>

      <Link 
        to={`..${search}`}
        relative="path"
        className="back-button"
      >
      &larr; <span>Back to {type} vans</span>
      </Link>

      {detail ? (
        <div className={styles.vanDetail}>
          <img src={detail.imageUrl} alt={detail.name} />
          <i className={`van-type ${detail.type}`}>
            {detail.type}
          </i>
          <h2>{detail.name}</h2>
          <p className={styles.vanPrice}><span>${detail.price}</span></p>
          <p>{detail.description}</p>
          <button className={styles.linkButton}>Rent this van</button>
        </div>
      ) : <h2>Loading...</h2>}
    </div>
  )

  return (
    <>
      {detailsElement}
    </>
  );
};

export default Details;
