import React from "react";


const UserItem = (props) => {
    return (
        <li className={props.className}>
            <label>{props.name} </label>
            <label>({props.age} años)</label>
        </li>

    )
}


export default UserItem;