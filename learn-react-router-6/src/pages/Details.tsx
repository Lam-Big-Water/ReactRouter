import { useParams, useNavigate } from "react-router-dom";
import { VansType } from "./Vans";
import { useEffect, useState } from "react";

const Details = () => {
  const param = useParams();
  const navigate = useNavigate();
  console.log(param);
  const [detail, setDetail] = useState<VansType | null>(null);

  useEffect(() => {
    fetch(`http://localhost:8000/vans/${param.id}`)
      .then((res) => res.json())
      .then((data) => setDetail(data));
  }, []);
  return (
    <>
      {detail ? (
        <li key={detail.id}>
          <img
            src={detail.imageUrl}
            alt={detail.name}
            width={100}
            height={100}
          />
          <p>{detail.name}</p>
          <p>{detail.price}</p>
          <p>{detail.description}</p>
          <p>{detail.type}</p>
          <button onClick={() => navigate(-1)}>Back</button>
        </li>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default Details;
