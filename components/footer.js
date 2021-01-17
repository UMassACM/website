import styles from '../styles/utils.module.css'

export default function Footer({children}) {
    return (
        <footer className={styles.footer}>
            {children}
        </footer>
    )
}