import UserCrudListComponents from './UserCrudListComponents'
import UserCrudForm from './UserCrudFormComponents'
import userService from './user.service'
// import PropTypes from 'prop-types'
import React from 'react'

const UserCrudComponent = () => {
    return (
        <>
            <UserCrudForm callback={saveUser} />
            <UserCrudListComponents delete={deleteUser} update={updateUser} />
        </>
    )
}

const saveUser = async (user) => {
    try {
        await userService.guardarUsuario(user)
    } catch (error) {
        console.log({ error })
        alert("Ocurrio un error al guardar usuario")
    }
}
const updateUser = async (user) => {
    try {
        await userService.updateUSer(user)
    } catch (error) {
        console.log({ error })
        alert("Ocurrio un error al actualizar usuario")
    }
}
const deleteUser = async (id) => {
    try {

    } catch (error) {
        console.log({ error })
        alert("Ocurrio un error al eliminar usuario")
    }
}
// UserCrudComponent.propTypes = {
//     value: PropTypes.number
// }

export default UserCrudComponent

