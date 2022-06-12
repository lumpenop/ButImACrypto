import styles from './sideMenu.module.scss'
import { IRefinedData } from 'types/cryptoType'
import { cx } from 'styles'
import React from 'react'

import { selectedCoinState } from 'store/creepto'

import { useRecoil } from 'hooks/state'

interface Props {
  coinList: IRefinedData[] | undefined
}
const CoinListElement = ({ coinList }: Props) => {
  const [, setSelectedCoin] = useRecoil(selectedCoinState)

  const coinListClicked = (idx: number) => {
    setSelectedCoin(idx)
  }

  const checkChange = (changeData: Number) => {
    if (changeData > 0) return styles.rises
    if (changeData < 0) return styles.fall
    return ''
  }
  return (
    <ul className={styles.coinListContainer}>
      <li className={styles.coinList}>
        <div className={styles.coinInfo}>
          <span className={styles.coinName}>Product</span>
          <span className={styles.coinPrice}>Price</span>
          <span className={styles.coinChange}>Change</span>
        </div>
      </li>
      {coinList?.map((item: IRefinedData, idx) => {
        return (
          <li key={item.name} className={styles.coinList}>
            <button type='button' onClick={() => coinListClicked(idx)}>
              <div className={styles.coinInfo}>
                <span className={styles.coinName}>{item.name}</span>
                <span className={cx(styles.coinPrice, checkChange(item.coinPercentChange24h))}>
                  {Number(item.coinPrice).toLocaleString()}
                </span>
                <span className={cx(styles.coinChange, checkChange(item.coinPercentChange24h))}>
                  {item.coinPercentChange24h}%
                </span>
              </div>
            </button>
          </li>
        )
      })}
    </ul>
  )
}

export default React.memo(CoinListElement)
