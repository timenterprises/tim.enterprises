import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tim Enterprises</title>
        <meta name="description" content="Tim Enterprises LLC" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#000000" />
      </Head>

      <main className={styles.main}>
        <div className={styles.logoWrapper}>
          <Image 
            src="/logo-official.png"
            alt="Tim Logo"
            height="200"
            width="200"
          />
        </div>

        <h1 className={styles.title}>
          Tim Enterprises
        </h1>

        <p className={styles.description}>
	  {"Bringing you the TIM that you can't find elsewhere"}
        </p>

        <a href="#">
          <button className={styles.btn}>
            Twitter Feed
          </button>
        </a>

        <a href="mailto:inquiries@tim.enterprises">
          <div className={styles.contact}>
            <span>Contact Me</span>
            <Image 
              src="/mail.svg"
              alt="contact me"
              height="20"
              width="20"
            />
          </div>
        </a>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p className={styles.footerTitle}>Contact</p>
          <span className={styles.footerInfo}>+1 (725) 715-9515</span>
          <br />
          <br />
          <span className={styles.footerInfo}>inquiries@tim.enterprises</span>
          <br />
          <br />
          <span className={styles.footerInfo}>
	    PMB1027 <br />
	    501 South Rancho Dr. <br />
	    Suite D20 <br />
            Las Vegas, NV 89106
          </span>
          <br />
          <br />
          <br />
          <span>Copyright &copy; 2022. Tim Enterprises LLC</span>
        </div>
      </footer>
    </div>
  )
}
