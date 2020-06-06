const Excel = require('exceljs');
const moment = require('moment');
const fs = require('fs');
const Blob = require('cross-blob');

const { getAllRutas, getOneRuta, getRutaByFolio, getRutasByDates, getAllRutasByStatus } = require('../../services/RutaService');

const getRutas = async () => {
    const rutas = await getAllRutas();
    return rutas;
};

const getSingleRuta = async (_, { id }) => {
    const ruta = await getOneRuta(id);
    if(!ruta) throw new Error('Ruta not exists');
    return ruta;
};

const getSearchRuta = async (_, { folio }) => {
    const ruta = await getRutaByFolio(folio);
    if(!ruta) throw new Error('No results');
    return ruta;
};

const getSearchRutasByDates = async (_, { begin, end }) => {
    const rutas = await getRutasByDates(begin, end);
    return rutas;
};

const getSearchRutasByStatus = async (_, { status }) => {
    if(!status){
        return [];
    }
    const rutas = await getAllRutasByStatus(status);
    if(!rutas) throw new Error('No results');
    return rutas;
};

const getExcelRutasByStatus = async (_, { status }) => {
    if(!status){
        return [];
    }
    const rutas = await getAllRutasByStatus(status);
    if(!rutas) throw new Error('No results');

    // Generamos el Excel
    let workbook = new Excel.Workbook();
    let worksheet = workbook.addWorksheet('Rutas con status');

    worksheet.columns = [
        {header: 'Cliente', key: 'cliente'},
        {header: 'Origen', key: 'origen'},
        {header: 'Destino', key: 'destino'},
        {header: 'Fecha Salida', key: 'fecha_salida'},
        {header: 'Fecha Cita', key: 'fecha_cita'},
        {header: 'Nothing', key: 'nothing'}
    ];
    worksheet.columns.forEach(column => {
        column.width = column.header.length < 12 ? 12 : column.header.length;
    });

    worksheet.getRow(1).font = {bold: true};

    let rutas_data = [];
    rutas.forEach((element, index) => {
        const row = {
            cliente: element.cliente?element.cliente.nombre:'',
            origen: element.origen?element.origen.nombre:'',
            destino: element.destino?element.destino.nombre:'',
            fecha_salida: element.fecha_salida?moment(element.fecha_salida).format('DD MMMM YYYY h:mm'):'',
            fecha_cita: element.fecha_cita?moment(element.fecha_cita).format('DD MMMM YYYY h:mm'):'',
            nothing: 'nothing' + index,
        };
        rutas_data.push(row);
    });

    // Dump all the data into Excel
    rutas_data.forEach((element, index) => {
        // row 1 is the header.
        //const rowIndex = index + 2;

        // By using destructuring we can easily dump all of the data into the row without doing much
        // We can add formulas pretty easily by providing the formula property.
        worksheet.addRow({
            ...element,
            // amountRemaining: {
            //     formula: `=C${rowIndex}-D${rowIndex}`
            // },
            // percentRemaining: {
            //     formula: `=E${rowIndex}/C${rowIndex}`
            // }
        });
    });

    const file_name = 'reporte_ruta_' + moment().format('DDMMMMYYYYhmm') + '.xlsx';
    workbook.xlsx.writeFile('src/documents/' + file_name).then(()=>{
        console.log('Archivo guardado correctamente.');
    });

    let base64data = Buffer.from('src/documents/' + file_name, 'latin1').toString('base64');
    const response = {
        'file_name':file_name,
        'file': base64data
    };
    return response;
};

module.exports = {
    getRutas,
    getSingleRuta,
    getSearchRuta,
    getSearchRutasByDates,
    getSearchRutasByStatus,
    getExcelRutasByStatus
};