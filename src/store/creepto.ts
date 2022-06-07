import { atom } from 'hooks/state'

export const selectedLnbListState = atom<string>({
  key: '#selectedLnbListState', // unique ID (with respect to other atoms/selectors)
  default: '0',
})

export const selectedListState = atom<string>({
  key: '#selectedListState', // unique ID (with respect to other atoms/selectors)
  default: '0',
})
