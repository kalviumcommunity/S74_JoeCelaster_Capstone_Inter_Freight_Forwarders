import React from 'react';

const App = () => {
    return (
        <div>
            <h1>Inter Freight Forwarders</h1>
            <h2>Login</h2>
            <label htmlFor="name">Name</label>
            <input type="text" className='name'/><br />
            <label htmlFor="email">Email</label>
            <input type="text" className='email'/>
        </div>
    );
}

export default App;
