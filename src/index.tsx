import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { RecoilRoot } from 'recoil'

import i18n from 'utils/locale'

import reportWebVitals from './reportWebVitals'
import './styles/index.scss'

import Routes from './routes'

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnMount: false } },
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <I18nextProvider i18n={i18n}>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </I18nextProvider>
      </QueryClientProvider>
    </RecoilRoot>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
