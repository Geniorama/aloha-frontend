import { AlohaIcon } from "../SvgImages/SvgImages";
import styles from "./SearchBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useRef } from "react";
import MenuSelect from "../MenuSelect/MenuSelect";
import default_categories from "@/data/default_categories";
import { useRouter } from "next/router";

export default function SearchBar({ size, query }) {
  const [categories] = useState(default_categories);
  const router = useRouter();
  const default_value = categories.find((item) => query === item.value);

  const [openMenu, setOpenMenu] = useState(false);
  const [searchCat, setSearchCat] = useState(default_value || categories[0]);
  const ref = useRef(null);
  const inputRef = useRef();

  const handleItemSelect = (selectedItem) => {
    setSearchCat(selectedItem);
    handleCloseButtonClick();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpenMenu(false);
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === "Escape") setOpenMenu(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  const handleClickOutside = () => {
    setOpenMenu(false);
  };

  const handleButtonClick = () => {
    setOpenMenu(!openMenu);
  };

  const handleCloseButtonClick = () => {
    setOpenMenu(false);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    router.push(
      `/search/${inputRef.current.value}?category=${searchCat.value}`
    );
  };

  return (
    <form
      onSubmit={onSubmit}
      className={`${styles.SearchBar} ${
        size == "small" && styles.Small
      } rounded`}
    >
      <div className="form-group d-flex align-items-center">
        <div className={`d-sm-none ${styles.SearchBar__select__mobile}`}>
          <span
            className={styles.IconImage}
            onClick={() => setOpenMenu(!openMenu)}
          >
            <AlohaIcon icon={"picture"} size={"25"} />
          </span>

          <span
            className={styles.IconSelectArrow}
            onClick={() => setOpenMenu(!openMenu)}
          >
            <FontAwesomeIcon icon={faChevronDown} fontSize={"12px"} />
          </span>

          {openMenu && (
            <div className={`${styles.MenuCategories}`} ref={ref}>
              <MenuSelect
                items={categories}
                defaultItem={default_value}
                onSelect={handleItemSelect}
              />
            </div>
          )}
        </div>
        <div
          className={`${styles.FieldSelect} d-none d-sm-flex`}
          id="btn-menu-toggle"
          onClick={handleButtonClick}
        >
          <span className={styles.FieldSelect__text}>{searchCat.title}</span>
          <span className={styles.FieldSelect__icon}>
            <FontAwesomeIcon icon={faChevronDown} fontSize={"12px"} />
          </span>
        </div>
        {openMenu && (
          <div
            className={`${styles.MenuCategories} ${styles.MenuCategoriesDesktop}  d-none d-sm-block`}
            ref={ref}
          >
            <MenuSelect
              items={categories}
              defaultItem={default_value}
              onSelect={handleItemSelect}
            />
          </div>
        )}
        <span className={`${styles.Divider}`}></span>
        <div className="input-group align-items-center">
          {size == "small" && (
            <span
              style={{ fontSize: "18px", color: "#979797" }}
              className="ms-3 d-inline-block"
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </span>
          )}
          <input
            type="search"
            ref={inputRef}
            className={`form-control ${styles.FormControl} ${
              size == "small" && "px-2"
            }`}
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
            <AlohaIcon icon={"camera-solid"} size={size == "small" ? 24 : 30} />
          </span>
          {size != "small" && (
            <button
              className={`btn btn-primary ${styles.BtnSubmit}`}
              type="submit"
              id="button-addon2"
            >
              <FontAwesomeIcon fontSize={"28px"} icon={faMagnifyingGlass} />
            </button>
          )}
        </div>
      </div>
    </form>
  );
}
