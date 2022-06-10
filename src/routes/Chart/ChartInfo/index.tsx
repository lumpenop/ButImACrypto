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
  const { coinPrice, coinPercentChange24h, coinMarketCap, coinVolume24h, marketCapChange24h } = coinListData
  const prevPrice = Number(coinPrice) + Number(coinPrice * (coinPercentChange24h / 100))
  const floorPrevPrice = new BigNumber(prevPrice).toNumber().toFixed(2)
  const marketCapGap = coinMarketCap - coinMarketCap * (marketCapChange24h / 100)

  return (
    <section className={styles.chartInfo}>
      <div className={styles.infoContainer}>
        <h1 className={styles.coinName}>{coinListData.name}</h1>
        <span className={cx(styles.coinPrice, checkChange(coinPercentChange24h))}>{coinPrice}</span>
        <span className={checkChange(coinPercentChange24h)}>{coinPercentChange24h}%</span>
        <p className={styles.detailInfo}>
          <div>
            <span>거래량</span> {(coinVolume24h / 1000000000000).toFixed(2)}T
          </div>
          <div>
            <span>전일가</span> {floorPrevPrice}
          </div>
          <div className={checkChange(marketCapGap)}>
            <span>시총</span> {coinMarketCap}
          </div>
        </p>
      </div>
    </section>
  )
}

export default ChartInfo
