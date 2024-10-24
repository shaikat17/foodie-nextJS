import Link from "next/link";
import Image from "next/image";
import LogoImg from "@/assets/logo.png";

// css
import Styles from "./main-header.module.css";
import MainHeaderBackground from "./main-header-background";
import { NavLink } from "./nav-links";


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
            <NavLink href="/meals">Browse Meals</NavLink>
          </li>
          <li>
            <NavLink href="/community">Foodies Community</NavLink>
          </li>
        </ul>
      </nav>
    </header>
      </>
  );
}
