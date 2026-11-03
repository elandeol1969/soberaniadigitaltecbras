# TecBras S.A.

**Empresa Brasileira de Tecnologia, Mídias Sociais e Soluções Digitais S.A.**
Site institucional interativo que apresenta o projeto de criação da TecBras, uma Sociedade de Economia Mista sob controle estatal voltada à soberania digital nacional.

> Aplicação web estática (HTML, CSS e JavaScript puros), sem dependências, pronta para publicação.

---

## Sumário

- [Sobre o projeto](#sobre-o-projeto)
- [Conteúdo apresentado](#conteúdo-apresentado)
- [Funcionalidades](#funcionalidades)
- [Estrutura de arquivos](#estrutura-de-arquivos)
- [Tecnologias](#tecnologias)
- [Como executar](#como-executar)
- [Como publicar na web](#como-publicar-na-web)
- [Personalização](#personalização)
- [Responsividade e acessibilidade](#responsividade-e-acessibilidade)
- [Identidade visual](#identidade-visual)
- [Observações](#observações)
- [Licença e direitos](#licença-e-direitos)

---

## Sobre o projeto

O ecossistema digital brasileiro depende estruturalmente de grandes corporações estrangeiras de tecnologia (Big Techs). A proposta da TecBras é criar uma alternativa pública, transparente e soberana, com:

- infraestrutura 100% nacional (datacenters em território brasileiro);
- conformidade nativa com a LGPD (Lei nº 13.709/2018);
- algoritmos transparentes e auditáveis;
- cibersegurança avançada;
- articulação com Serpro, Dataprev, ITI, ANPD, universidades, IFs e ICTs públicas.

A TecBras não restringe a atuação de concorrentes, nacionais ou estrangeiros, desde que cumpram a legislação brasileira.

Este repositório contém o site que apresenta o documento do projeto (`textoProjeto.pdf`), com todos os seus tópicos.

## Conteúdo apresentado

O site segue a ordem do documento original:

| Seção | Descrição |
|-------|-----------|
| **Hero** | Síntese do projeto em um parágrafo, sobre fundo SVG ilustrativo |
| **1. Cenário Atual** | Dependência das Big Techs, contexto introdutório e notas de rodapé |
| **2. O Problema** | 2.1 Soberania, 2.2 Manipulação informacional, 2.3 Violação à LGPD |
| **3. Proposta de Valor / Solução** | Funcionograma e cinco pilares da solução |
| **4. Público-Alvo** | Cidadãos, administração pública, empresas privadas e empresas de TIC/startups |
| **5. Recursos e Orçamento** | Fontes de receita, aporte inicial de capital e IPO |
| **6. Consolidação e Anteprojeto de Lei** | Governança, cronograma, PPP/concessões e minuta do PL (Arts. 1º a 7º) |

## Funcionalidades

- **Menu fixo** no topo, com logotipo SVG, link ativo conforme a rolagem e barra de progresso de leitura.
- **Menu hambúrguer** em telas pequenas (até 860 px).
- **Link "Download"** no menu para baixar o documento `textoProjeto.pdf`.
- **Acordeões** (um ou vários painéis abertos) e botões "Expandir/Recolher todos" na minuta de lei.
- **Cartões expansíveis** no Cenário Atual.
- **Abas** para os subtópicos de "O Problema", com navegação por setas do teclado.
- **Modais** para parceiros institucionais, público-alvo, fontes de financiamento, definições de termos (Big Data, TIC, Big Techs, Capitalismo de Vigilância, IaaS, PaaS, SaaS) e ampliação do funcionograma.
- **Linha do tempo** clicável com as quatro fases de implementação (36 meses).
- **Ilustrações SVG** exclusivas para cada seção.
- Botão de **voltar ao topo**.

## Estrutura de arquivos

```
.
├── index.html           # Estrutura e conteúdo da página
├── style.css            # Estilos, layout e responsividade
├── script.js            # Interatividade (menu, acordeões, abas, modais, timeline)
├── Funcionograma.png    # Imagem do funcionamento da TecBras (seção Solução)
├── favicon.png          # Ícone do site e do logotipo no menu
├── textoProjeto.pdf     # Documento completo do projeto (link Download)
└── README.md            # Esta documentação
```

Os três arquivos de código são independentes e integrados: `index.html` carrega `style.css` e `script.js`.

## Tecnologias

- HTML5 semântico
- CSS3 (variáveis, Grid, Flexbox, media queries)
- JavaScript ES6+ (sem frameworks ou bibliotecas)
- SVG inline

## Como executar

Não há instalação nem build.

1. Baixe ou clone o repositório.
2. Abra o arquivo `index.html` em qualquer navegador moderno.

Opcionalmente, use um servidor local:

```bash
# Python
python -m http.server 8000

# Node.js
npx serve .
```

Acesse `http://localhost:8000`.

## Como publicar na web

Por ser um site estático, pode ser hospedado em qualquer serviço, como GitHub Pages, Netlify, Vercel ou servidor Apache/Nginx.

**GitHub Pages:**

1. Envie os arquivos para a raiz do repositório.
2. Em *Settings → Pages*, selecione a branch (`main`) e a pasta `/ (root)`.
3. Acesse a URL gerada.

Mantenha todos os arquivos na mesma pasta. Em servidores que diferenciam maiúsculas de minúsculas, preserve o nome `Funcionograma.png` com "F" maiúsculo.

## Personalização

- **Cores:** variáveis CSS no início de `style.css` (`--red`, `--black`, `--off`, etc.).
- **Textos:** edite diretamente o `index.html`.
- **Textos dos modais, termos e fases do cronograma:** objetos `MODALS`, `TERMS` e `PHASES` no início de `script.js`.
- **Documento para download:** substitua `textoProjeto.pdf`, mantendo o nome, ou altere o `href` do link "Download" no `index.html`.

## Responsividade e acessibilidade

- Layout adaptável a desktop, tablet e smartphone.
- Navegação por teclado, com foco visível e link "Ir para o conteúdo".
- Atributos ARIA em menu, acordeões, abas e modais.
- Modal fechável com `Esc`, clique no fundo ou botão de fechar.
- Respeita a preferência `prefers-reduced-motion`.
- Conteúdo dinâmico inserido com `textContent`, sem `innerHTML`.

## Identidade visual

- **Paleta:** vermelho (`#d71920`), preto (`#111`) e branco off-white (`#f6f3ee`).
- **Tipografia:** sem serifa (Segoe UI, Roboto, Helvetica Neue, Arial).

## Observações

- Este site é uma **apresentação de proposta**. A TecBras S.A. é um projeto em fase de concepção e a minuta de lei é um anteprojeto, sem valor normativo.
- O texto do site reproduz o conteúdo do documento `textoProjeto.pdf`. Em caso de divergência, prevalece o documento original.

## Licença e direitos

© 2026 TecBras S.A. Todos os direitos reservados.

Defina aqui a licença do repositório (por exemplo, MIT) antes da publicação, caso deseje permitir reuso do código.
