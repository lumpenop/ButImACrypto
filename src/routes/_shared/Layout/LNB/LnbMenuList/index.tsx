import styles from '../lnb.module.scss'
import { cx } from 'styles'

import LnbIcon from './LnbIcon'

import { MouseEvent } from 'react'

import { selectedLnbListState } from 'store/creepto'
import { useRecoil } from 'hooks/state'

interface Props {
  item: string
  value: number
}

const LnbMenuList = ({ item, value }: Props) => {
  const [selectedList, setSelectedList] = useRecoil<string>(selectedLnbListState)

  const menuListClick = (event: MouseEvent<HTMLButtonElement>) => {
    setSelectedList(event.currentTarget.value)
  }
  return (
    <li className={cx(styles.lnbMenu)}>
      <button type='button' value={value} onClick={menuListClick}>
        <div className={styles.lnbIconBox}>
          <LnbIcon item={item} className={cx(styles.lnbIcon, { [styles.selected]: selectedList === String(value) })} />
          <span className={cx({ [styles.selected]: selectedList === String(value) })}>{item}</span>
        </div>
      </button>
    </li>
  )
}

export default LnbMenuList
