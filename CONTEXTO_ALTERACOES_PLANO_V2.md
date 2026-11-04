# Contexto das alterações — Plano personalizado v2 (remapeamento de textos)

Documento para retomar o trabalho. Descreve o que foi criado, movido e alterado, por quê, e o que ainda depende de confirmação.

## 1. Objetivo

Trocar os textos personalizados do deck **"Plano personalizado v2"** (`PLANO_PERSONALIZADO_V2_DECK_ID = 'plano-personalizado-v2'`) pelos textos da planilha **"FINAL · tabela motor conteúdos"**, aba **"Tabela Completa"** (76 IDs), seguindo o mesmo esquema da apresentação v1. A v1 e a v2 **não podem misturar** biblioteca nem mapa.

Fontes usadas:
- Planilha (xlsx baixado via export do Google Sheets): abas *Tabela Completa*, *Mapa de Campos*, *Textos Personalizados*, *Versão Slide*, *Instruções para IA*.
- PDF de instrução: `C:\Users\Gustavo Callegari\Downloads\Mapa-personalizacao-final (1).pdf` (marcações #, M e colunas; slides v8 de referência).

## 2. Como funciona (mesmo esquema da v1)

- O questionário gera um par de respostas por fluxo (objetivo principal + situação + solução). Chaves por fluxo:
  - Endividado: `main_goal`, `main_situation`, `sought_solution`
  - Empresário: `main_goal`, `business_main_situation`, `business_sought_solution`
  - Vendedor: `main_goal`, `selling_main_situation`, `selling_sought_solution`
  - Outros: `main_goal`, `other_main_situation`, `other_sought_solution`
- Cada resposta é `answers[questionId]?.optionId`.
- `getPlanoV2TextContent(questionnaireAnswers)` retorna a primeira das 76 variantes cujas respostas batem. Sem correspondência, usa o **ID 13** (padrão da Teresa / v8). O retorno inclui `variantId`, `fluxo`, `persona` e todos os textos.
- Os IDs 1–76 seguem a ordem da aba Tabela Completa (16 Endividado, 16 Empresário, 20 Vendedor, 24 Outros).

## 3. Arquivos NOVOS

| Arquivo | Conteúdo |
|---|---|
| `src/components/presentation/slides/Plano personalizadov2/planoPersonalizadoV2TextLibrary.js` | Biblioteca da v2. Exporta `PLANO_V2_DEFAULT_VARIANT_ID = 13`, `PLANO_V2_TEXT_VARIANTS` (76 itens com `id`, `fluxo`, `persona`, `answers`, `texts`), `getPlanoV2TextContent()` e `DEFAULT_PLANO_V2_TEXT_CONTENT`. Gerado da planilha; não editar à mão. |
| `src/components/presentation/slides/Plano personalizadov2/MAPEAMENTO_TEXTOS_POR_PERFIL_V2.md` | Mapa da v2 (formato da v1): fontes, seleção, marcações→campo, alertas, limites de caracteres e índice dos 76 IDs. |
| `src/components/presentation/slides/Plano personalizadov2/v2TextHighlight.jsx` | `renderBracketHighlight(text, className?)`: trecho entre `[ ]` vira `<span>` de destaque sem colchetes. Fica fora de `v2Shared.jsx` por causa da regra react-refresh do ESLint. |

Chaves dos textos na biblioteca (coluna da planilha → marcação):

| Chave | Coluna | Marcação | Slide |
|---|---|---|---|
| `coverSubtitle` | G | #1 | Capa |
| `agendaDiagnosticBody` | H | #3 | Agenda (card 01) |
| `whoWeAreTitle` | I | #4 | Quem somos (título, destaque `[ ]`) |
| `punchlineTop` / `punchlineNumber` / `punchlineBottom` | K / L / M | M1 | Quem somos (card "Rooftop em números") |
| `whoWeAreBody` | O | M2 | Quem somos (card azul) |
| `mechanismSubtitle` | P | M3 | Mecanismo (subtítulo) |
| `mechanismDiagnosticBody` | Q | #9 | Mecanismo card 01 |
| `mechanismPlanBody` | R | #10 | Mecanismo card 02 |
| `mechanismApprovalBody` | S | #11 | Mecanismo card 03 |
| `mechanismOutcomeTitle` / `mechanismOutcomeBody` | T / U | #12 | Mecanismo card 05 |
| `noYourCaseText` | V | #8 | Mecanismo card amarelo |
| `startTitle` / `startBody` | W / X | #14 | Começo, meio e fim (card Começo) |
| `middleTitle` / `middleBody` | Y / Z | #15 | Começo, meio e fim (card Meio) |
| `threeStepsTitle` | AB | M4 | Próximos passos (título, destaque `[ ]`) |
| `resultText` | AC | #21 | Próximos passos (bloco "Resultado") |
| `closingSubtitle` | AD | #22 | Obrigado |

Colunas J, N e AA (textos originais do motor) não entram no slide.

## 4. Arquivo MOVIDO (organização v1 × v2)

- `src/components/presentation/MAPEAMENTO_TEXTOS_POR_PERFIL.md` → agora `src/components/presentation/MAPEAMENTO_TEXTOS_POR_PERFIL_V1.md`. Era o mapa da v1 e estava dentro da pasta da v2; foi para junto de `presentationTextLibrary.jsx` (biblioteca da v1). Conteúdo não alterado.
- Biblioteca v2 saiu de `src/components/presentation/` para a pasta `slides/Plano personalizadov2/`, junto com os slides v2.

## 5. Arquivos ALTERADOS (por mim)

**`src/components/PresentationStudio.jsx`**
- Import `getPlanoV2TextContent` de `./presentation/slides/Plano personalizadov2/planoPersonalizadoV2TextLibrary`.
- O `useMemo` de `presentationTextContent` escolhe a biblioteca pelo deck ativo: `activeDeckId === PLANO_PERSONALIZADO_V2_DECK_ID` → v2; senão → `getPresentationTextContent` (v1). Dependências: `[activeDeckId, questionnaireAnswers]`.
- Observação: este arquivo já tinha alterações não commitadas do usuário antes de começarmos (import do `PLANO_PERSONALIZADO_V2_DECK_ID`, `V2ChartsThumbnail` e condição do deck v2 nas miniaturas). Essas não são minhas e foram mantidas.

**Slides v2** (`src/components/presentation/slides/Plano personalizadov2/`):
- `V2CoverSlide.jsx`: recebe `presentationTextContent` (default `DEFAULT_PLANO_V2_TEXT_CONTENT`); subtítulo = `coverSubtitle`.
- `V2AgendaSlide.jsx`: card 01 usa `agendaDiagnosticBody` (no array `AGENDA_ITEMS`, o body do 01 virou `null`).
- `V2WhoWeAreSlide.jsx`: título com `renderBracketHighlight(whoWeAreTitle)`; `PunchlineFigure` agora recebe `top`, `number`, `bottom` (antes parseava regex de `whoWeArePunchline`; regex e `shortenValue` removidos); corpo = `whoWeAreBody`.
- `V2MechanismSlide.jsx`: subtítulo, cards 01/02/03, card 05 (título+texto) e card amarelo vindos da biblioteca. Títulos fixos dos cards 01–03 e card 04 ("Saída da operação") mantidos.
- `V2StartMiddleEndSlide.jsx`: títulos e textos dos cards Começo e Meio. Valores (+R$ 477.850, R$ 3.600) e rótulos fixos mantidos.
- `V2NextStepsSlide.jsx`: título via `renderBracketHighlight(threeStepsTitle)`; `RELEASE_STEPS` virou função `buildReleaseSteps(resultText)` usada nos dois `.map`. Textos fixos dos passos 01–03 e demais blocos mantidos.
- `V2ClosingSlide.jsx`: parágrafo = `closingSubtitle`. Com nome do cliente, mostra o selo de iniciais + nome no lugar de "Equipe Rooftop" (que continua como padrão quando não há nome).

**Nome do cliente (adicionado depois)**
- `PresentationStudio.jsx`: estado `clientName` e campo de texto "Nome do cliente" visível só com o deck v2. O `presentationTextContent` do deck v2 recebe `clientName` (trim) junto com os textos.
- `planoPersonalizadoV2TextLibrary.js`: nova função `getClientInitials(name)` (primeiro + último nome, ex.: "TS").
- `V2CoverSlide.jsx`: bloco inferior-esquerdo "Preparado para" + selo de iniciais + nome; só aparece com nome preenchido.
- Motivo: o app não coleta nome do cliente em nenhum lugar (questionário não pede; v1 usa "Matheus Gomes" fixo). Fonte: campo digitado no Studio. Não há persistência; o nome some ao recarregar.
- `v2Shared.jsx`: não tem mais alteração minha (o helper foi movido para `v2TextHighlight.jsx`).

Não alterados: `presentationTextLibrary.jsx`, slides da v1 (`slides/*.jsx`, `homecash-ultra*`), `PresentationSlides.jsx`, `presentationConfig.js` (estes dois também já tinham alterações do usuário, não commitadas: entradas do deck v2, roteamento dos slides `v2-*`).

## 6. Estado do git (início desta sessão)

Já modificados/não rastreados antes de eu começar (do usuário): `PresentationStudio.jsx`, `PresentationSlides.jsx`, `presentationConfig.js`, `.npm-cache/`, `src/assets/plano-v2/`, a pasta `slides/Plano personalizadov2/`. Nada foi commitado. Este arquivo (`CONTEXTO_ALTERACOES_PLANO_V2.md`) e `MAPEAMENTO_TEXTOS_POR_PERFIL_V1.md` são novos.

## 7. Verificação feita

- `npx eslint` nos arquivos alterados: sem erros.
- `npx vite build --configLoader native`: passou.
- Teste de seleção em Node (script externo ao repo): as 76 variantes voltam ao próprio ID; sem respostas → 13. Único "FALHA" é a diferença do AD da linha 13 com o v8 (ver pendências), que é esperada.
- **Não** foi feita conferência visual no navegador.

## 8. Pendências / decisões que precisam de confirmação

1. **Teste obrigatório (ID 13) difere em um campo.** AD (#22): planilha = "…Juntos, até a pressão passar."; v8 = "…Estamos com você em cada etapa.". A planilha manda parar nesse caso; a decisão tomada foi seguir a planilha. Confirmar o texto correto; se for o v8, corrigir a célula AD13 da planilha (aba Textos Personalizados, fluxo Endividado, coluna Q) e regenerar a biblioteca.
2. **Selo "No seu caso, {primeiro nome}"** (#8): a v2 não recebe o nome do cliente. Continua "No seu caso". Falta a fonte do nome.
3. **Mudança visual**: "3 etapas" no título de Próximos passos deixou de ser azul; só o trecho `[ ]` fica destacado, como manda a planilha e como está no PDF do v8.
4. **Fallback ID 13**: sem respostas, o encerramento agora mostra o texto da planilha (item 1), não mais o v8 antigo hardcoded.
5. **"Varia por" do mapa da planilha está impreciso** para AB (M4; varia também por objetivo/situação/solução, não só persona), P (M3; também varia por situação) e O (M2; IDs 69–72 diferem por solução). A biblioteca usa a linha inteira de cada ID, então não há perda.
6. **Limites de caracteres**: passam do "aceita até" em #1 (4 IDs: 5–8), #8 (10 IDs) e #22 (16 IDs). Mantidos sem corte, conforme instrução 8 da planilha; vão para revisão humana.

## 9. Como regenerar a biblioteca (se a planilha mudar)

A geração foi feita com scripts Python que ficaram **fora do repositório** (pasta scratchpad da sessão: `gen.py`, `parse.py`, `readxlsx.py`, `gen_doc.py`). Procedimento:
1. Baixar a planilha: `https://docs.google.com/spreadsheets/d/1eWhDnPjhhaGyS4G8spHXqcehzccA8Mffc6f-qdMv9Fk/export?format=xlsx`.
2. Ler a aba "Tabela Completa" (colunas A–F para chaves, G–AD para textos).
3. Converter os rótulos das respostas nas chaves do questionário (mapas `GOAL`, `QKEYS`, `SIT`, `SOL` em `gen.py`).
4. Gravar `planoPersonalizadoV2TextLibrary.js` e recriar o mapa `.md`.

Não há script no repositório; se for necessário repetir com frequência, vale commitar o gerador.

## 10. Glossário rápido

- **Marcação #N / MN**: identificador do campo no PDF. `#` = texto novo personalizado (aba Textos Personalizados); `M` = campo que já existia no motor (aba Versão Slide).
- **Persona (7)**, **Fluxo (4)**: dimensões de variação no mapa da planilha.
- **v8**: deck base de referência (Teresa, ID 13).
