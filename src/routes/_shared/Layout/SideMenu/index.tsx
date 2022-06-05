import styles from './sideMenu.module.scss'
import { getAllCoinInfo } from 'services/apiCall'
import { useQuery } from 'react-query'
import { ICoin } from 'types/cryptoType'
import { useState, useMemo, useEffect } from 'react'
import { cx } from 'styles'
import BigNumber from 'bignumber.js'
import CoinListElement from './CoinListElement'

const SideMenu = () => {
  const [coinList, setCoinList] = useState<ICoin[]>([])

  const { data, isLoading } = useQuery(
    ['coinList', coinList],
    async () => {
      const result = await getAllCoinInfo()
      setCoinList(result)
      return result
    },
    {
      keepPreviousData: true,
      cacheTime: 0,
      refetchOnWindowFocus: false,
      refetchInterval: 5000,
    }
  )

  return (
    <aside className={styles.sideMenu}>
      <div className={styles.cardList}>hj</div>
      <div className={styles.coinListView}>{!isLoading && <CoinListElement coinList={coinList} />}</div>
    </aside>
  )
}

export default SideMenu
