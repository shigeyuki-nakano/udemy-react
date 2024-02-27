export function InputArea({
                              onAddButtonClick,
                                onTextChange,
                              text
                          }) {
    return (
        <div className="input-area">
            <input onChange={onTextChange} value={text} placeholder="TODOを入力"/>
            <button onClick={onAddButtonClick}>追加</button>
        </div>
    )
}
