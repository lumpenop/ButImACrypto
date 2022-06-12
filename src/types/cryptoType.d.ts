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
      market_cap_change_24h: number
    }
  }
}

export interface IRefinedData {
  name: string
  coinPrice: number
  coinPercentChange24h: number
  coinMarketCap: number
  coinVolume24h: number
  marketCapChange24h: number
}
