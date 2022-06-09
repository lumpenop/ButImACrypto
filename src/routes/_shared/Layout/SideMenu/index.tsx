import styles from './sideMenu.module.scss'
import { getAllCoinInfo } from 'services/apiCall'
import { useQuery } from 'react-query'
import { useEffect } from 'react'

import CoinListElement from './CoinListElement'

import cardFront from 'assets/imgs/cardFront.jpg'
import cardBack from 'assets/imgs/cardBack.jpg'
import { useRecoil } from 'hooks/state'

import { coinListState, selectedCoinState } from 'store/creepto'
import { IRefinedData } from 'types/cryptoType'

const SideMenu = () => {
  const [, setCoinListData] = useRecoil(coinListState)
  const [selectedCoin] = useRecoil(selectedCoinState)

  const { data, isLoading } = useQuery(
    ['coinList'],
    async () => {
      const result: IRefinedData[] = await getAllCoinInfo()
      return result
    },
    {
      keepPreviousData: true,
      cacheTime: 0,
      refetchOnWindowFocus: false,
      refetchInterval: 10000,
    }
  )
  useEffect(() => {
    data && setCoinListData(data[selectedCoin])
  }, [selectedCoin, data])

  return (
    <aside className={styles.sideMenu}>
      <div className={styles.cardList}>
        <div className={styles.cardBox}>
          <img className={styles.cardFront} src={cardFront} alt='cardFront' />
          <img className={styles.cardBack} src={cardBack} alt='cardBack' />
        </div>
      </div>
      <div className={styles.coinListView}>{!isLoading && <CoinListElement coinList={data} />}</div>
    </aside>
  )
}

export default SideMenu
