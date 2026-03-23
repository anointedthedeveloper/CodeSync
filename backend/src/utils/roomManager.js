// roomManager.js

class RoomManager {
    constructor() {
        this.rooms = {};
    }

    createRoom(roomId) {
        if (!this.rooms[roomId]) {
            this.rooms[roomId] = [];
            return true; // Room created successfully
        }
        return false; // Room already exists
    }

    joinRoom(roomId, userId) {
        if (this.rooms[roomId]) {
            if (!this.rooms[roomId].includes(userId)) {
                this.rooms[roomId].push(userId);
                return true; // User joined successfully
            }
            return false; // User already in room
        }
        return false; // Room does not exist
    }

    leaveRoom(roomId, userId) {
        if (this.rooms[roomId]) {
            this.rooms[roomId] = this.rooms[roomId].filter(user => user !== userId);
            return true; // User left successfully
        }
        return false; // Room does not exist
    }

    getRoomUsers(roomId) {
        return this.rooms[roomId] || []; // Return empty array if room does not exist
    }

    deleteRoom(roomId) {
        if (this.rooms[roomId]) {
            delete this.rooms[roomId];
            return true; // Room deleted successfully
        }
        return false; // Room does not exist
    }
}

module.exports = RoomManager;