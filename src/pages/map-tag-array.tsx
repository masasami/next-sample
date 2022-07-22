export default function Component() {
  const array1 = [1, 2, 3, 4, 5]
  const array2 = [<li key={0}>1</li>, <li key={1}>2</li>, <li key={2}>3</li>, <li key={3}>4</li>, <li key={4}>5</li>]

  return (
    <div>
      <h2>array1</h2>
      <ul>
        {array1.map((a, i) => (
          <li key={i}>{a}</li>
        ))}
      </ul>

      <h2>array2</h2>
      <ul>{array2}</ul>
    </div>
  )
}
