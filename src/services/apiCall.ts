import axios from 'axios'
import { ICoin } from 'types/cryptoType'

const ALL_LIST_URL = 'https://api.upbit.com/v1/market/all?isDetails=false'
const GET_PRICE_URL = 'https://api.upbit.com/v1/ticker?markets='

const options = { headers: { Accept: 'application/json' } }

export const getAllCoinList = () => {
  return axios
    .get(ALL_LIST_URL, {
      params: {
        options,
      },
      timeout: 10000,
    })
    .then(async (res) => {
      const allCoinList = await res.data
      return allCoinList
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

export const getCoinPrice = (item: string) => {
  return axios
    .get(GET_PRICE_URL + item, {
      params: {
        options,
      },
      timeout: 10000,
    })
    .then((res) => {
      return res
    })
}
