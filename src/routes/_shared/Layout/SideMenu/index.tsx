import styles from './sideMenu.module.scss'
import { getAllCoinInfo } from 'services/apiCall'
import { useQuery } from 'react-query'

import CoinListElement from './CoinListElement'

import cardFront from 'assets/imgs/cardFront.jpg'
import cardBack from 'assets/imgs/cardBack.jpg'

const SideMenu = () => {
  const { data, isLoading } = useQuery(
    ['coinList'],
    async () => {
      const result = await getAllCoinInfo()
      return result
    },
    {
      keepPreviousData: true,
      cacheTime: 0,
      refetchOnWindowFocus: false,
      refetchInterval: 10000,
    }
  )

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
