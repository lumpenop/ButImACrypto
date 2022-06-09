import styles from './chartInfo.module.scss'

import { useRecoil } from 'hooks/state'

import { coinListState } from 'store/creepto'

import { cx } from 'styles'

import BigNumber from 'bignumber.js'

const ChartInfo = () => {
  const [coinListData] = useRecoil(coinListState)

  const checkChange = (changeData: Number) => {
    if (changeData > 0) return styles.rises
    if (changeData < 0) return styles.fall
    return ''
  }

  if (!coinListData) return <div className={styles.chartInfo} />
  const { coinPrice, coinPercentChange24h, coinMarketCap, coinVolume24h } = coinListData
  const prevPrice = (Number(coinPrice) + Number(coinPrice * coinPercentChange24h)) / 100
  const floorPrevPrice = new BigNumber(prevPrice).toNumber().toFixed(2)
  return (
    <div className={styles.chartInfo}>
      <h4>{coinListData.name}</h4>
      <span className={cx(styles.coinPrice, checkChange(coinPercentChange24h))}>{coinPrice}</span>
      <span className={checkChange(coinPercentChange24h)}>{coinPercentChange24h}</span>
      <p>
        <span>24시간 거래량{coinVolume24h}</span>
        <span>전일가{floorPrevPrice}</span>
        <span className={checkChange(coinPercentChange24h)}>시총{coinMarketCap}</span>
      </p>
    </div>
  )
}

export default ChartInfo
