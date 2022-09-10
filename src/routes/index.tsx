import styles from './routes.module.scss'
import Dashboard from './Dashboard'
import Layout from './_shared/Layout'
import Board from './Board'

import { Routes, Route } from 'react-router-dom'
import { useLayoutEffect } from 'react'
import store from 'store'

const App = () => {
  useLayoutEffect(() => {
    store.set('board', [
      { num: 1, id: 'id', subject: 'subject', date: 'date', count: 1 },
      { num: 2, id: 'id2', subject: 'subject2', date: 'date2', count: 2 },
    ])
  })
  return (
    <div className={styles.app}>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Dashboard />} />
          <Route path='board' element={<Board />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
