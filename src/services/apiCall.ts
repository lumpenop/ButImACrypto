import axios from 'axios'
import { ICoin } from 'types/cryptoType'

const ALL_LIST_URL = 'https://api.coinpaprika.com/v1/tickers?quotes=KRW'
const ALL_BIT_URL =
  'https://poloniex.com/public?command=returnChartData&currencyPair=BTC_ETH&start=1455699200&end=9999999999&period=14400'

const options = { headers: { Accept: 'application/json' } }

export const getAllCoinInfo = () => {
  return axios
    .get(ALL_LIST_URL, {
      params: {
        options,
      },
      timeout: 10000,
    })
    .then(async (res) => {
      const allCoinList = await res.data

      return allCoinList.slice(0, 40)
      // const krwCoinList = allCoinList.filter((item: ICoin) => item.market.includes('KRW'))
      // return krwCoinList.slice(0, 20)
    })
    .catch((thrown) => {
      if (axios.isCancel(thrown)) {
        // eslint-disable-next-line no-console
        console.log(`%c Request ${thrown.message}`, 'background: #bd71ff; color:#eaeaea')
      }
    })
}

interface ResponseData {
  close: number
  date: number
  high: number
  low: number
  open: number
  quoteVolume: number
  volume: number
  weightedAverage: number
}

interface Acc {
  x: Date
  open: number
  close: number
  high: number
  low: number
}
export const getBitData = () => {
  return axios(ALL_BIT_URL, {
    params: {
      options,
    },
  }).then(async (res) => {
    const result = await res.data.slice(-30)

    const chartData = result.reduce((acc: Acc[], cur: ResponseData) => {
      const chartObj = { x: new Date(cur.date), open: cur.open, close: cur.close, high: cur.high, low: cur.low }
      acc.push(chartObj)
      return acc
    }, [])
    return chartData
  })
}
