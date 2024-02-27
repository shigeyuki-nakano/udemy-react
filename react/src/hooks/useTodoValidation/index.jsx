import {useEffect, useState} from "react";
import { TODO_ERROR } from "./consts";
import { Error } from './Error'
import {createTodoValidation } from "./logic";


export function useTodoValidation() {
    const [error, setError] = useState(TODO_ERROR.DEFAULT)
    const todoValidation = createTodoValidation(setError)

    return {
        todoValidation,
        TodoError: <Error error={error}/>
    }
}
