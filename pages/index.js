import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/banner/header'
import Footer from '../components/banner/footer'
import Body from '../components/core/bodys/body'



export default function Home() {
  return (
    <div className={styles.container}>
      <Header/>
      <Body/>
      <Footer/>
    </div>
  )
}
