import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { DataType } from './dataType';


const Details = () => {
  const params = useParams();

  const [data, setData] = useState<DataType | null>(null);

  useEffect(() => {
    fetch(`https://vercel-test-five-olive.vercel.app/api/notes/${params.id}`)
    .then((res) => res.json())
    .then((data) => setData(data));
  }, [])

  return (
    <div>
        <h1>{data?.content}</h1>
        <h2>{data?.important && 'YES'}</h2>
    </div>
  )
}

export default Details