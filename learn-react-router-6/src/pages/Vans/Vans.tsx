import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
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
  const [searchParams, setSearchParams] = useSearchParams();
  const [vans, setVans] = useState<VansType[]>([]);

  const typeFilter = searchParams.get("type");

  useEffect(() => {
    fetch(`http://localhost:8000/vans`)
      .then((res) => res.json())
      .then((data) => setVans(data));
  }, []);

  const displayedVans = typeFilter
    ? vans.filter(van => van.type === typeFilter)
    : vans;


  const vanElements = displayedVans.map(van => (
    <div key={van.id} className={styles.vanTitle}>
      <Link to={van.id} state={{search: `?${searchParams.toString()}`, type: typeFilter}}>
        <img src={van.imageUrl} alt={van.name} />
        <div className={styles.vanInfo}>
          <h3>{van.name}</h3>
          <p>${van.price}<span>/day</span></p>
        </div>
        <i className={`van-type ${van.type}`}>{van.type}</i>
      </Link>
    </div>
  ))

  function handleFilterChange (key: string, value: string | null) {
    setSearchParams(prevParams => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value)
      }
      console.log(prevParams.toString())
      return prevParams
    })
  }

  return (
    <div className={styles.vanListContainer}>
      <h1>Explore our van options</h1>
      <div className="vanListFilterButtons">
        <button className="van-type" onClick={() => handleFilterChange("type", "simple")}>
          Simple
        </button>
        <button className="van-type" onClick={() => handleFilterChange("type", "luxury")}>
          Luxury
        </button>
        <button className="van-type" onClick={() => handleFilterChange("type", "rugged")}>
          Rugged
        </button>
        <button className="van-type" onClick={() => handleFilterChange("type", null)}>
          Clear filter
        </button>
      </div>
      <div className={styles.vanList}>
        {vanElements}
      </div>
    </div>
  );
};

export default Vans;
