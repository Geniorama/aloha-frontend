import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function NextArrowButton({ className, onClick }) {
  return (
    <button className={className} onClick={onClick}>
      <div className="slick-arrow-icon">
        <FontAwesomeIcon
          size={"lg"}
          icon={faChevronRight}
          style={{ fontSize: "20px" }}
        />
      </div>
    </button>
  );
}
