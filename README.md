# Descrição do Teste

Crie uma aplicação PHP que gerencie um sistema de consultas médicas. A aplicação deve permitir criar, ler, atualizar e deletar registros de beneficiários, médicos, hospitais e consultas. Além disso, deve incluir uma tabela de observações relacionadas às consultas e uma regra de associação de médicos aos hospitais.
Este teste é focado exclusivamente na implementação do backend da aplicação, portanto, não é necessário criar interfaces gráficas ou telas.

## Entidades

- **Beneficiário**: id, nome, email, data_nascimento
- **Médico**: id, nome, especialidade, hospital
- **Hospital**: id, nome, endereco
- **Consulta**: id, data, status, beneficiario, medico, hospital
- **Observação**: id, descricao, consulta, anexo

## Requisitos

CRUD para Beneficiário, Médico, Hospital, Consulta, Observação (Opcional):

- **Criação**
  - Método: POST
- **Listagem**
  - Método: GET
- **Atualizar**
  - Método: PUT
- **Deletar**
  - Método: DELETE

## Regras

- **Beneficiário Data nascimento**: Não deverá ser permitido cadastrar beneficiários com idade menor que 18 anos.
- **Associação de Médico ao Hospital**: Cada médico deve estar associado a um hospital. A aplicação deve garantir que, ao criar ou atualizar um médico, ele seja relacionado a um hospital existente.
- **Anexo Consulta**: A coluna anexo deve permitir o envio de arquivos de imagem ou PDF.
- **Status Consulta**: Após concluída a consulta, ela não poderá ser alterada/excluída, e também não será possível incluir novas observações.

## Requisitos obrigatórios

- Criar a aplicação no padrão MVC;
- Utilizar `symfony/routing` para as rotas;
- Utilizar Doctrine ORM;
- Banco de dados MySQL;

## Instruções para entrega

- Seu código deve estar disponível no GitHub para acesso público.
- Crie um arquivo `README.md` detalhando como configurar, executar e testar a aplicação.
- Faça um fork deste repositório para iniciar o desenvolvimento.

---

# Responsabilidades da Vaga

## Desenvolvimento de Aplicações Web

- Criar e manter aplicações web utilizando o framework Symfony, seguindo o padrão MVC.
- Implementar funcionalidades de CRUD para diferentes entidades do sistema.

## Gerenciamento de Banco de Dados

- Utilizar Doctrine ORM para manipulação e gerenciamento do banco de dados.
- Criar e manter estruturas de banco de dados no MySQL.

## Implementação de Rotas

- Configurar e gerenciar rotas utilizando o componente `symfony/routing`.

## Validação e Regras de Negócio

- Implementar regras de validação e lógica de negócios.

## Documentação e Testes

- Criar documentação detalhada para configuração, execução e testes da aplicação.
- Garantir que o código seja bem documentado e testado antes de ser submetido.

---

# Requisitos Desejados da Vaga

## Habilidades Técnicas

- Experiência com desenvolvimento web utilizando PHP e Symfony.
- Conhecimento em arquitetura MVC e padrões de desenvolvimento de software.
- Familiaridade com Doctrine ORM e manipulação de bancos de dados relacionais, especificamente MySQL.
- Conhecimento em configuração e gerenciamento de rotas com `symfony/routing`.
- Experiência em manipulação e upload de arquivos, incluindo validação e tratamento de tipos de arquivo.

## Regras de Negócio e Validação

- Capacidade de implementar regras de negócios e validações complexas.
- Experiência com validação de dados de entrada e lógica de aplicação.

## Controle de Versão e Colaboração

- Experiência com sistemas de controle de versão, preferencialmente Git.
- Capacidade de trabalhar de forma colaborativa e comunicativa dentro de um ambiente de equipe.

## Documentação e Boas Práticas

- Habilidade em criar documentação clara e detalhada.
- Adesão a boas práticas de codificação, incluindo comentários no código e escrita de testes.

## Outros Requisitos

- Capacidade de resolver problemas de forma eficaz e eficiente.
- Boa comunicação escrita e verbal.
- Proatividade e vontade de aprender novas tecnologias e métodos de trabalho.
