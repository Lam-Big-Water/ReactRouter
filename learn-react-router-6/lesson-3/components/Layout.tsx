import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

import styles from "./Layout.module.css"

const Layout = () => {
  return (
    <div className={styles.siteWrapper}>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
    </div>
  )
}

export default Layout