const { Schema, model } = require('mongoose');

const FechaSchema = new Schema(
    {
        title: String,
        dimensiones: String,
        peso: String,

        
        author: { type: String },
        date: Date
    }, {
        timestamps: true
    });

module.exports = model('Fecha', FechaSchema);