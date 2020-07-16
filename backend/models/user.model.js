module.exports = (sequelize, Sequelize) => {
    const user = sequelize.define("user", {
        email: {
            type: Sequelize.STRING
        },
        username: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        }
    });

    return user;
};