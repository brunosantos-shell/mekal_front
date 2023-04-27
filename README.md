# Badaró NextJS Template

Este repositório possui as configurações básicas para iniciar um projeto com NextJS

### Iniciando o projeto

Ao clonar o projeto, instale as dependências com o yarn

```bash
yarn
```

Então, rode o seguinde comando (husky é o serviço para garantir o linting do código pré-commit)

```bash
yarn husky install
```

Inicie o servidor de desenvolvimento com

```bash
yarn dev
```

### Linting

Estão configurados o ESLint e o Prettier para este projeto.
Ao salvar um arquivo, ele é formatado automaticamente. (Ctrl + S)
Só será possível realizar commits se não houver nenhum erro indicado pelo ESLint.

> Certifique-se de ter instalado a extensão "ESLint" no seu VSCode.

### Estilização

O projeto está configurado para utilizar o SCSS modules.

Em /styles/global.scss estão os estilos que serão aplicados de forma global, este arquivo é importado em /pages/\_app.tsx

Em /styles/pages.module.scss estão algumas classes de apoio para utilizar nas páginas.

- O seletor .wrapper pode ser aplicado em uma div contendo os elementos header, main e footer, respectivamente.

Ao criar um novo componente, importe o arquivo /styles/utils/index.scss. Esse arquivo contém:

- Design Tokens
- Funções
- Grid
- Estilos globais (aplicados por classe)

Ao importar o utils, você pode aplicar os seletores que se encontram em /styles/utils/global.scss para estilizar um componente.

### Componentes

Os componentes são divididos em dois grandes grupos:

- /components/global -> componentes únicos que podem ser aplicados em qualquer parte da aplicação
- /components/templates -> componentes de maior complexidade que reutilizam componentes globais
- /components/pages -> componentes de páginas específicas, devem estar aninhados dentro de pastas com o mesmo nome da página em que serão utilizados

Cada pasta de componente deve conter os arquivos:

- index.tsx -> código do componente e os tipos específicos do componente declarados logo após os imports
- styles.modules.scss -> estilização

### Context API

Os Contexts estão dividos dentro da pasta /context, seguindo o padrão:
- /context
  - /[NomeDoContexto]
    - index.tsx -> conteúdo do Context
    - types.ts -> tipos referentes ao Context

Para adicionar o Provider de um Context à aplicação, inclua-o na prop "contexts" do componente ContextNester instanciado em /pages/\_app.tsx
