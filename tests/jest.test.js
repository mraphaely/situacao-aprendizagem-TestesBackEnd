// 1 - Implemente uma função criaUsario que retorna um objeto de usuário com as propriedades nome, email, e idade.toHaveProperty para verificar se o objeto retornado por criaUsario possui a propriedade email.
function criaUsuario(nome, email, idade) {
    return {
        nome: nome,
        email: email,
        idade: idade,
    }
}
// function criaUser(nome, email, idade) {
//     nome = "Jest"
//     email = "em@il.com"
//     idade = 18
//     return email, idade, nome;
// }
test("Verifica se possui propriedade email", () => {
    const usuario = criaUsuario("Jest", "em@il.com", 18);
    expect(usuario).toHaveProperty('email');
});//200
// describe('Teste da função criaUsuario', () => {
//     it('Verifica se o objeto retornado possui a propriedade email', () => {
//         const usuario = criarUsuario('João', 'joao@email.com', 25);
//         expect(usuario).toHaveProperty('email');
//     });
// })

// 2 - Implemente uma função pegaTemperatura que retorna um valor numérico representando a temperatura atual.
// Use toBeGreaterThan para verificar se a temperatura retornada por getTemperature() é maior que 20.
// Use toBeLessThan para verificar se a temperatura retornada por getTemperature() é menor que 30.
function pegaTemperatura(valor) {
    return valor
}
test("verifica temperatura", () => {
    expect(pegaTemperatura(28)).toBeGreaterThan(20)
    expect(pegaTemperatura(20)).toBeLessThan(30)
});//200


// 3 - Implemente uma função adicionaProduto que recebe um array e um item como argumento, adiciona o item ao array, e retorna o array modificado.
// Se o item foi adicionado ao array. Se o array retornado contém o número correto de itens.
function adicionaProduto(array, item) {
    array.push(item)
    return array
}
test("verifica se o item foi adicionado ao array", () => {
    const array = [1, 2, 3]
    const novoArray = adicionaProduto(array, 4)
    expect(novoArray).toContain(4);
});//200
// function addProduto(item) {
//     item = ['1_item', "2_item", '3_item']
//     return item
// }
// test("verifica add produto", () => {

//     expect(addProduto(item)).toContain(item)
// });

// 4 - Implemente uma função usuarioLogado que verifica se um usuário está logado retornando true ou false.
// Use toBeTruthy para verificar se usuarioLogadoretorna true quando o usuário está logado.
// Use toBeFalsy para verificar se usuarioLogado retorna false quando o usuário não está logado.
function usuarioLogado(logado) {
    return logado
}
test("verifica usuario logado", () => {
    expect(usuarioLogado(true)).toBeTruthy()
    expect(usuarioLogado(false)).toBeFalsy()
}); //200


// 5 - Implemente uma função pegaProdutos que retorna um array de produtos. 
// Escreva um teste que use um matcher para verificar se o array retornado por pegaProdutos contém o número esperado de produtos.
function pegaProdutos() {
    return ['produto1', 'produto2', 'produto3']
}
test("verifica produtos", () => {
    expect(pegaProdutos()).toHaveLength(3);
}); 
// test("verifica produtos", () => {
//     expect(pegaProdutos()).toHaveLength(3);
//     expect(pegaProdutos()).toMatch(/1_item/)
// });