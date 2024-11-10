import headerCss from "./header.module.css";
import Link from "next/link";
import { Roboto } from "next/font/google";
import DropdownMenuComp from "./featureMenu/featureMenu";

const roboto = Roboto({
  weight: "100", // if single weight, otherwise you use array like [400, 500, 700],
  style: "normal", // if single style, otherwise you use array like ['normal', 'italic']
  subsets: ["latin"],
});
export default function Header() {
  return (
    <header className={`flex flex-row justify-between ${headerCss.header}`}>
      <div className={`flex flex-row ${headerCss.logo}`}>
        R <div className={headerCss.red}>Max</div>
      </div>
      <nav className={`${headerCss.navbar} flex flex-row`}>
        <div
          className={`${headerCss.center} ${roboto.className} flex flex-row`}
        >
          <Link href="/">Home</Link>
          <DropdownMenuComp />
          <Link href="/Pricing">Pricing</Link>
          <button className={headerCss.navButton}>Solutions ▿</button>
        </div>
        <div
          className={`flex flex-row`}
          style={{ gap: "1vw", alignItems: "center" }}
        >
          <div
            style={{
              borderLeft: "1px solid #000",
              height: "30px",
            }}
          ></div>
          <button className={headerCss.loginButton}>Login</button>
          <button className={headerCss.tryButton}>Try For Free</button>
        </div>
      </nav>
    </header>
  );
}
