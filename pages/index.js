import Link from 'next/link'

const Index = () => (
  <div>
    <p>Hello World</p>
    <Link href="/regular">
      <a>Regular component</a>
    </Link>
  </div>
)

export default Index
