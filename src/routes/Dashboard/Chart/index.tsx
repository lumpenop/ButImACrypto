import styles from './chart.module.scss'
import CyrptoChart from './CryptoChart'

const Chart = () => {
  return (
    <div className={styles.chartSection}>
      <CyrptoChart />
    </div>
  )
}

export default Chart
