
export default {
  origin: 'api.jikan.moe',
  cache: {
    ttl: 1000 * 60 * 60 * 1
  },
  throttles: [
    {
      limit: 3,
      interval: 1_000
    },
    {
      limit: 60,
      interval: 60_000
    }
  ]
}
