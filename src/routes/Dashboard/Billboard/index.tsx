import styles from './billboard.module.scss'

import { useEffect, useState } from 'react'

import coin1 from 'assets/imgs/coin1.jpg'
import coin2 from 'assets/imgs/coin2.jpg'
import coin3 from 'assets/imgs/coin3.jpg'

const menuList = [1, 2, 3]

interface IIMAGES {
  [key: string]: string
}

let setSliding: NodeJS.Timer
const Billboard = () => {
  const IMAGES: IIMAGES = {
    coin1,
    coin2,
    coin3,
  }

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
  }, [])

  return (
    <div className={styles.view}>
      <ul
        className={styles.menuListContainer}
        style={{ transform: `translateY(${-180 * clicked}px)`, transition: '0.7s' }}
      >
        {menuList.map((item, idx) => {
          const tag = `coin${idx + 1}`
          return (
            <li className={styles.menuList} key={item}>
              <button type='button' onClick={buttonSlidingClick}>
                <img className={styles.viewImage} src={IMAGES[tag]} alt={`coin image ${idx + 1}`} />
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Billboard
