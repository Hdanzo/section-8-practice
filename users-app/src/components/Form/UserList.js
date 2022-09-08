import React from "react";
import Card from "../UI/Card";
import UserItem from "./UserItem";
import classes from "./UserList.module.css"


const UserList = (props) => {
    const userData = props.userDataList;
    console.log(userData)

    return (
        <Card className={classes.users}>
                <ul>
                    {userData.map((item) =>
                        <UserItem
                            key={item.id}
                            name={item.userName}
                            age={item.userAge}
                        />
                    )}
                </ul>
        </Card>
    );
};


export default UserList;