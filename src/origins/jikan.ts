
export default {
  origin: 'api.jikan.moe',
  throttles: [
    {
      limit: 3,
      interval: 3000
    },
    {
      limit: 60,
      interval: 60_000
    }
  ]
}
