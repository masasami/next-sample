import { useEffect } from 'react'

export default function Loop() {
  useEffect(() => {
    const items = new Array(10000000).fill(0)

    // for
    console.time('for')
    for (let i = 0; i < items.length; i++) {}
    console.timeEnd('for')

    // forEach
    console.time('forEach')
    items.forEach(() => {})
    console.timeEnd('forEach')

    // for of
    console.time('for of')
    for (const item of items) {
    }
    console.timeEnd('for of')

    // map
    console.time('map')
    items.map(() => {})
    console.timeEnd('map')

    // filter
    console.time('filter')
    items.filter(() => {})
    console.timeEnd('filter')

    // reduce
    console.time('reduce')
    items.reduce(() => {})
    console.timeEnd('reduce')
  }, [])

  return <div></div>
}
