import Link from 'next/link'

const linkStyles = {
  marginLeft: 20,
}

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyles}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyles}>About</a>
    </Link>
  </div>
)

export default Header
