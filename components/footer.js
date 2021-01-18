import styles from '../styles/utils.module.css'

export default function Footer({children}) {
    return (
        <footer className={styles.socialsFooter}>
            {children}
        </footer>
    )
}