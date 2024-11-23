import { useState } from "react";
import { NavLink, Routes, Route, Outlet, useParams, useNavigate, useSearchParams } from "react-router-dom";
import Bookshelf from "./Bookshelf";

type UsersType = {
    id: string;
    fullName: string;
};

const App = () => {

    const [users, setUsers] = useState([
        {id: "1", fullName: "Robin"},
        {id: "2", fullName: "Sarah"},
    ]);

    const navigate = useNavigate();

    const handleRemove = (id: string | undefined) => {
        setUsers(users.filter((user) => user.id !== id));

        navigate('/users');
    };

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="users" element={<Users users={users}/>}>
                <Route path=":userId" element={<User onRemove={handleRemove}/>} />
            </Route>
            <Route path="bookshelf" element={<Bookshelf />}/>
            <Route path="*" element={<NoMatch />}/>
        </Route>
      </Routes>
    </>
  );
};

const Layout = () => {
  const style = ({ isActive }: {isActive: boolean}) => ({
    fontWeight: isActive ? "bold" : "normal",
  });

  return (
    <>
      <h1>React Router</h1>

      <nav
        style={{
          display: "flex",
          gap: "1rem",
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <NavLink to="/home" style={style}>
          Home
        </NavLink>
        <NavLink to="/users" style={style}>
          Users
        </NavLink>
        <NavLink to="/bookshelf" style={style}>
          Bookshelf
        </NavLink>
      </nav>

      <main style={{padding: "1rem 0", color: "orangered"}}>
        <Outlet />
      </main>
    </>
  );
};

const Home = () => {
  return <div>Home</div>;
};

type UsersProps = {
    users: UsersType[];
};

const Users = ({users}: UsersProps) => {
    const [searchParams, setSearchParams] = useSearchParams();
  return (
        <div>
            <h2>Users</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <NavLink to={user.id}>
                            {user.fullName}
                        </NavLink>
                    </li>
                ))}
            </ul>

            <Outlet />
        </div>
  )
};

type UserProps = {
    onRemove: (id: string | undefined) => void;
}

const User = ({onRemove}: UserProps) => {
    const {userId} = useParams();

    return (
        <>
            <h2>User: {userId}</h2>
            <button onClick={() => onRemove(userId)}>Remove</button>
            <br />
            <NavLink to="/users">Back to Users</NavLink>
        </>
    )
}

const NoMatch = () => {
    return (<p>There's nothing here: 404!</p>)
}
export default App;
