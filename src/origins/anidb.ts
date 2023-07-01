
export default {
  origin: 'api.anidb.net',
  cache: {
    ttl: 1000 * 60 * 60 * 24
  },
  throttles: [
    {
      limit: 5,
      interval: 60_000
    },
    {
      limit: 200,
      interval: 1_000 * 60 * 60 * 24
    }
  ]
}
