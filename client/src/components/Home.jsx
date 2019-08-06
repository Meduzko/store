import React from 'react';

// const formatName = user => `${user.firstName} ${user.lastName}`;
//
const user = {
  firstName: 'John',
  lastName: 'Doe'
};

const Home = () => (
    <div>
        <h1>Hello, {user.firstName} {user.lastName}</h1>
    </div>
)


export default Home;