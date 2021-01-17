import utilStyles from "../styles/utils.module.css"

export default function OfficerCard({ children }) {
  return <div className={utilStyles.sig_card}>{children}</div>;
}