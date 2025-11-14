function delay(ms) {
    return new Promise(resolve => {
        setTimeout(() => resolve(), ms);

    });
}

delay(3000).then(() => alert('виконалось через 3 секунди'));

//2
const users = [
    { name: 'Mango', active: true },
    { name: 'Poly', active: false },
    { name: 'Ajax', active: true },
    { name: 'Lux', active: false },
];

const userToggleState = (allUsers, userName) => {
    return new Promise((resolve => {
        const updatedUsers = allUsers.map(user =>
           userName === userName ? {...user, active: !user.active} : user
        );
        resolve(updatedUsers)
    }))
}

let log = updatedUsers => console.log(updatedUsers);

userToggleState(users, 'Mango').then(log);