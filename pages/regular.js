import {Component} from 'react'
import Link from 'next/link'

class Regular extends Component {
  constructor (props) {
    super(props)
  }
  render() {
    return (
      <div>
        <p>Regular React Component.</p>
        <Link href="/">
          <button>Index page</button>
        </Link>
      </div>
    )
  }
}

export default Regular
