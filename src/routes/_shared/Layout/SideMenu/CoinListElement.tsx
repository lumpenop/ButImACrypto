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
      {coinList?.map((item: ICoin) => {
        const changeData = new BigNumber(item.quotes.KRW.percent_change_24h).toNumber()
        let change = ''
        if (changeData > 0) change = styles.rises
        if (changeData < 0) change = styles.fall

        return (
          <li key={item.name} className={styles.coinList}>
            <ul className={styles.coinInfo}>
              <li className={styles.coinName}>
                <span>{item.name}</span>
              </li>
              <li className={cx(styles.coinPrice, change)}>
                <span>{item.quotes.KRW.price.toFixed(2)}</span>
              </li>
              <li className={cx(styles.coinChange, change)}>
                <span>{item.quotes.KRW.percent_change_24h.toFixed(2)}%</span>
              </li>
            </ul>
          </li>
        )
      })}
    </ul>
  )
}

export default React.memo(coinListElement)
