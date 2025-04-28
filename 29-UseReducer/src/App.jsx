import React, { useReducer, useState, useEffect } from 'react';
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import './App.css';

const getLocalStorageUsers = () => {
  const storedUsers = localStorage.getItem('users');
  return storedUsers ? JSON.parse(storedUsers) : [];
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case "RESET":
      return {
        ...state,
        users: [],
      };
    case "DELETE_USER":
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload),
      };
    case "UPDATE_USER":
      return {
        ...state,
        users: state.users.map(user =>
          user.id === action.payload.id ? action.payload : user
        ),
      };
    default:
      return state;
  }
};

function App() {

  const [state, dispatch] = useReducer(reducer, { 
    users: getLocalStorageUsers() 
  });
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(state.users));
  }, [state.users]);

  const addUser = () => {
    if (name && surname) {
      const newUser = {
        id: Date.now(),
        name,
        surname
      };
      dispatch({ type: "ADD_USER", payload: newUser });
      setName('');
      setSurname('');
    }
  };

  const deleteAll = () => {
    dispatch({ type: "RESET" });
  };

  const deleteUser = (id) => {
    dispatch({type: "DELETE_USER", payload: id});
  };

  const openEditModal = (user) => {
    setCurrentUser(user);
    setIsModalOpen(true);
  };

  const updateUser = () => {
    if (currentUser.name && currentUser.surname) {
      dispatch({type: "UPDATE_USER", payload: currentUser});
      setIsModalOpen(false);
      setCurrentUser(null);
    }
  };

  return (
    <div className='app'>
      <h1>User Management</h1>

      <div className="form">
        <input 
          type="text" 
          placeholder='Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input 
          type="text"
          placeholder='Surname'
          value={surname}
          onChange={(e) => setSurname(e.target.value)} 
        />
        <button onClick={addUser}>Add</button>
        <button className='reset' onClick={deleteAll}>Delete All</button>
      </div>

      <ul className='user_list'>
        {state.users.map((user) => (
          <li key={user.id} className="user-item">
            {user.name} {user.surname}
            <div className="settings">
              <button onClick={() => openEditModal(user)}><FaEdit /></button>
              <button style={{backgroundColor: "red"}} onClick={() => deleteUser(user.id)}><FaTrashAlt /></button>
            </div>
          </li>
        ))}
      </ul>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Edit User</h2>
            <input 
              type="text"
              value={currentUser.name}
              onChange={(e) => setCurrentUser({...currentUser, name: e.target.value})}
            />
            <input 
              type="text"
              value={currentUser.surname}
              onChange={(e) => setCurrentUser({...currentUser, surname: e.target.value})}
            />
            <button onClick={updateUser}>Save</button>
            <button className="reset" onClick={() => setIsModalOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App;
