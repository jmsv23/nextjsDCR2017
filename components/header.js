import Link from 'next/link'

const headerStyles = `
  .header {
    background: gray;
    width: 100%;
  }
  .header a {
    display: inline-block;
    color: white;
    margin: 10px;
  }
`

const Header = () => (
  <div className="header">
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/about">
      <a>About</a>
    </Link>
    <style>{headerStyles}</style>
  </div>
)

export default Header
