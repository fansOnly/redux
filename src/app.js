import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Index from './pages/index/index';
import Login from './pages/Login/index';

import Footer from './components/Footer';
import AddTodo from './redux/stores/AddTodo';
import VisibleTodoList from './redux/stores/VisibleTodoList';

import './app.scss';

const App = () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
)

// class App extends React.Component {
    // state = {
    //     loggedIn: false
    // }

    // render() {
    //     const { loggedIn } = this.state;
    //     return (
    //         <Route exact path='/' render={() => (
    //             loggedIn ? (
    //                 <Index />
    //             ) : (
    //                 <Login />
    //             )
    //         )}/>
    //     )
    // }
// }

export default App;