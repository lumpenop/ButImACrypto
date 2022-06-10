import styles from './view.module.scss'
import { cx } from 'styles'

import { useState, MouseEvent } from 'react'

const menuList = [1, 2, 3]
const View = () => {
  const [isClicked, setIsClicked] = useState(false)
  const menuSliding = () => {
    setIsClicked(true)
  }
  return (
    <div className={styles.view}>
      <ul className={cx(styles.menuListContainer, { [styles.move]: isClicked })}>
        {menuList.map((item, idx) => {
          return (
            <li className={styles.menuList} key={item}>
              <button type='button' onClick={menuSliding} value={idx}>
                {item}
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default View
