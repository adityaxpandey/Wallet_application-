****Wallet Application Setup and Usage Guide:****

The step-by-step instructions to set up and run the Wallet Application. The project consists of a backend (Node.js/Express) and a frontend (React.js with Tailwind CSS).

**Prerequisites:**
Make sure you have the following installed on your system:
1)Node.js (v16 or higher) 
2)npm (Node Package Manager, comes with Node.js)
3)MongoDB 

**Backend Setup:**
1. Clone the Repository.
2. Install npm packages.
3. Create a .env file in the backend directory and add the following:
   MONGO_URI=mongodb://localhost:27017/wallet-app
   JWT_SECRET=your_secret_key
   PORT=5000
Replace your_secret_key with a strong secret key for JWT authentication.
4. Start MongoDB
5. Run the Backend server

**Frontend Setup:**
1. Navigate to Frontend Directory
2. Install required npm packages
3. Configure Tailwind CSS
4. Start the React development server

**Application Structure:**

Backend:

Routes:
1. POST /api/auth/register: Register a new user.
2. POST /api/auth/login: Log in and receive a JWT.
3. GET /api/wallet: Fetch the wallet balance for the logged-in user.
4. POST /api/wallet/deposit: Deposit money into the wallet.
5. POST /api/wallet/withdraw: Withdraw money from the wallet.

Database:
MongoDB is used to store user and wallet data.
Collections:
1. users: Stores user credentials.
2. wallets: Stores wallet balances associated with users.

Frontend

Pages:
1. LoginPage: A login and registration page for user authentication.
2. WalletPage: Displays the wallet balance and allows deposit/withdrawal.

Components:
1. Auth: Handles user authentication (login/register).
2. Wallet: Displays wallet balance and manages transactions.

**How to Use:**

1. Register a User
Go to http://localhost:3000.
Create an account by entering a username and password.

2. Log In
Log in with your registered credentials.
You will be redirected to the wallet dashboard.

3. Manage Wallet
View your wallet balance.
Deposit or withdraw money using the provided input field and buttons.

**Future Improvements I plan to make:**

1. Implement additional features like transaction history.
2. Add user profile management.
3. Improve the UI with advanced Tailwind CSS components.

**Thought process and decisions made during development:**

During the development of the Wallet Application project, my thought process followed a structured approach to ensure modularity, functionality, and ease of use. 
I had to create a functional wallet application that performed certain functions which are:

1. Authentication: Secure user registration and login using JWT to manage sessions.
2. Wallet Management: CRUD operations for wallet accounts with unique identifiers and balance validations.
3. Transaction Module: Allowing deposits and withdrawals while ensuring no negative balances.
4. Frontend Design: Using React.js for a clean, responsive UI with Tailwind CSS for styling.
5. Database: MongoDB to manage user and wallet data, chosen for its scalability and flexibility.


