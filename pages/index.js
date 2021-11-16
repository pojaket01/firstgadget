import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/banner/header'
import Footer from '../components/banner/footer'
import Body from '../components/core/bodys/body'



export default function Home() {
  return (
    <div className={styles.container}>
      <div 
        style={{
        top: "0px",
        zIndex:"4",
        backgroundColor:"white"
        }}
        class="position-fixed z-index d-block w-100">
        <Header/>
      </div>
      <div 
        style={{
        marginTop: "15vh",
        }}
        class="">
        <Body/>
        <Footer/>
      </div>
    </div>
  )
}
