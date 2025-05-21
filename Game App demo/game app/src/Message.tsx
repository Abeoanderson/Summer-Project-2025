function Message() {
    const name = 'Abe';
    if (name) 
        return <h1>Hello {name}</h1>
    return <h1>world</h1>
}

export default Message;