import styles from './sideMenu.module.scss'
import { IRefinedData } from 'types/cryptoType'
import { cx } from 'styles'
import React, { useEffect } from 'react'

import { selectedCoinState } from 'store/creepto'

import { useRecoil } from 'hooks/state'

interface Props {
  coinList: IRefinedData[] | undefined
}
const CoinListElement = ({ coinList }: Props) => {
  const [selectedCoin, setSelectedCoin] = useRecoil(selectedCoinState)

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
          <span className={styles.coinName}>dsa</span>
          <span className={styles.coinPrice}>sad</span>
          <span className={styles.coinChange}>sads</span>
        </div>
      </li>
      {coinList?.map((item: IRefinedData, idx) => {
        return (
          <li key={item.name} className={styles.coinList}>
            <button type='button' onClick={() => coinListClicked(idx)} className={styles.coinInfo}>
              <span className={styles.coinName}>{item.name}</span>
              <span className={cx(styles.coinPrice, checkChange(item.coinPercentChange24h))}>{item.coinPrice}</span>
              <span className={cx(styles.coinChange, checkChange(item.coinPercentChange24h))}>
                {item.coinPercentChange24h}%
              </span>
            </button>
          </li>
        )
      })}
    </ul>
  )
}

export default React.memo(CoinListElement)
