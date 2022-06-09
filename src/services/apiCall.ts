import axios from 'axios'
import BigNumber from 'bignumber.js'
import { ICoin } from 'types/cryptoType'

const now = new Date().getTime()
const monthAgo = (now - 1000 * 3600 * 24 * 30) / 1000

const ALL_LIST_URL = 'https://api.coinpaprika.com/v1/tickers?quotes=KRW'
const ALL_BIT_URL = `https://poloniex.com/public?command=returnChartData&currencyPair=BTC
_ETH&start=${monthAgo}&end=9999999999&period=14400`

const url = 'https://api.binance.com/api/v3/ticker/price'

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
      const newCoinList = allCoinList.slice(0, 40)
      const refinedData = newCoinList.map((item: ICoin) => {
        const {
          price,
          percent_change_24h: percentChange24h,
          market_cap: marketCap,
          volume_24h: volume24h,
        } = item.quotes.KRW
        const coinPrice = new BigNumber(price).toNumber().toFixed(2)
        const coinPercentChange24h = new BigNumber(percentChange24h).toNumber().toFixed(2)
        const coinMarketCap = new BigNumber(marketCap).toNumber().toFixed(2)
        const coinVolume24h = new BigNumber(volume24h).toNumber().toFixed(2)
        return { name: item.name, coinPrice, coinPercentChange24h, coinMarketCap, coinVolume24h }
      })
      return refinedData
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
    const result = await res.data

    const chartData = result.reduce((acc: Acc[], cur: ResponseData) => {
      const date: Date = new Date(cur.date * 1000)

      const chartObj = { x: date, open: cur.open, close: cur.close, high: cur.high, low: cur.low }
      acc.push(chartObj)
      return acc
    }, [])
    return chartData
  })
}
