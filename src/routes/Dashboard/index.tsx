import styles from './dashboard.module.scss'
import Chart from './Chart'
import Billboard from './Billboard'
import ChartInfo from './Chart/ChartInfo'

const Dashboard = () => {
  return (
    <div className={styles.sectionView}>
      <div className={styles.sectionContainer}>
        <Billboard />
        <ChartInfo />
        <Chart />
      </div>
    </div>
  )
}

export default Dashboard
