import React , { useState , useEffect } from 'react'

import { Row , Col, Container } from 'react-bootstrap'

import ToDoForm from './ToDoForm';
import './ToDoList.css'
import './App.css'


const ToDoList = () => {

    const getLocalStorage = () => {
        let Items = localStorage.getItem('Items')
        if(Items){
            return (Items = JSON.parse(localStorage.getItem('Items')))
        } else {
            return []
        }
    }

    const [Items , setItems] = useState(getLocalStorage())

    useEffect(() => {
        localStorage.setItem('Items', JSON.stringify(Items))
    },[Items])

    const AddToDoHandler = (item) => {
      setItems((state) => {
        return [ 
            ...state , {
                id:Math.random().toString(),
                checked:false,
                ...item        
            } 
        ]
      }
    )     
 }

    const removeTodoHandler = (id) => {
       const newItems = Items.filter((item) => item.id !== id)
        setItems(newItems)
    }
 
   const handleChange = (id) => {
    const newTodos = Items.map((todo) =>{
        if(todo.id === id)
            return {...todo, checked:true}
            return todo
        
    })
    setItems(newTodos)

   }

    return (

        <div className="todo-list ">
          <h2 className="text-center py-4 header">TODO LIST</h2>
       <ToDoForm onAddItem={AddToDoHandler} />
     
               {Items.map((i) => {       
                   return (      
                 <Container>
                       <Row className="todo-list">
                           <Col xs={8}>
                           <p classname="todo-name">{i.title}</p>    
                           </Col>

                           <Col xs={2}>
                             <label className="todo-done">
                            <input type="checkbox"
                             checked={i.checked} 
                             onChange={() => handleChange(i.id)}/>   
                           </label>
                           </Col>

                           <Col xs={2}>
                           <span><i onClick={() => removeTodoHandler(i.id)} className="bi bi-trash todo-remove"></i></span>
                           </Col>                           
                       </Row>      
                       </Container>
                   )              
               })}
          
        </div>
    )
}

export default ToDoList