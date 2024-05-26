const Usuario = require('../models/Usuario');
const Diario = require('../models/Diario');


// @see https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#limits-and-pagination
// @see https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#simple-select-queries
// Esta ruta es para listar todos los usuarios registrados
exports.listarDiario = async(req, res) => {
    const { usuario_id } = req.body;
    try{
        const diario_listar = await Diario.findAll({ where: { usuario_id }, limit: 15});
        res.status(201).json(diario_listar);
    } catch(err){
        res.status(404).json({ err });
    }
}

// Esta ruta es para ver los datos de un diario registrado
exports.verDiario = async (req, res) => {
    const { id } = req.params;
    try {
        const diario_ver = await Diario.findOne({ where: { id }});
        res.status(201).json(diario_ver);
    } catch(err){
        res.status(404).json({ err });
    }
}

// Esta ruta es para crear o registrar un nuevo diario
exports.crearDiario = async (req, res) => {
    const { titulo, contenido, usuario_id } = req.body;
    try{
        const diario_crear = await Diario.create({ titulo, contenido, usuario_id });
        res.status(201).json(diario_crear);
    }catch(err){
        res.status(404).json({ err });
    }
}

// Esta ruta es para editar o modificar un diario registrado
exports.modificarDiario = async (req, res) => {
    const { id } = req.params;
    const { titulo, contenido, usuario_id } = req.body;
    try{
        const diario_modificar = await Diario.update({ titulo, contenido, usuario_id }, { where: { id } });
        res.status(201).json(diario_modificar); 
    } catch(err){
        res.status(404).json({ err });
    }
}

// Esta ruta es para eliminar un diario registrado
exports.eliminarDiario = async (req, res) => {
    const { id } = req.params;
    try{
        const diario_eliminar = await Diario.destroy({ where: { id }});
        res.status(201).json(diario_eliminar);
    } catch(err){
        res.status(404).json(err);
    }
}