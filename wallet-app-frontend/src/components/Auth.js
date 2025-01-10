import React, { useState } from 'react';
import API from '../api';

const Auth = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const endpoint = isLogin ? '/auth/login' : '/auth/register';
            const { data } = await API.post(endpoint, { username, password });
            if (isLogin) {
                localStorage.setItem('token', data.token);
                onLogin();
            } else {
                alert('Registration successful! Please log in.');
                setIsLogin(true);
            }
        } catch (err) {
            alert(err.response.data.error || 'Something went wrong');
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded shadow-md w-80"
            >
                <h2 className="text-xl font-bold mb-4">
                    {isLogin ? 'Login' : 'Register'}
                </h2>
                <input
                    type="text"
                    placeholder="Username"
                    className="w-full p-2 border mb-4 rounded"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full p-2 border mb-4 rounded"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded"
                >
                    {isLogin ? 'Login' : 'Register'}
                </button>
                <button
                    type="button"
                    onClick={() => setIsLogin(!isLogin)}
                    className="text-blue-500 mt-2"
                >
                    {isLogin ? 'Create an account' : 'Already have an account?'}
                </button>
            </form>
        </div>
    );
};

export default Auth;
