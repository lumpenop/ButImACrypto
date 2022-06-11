import styles from './routes.module.scss'
import Dashboard from './Dashboard'
import Layout from './_shared/Layout'

import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className={styles.app}>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
