import { NavLink, Outlet, useLoaderData } from "react-router-dom";

type PostsType = {
    id: number,
    title: string,
}

const Profiles = () => {
    const {posts}: any = useLoaderData();
  return (
    <div>
        <h1>Profiles</h1>
        <div>
            {posts.map((post: any)  => (
                <li key={post.id}>
                    <NavLink  to={`/profiles/${post.id}`}>
                    {post.title}
                    </NavLink>
                </li>
            ))}
        </div>
        <Outlet />
    </div>
  )
}

export default Profiles