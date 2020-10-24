import React, { Fragment, useContext } from 'react'

// materia ui
import ButtonBase from '@material-ui/core/ButtonBase';

// CONTEXT
import { MenuContext } from '../../context/MenuContext'
import { DataContext } from '../../context/DataContext'



const Navbar = () => {

    const { gtiData } = useContext(DataContext)

  const {  isDrop, menuDroplet } = useContext(MenuContext)

    return (
        <Fragment>
            <nav>

            {isDrop
            ? <h3 className="logo">Grupo Intecsa</h3> 
            : <ButtonBase
            onClick={() => {gtiData()}}
            >
            <h3 className="logo">Grupo Intecsa</h3>
            </ButtonBase>
            }
            
            {isDrop 
            ? <h3 className="logo">Menú</h3> 
            : <ButtonBase onClick={() => {menuDroplet()}}>
            <h3 className="logo">Menú</h3>
            </ButtonBase>
            }
            </nav>
            
        </Fragment>
    )
}

export default Navbar
