import { useState, useEffect } from "react";
import { DataType } from "./dataType";
import { useParams, Link } from "react-router-dom";


const Item = () => {
  const [posts, setPosts] = useState<DataType[]>([]);

  const params = useParams();
  console.log(params.id);

  useEffect(() => {
    fetch(`https://vercel-test-five-olive.vercel.app/api/notes/`)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, [params.id]);
  return (
    <div>
        <ul>
            {posts.map((item) => <Link key={item.id} to={`/items/${item.id}`}><h1>{item.content}</h1></Link>)}
        </ul>
    </div>
  );
};

export default Item;
