import { Link, Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='profiles'>profiles</Link></li>
            </ul>

            <Outlet />
        </div>
    )
}
export default Root