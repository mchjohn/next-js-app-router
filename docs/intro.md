# Next.js

Next.js é um framework de desenvolvimento web baseado em React que facilita a criação de aplicações web e sites estáticos. Ele oferece recursos como renderização do lado do servidor (SSR), geração estática de páginas (SSG), suporte a TypeScript, rotas automáticas, e otimizações de desempenho. Ideal para criar aplicações modernas, rápidas e escaláveis.

---

### SSG (Static Site Generation):
Gera páginas HTML estáticas no momento da construção (build) do projeto, o que resulta em tempos de carregamento muito rápidos. As páginas são servidas como arquivos estáticos.


### SSR (Server-Side Rendering):
Gera páginas HTML dinamicamente a cada requisição do usuário, permitindo que o conteúdo seja sempre atualizado e personalizado.

### SPA (Single Page Application):
É uma aplicação web que carrega uma única página HTML e atualiza seu conteúdo dinamicamente à medida que o usuário interage com a aplicação. Isso proporciona uma experiência mais rápida e fluida, semelhante a um aplicativo de desktop, pois evita recarregamentos completos da página.

### CSR (Client-Side Rendering):
Todo o renderização ocorre no lado do cliente (navegador), geralmente usando bibliotecas como React, Angular ou Vue. O servidor entrega um HTML básico e os JavaScript necessários para construir o conteúdo.

---

## Métricas de Desempenho de Carregamento de Páginas Web

### TTFB (Time to Fist Byte)
Tempo até o primeiro byte: mede o tempo que o navegador leva para receber o primeiro byte de dados do servidor após fazer uma solicitação.

### FCP (Fist Content Paint)
Primeira pintura de conteúdo: mede o tempo até que o navegador renderize o primeiro pedaço de conteúdo visível (texto, imagem, etc.) na tela.

### TTI (Time to interact)
Tempo até interativo: mede o tempo até que a página esteja totalmente interativa, ou seja, todos os elementos da página estão disponíveis para interação do usuário sem atrasos.

---

### Server Components
Componentes que são executados e renderizados do lado do servidor
- Por default todos os Componentes dentro da pasta app são server components
- [Quando usar server components](https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns)

### Clients Components
Componentes que são executados e renderizados do lado do cliente (Executa 1º no servidor)
- [Quando usar client components](https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns)


#### Com o Server/Client Composition Pattern é possível separar o client component em um arquivo a parte e usa-lo dentro do server component.
#### Para renderizar server component dentro de client component é preciso passa-lo como props/children.
### Layout só é renderizado uma vez
### Template é renderizado outras vezes

- Params - 2:20:00