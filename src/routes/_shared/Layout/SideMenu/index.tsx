import styles from './sideMenu.module.scss'
import { getAllCoinList, getCoinPrice } from 'services/apiCall'
import { useQuery } from 'react-query'
import { ICoin, ICoinPrice } from 'types/cryptoType'
import { useState, useEffect } from 'react'
import { AxiosResponse } from 'axios'

const timer = (ms: number) =>
  new Promise((res) => {
    setTimeout(() => {
      console.log('hi')
    }, ms)
  })

const SideMenu = () => {
  const [coinList, setCoinList] = useState<ICoin[]>([])
  useEffect(() => {
    coin()
  }, [])
  const coin = async () => {
    setCoinList(await getAllCoinList())
  }

  const { data, isLoading } = useQuery(
    ['coinList', coinList],
    async () => {
      if (coinList.length === 0) return null
      const arr: ICoinPrice[] = []
      coinList.slice(0, 10).forEach(async (item) => {
        const coinPrice = await getCoinPrice(item.market)
        arr.push(coinPrice.data[0])
      })
      return arr
    },
    {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 5,
    }
  )
  useEffect(() => {
    if (data) console.log(data[0])
  }, [data])
  if (isLoading || !data) return null

  return (
    <aside className={styles.sideMenu}>
      <ul>
        {data.map((item: ICoinPrice) => {
          console.log(item.market)
          return (
            <li key={item.market} className={styles.coinList}>
              {item.market}
              {item.trade_price}
            </li>
          )
        })}
        hi
      </ul>
    </aside>
  )
}

export default SideMenu
