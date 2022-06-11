import Header from './Header'
import LNB from './LNB'
import SideMenu from './SideMenu'

import styles from './layout.module.scss'
import { ReactNode } from 'react'

import { Outlet } from 'react-router-dom'

interface Props {
  children: ReactNode
}

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
