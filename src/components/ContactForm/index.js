import React, { Fragment, useMemo, useContext } from 'react'
// el hook de useMemo sirve para comparar datos

// uso de react-hook-from 
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import CancelIcon from '@material-ui/icons/Cancel';

// Primero declaramos el hook de validacion para el schema: 
import useYupValidator from '../../hook/useYupValidator'

// contexto
import { MenuContext } from '../../context/MenuContext'


const ContactForm = () => {

    const { isForm, setIsForm } = useContext(MenuContext)

    const regPhone = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

        const SchemaContactForm = useMemo(() => 
            yup.object({
                name: yup.string().required("Requerido"),
                email: yup.string().email("Debe ingresar un correo valido").required("Requerido"),
                phone: yup.string().matches(regPhone, "Número no valido").required("Requerido")
            }),
            [regPhone]
        )

        const resolver = useYupValidator(SchemaContactForm)
        const {  register, handleSubmit, errors } = useForm({ resolver })

        // Manejador del onSubmit
        const onSubmit = (data, _) => {
            console.log(data)
            // Con target.reset vaciamos el from 
            // e.target.reset()
            setIsForm(null)

        }
        
    return (
        <Fragment>
         { isForm &&
            <div className="modal--form--backdrop">
            
            <section className="center--into--divs">
            <div className="container--form--main">
                <h2><button onClick={() => setIsForm(null)}><CancelIcon style={{ color: "#2569ce" }} fontSize="large" /></button></h2>
                {/* componente de form de react hook from */}
                <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    className={ errors?.name?.message ? "container--form--input--error" : "container--form--input"}
                    type="text"
                    // placeholder="Ingresa tu nombre completo"
                    placeholder ="Nombre Completo"
                    name="name"
                    ref={register}
                />
                {errors?.name?.message && <span className="error">{errors?.name?.message}</span>}
                <input
                    className={errors?.email?.message ? "container--form--input--error" : "container--form--input"}
                    type="text"
                    name="email"
                    placeholder="Email"
                    ref={register}
                />
                {errors?.email?.message && <span className="error">{errors?.email?.message}</span>}
                <input 
                    className={errors?.phone?.message ? "container--form--input--error" : "container--form--input"}
                    name="phone"
                    placeholder="Teléfono"
                    ref={register}
                />
                {errors?.phone?.message && <span className="error">{errors?.phone?.message}</span>}
                <textarea
                    className="form--box--msg"
                    name="msgbox"
                    type="text"
                    rows="4"
                    cols="5"
                    placeholder="¿En qué podemos ayudarle?"
                    ref={register}
                />
                
                
            <div className="center--into--divs">
            <button className="btn--submit--contact" type="submit">Enviar</button>            
            </div>
            </form>

            </div>
            </section>
            </div>
        }
        </Fragment>
    )

    // corchete principal 
}


export default ContactForm
