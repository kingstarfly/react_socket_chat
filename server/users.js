const users = [];

const addUser = ({ id, name, room }) => {
    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();

    const exisitingUser = users.find(user => {
        user.room === room && user.name === name;
    });

    if (exisitingUser) {
        return { error: "Username is taken" };
    }

    const newUser = { id, name, room };

    users.push(newUser);

    return { newUser };
};

const removeUser = id => {
    const index = users.findIndex(user => {
        return user.id === id;
    });

    if (index !== -1) {
        return users.splice(index, 1)[0];
    }
};

const getUser = id => {
    return users.find(user => {
        return user.id === id;
    });
};

const getUsersInRoom = room => {
    return users.filter(user => user.room === room);
};

module.exports = { addUser, removeUser, getUser, getUsersInRoom };
