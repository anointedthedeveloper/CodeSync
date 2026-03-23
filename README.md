# CodeSync

A real-time collaborative code editor enabling multiple developers to write, edit, and debug code simultaneously with live synchronization.

## Features

- 🔄 **Real-time Synchronization** - Instant code sync across all connected users using CRDT (Yjs)
- 👥 **Multi-user Editing** - Multiple developers can edit the same file without conflicts
- 🎨 **Syntax Highlighting** - Support for 50+ programming languages
- ⚡ **Live Error Detection** - Real-time syntax validation and error feedback
- 🖱️ **Remote Cursor Tracking** - See where other users are typing
- 🚀 **Code Execution** - Run code snippets with live output
- 🌙 **Dark Mode** - Eye-friendly interface with multiple themes
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile

## Tech Stack

### Frontend
- **React** - UI framework
- **Monaco Editor** - Advanced code editor
- **Yjs** - Conflict-free replicated data type (CRDT)
- **Socket.io** - Real-time WebSocket communication
- **Tailwind CSS** - Styling

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **WebSocket** - Real-time communication
- **PostgreSQL** - Data persistence
- **Redis** - Caching and pub/sub

### DevOps
- **Docker** - Containerization
- **Docker Compose** - Local development

## Getting Started

### Prerequisites
- Node.js v18+
- npm or yarn
- PostgreSQL
- Redis

### Installation

```bash
# Clone the repository
git clone https://github.com/anointedthedeveloper/CodeSync.git
cd CodeSync

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env

# Start development servers
npm run dev
```

### Development

```bash
# Frontend (runs on http://localhost:3000)
cd frontend && npm start

# Backend (runs on http://localhost:8080)
cd backend && npm start

# With Docker
docker-compose up -d
```

## Architecture

```
CodeSync/
├── frontend/           # React application
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── hooks/
│   └── package.json
├── backend/            # Node.js/Express server
│   ├── src/
│   │   ├── routes/
│   │   ├── controllers/
│   │   └── models/
│   └── package.json
├── docker-compose.yml
└── README.md
```

## How It Works

### Real-time Synchronization
CodeSync uses **Yjs**, a high-performance CRDT library, to handle real-time collaboration without server-side conflict resolution:

1. Each user maintains a local copy of the document
2. Edits are applied locally first (instant feedback)
3. Changes are broadcast to other users via WebSocket
4. CRDT automatically resolves conflicts mathematically
5. All users converge to the same state

### WebSocket Communication
- **Edit events** - Code changes propagate instantly
- **Cursor tracking** - User cursor positions shared in real-time
- **User presence** - Online/offline status updates
- **Room management** - Isolate collaboration per session

## Usage

### Creating a Session
1. Visit `CodeSync`
2. Click "New Session"
3. Share the session link with collaborators
4. Start coding together!

### Selecting Language
- Use the language dropdown to switch between supported languages
- Syntax highlighting updates automatically

### Executing Code
- Click the "Run" button to execute code
- View output in the console panel
- Errors are displayed with line numbers

## API Documentation

### WebSocket Events

**Client → Server:**
```javascript
// Join a room
{ type: 'join-room', roomId, userId, userName }

// Send edit
{ type: 'edit', roomId, delta, userId }

// Update cursor
{ type: 'cursor-move', roomId, userId, position }
```

**Server → Client:**
```javascript
// Broadcast edit
{ type: 'edit', userId, delta, timestamp }

// User joined
{ type: 'user-joined', userId, userName }

// Cursor update
{ type: 'cursor-move', userId, position }
```

## Performance

- **Latency**: <100ms for typical edits
- **Scalability**: Supports 100+ concurrent users per room
- **Memory**: Efficient CRDT implementation
- **Network**: Minimal bandwidth with delta compression

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Roadmap

- [ ] User authentication & auth0 integration
- [ ] Code commenting & annotations
- [ ] Code diff/version history
- [ ] AI-powered code suggestions
- [ ] Video/audio chat integration
- [ ] Custom themes & keybindings
- [ ] Mobile app (React Native)
- [ ] Plugin system

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

**Anointed Agunloye** ([@anointedthedeveloper](https://github.com/anointedthedeveloper))

- 🔗 [Dev.to](https://dev.to/anointedthedeveloper)
- 🔗 [iCodeThis](https://icodethis.com/Anointedthedev)
- 📧 anointedthedeveloper@gmail.com

## Acknowledgments

- [Yjs](https://docs.yjs.dev/) - CRDT library
- [Monaco Editor](https://microsoft.github.io/monaco-editor/) - Code editor
- [Socket.io](https://socket.io/) - Real-time communication

---

**Made with ❤️ by Anointed Agunloye**
