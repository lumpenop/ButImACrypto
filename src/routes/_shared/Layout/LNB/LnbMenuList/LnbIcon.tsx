import styles from '../lnb.module.scss'
import { cx } from 'styles'

import { DashboardIcon, MyStockIcon, AnalysisIcon, MarketIcon, PortfolioIcon, SettingsIcon } from 'assets'
import { useEffect } from 'react'

interface Props {
  item: string
  className: string | undefined
}

const LnbIcon = ({ item, className }: Props) => {
  const tagIcon = {
    Dashboard: <DashboardIcon className={className} />,
    MyStock: <MyStockIcon className={className} />,
    Analysis: <AnalysisIcon className={className} />,
    Market: <MarketIcon className={className} />,
    Portfolio: <PortfolioIcon className={className} />,
    Settings: <SettingsIcon className={className} />,
  }[item]
  if (!tagIcon) return null
  return tagIcon
}

export default LnbIcon
