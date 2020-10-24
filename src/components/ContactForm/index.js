import React, { Fragment, useState } from 'react'

// uso de react-hook-from 
import { useForm, Controller } from 'react-hook-form'
// usamos el controller para usar temas de Material Ui
import TextField from '@material-ui/core/TextField';
import { FormControl, Button } from '@material-ui/core';


const ContactForm = () => {



    const {  control, register, handleSubmit, watch, errors } = useForm()

    const onSubmit = (data) => console.log(data)


    return (
        <Fragment>
            <div className="modal--form--backdrop">
            
            <section className="center--into--divs">
            <div className="container--form--main">
                <h2>Contacto</h2>
                {/* componente de form de react hook from */}
                <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="text"
                    placeholder="Ingresa tu nombre completo"
                    name="nombre"
                    ref={register}
                />
                <input 
                    type="email"
                    name="email"
                    placeholder="Email"
                    ref={register}
                />
                <input 
                    name="telefono"
                    placeholder="telefono"
                    ref={register}
                />
                <input
                    name="msgbox"
                    type="text"
                    label="Hola"
                    ref={register}
                />
                
                
            
            <section className="center--into--divs">
            <Button type="submit" variant="contained" color="primary">Enviar</Button>
            </section>
               
                </form>





            </div>
            </section>
            </div>
        </Fragment>
    )
}


export default ContactForm
