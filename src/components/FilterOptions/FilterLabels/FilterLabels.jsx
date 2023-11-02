import FilterLabel from "./FilterLabel/FilterLabel";
import styles from "./FilterLabels.module.css";
import {
  Color,
  Contributor,
  Location,
  Orientation,
  People,
  PointOfView,
  Portrait,
  Season,
} from "./FilterLabelsIcons";
import closeIcon from "../../../../public/icons/Close-blue.svg";
import Image from "next/image";
export default function FilterLabels() {
  return (
    <div className={styles.labelsList}>
      <header className={styles.header}>
        <h6>Filtros.</h6>
        <Image src={closeIcon} alt="close-icon" />
      </header>
      <FilterLabel
        icon={Portrait}
        label="Retrato"
        items={[
          {
            items: [
              "Perfil",
              "Vertical más ancho",
              "Vertical",
              "Cuerpo entero",
            ],
          },
        ]}
      />
      <FilterLabel
        icon={PointOfView}
        label="Punto de vista"
        items={[
          { items: ["Aérea", "Plano"] },
          {
            label: "Ángulo de la cámara",
            items: ["Frente", "Desde arriba"],
          },
        ]}
      />
      <FilterLabel
        icon={Orientation}
        label="Orientación"
        items={[
          { items: ["Horizontal", "Cuadrada", "Vertical", "Panorámica"] },
        ]}
      />
      <FilterLabel
        icon={People}
        label="Gente"
        align="center"
        items={[
          {
            label: "Personas",
            items: ["Con personas", "Sin personas"],
          },
          {
            label: "Género",
            items: ["Cualquier género", "Mujer", "Hombre", "Hombre y mujer"],
          },
          {
            label: "Etnicidad",
            items: [
              "Africana",
              "Caucásica",
              "De Asia Oriental",
              "De Asia del Sur",
              "Hispánica",
            ],
          },
          {
            label: "Edad",
            items: [
              "Cualquier edad",
              "Bebé",
              "Niño",
              "Adolescente",
              "Joven adulto",
              "Adulto",
              "Mediana edad",
              "Senior",
            ],
          },
        ]}
      />
      <FilterLabel icon={Contributor} label="Contribuidor"></FilterLabel>
      <FilterLabel icon={Color} label="Color"></FilterLabel>
      <FilterLabel
        icon={Location}
        label="Ubicación"
        align="center"
        items={[{ items: ["Interior", "Exterior"] }]}
      />
      <FilterLabel
        icon={Season}
        label="Estación y hora del día"
        align="right"
        items={[
          {
            label: "Estación",
            items: ["Primavera", "Verano", "Otoño", "Invierno"],
          },
          {
            label: "Hora del día",
            items: ["Mañana", "Amanecer", "Tarde", "Atardecer", "Noche"],
          },
        ]}
      />
    </div>
  );
}
