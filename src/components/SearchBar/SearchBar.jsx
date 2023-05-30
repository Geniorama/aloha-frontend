import Form from "react-bootstrap/Form";
import styles from "./SearchBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar() {
  return (
    <form className={`${styles.SearchBar} rounded`}>
      <div className="form-group d-flex align-items-center">
        <div className={`d-md-none ${styles.SearchBar__select__mobile}`}>
          <span className={styles.IconImage}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_193_7387)">
                <g clipPath="url(#clip1_193_7387)">
                  <path
                    d="M15 8H15.01"
                    stroke="#222222"
                    strokeWidth="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3 6C3 5.20435 3.31607 4.44129 3.87868 3.87868C4.44129 3.31607 5.20435 3 6 3H18C18.7956 3 19.5587 3.31607 20.1213 3.87868C20.6839 4.44129 21 5.20435 21 6V18C21 18.7956 20.6839 19.5587 20.1213 20.1213C19.5587 20.6839 18.7956 21 18 21H6C5.20435 21 4.44129 20.6839 3.87868 20.1213C3.31607 19.5587 3 18.7956 3 18V6Z"
                    stroke="#222222"
                    strokeWidth="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3 16.0001L8 11.0001C8.928 10.1071 10.072 10.1071 11 11.0001L16 16.0001"
                    stroke="#222222"
                    strokeWidth="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M14 14.0001L15 13.0001C15.928 12.1071 17.072 12.1071 18 13.0001L21 16.0001"
                    stroke="#222222"
                    strokeWidth="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_193_7387">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
                <clipPath id="clip1_193_7387">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>

          <span className={styles.IconSelectArrow}>
            <FontAwesomeIcon icon={faChevronDown} fontSize={"12px"}/>
          </span>
        </div>
        <select
          name=""
          id=""
          className="form-select d-none d-md-block"
          style={{ border: "none" }}
        >
          <option value="">Todas las imágenes</option>
          <option value="">Todas las imágenes</option>
        </select>
        <span className={`${styles.Divider}`}></span>
        <div className="input-group">
          <input
            type="search"
            className={`form-control ${styles.FormControl}`}
            placeholder="Buscar imágenes"
            aria-label="Buscar imágenes"
            style={{ border: "none" }}
            aria-describedby="basic-addon1"
          />
          <span
            className="input-group-text d-none d-md-flex"
            id="basic-addon1"
            style={{ background: "none", border: "none" }}
          >
            <svg
              width="50"
              height="25"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_325_2463)">
                <path
                  d="M20.0001 25.3346C22.9456 25.3346 25.3334 22.9468 25.3334 20.0013C25.3334 17.0558 22.9456 14.668 20.0001 14.668C17.0546 14.668 14.6667 17.0558 14.6667 20.0013C14.6667 22.9468 17.0546 25.3346 20.0001 25.3346Z"
                  fill="#222222"
                />
                <path
                  d="M15 3.3335L11.95 6.66683H6.66665C4.83331 6.66683 3.33331 8.16683 3.33331 10.0002V30.0002C3.33331 31.8335 4.83331 33.3335 6.66665 33.3335H33.3333C35.1666 33.3335 36.6666 31.8335 36.6666 30.0002V10.0002C36.6666 8.16683 35.1666 6.66683 33.3333 6.66683H28.05L25 3.3335H15ZM20 28.3335C15.4 28.3335 11.6666 24.6002 11.6666 20.0002C11.6666 15.4002 15.4 11.6668 20 11.6668C24.6 11.6668 28.3333 15.4002 28.3333 20.0002C28.3333 24.6002 24.6 28.3335 20 28.3335Z"
                  fill="#222222"
                />
              </g>
              <defs>
                <clipPath id="clip0_325_2463">
                  <rect width="40" height="40" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>

          <button
            className={`btn btn-primary ${styles.BtnSubmit}`}
            type="button"
            id="button-addon2"
          >
            <FontAwesomeIcon fontSize={"28px"} icon={faMagnifyingGlass} />
          </button>
        </div>
      </div>
    </form>
  );
}
