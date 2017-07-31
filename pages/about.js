import Link from 'next/link'
import Layout from '../components/layout'

const About = (props) => (
  <Layout>
    <h2>Next.js React Without Complications.</h2>
    <h3>Drupalcamp Costa Rica 2017</h3>
    <p>Ing. Jose Manuel Santibañez Villanueva</p>
    {typeof props.url.query.test !== 'undefined' ?
      <h1>{props.url.query.test}</h1>
      :
      <Link as={`/about/funciona`} href={`/about?test=funciona`}>
        <a className="btn btn-default">about/funciona</a>
      </Link>
    }
  </Layout>
)

export default About
