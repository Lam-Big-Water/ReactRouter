import {NavLink, Link, Outlet} from "react-router-dom";

const HostVansDetail = () => {
  return (
    <div>
      <Link to='..' relative="path">Back to all vans</Link>
      <nav>
        <NavLink end to='.'>Description</NavLink>
        <NavLink to='price'>Price</NavLink>
        <NavLink to='photos'>Photos</NavLink>
      </nav>
      <Outlet/>
    </div>
  )
}

export default HostVansDetail