import {MAX_TEXT_LENGTH, MAX_TODO_LENGTH, TODO_ERROR} from "./consts";

export function Error({error}) {
    if(error === TODO_ERROR.DEFAULT) {
        return
    }

    return <div className="error">{createErrorText(error)}</div>
}

function createErrorText(error) {
    if(error === TODO_ERROR.EXCEEDED_MAX_TODO_LENGTH){
        return `TODOの許容数${MAX_TODO_LENGTH}を超えています`
    }
    if(error === TODO_ERROR.EXCEEDED_MAX_TEXT_LENGTH) {
        return `テキストの許容数${MAX_TEXT_LENGTH}を超えています`
    }
    if(error === TODO_ERROR.EMPTY_VALUE) {
        return "テキストが空です"
    }
    if(error === TODO_ERROR.DUPLICATE_TODO) {
        return "同じTODOが登録されています"
    }
}
