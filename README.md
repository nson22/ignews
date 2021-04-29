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

## Estilos globais do app

* Se o nome do arquivo estiver com o *module* significa que aquela estilização é exclusiva para um único componente, para os *estilos globais* o nome do arquivo não pode ter module.
* É o contexto que define os estilos dos componentes e não o componente em si.

## Componente: Header

* No *next* as imagens sempre ficam na pasta *public*

## Componente: SignInButton

## Componente: Homepage

## Componente: SubscribeButton

## Configurando Stripe

`yarn add stripe`

* `useEffect` faz chamada a api apenas no navegador
* Serve Side Render (SSR) funciona apenas em páginas do NextJS (pages), mas deve-se observar se é realmente necessário o uso do SSR ou de `hooks do react` como o `useEffect`, que pode variar da necessidade do proejto.
* Se for necessário repassar qualquer informação do SSR para um componente usamos o `getServerSideProps` como função e usar a tipagem do NextJS para typescript
* Exportar a chave do Stripe