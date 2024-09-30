/*
## O que deve ser utilizado?
-Variáveis
-Operadores
-Laços de Repetição
-Estrutura de Decisões

## Objetivo:
Crie uma variável para armazenar o nome e a quantidade de experiência(XP)
de um herói, depois utilize uma estrutura de decisão para apresentar alguma
das mensagens abaxixo:
Se XP for menor que 1000 = Ferro
Se XP for entre 1001 e 2000 = Bronze
Se XP for entre 2001 e 5000 = Prata Ouro
Se XP for entre 5001 e 8000 = Platina Diamante
Se XP for entre 8001 e 9000 = Ascendente
Se XP for entre 9001 e 10000 = Imortal
Se XP for maior ou igual a 10001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"
*/


// Importando o módulo 'readline' para capturar a entrada do usuário no Node.js
const readline = require('readline');

// Cria uma interface para receber a entrada do usuário
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Pergunta para o usuário o nome e a quantidade de XP
rl.question("Digite o nome do herói: ", (nomeHeroi) => {
    rl.question("Digite a quantidade de XP do herói: ", (xpHeroi) => {
        // Converte o XP para número
        xpHeroi = parseInt(xpHeroi);
        
        // Variável para armazenar o nível do herói
        let nivelHeroi = "";
        
        // Definimos uma variável auxiliar para o switch que categoriza o XP
        let categoriaXP;

        if (xpHeroi < 1000) {
            categoriaXP = 1;
        } else if (xpHeroi <= 2000) {
            categoriaXP = 2;
        } else if (xpHeroi <= 5000) {
            categoriaXP = 3;
        } else if (xpHeroi <= 7000) {
            categoriaXP = 4;
        } else if (xpHeroi <= 8000) {
            categoriaXP = 5;
        } else if (xpHeroi <= 9000) {
            categoriaXP = 6;
        } else if (xpHeroi <= 10000) {
            categoriaXP = 7;
        } else {
            categoriaXP = 8;
        }

        // Usamos o switch para determinar o nível com base na categoriaXP
        switch (categoriaXP) {
            case 1:
                nivelHeroi = "Ferro";
                break;
            case 2:
                nivelHeroi = "Bronze";
                break;
            case 3:
                nivelHeroi = "Prata";
                break;
            case 4:
                nivelHeroi = "Ouro";
                break;
            case 5:
                nivelHeroi = "Platina";
                break;
            case 6:
                nivelHeroi = "Ascendente";
                break;
            case 7:
                nivelHeroi = "Imortal";
                break;
            case 8:
                nivelHeroi = "Radiante";
                break;
            default:
                nivelHeroi = "XP inválida";
        }

        // Saída: Exibe a mensagem final
        console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivelHeroi}`);

        // Fecha a interface readline
        rl.close();
    });
});