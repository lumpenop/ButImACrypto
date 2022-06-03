import styles from './routes.module.scss'

import Dashboard from './Dashboard'

const App = () => {
  return (
    <div className={styles.app}>
      <Dashboard />
    </div>
  )
}

export default App
