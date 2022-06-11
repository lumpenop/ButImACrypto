import styles from './view.module.scss'

import { useEffect, useState } from 'react'

import { getData } from 'services/crawler'

const menuList = [1, 2, 3]

let setSliding: NodeJS.Timer
const View = () => {
  const [clicked, setClicked] = useState(0)
  const menuSliding = () => {
    setClicked((prev) => {
      if (prev === menuList.length - 1) return 0
      return prev + 1
    })
  }

  const buttonSlidingClick = () => {
    clearInterval(setSliding)
    menuSliding()
    setSliding = setInterval(menuSliding, 1700)
  }

  useEffect(() => {
    setSliding = setInterval(menuSliding, 1700)
    return () => clearInterval(setSliding)
    getData()
  }, [])

  return (
    <div className={styles.view}>
      <ul
        className={styles.menuListContainer}
        style={{ transform: `translateY(${-140 * clicked}px)`, transition: '0.7s' }}
      >
        {menuList.map((item) => {
          return (
            <li className={styles.menuList} key={item}>
              <button type='button' onClick={buttonSlidingClick}>
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
