HEY CHAT is a modern real-time messaging application developed by **LHC GROUP**. It offers real-time messaging, file sharing (images, videos, and documents), and AI-powered chatbot integration for automated responses when no active users are available.

---

## Features

### Core Features
- **Real-Time Messaging**: Send and receive messages instantly using WebSocket technology.
- **File Sharing**: Share images, videos, and other files easily.
- **AI Chatbot**: Integrated AI chatbot to handle user inquiries and provide automated responses.
- **Message History**: Persistent message storage for seamless synchronization across sessions.
- **User-Friendly Interface**: A clean and intuitive interface designed for both mobile and desktop devices.

### Advanced Features
- **Dark Mode Support**: Switch between light and dark themes for better usability.
- **Push Notifications**: Instant alerts for new messages.
- **End-to-End Encryption**: Secure your conversations with robust encryption.

---

## Installation

### Prerequisites
- **Backend**: Node.js (>=16.x), MongoDB
- **Frontend**: React Native CLI or Expo
- **Additional Tools**: Docker (optional for containerization)

---

### Steps to Run the Application

#### Backend
1. Clone the repository:
   ```bash
   git clone https://github.com/LHC-GROUP/hey-chat.git
   cd hey-chat/backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start MongoDB (ensure it's running locally or provide a connection URI).
4. Run the server:
   ```bash
   node server.js
   ```

#### Frontend
1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the application:
   ```bash
   npx react-native run-android # For Android
   npx react-native run-ios # For iOS
   ```

---

## Usage

1. Open the application on your device.
2. Sign in or create an account to start chatting.
3. Use the input box to send messages in real time.
4. Share images, videos, or files through the file-sharing feature.
5. Interact with the AI chatbot when no other users are online.

---

## Project Structure

```plaintext
hey-chat/
├── backend/
│   ├── server.js           # Backend server code
│   ├── models/             # Database models (e.g., Message schema)
│   └── package.json        # Backend dependencies
├── frontend/
│   ├── App.js              # Main React Native application
│   ├── components/         # Reusable UI components
│   ├── assets/             # Static assets like images
│   └── package.json        # Frontend dependencies
├── assets/                 # Logo and branding assets
└── README.md               # Project documentation
```

---

## Contributing

We welcome contributions to improve HEY CHAT! To contribute:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes and push them to your fork:
   ```bash
   git commit -m "Add a new feature"
   git push origin feature-name
   ```
4. Create a pull request explaining your changes.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Contact

For any inquiries or support, please contact **LHC GROUP**:
- Email: support@lhcgroup.com
- Website: [www.lhcgroup.com](https://www.lhcgroup.com)

---
