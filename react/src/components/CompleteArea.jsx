export function CompleteArea({
                                 todos,
                                 onReturnButtonClick
                             }) {
    return (
        <div className="complete-area">
            <p className="title">完了したTODO</p>
            <TodoList
                todos={todos}
                onReturnButtonClick={onReturnButtonClick}/>
        </div>
    )
}

function TodoList({
                      todos,
                      onReturnButtonClick
                  }) {
    return (
        <ul id="complete-list">
            {todos.map((todo) => (
                <li key={todo}>
                    <div className="list-row">
                        <p className="todo-item">{todo}</p>
                        <button onClick={() => onReturnButtonClick(todo)}>戻す</button>
                    </div>
                </li>
            ))}
        </ul>
    )
}
