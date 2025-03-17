const fs = require('fs');

const registrar = (nombre, edad, tipo, color, enfermedad) => {
    try{
        const nuevaCita = {nombre, edad, tipo, color, enfermedad};
        let citas = [];
        citas.push(nuevaCita);

         fs.writeFileSync('./citas.json', JSON.stringify(citas) );

         console.log('Cita registrada');

    } catch (error){
        console.error('Error al registrar la cita:', error.message);
    }

}

const leer = () => {
    try {
        const citas = fs.readFileSync('./citas.json', 'utf8');
        JSON.parse(citas).forEach((cita) => {
            console.log(cita);        
        });
    } catch (error){
        console.error('Error al leer las citas:', error.message);
    }

}

module.exports = {registrar,leer};