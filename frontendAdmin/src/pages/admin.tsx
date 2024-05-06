import { useState } from 'react'

import './admin.css'
import { NavLink } from 'react-router-dom';

function Admin() {


    return (
        <>
            <div className="main">
                <NavLink to="/CreateUser"> <button className='btn_create'> Create User</button>  </NavLink>


                <button className='btn_create'> Update User</button>
                <button className='btn_create'> Delete User</button>
                <button className='btn_create'>Retrive all the user</button>



            </div>

        </>
    )
}

export default Admin
