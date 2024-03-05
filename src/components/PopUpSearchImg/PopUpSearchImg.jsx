import Link from "next/link";
import stylesForm from "../../styles/Signin.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

export default function PopUpSearchImg({handleModal}) {
  return (
    <div
      style={{
        backgroundColor: "rgba(0,0,0,.8)",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: "9",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "1em",
      }}
    >
      <div
        style={{
          background: "white",
          width: "100%",
          maxWidth: "800px",
          color: "black",
          padding: "2em",
          position: "relative"
        }}
      >
        <h5 style={{ fontWeight: "bold", fontSize: "32px" }}>
          Buscar imágenes similares
        </h5>

        <button
            style={{
                position: "absolute", 
                top: '20px', 
                right: '20px', 
                backgroundColor: 'transparent',
                border: 'none'
            }}
            onClick={handleModal}>
            <FontAwesomeIcon icon={faClose} />
        </button>

        <div style={{
            background: '#FAFAFA',
            textAlign: 'center',
            padding: '3em',
            border: '1px dashed #AEAEAE',
            margin: '30px 0'
        }}>
          <p style={{fontWeight: '600', maxWidth: '400px', margin: 'auto', marginBottom: '1em'}}>
            Arrastra y suelta la imagen aquí o <br /> <Link href={'#'} style={{color: '#1A01A6'}}>haga clic aquí</Link> para seleccionar
            una imagen
          </p>
          <p>
          JPG, PNG, WEBP, BMP o TIFF * 10 máx
          </p>
        </div>

        <p style={{textAlign: 'center'}}>o</p>

        <div>
            <label className={stylesForm.formLabel} htmlFor="">Pega la URL de la imagen</label><br />
            <input style={{width: '100%'}} placeholder="URL" className={stylesForm.formInput} type="text" name="" id="" />
        </div>
      </div>
    </div>
  );
}
