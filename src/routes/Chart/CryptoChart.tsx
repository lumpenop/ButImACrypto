import styles from './chart.module.scss'

import { VictoryChart, VictoryBoxPlot } from 'victory'

const data = [
  { x: 1, y: [1, 2, 3, 5] },
  { x: 2, y: [3, 2, 8, 10] },
  { x: 3, y: [2, 8, 6, 5] },
  { x: 4, y: [1, 3, 2, 9] },
]

const CyrptoChart = () => {
  return (
    <div className={styles.chart}>
      chart
      <VictoryChart domainPadding={20}>
        <VictoryBoxPlot boxWidth={10} data={data} whiskerWidth={0} style={{ median: { stroke: 'white' } }} />
      </VictoryChart>
    </div>
  )
}

export default CyrptoChart
