import Image from "next/image";
import styles from "./HeroAuthor.module.css";
import ButtonLink from "../ButtonLink/ButtonLink";

export default function HeroAuthor() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex justify-content-center mb-4">
            <Image
              src="/img/author/author.png"
              alt="author-avatar"
              quality={100}
              height={100}
              width={100}
            />
          </div>
          <div className="col-12 d-flex flex-column justify-content-center text-center">
            <h1 className="fw-bold">Wavebreak Premium.</h1>
            <p>
              Our teams are constantly creating, coding and collaborating so we
              can bring you the very best in premium photography, authentic
              imagery, customisable templates, graphic design, 4k, slow motion
              video and much more.
            </p>
            <div className="d-flex justify-content-center gap-4">
              <ButtonLink text="Seguir" size="m" />
              <ButtonLink text="Compartir" size="m" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
