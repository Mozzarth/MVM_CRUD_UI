import React, { Fragment, useState } from 'react'
import { saveUser } from './UserCrudPage'
// import PropTypes from 'prop-types'
function UserCrudFormComponents({ setUser }) {

    const initialValue = { nombre: "", apellido: "", email: "", phoneNumber: "" }
    const [values, setValues] = useState(initialValue)


    const handleSubmit = async (event) => {
        event.preventDefault()
        saveUser(values)
            .then(u => setUser({ ...values }))
            .catch(ex => ex)
    }
    const handleInputChange = (event) => {
        const { name, value } = event.target
        setValues({ ...values, [name]: value })
    }
    return (
        <>
            <form className="container p-4" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Nombre</label>
                    <div className="col-sm-10">
                        <input onChange={handleInputChange} type="text" className="form-control-plaintext" name="nombre" placeholder="">
                        </input>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="apellidp" className="col-sm-2 col-form-label">Apellido</label>
                    <div className="col-sm-10">
                        <input onChange={handleInputChange} type="text" className="form-control-plaintext" name="apellido" placeholder="">
                        </input>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input onChange={handleInputChange} type="text" className="form-control-plaintext" name="email" placeholder="email@example.com">
                        </input>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Telefono</label>
                    <input onChange={handleInputChange} type="number" min="1000000000" max="9999999999" className="form-control" name="telefono" aria-describedby="emailHelp" placeholder="Enter email" >
                    </input>
                    <small name="emailHelp" className="form-text text-muted">Numero telefonico 10</small>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}

// UserCrudFormComponents.propTypes = {

// }

export default UserCrudFormComponents

