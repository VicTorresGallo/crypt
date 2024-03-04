'use strict'
const tokenHelper = require('./helpers/token.helper');
const moment = require('moment');

// Simulamos datos...
const miPass = "12345";
const usuario = {
    _id: "56789123456789",
    email: 'vtg13@alu.ua.es',
    displayName: 'vtorres',
    password: miPass,
    signupDate: moment().unix(),
    lastLogin: moment().unix()
};
console.log(usuario);

// Creamos un token...
const token = tokenHelper.creaToken( usuario );
console.log({ NewAccessToken: token });

// Decodificamos el token anterior...
tokenHelper.decodificaToken( token )
    .then( userID => console.log(`_ID1: ${userID}`
    ), err => console.log({Err1: err})
);

// Simulamos un token caducado y un token mal formado creados en jwt.io
const oldToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1Njc4OTEyMzQ1Njc4OSIsImlhdCI6MTYwMzM2MjcyMCwiZXhwIjoxNjAzMzYyNzgwfQ.igpQ77raDzfIsfC5H1NUigEFIseqDEYgtFopdEiyHb0';
const badToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ8.eyJzdWIiOiI1Njc4OTEyMzQ1Njc4OSIsImlhdCI6MTYwMzM1MzEyOCwiZXhwIjoxNjA0NTY2MzI4fQ.edqpWcVnCJ0MtYqG4zTyZbUVX-c8LtHhX3XpU4gq99Q';

// Intentamos decodificar el token caducado...
tokenHelper.decodificaToken( oldToken )
    .then( userID => console.log(`_ID2: ${userID}`
    ), err => console.log({Err2: err})
);
// Intentamos decodificar el token mal formado...
tokenHelper.decodificaToken( badToken )
    .then( userID => console.log(`_ID3: ${userID}`
    ), err => console.log({Err3: err})
);