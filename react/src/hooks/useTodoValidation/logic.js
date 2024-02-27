import {MAX_TEXT_LENGTH, MAX_TODO_LENGTH, TODO_ERROR} from "./consts";

export function createTodoValidation(setError) {
    return (text, todos) => {
        if (text.length > MAX_TEXT_LENGTH) {
            setError(TODO_ERROR.EXCEEDED_MAX_TEXT_LENGTH)
            return false
        }
        if (todos.length >= MAX_TODO_LENGTH) {
            setError(TODO_ERROR.EXCEEDED_MAX_TODO_LENGTH)
            return false
        }
        if(todos.find((todo) => todo === text) !== undefined) {
            setError(TODO_ERROR.DUPLICATE_TODO)
            return false
        }

        setError(TODO_ERROR.DEFAULT)
        return true
    }
}
