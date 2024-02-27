import {useCallback, useState} from "react"
import {InputArea} from "./components/InputArea";
import {InCompleteArea} from "./components/InCompleteArea";
import {CompleteArea} from "./components/CompleteArea";
import {useTodoValidation} from "./hooks/useTodoValidation";


export function Todo() {
    const [text, setText] = useState("")
    const [incompleteTodos, setIncompleteTodos] = useState([])
    const [completeTodos, setCompleteTodos] = useState([])
    const {TodoError, todoValidation} = useTodoValidation()

    const onTextChange = useCallback((event) => {
        setText(event.target.value)
    }, [text])

    function onAddButtonClick() {
        if (text === "" || !todoValidation(text, incompleteTodos)) {
            return
        }

        setIncompleteTodos((todos) => [...todos, text])
        setText("")
    }

    function onCompleteButtonClick(todo) {
        const newIncompleteTodos = incompleteTodos
            .filter((incompleteTodo) => incompleteTodo !== todo)
        setIncompleteTodos(newIncompleteTodos)
        setCompleteTodos((completeTodo) => [...completeTodo, todo])
    }

    function onDeleteButtonClick(todo) {
        const newIncompleteTodos = incompleteTodos
            .filter((incompleteTodo) => incompleteTodo !== todo)
        setIncompleteTodos(newIncompleteTodos)
    }

    function onReturnButtonClick(todo) {
        const newCompleteTodos = completeTodos
            .filter((completeTodo) => completeTodo !== todo)
        setCompleteTodos(newCompleteTodos)
        setIncompleteTodos((incompleteTodo) => [...incompleteTodo, todo])
    }

    return (
        <>
            <InputArea
                text={text}
                onTextChange={onTextChange}
                onAddButtonClick={onAddButtonClick}
            />
            {TodoError}
            <InCompleteArea
                todos={incompleteTodos}
                onCompleteButtonClick={onCompleteButtonClick}
                onDeleteButtonClick={onDeleteButtonClick}
            />
            <CompleteArea
                todos={completeTodos}
                onReturnButtonClick={onReturnButtonClick}
            />
        </>
    )
}
