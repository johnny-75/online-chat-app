import React from 'react';
import Dashboard from "./Dashboard"
import Store from "./store"
import {ChatBoard} from "./Dashboard";

function App() {
    return (
        <Store>
            <ChatBoard>
                <div className="App">
                    <Dashboard/>
                </div>
            </ChatBoard>
        </Store>
    );
}

export default App;
