import styles from './routes.module.scss'
import Dashboard from './Dashboard'
import Layout from './_shared/Layout'
import Board from './Board'

import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className={styles.app}>
      <Routes>
        <Route element={<Layout />}>
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='board' element={<Board />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
