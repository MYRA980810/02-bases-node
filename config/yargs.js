const argv = require('yargs')
                .option('b',{
                    alias: 'base',
                    type: 'number',
                    default:  5,
                    describe: 'Este es la base de la tabla'
                })
                .option('l',{
                    alias: 'listar',
                    type: 'boolean',
                    default:  false,
                    describe: 'Este comando lista la tabla en consola'
                })
                .option('h',{
                    alias: 'hasta',
                    type: 'number',
                    default:  10,
                    describe: 'Este es el numero de veces por el que se multiplica el numero'
                })
                .check((argv, options) => {
                    if(isNaN(argv.b)){
                        throw 'La base tiene que ser un numero'
                    }
                    return true;
                })
                .argv;


module.exports = {argv}