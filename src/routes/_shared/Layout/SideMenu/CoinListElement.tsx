import styles from './sideMenu.module.scss'
import { ICoin } from 'types/cryptoType'
import BigNumber from 'bignumber.js'
import { cx } from 'styles'
import React from 'react'

interface Props {
  coinList: ICoin[]
}
const coinListElement = ({ coinList }: Props) => {
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
      {coinList?.map((item: ICoin) => {
        const changeData = new BigNumber(item.quotes.KRW.percent_change_24h).toNumber()
        return (
          <li key={item.name} className={styles.coinList}>
            <div className={styles.coinInfo}>
              <span className={styles.coinName}>{item.name}</span>
              <span className={cx(styles.coinPrice, checkChange(changeData))}>{item.quotes.KRW.price.toFixed(2)}</span>
              <span className={cx(styles.coinChange, checkChange(changeData))}>
                {item.quotes.KRW.percent_change_24h.toFixed(2)}%
              </span>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default React.memo(coinListElement)
