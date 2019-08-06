import React from 'react';
import Item from '../item/item';

class Content extends React.Component {
    constructor() {
        super();
        this.state = {
            name: []
        };
    }

    componentDidMount = () => {
        // fetch("https://picsum.photos/v2/list")
        //     .then(response => response.json())
        //     .then(data => this.setState({
        //         name: data
        //     }));
        // .then(data => console.log(data));

        fetch("http://localhost:5000/data/users")
            .then(response => response.json())
            .then(data => this.setState({
                name: data
            }));
    }

    // handleChange(id) {
    //     this.setState(prevState => {
    //         const updatedTodos = prevState.todos.map(todo => {
    //             if (todo.id === id) {
    //                 todo.completed = !todo.completed
    //             }
    //             return todo
    //         });
    //         return {
    //             todos: updatedTodos
    //         }
    //     })
    // }

    render() {
      //  const images = this.state.images.map(image => <Image key={image.id} image={image} />);
        const items = this.state.name.map(item => <Item key={item.id} text={item.name} />);
        return (
            <div className="todo-list">
               {items}
            </div>
        )
    }
}

export default Content;