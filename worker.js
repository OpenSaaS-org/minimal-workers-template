export default {
  fetch: (req) => fetch('https://workers.cloudflare.com/cf.json', req.clone())
}
