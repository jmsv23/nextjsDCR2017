import react, {Component} from 'react'
import axios from 'axios'
import Layout from '../components/layout'


class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchKey: 'cats',
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
    const url = `https://api.giphy.com/v1/gifs/search?limit=20&q=${searchKey}&api_key=dc6zaTOxFJmzC`
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
    const gifs = this.state.gifs
    return gifs.map((item) => {
      return (<img key={item.id} src={item.images.fixed_width.url} />)
    })
  }
}

Index.getInitialProps = async function() {
  const url = `https://api.giphy.com/v1/gifs/search?limit=20&q=cats&api_key=dc6zaTOxFJmzC`
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
