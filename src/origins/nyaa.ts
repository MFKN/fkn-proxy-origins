
export const nyaaTracker = {
  origin: 'nyaa.tracker.wf:7777',
  cache: {
    ttl: 1000 * 60 * 60 * 24
  },
  throttles: [
    {
      limit: 2,
      interval: 1_000
    }
  ]
}

export const nyaa = {
  origin: 'https://nyaa.si/',
  cache: {
    ttl: 1000 * 60 * 60 * 24
  },
  throttles: [
    {
      limit: 2,
      interval: 1_000
    }
  ]
}
