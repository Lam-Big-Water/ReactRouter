import { useEffect, useState } from "react";
import { NavLink, Link, Outlet, useParams } from "react-router-dom";
import { VansType } from "../Vans/Vans";
import styles from "./HostVansDetail.module.css"

const HostVansDetail = () => {
  const { id } = useParams();
  const [currentVan, setCurrentVan] = useState<VansType | null>(null);

  useEffect(() => {
    fetch(`http://localhost:8000/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setCurrentVan(data));
  }, []);

  if (!currentVan) {
    return <h1>Loading...</h1>;
  }

  return (
    <section>
      <Link to=".." relative="path" className="back-button">
        &larr; <span>Back to all vans</span>
      </Link>

      <div className={styles.hostVanDetailLayoutContainer}>
        <div className={styles.hostVanDetail}>
          <img src={currentVan.imageUrl} alt={currentVan.name} />
          <div className={styles.hostVanDetailInfoText}>
            <i className="van-type">{currentVan.type}</i>
            <h3>{currentVan.name}</h3>
            <h4>${currentVan.price}/day</h4>
          </div>
        </div>

        <nav className={styles.hostVanDetailNav}>
          <NavLink to="." end>
            Details
          </NavLink>
          <NavLink to="pricing">Pricing</NavLink>
          <NavLink to="photos">Photos</NavLink>
        </nav>
        <Outlet context={{currentVan}}/>
      </div>
    </section>
  );
};

export default HostVansDetail;
