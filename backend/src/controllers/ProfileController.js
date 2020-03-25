const connection = require('../database/connection');

module.exports = {
    async index(resqurest, response){
        const ong_id = request.authorization;

        const incidents = await connection('incidents')
        .where('ond_id', ong_id)
        .select('*');

        return response.json(incidents);
    }
}