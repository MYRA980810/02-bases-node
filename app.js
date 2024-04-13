const {creaTabla} = require('./helpers/tablas.js');
const {argv} = require('./config/yargs.js');


creaTabla(argv.b, argv.l, argv.h)
    .then(nombreDelArchivo => console.log(nombreDelArchivo, 'creado'))
    .catch(err => console.log(err))
