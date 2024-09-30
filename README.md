# Classificador de Nível de Herói

Este é um projeto simples em JavaScript que classifica o nível de um herói com base na sua experiência (XP). O usuário insere o nome do herói e a quantidade de XP, e o programa classifica o herói em diferentes níveis, como "Ferro", "Bronze", "Prata", "Ouro", entre outros.

## 🎯 Objetivo

O objetivo deste projeto é demonstrar o uso de conceitos básicos de programação, como:

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisão
- Entrada e saída de dados no terminal usando Node.js

## 🛠️ Tecnologias Utilizadas

- **Node.js**: Plataforma de execução para o JavaScript no lado do servidor.
- **JavaScript**: Linguagem de programação usada para implementar a lógica do classificador.
- **Git**: Sistema de controle de versão para gerenciar o código-fonte.

## 🚀 Como executar o projeto

### Pré-requisitos

- **Node.js** instalado na sua máquina.
- **Git** (opcional, para clonar o repositório).

### Passos para rodar o projeto:

1. **Clonar o repositório**:
  Se você ainda não clonou o repositório, use o comando abaixo:

  ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git```

2. **Navegar até o diretório do projeto:**
 ```cd nome-do-repositorio```


3. **Executar o script:**
Como o projeto usa readline para capturar a entrada do usuário no terminal, basta executar o arquivo JavaScript:

 ```node NivelHeroi.js```

4. **Interagir com o programa:**
Após rodar o comando acima, o programa irá pedir que você insira:
- O nome do herói.
- A quantidade de XP do herói.

Com base nas informações fornecidas, o programa irá classificar o herói em um dos seguintes níveis:

- Ferro: XP menor que 1.000
- Bronze: XP entre 1.001 e 2.000
- Prata: XP entre 2.001 e 5.000
- Ouro: XP entre 5.001 e 7.000
- Platina: XP entre 7.001 e 8.000
- Ascendente: XP entre 8.001 e 9.000
- Imortal: XP entre 9.001 e 10.000
- Radiante: XP maior ou igual a 10.001

5. **💻 Exemplo de Execução**
Digite o nome do herói: Thor
Digite a quantidade de XP do herói: 5500
O Herói de nome Thor está no nível de Ouro

6. **📂 Estrutura de Arquivos**

├── NivelHeroi.js  # Script principal do classificador
├── README.md      # Este arquivo com a explicação do projeto

7. **📝 Melhorias Futuras**
Aqui estão algumas possíveis melhorias para o projeto:

- Adicionar mais níveis de classificação.
- Criar uma interface web para tornar o programa acessível via navegador.
- Implementar testes automatizados para garantir a integridade do código.
