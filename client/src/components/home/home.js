import React from 'react';
import { connect } from 'react-redux';

export class Home extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>Home...</h1>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    productState: state.productState,
    userModel: state.userState,
    itemID: state.itemID,
    appState: state.appState
});

export default connect(mapStateToProps)(Home);