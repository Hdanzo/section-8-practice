import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './UserForm.module.css'

const UserForm = (props) => {
const [name, setName] = useState('');
const [age, setAge] = useState('');     

   

    const userNameChange = (event) => {
        setName(event.target.value);
    }

    const userAgeChange = (event) => {
        setAge(event.target.value);
    }


    const onSubmit = (event) => {
        event.preventDefault();
        if (name.trim().length === 0 || age.trim().length === 0) {
            console.log("No puede insertar campos vacíos")
            return;
        }

        if (+age < 1) {
            console.log("La edad debe ser mayor a 0")
            return;
        }
        const userData = {
            userName: name,
            userAge: age,
            id: Math.random().toString()
        }

        props.onAddUser(userData)
        setName('');
        setAge('');

    }

    return (
        <Card className={classes.input}>
            <form onSubmit={onSubmit}>
                <label >Nombre</label>
                <input
                    type="text"
                    value={name}
                    onChange={userNameChange} />
                <label>Edad</label>
                <input
                // TO DO: validar el campo que sea numero
                    type="number"
                    value={age}
                    onChange={userAgeChange} />
                <Button type="submit">Guardar</Button>
            </form>
      </Card>

    )
}

export default UserForm;








