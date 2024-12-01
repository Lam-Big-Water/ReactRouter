import { Link, useLoaderData } from "react-router-dom";
import styles from "./HostVans.module.css";
import { VansType } from "../Vans/Vans";


import { getHostVans } from "../../fetch";
import { requireAuth } from "../../utils";

export async function loader() {
  await requireAuth();
  return getHostVans();
}


const HostVans = () => {
  const vans = useLoaderData<VansType[]>();

  const hostVans = vans.map(van => (
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
              {hostVans}
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