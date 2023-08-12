import { AlohaIcon } from "../SvgImages/SvgImages";
import styles from "./SearchBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useRef } from "react";
import MenuSelect from "../MenuSelect/MenuSelect";

export default function SearchBar({size}) {
  const [categories] = useState([
    {
      id: 1,
      title: "Todas las imágenes",
      icon: "picture",
      value: 'todas',
    },

    {
      id: 2,
      title: "Fotos",
      icon: "camera",
      value: "fotos",
    },

    {
      id: 3,
      title: "Vectores",
      icon: "vector",
      value: "vectores",
    },

    {
      id: 4,
      title: "Ilustraciones",
      icon: "drawing",
      value: "ilustraciones",
    },

    {
      id: 5,
      title: "Videos",
      icon: "video",
      value: "videos",
    },

    {
      id: 6,
      title: "Música",
      icon: "music",
      value: "musica",
    },

    {
      id: 7,
      title: "Gratis",
      icon: "star",
      value: "gratis",
    },

    {
      id: 8,
      title: "Efectos de sonido",
      icon: "sound",
      value: "efectos-sonido",
    },

    {
      id: 9,
      title: "Buscar por imagen",
      icon: "cameraFill",
      value: "buscar-imagen",
    },
  ]);

  const [openMenu, setOpenMenu] = useState(false);
  const [searchCat, setSearchCat] = useState(categories[0]);
  const ref = useRef(null);
  

  const handleItemSelect = (selectedItem) => {
    setSearchCat(selectedItem)
    handleCloseButtonClick()
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpenMenu(false);
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        setOpenMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
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
  
  return (
    <form className={`${styles.SearchBar} ${size == 'small' && styles.Small} rounded`}>
      <div className="form-group d-flex align-items-center">
        <div className={`d-sm-none ${styles.SearchBar__select__mobile}`}>
          <span
            className={styles.IconImage}
            onClick={() => setOpenMenu(!openMenu)}
          >
            <AlohaIcon icon={"picture"} size={"25"}/>
          </span>

          <span
            className={styles.IconSelectArrow}
            onClick={() => setOpenMenu(!openMenu)}
          >
            <FontAwesomeIcon icon={faChevronDown} fontSize={"12px"} />
          </span>

          {openMenu && (
            <div className={`${styles.MenuCategories}`} ref={ref}>
              <MenuSelect items={categories} />
            </div>
          )}
        </div>
        <div className={`${styles.FieldSelect} d-none d-sm-flex`} id="btn-menu-toggle" onClick={handleButtonClick}>
          <span className={styles.FieldSelect__text}>{searchCat.title}</span>
          <span className={styles.FieldSelect__icon}><FontAwesomeIcon icon={faChevronDown} fontSize={"12px"} /></span>
        </div>
        {openMenu && (
          <div className={`${styles.MenuCategories} ${styles.MenuCategoriesDesktop}  d-none d-sm-block`} ref={ref}>
            <MenuSelect items={categories} onSelect={handleItemSelect} />
          </div>
        )}
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
            <AlohaIcon icon={'camera-solid'} size={size == 'small' ? 24 : 30} />
          </span>
          {size != 'small' && (
            <button
              className={`btn btn-primary ${styles.BtnSubmit}`}
              type="button"
              id="button-addon2"
            >
              <FontAwesomeIcon fontSize={"28px"} icon={faMagnifyingGlass} />
            </button>
            )
          }
        </div>
      </div>
    </form>
  );
}
