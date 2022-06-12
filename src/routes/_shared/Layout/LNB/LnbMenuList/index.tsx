import styles from '../lnb.module.scss'
import { cx } from 'styles'

import LnbIcon from './LnbIcon'

import { MouseEvent } from 'react'

import { selectedLnbListState } from 'store/creepto'
import { useRecoil } from 'hooks/state'

import { Link } from 'react-router-dom'

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
        <div className={styles.lnbBox}>
          <LnbIcon item={item} className={cx(styles.lnbIcon, { [styles.selected]: selectedList === String(value) })} />
          <Link
            to={`${item.toLowerCase()}`}
            className={cx(styles.link, { [styles.selected]: selectedList === String(value) })}
          >
            {item}
          </Link>
        </div>
      </button>
    </li>
  )
}

export default LnbMenuList
