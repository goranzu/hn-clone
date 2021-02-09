import Link from "next/link";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>logo</div>
      <nav className={styles.nav}>
        <Link href="/top/1">top</Link>
        <Link href="/new/1">new</Link>
        <Link href="/show/1">show</Link>
        <Link href="/ask/1">ask</Link>
        <Link href="/jobs/1">jobs</Link>
      </nav>
    </header>
  );
}
