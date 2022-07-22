export default {
  fetch: async (req) => {
    const { pathname: domain } = new URL(req.url)
    console.log(domain)
    const [NS, A, AAAA, CNAME, MX] = await Promise.all([
      fetch('https://cloudflare-dns.com/dns-query?type=NS&name=' + domain, { headers: { accept: 'application/dns-json' }}).then(res => res.json()),
      fetch('https://cloudflare-dns.com/dns-query?type=A&name=' + domain, { headers: { accept: 'application/dns-json' }}).then(res => res.json()),
      fetch('https://cloudflare-dns.com/dns-query?type=AAAA&name=' + domain, { headers: { accept: 'application/dns-json' }}).then(res => res.json()),
      fetch('https://cloudflare-dns.com/dns-query?type=CNAME&name=' + domain, { headers: { accept: 'application/dns-json' }}).then(res => res.json()),
      fetch('https://cloudflare-dns.com/dns-query?type=MX&name=' + domain, { headers: { accept: 'application/dns-json' }}).then(res => res.json()),
    ])
    
    return new Response(JSON.stringify({NS, A, AAAA, CNAME, MX}, null, 2))
  }
}
