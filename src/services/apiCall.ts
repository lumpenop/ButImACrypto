import axios from 'axios'
import { ICoin } from 'types/cryptoType'

const ALL_LIST_URL = 'https://api.coinpaprika.com/v1/tickers?quotes=KRW'

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
