import styles from './routes.module.scss'
import Dashboard from './Dashboard'
import Layout from './_shared/Layout'

const App = () => {
  return (
    <div className={styles.app}>
      <Layout>
        <Dashboard />
      </Layout>
    </div>
  )
}

export default App
