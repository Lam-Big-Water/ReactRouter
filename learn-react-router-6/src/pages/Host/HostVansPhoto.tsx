import { useOutletContext } from "react-router-dom";
import { VansType } from "../Vans/Vans";
import styles from "./HostVansPhoto.module.css";

const HostVansPhoto = () => {
  const {currentVan} = useOutletContext<{currentVan: VansType}>();
  return (
    <img src={currentVan.imageUrl} className={styles.hostVanDetailImage} />
    )
}

export default HostVansPhoto