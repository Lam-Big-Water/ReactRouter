import { useOutletContext } from "react-router-dom";
import { VansType } from "../Vans/Vans";

const HostVansPhoto = () => {
  const {currentVan} = useOutletContext<{currentVan: VansType}>();
  return (
    <img src={currentVan.imageUrl} className="host-van-detail-image" />
    )
}

export default HostVansPhoto