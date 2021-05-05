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

`yarn add stripe` </br>
Site do Stripe

## Consumindo API do Stripe (SSR)

* `useEffect` faz chamada a api apenas no navegador
* Serve Side Render (SSR) funciona apenas em **páginas do NextJS (pages)**, mas deve-se observar se é realmente necessário o uso do SSR ou de `hooks do react` como o `useEffect`, que pode variar da necessidade do proejto.
* Se for necessário repassar qualquer informação do SSR para um componente usamos o `getServerSideProps` como função e usar a tipagem do NextJS para typescript
* Exportar a chave do Stripe
* Consumir o Stripe dentro de `getServerSideProps`
* Valores monetários em banco de dados é preferivél salvar em centavos e depois converter 

## Static Site Generation (SSG)
* Semelhante ao SSR, porém o nextJS salva um página estatica e serve aos clientes uma página nova, apenas se as informações tiveram atualização.

### 3 modos de fazer chamada a API no nextJS
* Client-Side
* Server-Side (SSR)
* Static Site Generation (SSG) 

## API routes no Next.js

* API routing
* É usado quando existe a necessidade de operação com dados sensivéis
* `api` -> Todos os arquivos criados na pasta `api` do projeto se tornam rotas no nextJS 
* Serveless


## Estratégias de autenticação

* JWT (Local Storage)
* Next Auth (Social)
* Cognito, Auth0

## Autenticação com Next Auth

* `yarn add next-auth`
* [NextAuth0 Docs](https://next-auth.js.org/getting-started/example)
* Github scope
* Confgiuração do login do usuário: `signIn()`, `useSession()`
* Configurar o provider de autenticação do Next nos lugares onde a aplicação vai usar as informções: `pageProps.session`

## Escolhendo um banco de dados

* FaunaDB - HTTP

## Configurando o FaunaDB

* `yarn add faunadb`
* Criar o serviço do FaunaDB

## Salvando usuário no banco

* ...nextauth.js => `callbacks` são execuados de forma automática quando o usuário executa alguma ação

## Verificando usuário duplicado

* Utilizando o Fauna query language

## Gerando sessão de checkout

* Verificar se o metodo (Requisão) é um **POST**
* Pegar o usuario logado atraves do Cookie `getSession({ req })`
* O next salva os dados do usuarios nos cookies dentro do mesmo dominio

## Redirecionando para o Stripe

* Para buscar o usuario nas API Routes é necessario fazer um `fecth` ou usar o `axios` `yarn add axios`
