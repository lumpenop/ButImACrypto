export interface ICoin {
  rank: number
  name: string
  symbol: string
  quotes: {
    KRW: {
      price: number
      market_cap: number
      volume_24h: number
      percent_change_24h: number
      percent_change_7d: number
    }
  }
}
