import React, { useState, useEffect } from 'react';
import API from '../api';

const Wallet = () => {
    const [balance, setBalance] = useState(0);
    const [amount, setAmount] = useState('');

    useEffect(() => {
        const fetchWallet = async () => {
            try {
                const { data } = await API.get('/wallet');
                setBalance(data.balance);
            } catch (err) {
                alert('Failed to fetch wallet');
            }
        };
        fetchWallet();
    }, []);

    const handleTransaction = async (type) => {
        try {
            const endpoint = type === 'deposit' ? '/wallet/deposit' : '/wallet/withdraw';
            const { data } = await API.post(endpoint, { amount: Number(amount) });
            setBalance(data.balance);
            setAmount('');
        } catch (err) {
            alert(err.response.data.error || 'Transaction failed');
        }
    };

    return (
        <div className="flex flex-col items-center h-screen bg-gray-100">
            <div className="bg-white p-6 rounded shadow-md w-80 mt-10">
                <h2 className="text-xl font-bold mb-4">Wallet Balance</h2>
                <p className="text-2xl font-bold text-green-600 mb-4">
                    ₹{balance.toFixed(2)}
                </p>
                <input
                    type="number"
                    placeholder="Enter amount"
                    className="w-full p-2 border mb-4 rounded"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
                <div className="flex justify-between">
                    <button
                        onClick={() => handleTransaction('deposit')}
                        className="bg-blue-500 text-white p-2 rounded"
                    >
                        Deposit
                    </button>
                    <button
                        onClick={() => handleTransaction('withdraw')}
                        className="bg-red-500 text-white p-2 rounded"
                    >
                        Withdraw
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Wallet;
