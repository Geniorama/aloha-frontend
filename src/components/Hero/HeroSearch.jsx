import BgHero from "./../../../public/img/components/hero/bg-hero-search.png";
import Image from "next/image";
import styles from "./HeroSearch.module.css";
import Link from "next/link";
import ButtonLink from "../ButtonLink/ButtonLink";
import SearchBar from "../SearchBar/SearchBar";

export default function HeroSearch() {
  const linkBanner = {
    text: "Comprar ahora",
    href: "/",
    target: "_self",
  };

  return (
    <div className={`py-5 d-flex align-items-center ${styles.HeroSearch}`}>
      <Image src={BgHero} fill style={{ objectFit: "cover" }} alt=""/>
      <div
        className={`container d-flex flex-column align-items-center h-100 justify-content-center ${styles.HeroSearch__content}`}
      >
        <div
          className={`w-100 text-right d-flex justify-content-end d-md-none ${styles.ArrowMobile}`}
        >
          <span className={`${styles.HeroSearch__title__arrow}`}>
            <svg
              width="94"
              height="94"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_48_55)">
                <path
                  d="M22.6668 9.33301L9.3335 22.6663"
                  stroke="#FFFFFF"
                  strokeWidth="2.66667"
                />
                <path
                  d="M10.6665 9.33301H22.6665V21.333"
                  stroke="#FFF"
                  strokeWidth="2.66667"
                />
              </g>
              <defs>
                <clipPath id="clip0_48_55">
                  <rect width="32" height="32" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
        </div>
        <div className="text-left">
          <h2 className={`${styles.HeroSearch__title}`}>
            El lugar donde
            <span
              className={`${styles.HeroSearch__title__arrow} d-none d-md-inline-block`}
            >
              <svg
                width="94"
                height="94"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_48_55)">
                  <path
                    d="M22.6668 9.33301L9.3335 22.6663"
                    stroke="#FFFFFF"
                    strokeWidth="2.66667"
                  />
                  <path
                    d="M10.6665 9.33301H22.6665V21.333"
                    stroke="#FFF"
                    strokeWidth="2.66667"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_48_55">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <br />
            la inspiración fluye.
          </h2>
          <p className={`${styles.HeroSearch__desc}`}>
            Obtén 100 imágenes por $100/mes{" "}
            <ButtonLink
              href="/"
              text={"Comprar ahora"}
              size={"s"}
              color={"coral"}
            />
          </p>
        </div>

        {/* Search Bar */}
        <div
          className="w-100 d-flex justify-content-center"
          style={{ marginBottom: "-80px", marginTop: "50px" }}
        >
          <SearchBar />
        </div>
      </div>
    </div>
  );
}
