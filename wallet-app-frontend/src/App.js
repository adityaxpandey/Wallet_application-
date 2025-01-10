import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import WalletPage from './pages/WalletPage';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

    const handleLogin = () => setIsLoggedIn(true);

    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        isLoggedIn ? (
                            <Navigate to="/wallet" />
                        ) : (
                            <LoginPage onLogin={handleLogin} />
                        )
                    }
                />
                <Route
                    path="/wallet"
                    element={isLoggedIn ? <WalletPage /> : <Navigate to="/" />}
                />
            </Routes>
        </Router>
    );
};

export default App;
