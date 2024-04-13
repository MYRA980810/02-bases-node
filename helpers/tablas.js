const fs = require('fs');
require('colors');

let salida = '';
let consola = '';

const creaTabla = async (base, listar = false, hasta = 10) => {

    try {


    for(let i = 1; i<=hasta; i++){
        salida += `${base} X ${i} = ${base * i}\n`
        consola += `${base} ${'X'.green} ${i} ${'='.green} ${base * i}\n`
    }

    if(listar){
        console.log('===================='.green);
        console.log(`    Tabla del ${base}`);
        console.log('===================='.green);
        console.log(consola)
    }

    fs.writeFileSync(`salida/tabla-del-${base}.txt`, salida);

    return `tabla-del-${base}.txt`

    } catch (error) {
        throw error;
    }

    
}

module.exports = {
    creaTabla
}