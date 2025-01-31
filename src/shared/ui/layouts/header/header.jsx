import Link from "next/link";
import Logo from './logo';
import {getHrefLocale} from "@/i18n/get-href-locale";
import styles from '@/shared/ui/layouts/header/style.module.css'

export default function Header({ locale }) {
  return (
    <header className={styles.header}>
        <div className="container">
            <div className={styles.flex}>
                <Link prefetch={false} href={getHrefLocale(locale)}><Logo /></Link>
            </div>
        </div>
    </header>
  );
}

