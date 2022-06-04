import Header from './Header'
import LNB from './LNB'
import SideMenu from './SideMenu'

import styles from './layout.module.scss'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className={styles.dashboardContainer}>
      <Header />
      <main className={styles.main}>
        <LNB />
        {children}
        <SideMenu />
      </main>
    </div>
  )
}

export default Layout
