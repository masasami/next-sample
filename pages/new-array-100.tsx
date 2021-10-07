export default function Component() {
  return (
    <div>
      <ul>
        {new Array(100).fill(0).map((_, i) => (
          <li key={i}>{i + 1}</li>
        ))}
      </ul>
    </div>
  )
}
