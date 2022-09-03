import React from "react";
import UserItem from "./UserItem";


const UserList = (props) => {
    const userData = props.userDataList;


    return(
        <>
           {userData.map((userItem, index) => (
            <UserItem key={index}
            name={userItem.name}
            age={userItem.age}/> ))}
        </>
    )
}


export default UserList;