
import { useState } from 'react';
import './App.css';
import UserForm from './components/Form/UserForm';
import UserList from './components/Form/UserList'; 


function App() {

  const [userDataList, setUserDataList] = useState([])


  const AddUser = (userData) => {
    setUserDataList((prevState) => {
      return [
        ...prevState,
        userData,        
      ]}
    )
  }

  return (
    <div>
      <UserForm onAddUser = {AddUser}/>
      {/* TO DO: condicionar que si el array esta vacio no renderee el userList sino un texto de "Vacio" o algo similar */}
      <UserList userDataList={userDataList}/> 
    </div>
  );
}

export default App;
