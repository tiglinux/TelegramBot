function obterUsuario(callback) {
    setTimeout(function () {
        return callback(null, {
            id: 1,
            nome: 'Tiago'
        })
    }, 1000);
}

const usuario = obterUsuario();

console.log('usuario', usuario);