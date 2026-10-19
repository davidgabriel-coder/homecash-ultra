# HomeCash Presentation Builder

Construtor interativo de apresentacoes HomeCash com questionario de diagnostico, analise de cenario, projecoes financeiras, deck personalizavel e exportacao em PDF.

> Este README documenta o estado atual do projeto. A arquitetura, textos, regras de negocio e experiencia de uso ainda podem evoluir.

## Visao Geral

A aplicacao guia o usuario por um questionario inicial, calcula um cenario de intensidade financeira e gera uma apresentacao visual com slides sobre HomeCash, simulacoes, graficos e comparativos.

Hoje o fluxo principal e:

1. Selecionar o perfil do usuario.
2. Responder perguntas de diagnostico.
3. Informar valor da divida e custo mensal estimado.
4. Visualizar o deck HomeCash gerado.
5. Navegar, reordenar slides, apresentar em tela cheia e exportar PDF.

## Stack

- React 19
- Vite
- Tailwind CSS
- Recharts
- Lucide React
- Phosphor Icons
- jsPDF e html-to-image para exportacao sob demanda
- ESLint

## Como Rodar

Instale as dependencias:

```bash
npm install
```

Inicie o ambiente de desenvolvimento:

```bash
npm run dev
```

Abra a URL exibida pelo Vite, normalmente:

```txt
http://localhost:5173/
```

## Scripts Disponiveis

```bash
npm run dev
```

Inicia o servidor local de desenvolvimento.

```bash
npm run build
```

Gera a versao de producao em `dist/`.

```bash
npm run lint
```

Executa o ESLint no projeto.

```bash
npm run preview
```

Serve localmente o build de producao.

## Estrutura Principal

```txt
src/
  App.jsx
  main.jsx
  components/
    Questionnaire.jsx
    PresentationStudio.jsx
    presentation/
      PresentationSlides.jsx
      exportPresentationPdf.js
      presentationConfig.js
      shared/
      slides/
  data/
    questionnaireData.js
  domain/
    debtProjection.js
    debtScenarios.js
```

## Organizacao Atual

### `App.jsx`

Controla o fluxo principal da aplicacao:

- exibe o questionario antes do diagnostico;
- calcula as projecoes apos o preenchimento;
- carrega a apresentacao sob demanda com `React.lazy`.

### `components/Questionnaire.jsx`

Renderiza o questionario inicial, coleta respostas, calcula o score do perfil e envia o cenario selecionado para o app.

### `data/questionnaireData.js`

Contem os perfis, perguntas, opcoes e regras de classificacao do questionario.

### `domain/debtScenarios.js`

Define os cenarios internos da aplicacao:

- `low`
- `moderate`
- `accelerated`
- `critical`

Cada cenario possui label, cor e taxa associada.

### `domain/debtProjection.js`

Concentra as regras de projecao usadas nos graficos:

- evolucao da pressao financeira;
- reducao de opcoes disponiveis;
- custo da inercia.

### `components/PresentationStudio.jsx`

Container da experiencia de apresentacao. Responsavel por:

- estado do slide ativo;
- reordenacao de slides;
- modo apresentacao em tela cheia;
- acionamento da exportacao PDF;
- renderizacao do deck e miniaturas.

### `components/presentation/slides`

Cada slide do deck fica em um componente individual, facilitando manutencao e edicao futura:

- `CoverSlide.jsx`
- `WhoWeAreSlide.jsx`
- `BeginningSlide.jsx`
- `AgendaSlide.jsx`
- `MechanismSlide.jsx`
- `ThreeStepsSlide.jsx`
- `SimulationSlide.jsx`
- `SimulationPt2Slide.jsx`
- `SimulationPt3Slide.jsx`
- `ResultsSlide.jsx`

### `components/presentation/shared`

Componentes e helpers reutilizados pelos slides:

- graficos;
- formatadores;
- helpers de posicionamento;
- elementos visuais compartilhados.

## Exportacao PDF

A exportacao usa `html-to-image` e `jsPDF`.

Essas bibliotecas sao carregadas apenas quando o usuario clica em `Exportar PDF`, reduzindo o peso inicial da aplicacao.

O arquivo gerado atualmente se chama:

```txt
homecash-apresentacao.pdf
```

## Performance

A apresentacao e carregada sob demanda depois que o usuario conclui o questionario. Isso evita que o bundle inicial carregue todos os slides e bibliotecas de exportacao logo na primeira tela.

## Estado Atual

Ja foi feito:

- refatoracao inicial para separar dominio, dados e UI;
- componentizacao dos slides;
- nomes internos em ingles nas partes refatoradas;
- carregamento sob demanda da apresentacao;
- carregamento sob demanda das dependencias de exportacao PDF;
- validacao com lint e build.

Ainda pode evoluir:

- revisar textos e copy final;
- parametrizar dados fixos dos slides;
- melhorar responsividade da area de apresentacao;
- adicionar testes automatizados;
- criar uma camada de configuracao para clientes, valores e simulacoes;
- separar assets e constantes de conteudo por slide.

## Validacao

Antes de subir alteracoes, rode:

```bash
npm run lint
npm run build
```

Ambos devem passar sem erros.
