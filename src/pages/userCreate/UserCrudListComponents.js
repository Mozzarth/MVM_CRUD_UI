// import PropTypes from 'prop-types'
import React from 'react'

const UserCrudListComponents = (params) => {
    return (
        <>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Email</th>
                        <th scope="col">Telefono</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Anular</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="table-active">
                        <th scope="row">Moises</th>
                        <td>Caicedo</td>
                        <td>moisescaicedo15@gmail.com</td>
                        <td>3206758798</td>
                        <td><button><i className="Large material-icons">edit</i></button> </td>
                        <td><button><i className="Large material-icons">clear</i></button> </td>
                    </tr>
                </tbody>
            </table>

        </>
    )
}

// UserCrudListComponents.propTypes = {

// }

export default UserCrudListComponents

