import React , { useState , useEffect } from 'react'

import { Row , Container } from 'react-bootstrap'
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

import './ToDoForm.css'
 


const ToDoForm = (props) => {

   const [title , setTitle] = useState('')

      
   const CreateToDoItem = (event) => {
    event.preventDefault()
    props.onAddItem({title: title})  
   setTitle('')
   
}

    return (
        <div className="list-form">
            <Container>
                <Row>
               <InputText className="input-form" value={title} onChange={(event) => setTitle(event.target.value)} /> 
               <Button className="button-form" onClick={CreateToDoItem}>Add</Button>
                </Row>
            </Container>
        </div>
    )
}

export default ToDoForm