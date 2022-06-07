import styles from './chart.module.scss'

import { VictoryChart, VictoryCandlestick, VictoryAxis } from 'victory'
import { getBitData } from 'services/apiCall'

import { useQuery } from 'react-query'

import { useEffect, useRef, useState } from 'react'

interface ChartSize {
  chartWidth: number | undefined
  chartHeight: number | undefined
}

interface Acc {
  x: Date
  open: number
  close: number
  high: number
  low: number
}
const prev = 0
const CyrptoChart = () => {
  const chartBoxRef = useRef<HTMLDivElement>(null)
  const [chartBoxSize, setChartBoxSize] = useState<ChartSize>({ chartWidth: 0, chartHeight: 0 })
  const { data, isLoading } = useQuery(
    ['bitData'],
    async () => {
      const result = await getBitData()
      return result
    },
    {
      cacheTime: 0,
      refetchOnWindowFocus: false,
    }
  )

  useEffect(() => {
    setChartSize()
    window.addEventListener('resize', setChartSize)
    return () => window.removeEventListener('resize', setChartSize)
  }, [])

  const setChartSize = () => {
    if (chartBoxRef === null) return
    const boxHeight = chartBoxRef.current?.offsetHeight
    const boxWidth = chartBoxRef.current?.offsetWidth
    console.log(boxWidth)
    const chartHeight = boxHeight && boxHeight * 1.2
    const chartWidth = boxWidth && boxWidth * 1.2
    const boxSize = {
      chartWidth,
      chartHeight,
    }
    setChartBoxSize(boxSize)
  }
  return (
    <div className={styles.chart} ref={chartBoxRef}>
      chart
      {!isLoading && (
        <VictoryChart
          width={chartBoxSize?.chartWidth}
          height={chartBoxSize?.chartHeight}
          domainPadding={{ x: 25 }}
          scale={{ x: 'time' }}
        >
          <VictoryAxis tickFormat={(t) => `${t.getDate()}/${t.getMonth()}`} />
          <VictoryAxis dependentAxis />
          <VictoryCandlestick
            candleColors={{ positive: 'blue', negative: '#c43a31' }}
            data={data}
            style={{ data: { stroke: ({ datum }) => (datum.close > datum.open ? 'blue' : '#c43a31') } }}
          />
        </VictoryChart>
      )}
    </div>
  )
}

export default CyrptoChart
