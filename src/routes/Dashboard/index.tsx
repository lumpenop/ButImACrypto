import styles from './dashboard.module.scss'
import LNB from './LNB'
import SideMenu from './SideMenu'
import Chart from '../Chart'
import View from './View'
import ChartInfo from './ChartInfo'

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <main className={styles.main}>
        <LNB />
        <div className={styles.sectionView}>
          <div className={styles.sectionContainer}>
            <View />
            <ChartInfo />
            <Chart />
            <View />
          </div>
        </div>
        <SideMenu />
      </main>
    </div>
  )
}

export default Dashboard
