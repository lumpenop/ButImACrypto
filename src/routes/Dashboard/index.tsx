import styles from './dashboard.module.scss'
import Chart from '../Chart'
import View from './View'
import ChartInfo from './ChartInfo'

const Dashboard = () => {
  return (
    <div className={styles.sectionView}>
      <div className={styles.sectionContainer}>
        <View />
        <ChartInfo />
        <Chart />
        <View />
      </div>
    </div>
  )
}

export default Dashboard
