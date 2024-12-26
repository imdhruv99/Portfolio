import './App.css';

import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from './components/context/ThemeContext';

import Web from './components/routes/web';

function App() {
    return (
        <Router>
            <ThemeProvider>
                <Web />
            </ThemeProvider>
        </Router>
    );
}

export default App;
