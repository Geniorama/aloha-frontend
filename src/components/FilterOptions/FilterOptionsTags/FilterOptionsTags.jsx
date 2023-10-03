import FilterOptionsTag from "./FilterOptionsTag";
import styles from "./FilterOptionsTags.module.css";
import {
  Color,
  Contributor,
  Location,
  Orientation,
  People,
  PointOfView,
  Portrait,
  Season,
} from "./FilterOptionsTagsIcons";

export default function FilterOptionsTags() {
  return (
    <div className={styles.FilterOptionsTags}>
      <FilterOptionsTag
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
      <FilterOptionsTag
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
      <FilterOptionsTag
        icon={Orientation}
        label="Orientación"
        items={[
          { items: ["Horizontal", "Cuadrada", "Vertical", "Panorámica"] },
        ]}
      />
      <FilterOptionsTag
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
      <FilterOptionsTag
        icon={Contributor}
        label="Contribuidor"
      ></FilterOptionsTag>
      <FilterOptionsTag icon={Color} label="Color"></FilterOptionsTag>
      <FilterOptionsTag icon={Location} label="Ubicación"></FilterOptionsTag>
      <FilterOptionsTag
        icon={Season}
        label="Estación y hora del día"
      ></FilterOptionsTag>
    </div>
  );
}
