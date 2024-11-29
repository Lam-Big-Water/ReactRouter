import { Outlet } from "react-router-dom"
const Dashboard = () => {
  return (
    <>
      <h1>DashBoard</h1>
      <Outlet />
    </>
  )
}

export default Dashboard