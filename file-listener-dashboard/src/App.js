import React from 'react';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
        return (
                <Router>
                        <Layout>
                                <Routes>
                                        <Route path="/" element={<Dashboard />} />
                                        {/* Add more routes here */}
                                </Routes>
                        </Layout>
                </Router>
        );
}

export default App;
