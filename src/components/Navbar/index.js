import React, { Fragment } from 'react'

// materia ui
import ButtonBase from '@material-ui/core/ButtonBase';



const Navbar = () => {
    return (
        <Fragment>
            <nav>
                <h3 className="logo">Grupo Intecsa</h3>
               <ButtonBase><h3 className="logo">Menú</h3></ButtonBase>
            </nav>
        </Fragment>
    )
}

export default Navbar
