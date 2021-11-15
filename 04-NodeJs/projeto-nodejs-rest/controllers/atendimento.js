module.exports = app => {
    
    app.get('/atendimentos', (req, res) => {
        const atendimentos = [{'id': 1, 'nome': 'Fulano', 'idade': 18}];
        res.send(atendimentos)
    })

    app.get('/atendimentos/:id', (req, res) => {
        res.send(req.params.id)
    })

    app.post('/atendimentos', (req, res) => {
        console.log(req.body)
        res.send('Rota atendimento post')
    })
}
