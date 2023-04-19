import React, {useState} from 'react';
import AddUser from './Components/User/AddUser'
import UsersList from './Components/User/UsersList'

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, {name: uName, age: uAge, id: Math.random().toString()},];  
    })
  }

  return (
    <>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList}/>
    </>
  );
}

export default App;
