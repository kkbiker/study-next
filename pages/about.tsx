import Image from 'next/image';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import { Footer } from '@/components/Footer';
import { HeadLine } from '@/components/HeadLine';

const inter = Inter({ subsets: ['latin'] })

export default function About() {
  return (
    <div>
      <Head>
        <title>about page</title>
      </Head>
      <main>
        <HeadLine title="about">
            foo
        </HeadLine>
      </main>

      <Footer />
    </div>
  )
}
