
module.exports = (sequelize, type) => {
    return sequelize.define('user', {
        name:{ type: type.STRING},
        surname: { type: type.STRING},
        nick: { type: type.STRING},
        email: { type: type.STRING},
        password: { type: type.STRING},
        role: { type: type.STRING},
        image: { type: type.STRING},
    })
}