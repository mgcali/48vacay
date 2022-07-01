import Link from "next/link"
import styles from '../styles/Home.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
        <div className="footer-copyright py-3">
       <p> © 2022 Copyright
        <Link href="/"> 48Vacay </Link></p>
      </div>
        </footer>
    )
  }