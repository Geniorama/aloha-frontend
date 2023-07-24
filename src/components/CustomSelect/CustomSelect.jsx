import styles from "./CustomSelect.module.css";
import { AlohaIcon } from "../SvgImages/SvgImages";
import Select from "react-select";

const CustomSelect = ({ options, value, onChange }) => {
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      // Estilos personalizados para el control del campo de selección
      
      borderRadius: "4px",
      backgroundColor: state.isFocused ? "#f2f2f2" : "white",
    //   height: "70px",
      width: "200px",
    }),
    option: (provided, state) => ({
      ...provided,
      // Estilos personalizados para las opciones del campo de selección
      display: "flex",
      alignItems: "center",
      padding: "8px",
      backgroundColor: state.isSelected ? "#f2f2f2" : "white",
    }),
  };

  const customOptionRenderer = ({ label, icon }) => (
    <div>
      {icon && <AlohaIcon icon={icon} />}
      {label}
    </div>
  );
  return (
    <Select
      options={options}
      value={value}
      onChange={onChange}
      styles={customStyles}
      components={{ Option: customOptionRenderer }}
    />
  );
};

export default CustomSelect;
