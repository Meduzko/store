import React from 'react';
import { connect } from 'react-redux';
import Item from '../item/item';
import { openItemInPopup } from '../common/events';
import Event from '../../utils/dispatcher/EventDispatcher';
import { addArticle } from '../../actions/index';

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            films: []
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
            // .then(data => console.log(data))
            .then(data => this.setState({
                films: data
            }));

        this.subscribe();
    }

    subscribe() {
        // Event.on('showItemInPopup', (e) => {
        //     //   console.log(e.type, e.detail, e.detail.popupName);
        //     let details = e.detail;
        //     console.log(details.itemProps.target);
        //     console.log(details.itemProps.itemId);
        //
        // });
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
        const items = this.state.films.map((item) => <Item key={item._id} opts={item} rootProps={this.props}/>);
       // console.log(this.state);
        console.log(this.props);
        return (
            <div className="todo-list">
                {items}
            </div>
        )
    }
}
const mapStateToProps = state => ({
    articles: state.articles,
    users: state.users
});

const mapActionsToProps = {
    onAddArticle: addArticle
};


export default connect(mapStateToProps, mapActionsToProps)(Content);