import Link from 'next/link'

const Header = () => (
  <div>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/about">
      <a>About</a>
    </Link>
    <Link href="/dave">
      <a>Dave's Page</a>
    </Link>
    <style jsx>{`
    a {
      margin-right: 15px;
    }
    `}</style>
  </div>
)

export default Header
