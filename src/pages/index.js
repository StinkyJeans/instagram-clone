import { Inter } from 'next/font/google'
import Head from 'next/head'
import Header from '../../components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>
           Instagram Clone
        </title> 
        <meta name='description' content='general'/>
        <link rel='icon' href="/favicon.ico"/>
      </Head>
      {/* Header */}
        <Header />
      {/* Feed */}

      {/* Modal */}
    </div>
  )
}
