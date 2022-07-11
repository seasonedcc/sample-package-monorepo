import { hello } from 'sample-package'

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>{hello()}</h1>
    </div>
  )
}
