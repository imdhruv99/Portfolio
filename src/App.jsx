import './App.css';

import { BrowserRouter as Router } from 'react-router-dom';

import Web from './components/routes/web';

function App() {
    return (
        <Router>
            <Web />
        </Router>
    );
}

export default App;
