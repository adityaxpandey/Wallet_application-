const express = require('express');
const Wallet = require('../models/Wallet');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// Get Wallet Balance
router.get('/', authMiddleware, async (req, res) => {
    const wallet = await Wallet.findOne({ user: req.user.id });
    res.json(wallet);
});

// Deposit
router.post('/deposit', authMiddleware, async (req, res) => {
    const { amount } = req.body;
    if (amount <= 0) return res.status(400).json({ error: 'Invalid amount' });

    const wallet = await Wallet.findOneAndUpdate(
        { user: req.user.id },
        { $inc: { balance: amount } },
        { new: true }
    );
    res.json(wallet);
});

// Withdraw
router.post('/withdraw', authMiddleware, async (req, res) => {
    const { amount } = req.body;
    if (amount <= 0) return res.status(400).json({ error: 'Invalid amount' });

    const wallet = await Wallet.findOne({ user: req.user.id });
    if (wallet.balance < amount) return res.status(400).json({ error: 'Insufficient balance' });

    wallet.balance -= amount;
    await wallet.save();
    res.json(wallet);
});

module.exports = router;
