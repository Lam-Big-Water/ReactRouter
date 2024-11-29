import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import { VansType } from "../Vans/Vans";
import styles from "./HostVans.module.css";


const HostVans = () => {

  const [vans, setVans] = useState<VansType[]>([]);

  useEffect(() => {
    fetch(`http://localhost:8000/vans`)
      .then((res) => res.json())
      .then((data) => setVans(data));
  }, [])

  const HostVans = vans.map(van => (
    <Link 
      to={van.id}
      key={van.id}
      className={styles.hostVanLinkWrapper}
    >
      <div className={styles.hostVanSingle} key={van.id}>
        <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
        <div className={styles.hostVanInfo}>
          <h3>{van.name}</h3>
          <p>${van.price}/day</p>
        </div>
      </div>
    </Link>
  ))

  return (
    <section>
      <h1 className={styles.hostVansTitle}>Your listed vans</h1>
      <div className={styles.hostVansList}>
        {
          vans.length > 0 ? (
            <section>
              {HostVans}
            </section>
          ) : (
            <h2>Loading...</h2>
          )
        }
      </div>
    </section>
  )
}

export default HostVans