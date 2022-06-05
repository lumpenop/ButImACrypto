import { atom } from 'hooks/state'

export const selectedListState = atom<string>({
  key: '#selectedListState', // unique ID (with respect to other atoms/selectors)
  default: '0',
})
