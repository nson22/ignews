# IGNews

## Notas

### Criando estrutura Next.js
`yarn create next-app`
`npx create next-app`

## Adicionando TypeScript
`yarn add typescript @types/react @types/node -D`

* Renomear os arquivos para **.tsx**

## Estilização com SASS (scss)

* `styles` na raiz
* CSS scoped
* `arquivo.module.css`
* Estilização por classes nos elementos
* `yarn add sass`
* sass precido com yaml | scss usa {}
* Pode usar modelo cascata nos elementos e componentes

## Configurando fonte externa

* *File system root*
* *pages* - funciona como rotas da aplicação
* Para componentes que devem existir em todas as páginas usar `_app`
* `_app` executa todas as vezes que um componente e exibido ou reexibido em tela
* Para componentes/recurso deve usar `_document` no formato de classe