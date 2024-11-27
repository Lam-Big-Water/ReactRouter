import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import { VansType } from "../Vans/Vans";


const HostVans = () => {

  const [vans, setVans] = useState<VansType[]>([]);

  useEffect(() => {
    fetch(`http://localhost:8000/vans`)
      .then((res) => res.json())
      .then((data) => setVans(data));
  }, [])

  const vanElements = vans.map((van) => (
    <li key={van.id}>
      <Link to={van.id}>
        <img src={van.imageUrl} alt={van.name} />
        <div>
          <h3>{van.name}</h3>
          <p>{van.price}</p>
        </div>
      </Link>
    </li>
  ))

  return (
    <div>
      {vanElements}
    </div>
  )
}

export default HostVans