import { useOutletContext } from "react-router-dom";
import { VansType } from "../Vans/Vans";

const HostVansInfo = () => {
  const  {currentVan}  = useOutletContext<{currentVan: VansType}>();
  return (
    <>
      {currentVan && <section className="hostVanDetailInfo">
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
    </section>}
    </>
  );
};

export default HostVansInfo;
