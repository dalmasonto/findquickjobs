import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { ColorSchemeToggle } from '../components/theme/ColorSchemeToggle'
import { APP_NAME, APP_NAME_FULL, APP_NAME_WITH_SEP } from '../configs/appConfigs';
import AppWrapper from '../layouts/AppWrapper'

const inter = Inter({ subsets: ['latin'] })

 function Home() {
  return (
    <>
      <Head>
        <title>{`${APP_NAME_WITH_SEP} Home`}</title>
        <meta name="description" content={`Welcome to ${APP_NAME_FULL}`} />
        </Head>
      <main>
        <ColorSchemeToggle />
        text 
      </main>
    </>
  )
}

Home.PageLayout = AppWrapper

export default Home;
