import { NavLink, Link, Outlet, useLoaderData } from "react-router-dom";
import styles from "./HostVansDetail.module.css";

import { getHostVans } from "../../fetch";
import { requireAuth } from "../../utils";

export async function loader({params}: any) {
  await requireAuth()
  return getHostVans(params.id);
}

const HostVansDetail = () => {
  const currentVan = useLoaderData();

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
