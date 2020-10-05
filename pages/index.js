import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Circle from './Circle'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Circle of FIFTHS
        </h1>

        <div className={styles.directions}>
          <i>Select a note on the circle to see chords in Major and Minor.</i>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>MAJOR</h3>
            <div className={`${styles.one} ${styles.small_circle}`}>I</div>
            <div className={`${styles.two} ${styles.small_circle}`}>ii</div>
            <div className={`${styles.three} ${styles.small_circle}`}>iii</div>
            <div className={`${styles.four} ${styles.small_circle}`}>IV</div>
            <div className={`${styles.five} ${styles.small_circle}`}>V</div>
            <div className={`${styles.six} ${styles.small_circle}`}>vi</div>
            <div className={`${styles.seven} ${styles.small_circle}`}>vii0</div>
          </div>
          <div className={styles.card}>
            <h3>MINOR</h3>
            <div className={`${styles.six} ${styles.small_circle}`}>vi</div>
            <div className={`${styles.seven} ${styles.small_circle}`}>vii0</div>
            <div className={`${styles.five} ${styles.small_circle}`}>V</div>
            <div className={`${styles.four} ${styles.small_circle}`}>IV</div>
            <div className={`${styles.three} ${styles.small_circle}`}>iii</div>
            <div className={`${styles.two} ${styles.small_circle}`}>ii</div>
            <div className={`${styles.one} ${styles.small_circle}`}>I</div>
          </div>
          <Circle></Circle>
        </div>
      </main>

      <footer className={styles.footer}>
        <i>circle of fifths reference <a href="https://codepen.io/76sagor/pen/pNZbvg">codepen</a></i>
      </footer>
    </div>
  )
}
