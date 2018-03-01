import * as Sequelize from 'sequelize';

const sequelize = new Sequelize(
    'dbName',
    'dbUserName',
    'dbUserPassword',
    {
        host: 'localhost',
        dialect: 'postgres'
    }
)

const db = {
    // Adding this as the context object
    sequelize,
    User: sequelize.import('./user')
}

Object.keys(db).map(modelName => {
    if ('associate' in db[modelName])
        db[modelName].associate(db)
})

export default db
