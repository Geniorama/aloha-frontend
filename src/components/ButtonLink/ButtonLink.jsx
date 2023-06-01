import Link from "next/link";
import styles from "./ButtonLink.module.css";

export default function ButtonLink({ size, color, href, target, text, type }) {
  return (
    <>
      {type != "submit" ? (
        <Link
          href={href ? href : ""}
          target={target ? target : "_self"}
          className={`${styles.ButtonLink} ${styles[size]} ${styles[color]}`}
        >
          <span>{text}</span>
          <span className={styles.arrow}>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_48_55)">
                <path
                  d="M22.6668 9.33301L9.3335 22.6663"
                  stroke="#FF595A"
                  strokeWidth="2.66667"
                />
                <path
                  d="M10.6665 9.33301H22.6665V21.333"
                  stroke="#FF595A"
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
        </Link>
      ) : (
        <button
          type="submit"
          target={target ? target : "_self"}
          style={{ border: "none", background: "none" }}
          className={`${styles.ButtonLink} ${styles[size]} ${styles[color]}`}
        >
          <span>{text}</span>
          <span className={styles.arrow}>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_48_55)">
                <path
                  d="M22.6668 9.33301L9.3335 22.6663"
                  stroke="#FF595A"
                  strokeWidth="2.66667"
                />
                <path
                  d="M10.6665 9.33301H22.6665V21.333"
                  stroke="#FF595A"
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
        </button>
      )}
    </>
  );
}
