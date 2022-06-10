import styles from './chart.module.scss'

import { VictoryChart, VictoryCandlestick, VictoryAxis } from 'victory'
import { getBitData } from 'services/apiCall'

import { useQuery } from 'react-query'

import { useEffect, useRef, useState } from 'react'

import { Audio } from 'react-loader-spinner'

interface ChartSize {
  chartWidth: number | undefined
  chartHeight: number | undefined
}

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
      BTC/ETH
      {isLoading && (
        <div className={styles.spinnerBox}>
          <Audio width='50' height='50' color='#c8553d' aria-label='loading' />
        </div>
      )}
      {!isLoading && (
        <VictoryChart
          width={chartBoxSize?.chartWidth}
          height={chartBoxSize?.chartHeight}
          domainPadding={{ x: 25 }}
          scale={{ x: 'time' }}
        >
          <VictoryAxis tickFormat={(t) => `${t.getFullYear().toString().slice(-2)}/${t.getMonth()}/${t.getDate()}`} />
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
