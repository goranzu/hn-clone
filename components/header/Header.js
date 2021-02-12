/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./header.module.css";

const navLinks = [
  {
    title: "top",
    path: "/top/1",
    isActive: false,
  },
  {
    title: "new",
    path: "/new/1",
    isActive: false,
  },
  {
    title: "show",
    path: "/show/1",
    isActive: false,
  },
  {
    title: "ask",
    path: "/ask/1",
    isActive: false,
  },
  {
    title: "jobs",
    path: "/jobs/1",
    isActive: false,
  },
];

export default function Header() {
  const router = useRouter();

  function checkWhichPageIsActive(link) {
    if (router.pathname.includes(link.title)) {
      link.isActive = true;
    } else {
      link.isActive = false;
    }
  }

  return (
    <header className={styles.header}>
      <Link href="/top/1">
        <div className={styles.logo}>logo</div>
      </Link>
      <nav className={styles.nav}>
        {navLinks.map((link) => {
          checkWhichPageIsActive(link);
          return (
            <Link key={link.path} href={link.path}>
              <a className={link.isActive ? styles.active : null}>
                {link.title}
              </a>
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
