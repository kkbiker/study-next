import Image from 'next/image';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import { Footer } from '@/components/Footer';
import { HeadLine } from '@/components/HeadLine';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>index page</title>
      </Head>
      <main>
        <HeadLine title="index" number={1111} array={[1,2,3]} obj={{foo:"foo", bar:"bar"}} boolen comp={<div>foo</div>} />
      </main>

      <Footer />
    </div>
  )
}
