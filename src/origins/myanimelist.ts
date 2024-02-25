
export default {
  origin: 'myanimelist.net',
  cache: {
    ttl: 1000 * 60 * 30
  },
  throttles: [
    {
      limit: 1,
      interval: 1000
    }
  ]
}
