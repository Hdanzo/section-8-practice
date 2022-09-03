
import { useState } from 'react';
import './App.css';
import UserForm from './components/Form/UserForm';
import UserList from './components/Form/UserList';


function App(props) {

  const [userDataList, setUserDataList] = useState([])


  const AddUser = (userData) => {
    setUserDataList((prevState) => {
      return [
        ...prevState,
        userData
      ]
    }
    )

  }
  console.log(userDataList)


  return (
    <div className="App">
      <UserForm onAddUser = {AddUser}/>
      <UserList userDataList={userDataList}/>
    </div>
  );
}

export default App;
