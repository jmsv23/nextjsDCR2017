import Link from 'next/link'
import axios from 'axios'
import Layout from '../components/layout'

const Detail = (props) => (
  <Layout>
    <h1>Detail</h1>
    {props.gif ?
      <div>
        <ul className="list-group">
          <li className="list-group-item"><strong>Url:</strong> <a href={props.gif.bitly_gif_url} target="_blank">{props.gif.bitly_gif_url}</a></li>
          <li className="list-group-item"><strong>Slug:</strong> {props.gif.slug}</li>
          <li className="list-group-item"><strong>Fecha:</strong> {props.gif.import_datetime}</li>
          <li className="list-group-item">
            <img src={props.gif.images.fixed_width.url} />
          </li>
        </ul>
        <Link href={`/?searchKey=${props.url.query.back}`}>
          <a className="btn btn-default">Back</a>
        </Link>
      </div>
      :
      ''
    }
  </Layout>
)

Detail.getInitialProps = async (context) => {
  const id = (typeof context.query.id !== 'undefined' ? context.query.id : '')
  const url = `https://api.giphy.com/v1/gifs/${id}?api_key=dc6zaTOxFJmzC`
  const gif = await axios.get(url)
  .then((response) => {
    return response.data.data
  })
  .catch((err) => {
    return null
  })

  return {
    gif: gif
  }
}

export default Detail
