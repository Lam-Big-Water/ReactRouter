import { useParams, useNavigate } from "react-router-dom";
import { VansType } from "./Vans";
import { useEffect, useState } from "react";
import styles from "./Details.module.css";

const Details = () => {
  const param = useParams();
  const [detail, setDetail] = useState<VansType | null>(null);

  useEffect(() => {
    fetch(`http://localhost:8000/vans/${param.id}`)
      .then((res) => res.json())
      .then((data) => setDetail(data));
  }, [param.id]);

  const detailsElement = (
    <div className={styles.vanDetailContainer}>
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
