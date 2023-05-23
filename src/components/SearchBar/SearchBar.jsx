import Form from 'react-bootstrap/Form';
import styles from './SearchBar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function SearchBar() {
    return (
        <form className={`${styles.SearchBar} rounded`}>
            <div className='form-group d-flex align-items-center'>
                <select name="" id="" className='form-select' style={{border: 'none'}}>
                    <option value="">Todas las imágenes</option>
                    <option value="">Todas las imágenes</option>
                </select>
                <span className={`${styles.Divider}`}></span>
                <div class="input-group">
                    <input type="search" className={`form-control ${styles.FormControl}`} placeholder="Buscar imágenes" aria-label="Buscar imágenes" style={{border: 'none'}} aria-describedby="basic-addon1" />
                    <span class="input-group-text" id="basic-addon1" style={{background:'none', border: 'none'}}>
                        <svg width="50" height="25" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_325_2463)">
                                <path d="M20.0001 25.3346C22.9456 25.3346 25.3334 22.9468 25.3334 20.0013C25.3334 17.0558 22.9456 14.668 20.0001 14.668C17.0546 14.668 14.6667 17.0558 14.6667 20.0013C14.6667 22.9468 17.0546 25.3346 20.0001 25.3346Z" fill="#222222" />
                                <path d="M15 3.3335L11.95 6.66683H6.66665C4.83331 6.66683 3.33331 8.16683 3.33331 10.0002V30.0002C3.33331 31.8335 4.83331 33.3335 6.66665 33.3335H33.3333C35.1666 33.3335 36.6666 31.8335 36.6666 30.0002V10.0002C36.6666 8.16683 35.1666 6.66683 33.3333 6.66683H28.05L25 3.3335H15ZM20 28.3335C15.4 28.3335 11.6666 24.6002 11.6666 20.0002C11.6666 15.4002 15.4 11.6668 20 11.6668C24.6 11.6668 28.3333 15.4002 28.3333 20.0002C28.3333 24.6002 24.6 28.3335 20 28.3335Z" fill="#222222" />
                            </g>
                            <defs>
                                <clipPath id="clip0_325_2463">
                                    <rect width="40" height="40" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </span>

                    <button className={`btn btn-primary ${styles.BtnSubmit}`} type="button" id="button-addon2">
                        <FontAwesomeIcon fontSize={'28px'} icon={faMagnifyingGlass} />
                    </button>
                </div>
            </div>
        </form>
    )
}
