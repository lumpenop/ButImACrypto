import Header from './Header'
import LNB from './LNB'
import SideMenu from './SideMenu'

import styles from './layout.module.scss'

import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className={styles.dashboardContainer}>
      <Header />
      <main className={styles.main}>
        <LNB />
        <Outlet />
        <SideMenu />
      </main>
    </div>
  )
}

export default Layout
