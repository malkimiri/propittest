module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "Brandcust2019",
    DB: "tasksmanager",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };