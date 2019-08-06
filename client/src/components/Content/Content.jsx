import React from 'react';
import Card from '../Card/Card';
import Image from '../Image/Image';
import todosData from '../../products';

class Content extends React.Component {
    constructor() {
        super();
        this.state = {
            images: []
        };
        // this.handleChange = this.handleChange.bind(this);
        // this.anotherOneFn = this.anotherOneFn.bind(this);
    }

    componentDidMount = () => {
      fetch("https://picsum.photos/v2/list")
      .then(response => response.json())
      .then(data => this.setState({
          images: data
      }));
            // .then(data => console.log(data));
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
       const images = this.state.images.map(image => <Image key={image.id} image={image} />);

        return (
            <div className="todo-list">
                {images}
            </div>
        )
    }
}

export default Content