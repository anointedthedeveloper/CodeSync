class Room {
    constructor(id, name, capacity) {
        this.id = id;
        this.name = name;
        this.capacity = capacity;
    }

    getDetails() {
        return `Room ID: ${this.id}, Name: ${this.name}, Capacity: ${this.capacity}`;
    }
}

module.exports = Room;