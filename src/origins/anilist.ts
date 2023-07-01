
export default {
  origin: 'graphql.anilist.co',
  cache: {
    ttl: 1000 * 60 * 60 * 1
  },
  throttles: [
    {
      limit: 2,
      interval: 1_000
    }
  ]
}
