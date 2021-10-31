module.exports = {
    async listarTodos(req, res){
        try {
            const tipoLancamento = {
                1: "Débito",
                2: "Crédito",
            };
            return res.json(tipoLancamento);
        } catch (err) {
            return console.error("Erro na listagem: ", err);
        }
    }
}