import { useOutletContext } from "react-router-dom";
import { VansType } from "../Vans/Vans";
import styles from "./HostVansPrice.module.css";

const HostVansPrice = () => {
  const {currentVan} = useOutletContext<{currentVan: VansType}>();
  return (
    <h3 className={styles.hostVanPrice}>${currentVan.price}<span>/day</span></h3>
  )
}

export default HostVansPrice