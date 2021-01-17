import utilStyles from "../styles/utils.module.css"

export default function SIGCard({ children }) {
  return <div className={utilStyles.card}>{children}</div>;
}