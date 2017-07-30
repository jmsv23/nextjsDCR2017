import Link from 'next/link'

const Header = () => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <Link href="/">
          <a className="navbar-brand" href="#">Next.js</a>
        </Link>
      </div>
      <ul className="nav navbar-nav">
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
