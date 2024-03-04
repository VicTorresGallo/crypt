'use strict'
const PassHelper = require('./helpers/pass.helper');
const moment = require('moment');

// Datos simulados...
const miPass = "12345";
const badPass = "9876hl";
const usuario = {
    _id: "56789123456789",
    email: 'vtg13@alu.ua.es',
    displayName: 'Vtorres',
    password: miPass,
    signupDate: moment().unix(),
lastLogin: moment().unix()
}
console.log(usuario);

// Encriptamos el password...
PassHelper.encriptaPassword(usuario.password).then (hash => {
    usuario.password = hash;
    console.log(usuario);

    // Lo verificamos contra el password original...
    PassHelper.comparaPassword( miPass, usuario.password ).then( passOK => {
        console.log(`comp1: ${passOK}`);
        if ( passOK ) {
        console.log('El password es correcto.');
        } else {
            console.log('El password no es correcto.');
        }
    });
    // Lo comparamos contra otro password...
    PassHelper.comparaPassword( badPass, usuario.password ).then( passOK => {
        console.log(`comp2: ${passOK}`);
        console.log( passOK ? 'El password es correcto' : 'El password no es correcto' );
    });
});

