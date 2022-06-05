import styles from './sideMenu.module.scss'
import { ICoin } from 'types/cryptoType'
import BigNumber from 'bignumber.js'
import { cx } from 'styles'
import React from 'react'

interface Props {
  coinList: ICoin[]
}

const coinListElement = ({ coinList }: Props) => {
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
        let change = ''
        if (changeData > 0) change = styles.rises
        if (changeData < 0) change = styles.fall

        return (
          <li key={item.name} className={styles.coinList}>
            <div className={styles.coinInfo}>
              <span className={styles.coinName}>{item.name}</span>

              <span className={cx(styles.coinPrice, change)}>{item.quotes.KRW.price.toFixed(2)}</span>

              <span className={cx(styles.coinChange, change)}>{item.quotes.KRW.percent_change_24h.toFixed(2)}%</span>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default React.memo(coinListElement)
