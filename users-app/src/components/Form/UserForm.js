import React, { useState } from 'react';

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
    const userData = {
        userName:name,
        userAge: age
    };

    props.onAddUser(userData)
   
    
}

return (
        <form  onSubmit={onSubmit}>
            <label>Nombre</label>
            <input type="text" value={name} onChange={userNameChange}/>
            <label>Edad</label>
            <input type="text" value={age} onChange={userAgeChange}/>
            <button type="submit">Guardar</button>
        </form>

)
}

export default UserForm;








