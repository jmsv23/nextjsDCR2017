import react, {Component} from 'react'
import axios from 'axios'
import Link from 'next/link'
import Layout from '../components/layout'


class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchKey: (typeof props.url.query.searchKey !== 'undefined' ? props.url.query.searchKey : 'cats'),
      gifs: props.gifs
    }
  }

  render() {
    const searchKey = this.state.searchKey
    return (
      <Layout>
        <form>
          <div className="form-group">
            <label for="searchkey">Search Key</label>
            <input type="text" className="form-control" id="searchkey" placeholder="Default Cats" value={searchKey} onChange={this.searchKeyBind} />
          </div>
          <a className="btn btn-default" onClick={this.search}>Search</a>
        </form>
        <div className="panel panel-default">
          <div className="panel-body">
            {this.renderItems()}
          </div>
        </div>
      </Layout>
    )
  }

  searchKeyBind = (evn) => {
    evn.preventDefault()
    this.setState({
      searchKey: evn.target.value
    })
  }

  search = () => {
    const searchKey = this.state.searchKey
    const url = `https://api.giphy.com/v1/gifs/search?limit=5&q=${searchKey}&api_key=dc6zaTOxFJmzC`
    axios.get(url)
    .then((response) => {
      this.setState({
        gifs: response.data.data
      })
    })
    .catch((err) => {
      this.setState({
        gifs: []
      })
    })
  }

  renderItems = () => {
    const searchKey = this.state.searchKey
    const gifs = this.state.gifs
    return gifs.map((item) => {
      return (
        <Link key={item.id} as={`/detail/${searchKey}/${item.id}`} href={`/detail?id=${item.id}&back=${searchKey}`}>
          <a>
            <img key={item.id} src={item.images.fixed_width.url} />
          </a>
        </Link>)
    })
  }
}

Index.getInitialProps = async (context) => {
  const searchKey = (typeof context.query.searchKey !== 'undefined' ? context.query.searchKey : 'cats')
  const url = `https://api.giphy.com/v1/gifs/search?limit=5&q=${searchKey}&api_key=dc6zaTOxFJmzC`
  const gifs = await axios.get(url)
  .then((response) => {
    return response.data.data
  })
  .catch((err) => {
    return []
  })

  return {
    gifs: gifs
  }
}

export default Index
