module.exports = (sequelize, Sequelize) => {
    const task = sequelize.define("task", {
        description: {
            type: Sequelize.STRING
        },
        // creationDate: {
        //     type: Sequelize.DATE
        // }
    });

    return task;
};