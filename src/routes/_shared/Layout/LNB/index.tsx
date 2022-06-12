import styles from './lnb.module.scss'

import LnbMenuList from './LnbMenuList'

const lnbMenu = ['Dashboard', 'Board', 'Analysis', 'Market', 'Portfolio', 'Settings']

const LNB = () => {
  return (
    <aside className={styles.lnbContainer}>
      <nav className={styles.lnb}>
        <ul>
          {lnbMenu.map((item, index) => {
            return <LnbMenuList key={item} item={item} value={index} />
          })}
        </ul>
      </nav>
    </aside>
  )
}

export default LNB
