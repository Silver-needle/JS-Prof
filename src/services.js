export function service(url, method = "GET", body) {
   return fetch(url, {
      headers: Object.assign({}, body ? {
         'Content-Type': 'application/json; charset=utf-8'
      } : {}),
      method,
      body: JSON.stringify(body)
   })
      .then((res) => res.json())
}