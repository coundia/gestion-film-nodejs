
const services = require('../services/MovieService');
 /** get all movie */
 function getAll(req, res, next) {
    try {
        res.json( services.getAll());
    } catch (err) {
        console.error(`Error `, err.message);
        next(err);
    }
}

 function getOne(req, res, next) {
     console.log(req.params);
    try {
        res.json( services.getOne(req.params.id));
    } catch (err) {
        console.error(`Error `, err.message);
        next(err);
    }
}

 function createOne(req, res, next) {
    try {
        res.json( services.createOne(req.body));
    } catch (err) {
        console.error(`Error `, err.message);
        next(err);
    }
}

 function updateOne(req, res, next) {
    try {
        res.json( services.updateOne(req.params.id, req.body));
    } catch (err) {
        console.error(`Error  `, err.message);
        next(err);
    }
}

 function deleteOne(req, res, next) {
    try {
        res.json( services.remove(req.params.id));
    } catch (err) {
        console.error(`Error`, err.message);
        next(err);
    }
}
/**liste des film depuis une annee */

/**
 *
 */
module.exports = {
    getAll,
    getOne,
    createOne,
    updateOne,
    deleteOne,
}
