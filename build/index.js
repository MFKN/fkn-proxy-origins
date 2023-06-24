const e = {
  origin: "api.jikan.moe",
  throttles: [
    {
      limit: 3,
      interval: 3e3
    },
    {
      limit: 60,
      interval: 6e4
    }
  ]
}, t = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: e
}, Symbol.toStringTag, { value: "Module" })), i = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  jikan: t
}, Symbol.toStringTag, { value: "Module" }));
export {
  i as origins
};
