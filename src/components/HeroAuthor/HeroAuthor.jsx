import Image from "next/image";
import styles from "./HeroAuthor.module.css";
import ButtonLink from "../ButtonLink/ButtonLink";

export default function HeroAuthor() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-3 col-lg-2 d-flex justify-content-center align-items-center mb-4 mb-md-0">
            <Image
              src="/img/author/author.png"
              alt="author-avatar"
              className={styles.image}
              quality={100}
              height={160}
              width={160}
            />
          </div>
          <div className="col-12 col-md-9 col-lg-7 d-flex flex-column justify-content-center align-items-md-start text-center text-md-start">
            <h1 className="fw-bold">Wavebreak Premium.</h1>
            <p>
              Our teams are constantly creating, coding and collaborating so we
              can bring you the very best in premium photography, authentic
              imagery, customisable templates, graphic design, 4k, slow motion
              video and much more.
            </p>
            <div className="d-flex justify-content-center justify-content-md-start gap-4">
              <ButtonLink text="Seguir" size="m" />
              <ButtonLink text="Compartir" size="m" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
