export function InCompleteArea({
                                   todos,
                                   onCompleteButtonClick,
                                   onDeleteButtonClick
                               }) {
    return (
        <div className="incomplete-area">
            <p className="title">未完了のTODO</p>
            <TodoList
                todos={todos}
                onCompleteButtonClick={onCompleteButtonClick}
                onDeleteButtonClick={onDeleteButtonClick}/>
        </div>
    )
}

function TodoList({
                      todos,
                      onCompleteButtonClick,
                      onDeleteButtonClick
                  }) {
    return (
        <ul id="incomplete-list">
            {todos.map((todo) => (
                <li key={todo}>
                    <div className="list-row">
                        <p className="todo-item">{todo}</p>
                        <button onClick={() => onCompleteButtonClick(todo)}>完了</button>
                        <button onClick={() => onDeleteButtonClick(todo)}>削除</button>
                    </div>
                </li>
            ))}
        </ul>
    )
}
