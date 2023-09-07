import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

export default function PrevArrowButton({ className, onClick }) {
  return (
    <button className={className} onClick={onClick}>
      <div className="slick-arrow-icon">
        <FontAwesomeIcon
          size={"lg"}
          icon={faChevronLeft}
          style={{ fontSize: "20px" }}
        />
      </div>
    </button>
  );
}
