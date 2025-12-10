export default async function productsLoader() {
  const res = await fetch('/db.json')
  const products = await res.json()
  return products
}
