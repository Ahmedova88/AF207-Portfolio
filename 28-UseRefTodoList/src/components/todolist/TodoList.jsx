import React, { useEffect, useRef, useState } from 'react'
import style from './TodoList.module.css'
import { FaRegTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const TodoList = () => {

    let inputRef = useRef(null)
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || [])
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [currentEditId, setCurrentEditId] = useState(null)
    const [editValue, setEditValue] = useState("")


    let addTodo = (e) => {
        e.preventDefault()

        let todo = inputRef.current.value
        if (!todo) {
            toast.error("Boş task əlavə etmək olmaz!")
            return
          }

        let newTodo = {
            id: Date.now(),
            todo,
            completed: false
        }

        setTodos([...todos, newTodo])
        toast.success("Yeni task əlavə olundu!")
    }

    const toggleComplete = (id) => {
        const updatedTodos = todos.map(todo =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
        setTodos(updatedTodos)
        toast.info("Task dəyişdirildi!")
      }

      let deleteTodo = (id) => {
        let index = todos.findIndex((todo) => todo.id === id)
        
        if (index !== -1 && todos[index].completed) {
          let updatedTodos = [...todos]
          updatedTodos.splice(index, 1)
          setTodos(updatedTodos)
          toast.warn("Task silindi!")
        } 
      }
      

    let editTodo = (id, value) => {
        setIsModalOpen(true)
        setCurrentEditId(id)
        setEditValue(value)
    }
    
    let saveEditedTodo = () => {
        if (!editValue.trim()) {
          toast.error("Boş mətnlə dəyişmək olmaz!")
          return
        }
      
        let index = todos.findIndex(todo => todo.id === currentEditId)
      
        if (index !== -1) {
          let updatedTodos = [...todos]
          updatedTodos[index].todo = editValue
          setTodos(updatedTodos)
          setIsModalOpen(false)
          setEditValue("")
          toast.success("Task uğurla dəyişdirildi!")
        } 
      }
      
    
      let deleteAll = () => {
        if (todos.length === 0) {
          toast.info("Task siyahısı boşdur.")
          return
        }
        setTodos([])
        toast.warn("Bütün tasklar silindi!")
      }

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
        inputRef.current.value = ""
    },[todos])

  return (
    <div className={style.todo_container}>
      <ToastContainer />
      <div>
        <form className={style.addTask} onSubmit={addTodo}>
          {isModalOpen && (
            <div className={style.modal}>
              <div className={style.modalContent}>
                <h3>Edit Todo</h3>
                <input
                  type="text"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  className={style.modalInput}
                />
                <button onClick={saveEditedTodo} className={style.modalSaveBtn}>Save</button>
                <button onClick={() => setIsModalOpen(false)} className={style.modalCloseBtn}>Cancel</button>
              </div>
            </div>
          )}

          <input
            ref={inputRef}
            id={style.taskInput}
            type="text"
            placeholder='Add your task'
          />
          <button id={style.addBtn} type='submit'>
            Add Todo
          </button>
          
        </form>
      </div>

      <div className={style.task}>
        <ul className={style.taskList}>
          {todos.map((item, index) => (
            <li
              className={style.listItem}
              key={item.id}
              style={{
                textDecoration: item.completed ? 'line-through' : 'none',
                color: item.completed ? 'green' : 'red'
              }}
            >
              <span className={style.task}>
                {index + 1}. {item.todo}
              </span>
              <div className={style.setting}>
                <button className={style.bttn} onClick={() => toggleComplete(item.id)}>
                  ✔
                </button>
                <div className={style.edit} onClick={() => editTodo(item.id, item.todo)}><FaEdit /></div>
                {item.completed && (
                  <div className={style.trash} onClick={() => deleteTodo(item.id)}><FaRegTrashAlt /></div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <button id={style.deleteAllBtn} type='button' onClick={deleteAll}>
            Delete All
          </button>
    </div>
  )
}

export default TodoList