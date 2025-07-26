## REAL-TIME COLLABORATIVE DOCUMENT EDITOR

-**COMPANY** : CODTECH IT SOLUTIONS
- **NAME** : P HIMABINDU
- **INTERN ID** : CT06DG2711
- **DOMAIN** : FULL STACK WEB DEVELOPMENT
- **DURATION** : 6 WEEKS
- **MENTOR** : Neela Santhosh Kumar

## Real-Time Collaborative Document Editor
- **Project Overview**
- This project is a real-time collaborative document editor that allows multiple users to simultaneously edit the same document from different devices or locations.
- It mimics the core functionality of tools like Google Docs, supporting live updates across connected clients without the need to refresh the page.
- The editor uses WebSockets to provide low-latency synchronization between users, making collaboration smooth and instantaneous.
- This application was built as part of a learning project to explore real-time communication, frontend-backend integration, and web-based collaborative tools.
- It demonstrates my understanding of full-stack development, from frontend UI creation to backend socket handling, using modern technologies and best practices.

- **Tools & Technologies Used**
**Frontend**:
- React.js: For building a responsive and dynamic user interface.
- IO Client: To handle real-time communication from the frontend to the server.
- Quill.js: A rich-text editor that provides a clean interface for typing and formatting content.
**Backend**:
- Node.js with Express.js: For handling HTTP requests and setting up the WebSocket server.
- Socket.IO: Manages real-time bi-directional communication between the server and clients.
- In-Memory Storage: For this version, documents are temporarily stored in server memory (no database used).
**Version Control & Deployment**:
- Git & GitHub: For source control and publishing the project.
- .gitignore: To exclude unnecessary system files and directories like node_modules.

**Key Features**:
- Live Text Sync: As users type or edit text, the changes are broadcast in real-time to all connected clients.
- Document Rooms: Each document is identified by a unique documentId, allowing multiple rooms to exist in parallel.
- Auto-Join: Users automatically join the room for a document based on the URL path.
- Rich Text Editing: Supports formatting like bold, italic, headings, lists, and more.

**Use Cases**
- Collaborative Note-Taking: Multiple students or teammates can edit class or meeting notes in real time.
- Team Document Editing: Useful for remote teams working on shared reports or plans.
- Live Coding Interviews / Demos: Can be extended to support code syntax and sharing during interviews.
- Learning Tool: Great for understanding WebSocket functionality and real-time systems.

**Future Improvements**
- Add MongoDB or PostgreSQL integration to store documents permanently.
- Implement authentication and user access control.
- Enable version history and undo/redo functionality.
- Deploy using cloud services like Render, Vercel, or Heroku.
