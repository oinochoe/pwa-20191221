import React from 'react';
import ReactDOM from 'react-dom';
import './assets/scss/style.scss';

const App = () => (
    <>
        <div className='game'></div>
        <div className='score'>0</div>
        <div className='instructions'>Click (or press the spacebar) to place the block</div>
        <div className='game-over'>
            <h2>Game Over</h2>
            <p>You did great, you're the best.</p>
            <p>Click or spacebar to start again</p>
        </div>
        <div className='game-ready'>
            <div className='start-button'>Start</div>
            <div></div>
        </div>
    </>
);

ReactDOM.render(<App />, document.querySelector('.container'));

if ('serviceWorker' in navigator) {
    // 서비스 워커 지원하지 않는 브라우저 체크
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js');
    });
}
