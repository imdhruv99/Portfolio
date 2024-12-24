import { Routes, Route } from 'react-router-dom';

import Home from '../pages/home';
import Education from '../pages/education';
import Experience from '../pages/experience';
import Projects from '../pages/projects';
import Contact from '../pages/contact';

import Footer from '../common/footer';

const Web = () => {
    return (
        <div className="App">
            <div className="App">
                <Routes>
                    <Route>
                        <Route
                            key={'/'}
                            path="/"
                            exact={true}
                            element={<Home />}
                        />
                        <Route
                            key={'/education'}
                            path="/education"
                            exact={true}
                            element={<Education />}
                        />
                        <Route
                            key={'/experience'}
                            path="/experience"
                            exact={true}
                            element={<Experience />}
                        />
                        <Route
                            key={'/projects'}
                            path="/projects"
                            exact={true}
                            element={<Projects />}
                        />
                        <Route
                            key={'/contact'}
                            path="/contact"
                            exact={true}
                            element={<Contact />}
                        />
                    </Route>
                </Routes>
            </div>
            <Footer />
        </div>
    );
};

export default Web;
