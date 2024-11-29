import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Vans.module.css";

export type VansType = {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  type: string;
};

const Vans = () => {
  const [vans, setVans] = useState<VansType[]>([]);

  useEffect(() => {
    fetch(`http://localhost:8000/vans`)
      .then((res) => res.json())
      .then((data) => setVans(data));
  }, []);

  const vanElements = vans.map(van => (
    <div key={van.id} className={styles.vanTitle}>
      <Link to={`/vans/${van.id}`}>
        <img src={van.imageUrl} alt={van.name} />
        <div className={styles.vanInfo}>
          <h3>{van.name}</h3>
          <p>${van.price}<span>/day</span></p>
        </div>
        <i className={`van-type ${van.type}`}>{van.type}</i>
      </Link>
    </div>
  ))

  return (
    <div className={styles.vanListContainer}>
      <h1>Explore our van options</h1>
      <div className={styles.vanList}>
        {vanElements}
      </div>
    </div>
  );
};

export default Vans;
