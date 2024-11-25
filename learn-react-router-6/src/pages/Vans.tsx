import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export type VansType = {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  type: string;
};

const Vans = () => {
  const [vans, setVans] = useState<VansType[]>([]);

  useEffect(() => {
    fetch(`http://localhost:8000/vans`)
      .then((res) => res.json())
      .then((data) => setVans(data));
  }, []);

  return (
    <div>
      <ul>
        {vans.map((van) => (
          <li key={van.id}>
            <Link to={van.id}>
              <img src={van.imageUrl} alt={van.name} width={100} height={100} />
              <p>{van.name}</p>
              <p>{van.price}</p>
              <p>{van.description}</p>
              <p>{van.type}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Vans;
