const db = require('../data/db-config.js');

function find() {
    return db('todos');
};

function newTask(task) {
    return db('todos').insert(task);
};

module.exports = {
    find,
    newTask
}