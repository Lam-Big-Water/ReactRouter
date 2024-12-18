import { useOutletContext } from "react-router-dom";
import { VansType } from "../Vans/Vans";
import styles from "./HostVansInfo.module.css"

const HostVansInfo = () => {
  const  {currentVan}  = useOutletContext<{currentVan: VansType}>();
  return (
    <>
     <section className={styles.hostVanDetailInfo}>
      <h4>
        Name: <span>{currentVan.name}</span>
      </h4>
      <h4>
        Category: <span>{currentVan.type}</span>
      </h4>
      <h4>
        Description: <span>{currentVan.description}</span>
      </h4>
      <h4>
        Visibility: <span>Public</span>
      </h4>
    </section>
    </>
  );
};

export default HostVansInfo;
