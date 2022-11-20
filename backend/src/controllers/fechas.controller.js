const fechasCtrl = {};

const Fecha = require('../models/Fecha');


fechasCtrl.getFechas = async (req, res) => {
    const fechas = await Fecha.find();
    res.json(fechas);
};

fechasCtrl.createFecha = async (req, res) => {
    const { title,  content, date, author } = req.body;
    const newFecha = new Fecha({
        title,
        content,
        date,
        author
    });
    await newFecha.save();
    res.json('Fecha entrega agregada');
};
fechasCtrl.getFecha = async (req, res) => {
    const fecha = await Fecha.findById(req.params.id);
    res.json(fecha);
}

fechasCtrl.deleteFecha = async (req, res) => {
    await Fecha.findByIdAndDelete(req.params.id)
    res.json('Fecha recogida elimanda');
}

fechasCtrl.updateFecha = async (req, res) => {
    const { title, content, duration, date, author } = req.body;
    await Note.findByIdAndUpdate(req.params.id, {
        title,
        content,
        duration,
        author
    });
    res.json('Fecha actualizada');
}

module.exports = fechasCtrl;