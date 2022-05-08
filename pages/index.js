import SEO from '../components/SEO'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <SEO />
      <header><h1>This is a header</h1></header>
      <main className="main">
        <h2 className='text-3xl font-bold underline'>There is more to come :)</h2>
      </main>
      <Footer />
    </>
  )
}