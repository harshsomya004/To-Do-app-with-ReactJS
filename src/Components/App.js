import "../Styles/styles.css";
import React from 'react'
import TodoBoard from './TodoBoard'
import BackGround from '../Images/1.jpg';

export default function App() {
    return (
        <div style={{
            backgroundImage: `url(${BackGround})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }} className="App">
            <TodoBoard/>
        </div>
    );
}
