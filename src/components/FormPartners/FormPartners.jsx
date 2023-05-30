import styles from './FormPartners.module.css';
import ButtonLink from '../ButtonLink/ButtonLink';

export default function FormPartners() {
  return (
    <form action="">
        <div className="row">
            <div className="col-12 col-lg-6">
                <div className="form-group">
                    <label className={`mb-2 ${styles.LabelFormControl}`} htmlFor="">Nombres y Apellidos</label>
                    <input type="text" className="form-control" placeholder='Nombre completo'/>
                </div>
            </div>

            <div className="col-12 col-lg-6">
                <div className="form-group mt-4 mt-lg-0">
                    <label className={`mb-2 ${styles.LabelFormControl}`} htmlFor="">Correo electrónico</label>
                    <input type="email" className="form-control" placeholder='ejemplo@email.com'/>
                </div>
            </div>

            <div className="col-12 mt-5">
                <p className={`mb-3 ${styles.Caption}`}>Indícanos los medios en los que estás interesado</p>
                <div className={`row ${styles.RowChecks}`}>
                    <div className="col-12 col-md-4 col-lg-3 mb-4">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="fotos" defaultChecked />
                            <label className="form-check-label" htmlFor="fotos">
                                Fotos
                            </label>
                        </div>
                    </div>

                    <div className="col-12 col-md-4 col-lg-3 mb-4">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="editoriales"  />
                            <label className="form-check-label" htmlFor="editoriales">
                                Editoriales
                            </label>
                        </div>
                    </div>

                    <div className="col-12 col-md-4 col-lg-3 mb-4">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="musica"  />
                            <label className="form-check-label" htmlFor="musica">
                                Música
                            </label>
                        </div>
                    </div>

                    <div className="col-12 col-md-4 col-lg-3 mb-4">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="efectos-sonido"  />
                            <label className="form-check-label" htmlFor="efectos-sonido">
                                Efectos de sonido
                            </label>
                        </div>
                    </div>

                    <div className="col-12 col-md-4 col-lg-3 mb-4">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="video" />
                            <label className="form-check-label" htmlFor="video">
                                Video
                            </label>
                        </div>
                    </div>

                    <div className="col-12 col-md-4 col-lg-3 mb-4">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="ilustraciones" />
                            <label className="form-check-label" htmlFor="ilustraciones">
                                Illustraciones
                            </label>
                        </div>
                    </div>

                    <div className="col-12 col-md-4 col-lg-3 mb-4">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="vectores" />
                            <label className="form-check-label" htmlFor="vectores">
                                Vectores
                            </label>
                        </div>
                    </div>
                    
                    <div className="col-12">
                       <div className={`${styles.Submit} mt-3`}>
                        <ButtonLink text={'Enviar'} size={'s'} color={'white'} type={'submit'}/>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
  )
}
