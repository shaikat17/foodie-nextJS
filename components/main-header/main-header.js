import Link from "next/link";
import Image from "next/image";
import LogoImg from "@/assets/logo.png";

// css
import Styles from "./main-header.module.css";
import MainHeaderBackground from "./main-header-background";

export default function MainHeader() {
  return (
      <>
          <MainHeaderBackground />
          
          <header className={Styles.header}>
      <Link className={Styles.logo} href="/">
        <Image src={LogoImg} alt="Foodie Logo" priority />
        Foodie
      </Link>
      <nav className={Styles.nav}>
        <ul>
          <li>
            <Link href="/meals">Browse Meals</Link>
          </li>
          <li>
            <Link href="/community">Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </header>
      </>
  );
}
