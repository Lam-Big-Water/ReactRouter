import { useOutletContext } from "react-router-dom";
import { VansType } from "../Vans/Vans";

const HostVansPrice = () => {
  const {currentVan} = useOutletContext<{currentVan: VansType}>();
  return (
    <h3 className="host-van-price">${currentVan.price}<span>/day</span></h3>
  )
}

export default HostVansPrice