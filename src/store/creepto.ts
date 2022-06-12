import { atom } from 'hooks/state'
import { IRefinedData } from 'types/cryptoType'

export const selectedLnbListState = atom<string>({
  key: '#selectedLnbListState', // unique ID (with respect to other atoms/selectors)
  default: '0',
})

export const coinListState = atom<IRefinedData | undefined>({
  key: 'coinListState', // unique ID (with respect to other atoms/selectors)
  default: undefined,
})

export const selectedCoinState = atom<number>({
  key: 'selectedCoinState', // unique ID (with respect to other atoms/selectors)
  default: 0,
})
