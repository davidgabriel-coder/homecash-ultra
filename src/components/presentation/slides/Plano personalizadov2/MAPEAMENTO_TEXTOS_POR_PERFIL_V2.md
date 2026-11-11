# Mapeamento de texto por perfil — Plano personalizado v2

Versão **v2** do deck personalizado. A v1 tem o seu próprio mapa em `src/components/presentation/MAPEAMENTO_TEXTOS_POR_PERFIL_V1.md` (biblioteca `presentationTextLibrary.jsx`). Os dois não se misturam: cada deck usa a sua biblioteca.

## Fontes

- Planilha "FINAL · tabela motor conteúdos", aba **Tabela Completa** (76 IDs). Os textos das colunas G a AD já vêm resolvidos pelas abas "Textos Personalizados" e "Versão Slide".
- PDF "Mapa de personalização · versão final" (marcações #, M e colunas).
- Biblioteca: `planoPersonalizadoV2TextLibrary.js` (nesta pasta) (76 variantes, uma por ID da planilha, com as respostas do questionário).

## Como a variante é escolhida

- O par de respostas de cada fluxo define o ID: `main_goal` + situação + solução. Cada fluxo usa as próprias chaves: debt `main_situation`/`sought_solution`; empresário `business_*`; vendedor `selling_*`; outros `other_*`.
- `getPlanoV2TextContent(questionnaireAnswers)` pega a primeira variante cujas respostas batem. Se nenhuma bater, usa o **ID 13** (padrão da Teresa, o teste obrigatório).
- `PresentationStudio.jsx` escolhe a biblioteca pelo deck ativo: deck "Plano personalizado v2" usa esta; os demais decks seguem com `presentationTextLibrary.jsx`.
- Os textos são copiados da planilha sem reescrever. Trechos entre `[ ]` viram destaque azul (`renderBracketHighlight`, em `v2TextHighlight.jsx`).

## Marcações → campo do slide

Limite entre parênteses = "aceita até" da planilha. "Varia por" é o do mapa; onde a planilha diverge, ver Alertas.

| Marcação | Coluna | Tela | Elemento no slide | Campo na biblioteca | Varia por (mapa) | Limite |
|---|---|---|---|---|---|---|
| #1 | G | 01 Capa | Subtítulo | `coverSubtitle` | Persona (7) | 95 (105) |
| #3 | H | 02 Agenda | Texto do card Diagnóstico | `agendaDiagnosticBody` | Fluxo (4) | 41 (45) |
| #4 | I | 04 Quem somos | Título (destaque entre [ ]) | `whoWeAreTitle` | Persona (7) | 44 (48) |
| M1 | K | 04 Quem somos | Punchline: texto acima do número | `punchlineTop` | Situação | 56 |
| M1 | L | 04 Quem somos | Punchline: número em destaque | `punchlineNumber` | Situação | 9 |
| M1 | M | 04 Quem somos | Punchline: texto abaixo do número | `punchlineBottom` | Situação | 60 |
| M2 | O | 04 Quem somos | Card azul: texto grande | `whoWeAreBody` | Objetivo + Situação | 125 (135) |
| M3 | P | 05 Mecanismo | Subtítulo | `mechanismSubtitle` | Objetivo + Solução | 140 |
| #9 | Q | 05 Mecanismo | Card 01 Diagnóstico: texto | `mechanismDiagnosticBody` | Fluxo (4) | 104 (114) |
| #10 | R | 05 Mecanismo | Card 02 Plano: texto | `mechanismPlanBody` | Fluxo (4) | 102 (112) |
| #11 | S | 05 Mecanismo | Card 03 Aprovação: texto | `mechanismApprovalBody` | Fluxo (4) | 105 (115) |
| #12 | T | 05 Mecanismo | Card 05: título | `mechanismOutcomeTitle` | Fluxo (4) | 17 (20) |
| #12 | U | 05 Mecanismo | Card 05: texto | `mechanismOutcomeBody` | Fluxo (4) | 69 (76) |
| #8 | V | 05 Mecanismo | Card amarelo "No seu caso": frase | `noYourCaseText` | Persona (7) | 94 (104) |
| #14 | W | 08 Começo, meio e fim | Card Começo: título | `startTitle` | Persona (7) | 36 (40) |
| #14 | X | 08 Começo, meio e fim | Card Começo: texto | `startBody` | Persona (7) | 79 (87) |
| #15 | Y | 08 Começo, meio e fim | Card Meio: título | `middleTitle` | Fluxo (4) | 33 (37) |
| #15 | Z | 08 Começo, meio e fim | Card Meio: texto | `middleBody` | Fluxo (4) | 89 (98) |
| M4 | AB | 16 Próximos passos | Título "3 Passos" (destaque entre [ ]) | `threeStepsTitle` | Persona no mapa (ver alerta 2) | 44 (48) |
| #21 | AC | 16 Próximos passos | Resultado (último bloco verde) | `resultText` | Persona (7) | 41 (45) |
| #22 | AD | 17 Obrigado | Subtítulo | `closingSubtitle` | Fluxo (4) | 111 (122) |

Não entram no slide (texto original do motor): J (M1), N (M2), AA (M4). Os valores e números da proposta (ex.: +R$ 477.850, R$ 3.600) e os títulos fixos dos cards não mudam.

## Alertas da planilha

1. **Teste obrigatório (ID 13) tem 1 diferença com o v8.** AD (#22): a planilha diz *"…Juntos, até a pressão passar."*; o v8 diz *"…Estamos com você em cada etapa."*. A biblioteca segue a planilha. Se o v8 é o correto, a correção é na célula AD13 e na aba "Textos Personalizados" (Fluxo "Endividado", coluna Q). Os outros 20 campos do ID 13 batem com o v8.
2. **AB (M4) não varia só por persona.** O mapa diz "Persona", mas o título "3 Passos" muda com objetivo, situação e solução. Por isso a biblioteca guarda a linha inteira.
3. **P (M3) também varia pela situação.** O mapa diz "Objetivo + Solução"; na prática o subtítulo muda com a situação também.
4. **O (M2) varia por solução nos IDs 69 a 72** (mesmo objetivo e situação "Pendências jurídicas", soluções diferentes). Também resolvido pela linha inteira.
5. **Título "3 etapas" deixa de ser azul.** Antes a v2 destacava "3 etapas" e "recuperar sua estabilidade". A planilha só destaca o trecho entre `[ ]`, e o PDF do v8 mostra assim. Visualmente muda.
6. **Selo "No seu caso, {primeiro nome}"** agora usa o nome do cliente (campo no Studio, padrão em `PLANO_V2_DEFAULT_CLIENT_NAME`); sem nome, fica "No seu caso". A fonte real do nome ainda depende de integração.
7. **Padrão (ID 13) muda o encerramento.** Como o padrão agora vem da planilha, o slide "Obrigado" sem respostas mostra o texto do item 1 (AD).
8. **Número grande "R$ 100 mi" virou "R$ 200 mi" na biblioteca (56 IDs), por decisão do usuário.** A planilha ainda diz "R$ 100 mi" (coluna L da Tabela Completa; aba "Versão Slide", coluna D). Regenerar a biblioteca a partir da planilha desfaz a mudança; para mantê-la, altere também a planilha. Os 20 IDs com "R$ 1 bi" não mudaram.

### Limites de caracteres

Os textos não são cortados nem reescritos (instrução 8 da planilha). Abaixo, quantos dos 76 IDs passam do limite "aceita até" em cada marcação. Passar do limite vai para revisão humana.

| Marcação | Campo | IDs acima do "aceita até" | Maior tamanho (caracteres) |
|---|---|---|---|
| #1 (G) | `coverSubtitle` | 4 | 106 |
| #8 (V) | `noYourCaseText` | 10 | 105 |
| #22 (AD) | `closingSubtitle` | 16 | 123 |

Os demais campos estão dentro do "aceita até" em todos os IDs.

## Variantes (76 IDs)

Ordem e IDs iguais à aba "Tabela Completa". Persona e fluxo são os da coluna C e B da planilha.

| ID | Fluxo | Persona | Situação | Solução | Respostas do questionário |
|---|---|---|---|---|---|
| 1 | Endividado | Endividado Preventivo | Parcelas atrasadas | Já tentou negociar com banco | `reorganize_financial_life` · `late_installments` · `tried_bank` |
| 2 | Endividado | Endividado Preventivo | Parcelas atrasadas | Tentando vender imóvel | `reorganize_financial_life` · `late_installments` · `selling_property` |
| 3 | Endividado | Endividado Preventivo | Parcelas atrasadas | Buscando empréstimo | `reorganize_financial_life` · `late_installments` · `seeking_loan` |
| 4 | Endividado | Endividado Preventivo | Parcelas atrasadas | Não buscou nada ainda | `reorganize_financial_life` · `late_installments` · `no_search_yet` |
| 5 | Endividado | Endividado Jurídico | Intimado judicialmente | Já tentou negociar com banco | `reorganize_financial_life` · `legally_summoned` · `tried_bank` |
| 6 | Endividado | Endividado Jurídico | Intimado judicialmente | Tentando vender imóvel | `reorganize_financial_life` · `legally_summoned` · `selling_property` |
| 7 | Endividado | Endividado Jurídico | Intimado judicialmente | Buscando empréstimo | `reorganize_financial_life` · `legally_summoned` · `seeking_loan` |
| 8 | Endividado | Endividado Jurídico | Intimado judicialmente | Não buscou nada ainda | `reorganize_financial_life` · `legally_summoned` · `no_search_yet` |
| 9 | Endividado | Endividado Preventivo | Reduzir custo da dívida | Já tentou negociar com banco | `reorganize_financial_life` · `reduce_debt_cost` · `tried_bank` |
| 10 | Endividado | Endividado Preventivo | Reduzir custo da dívida | Tentando vender imóvel | `reorganize_financial_life` · `reduce_debt_cost` · `selling_property` |
| 11 | Endividado | Endividado Preventivo | Reduzir custo da dívida | Buscando empréstimo | `reorganize_financial_life` · `reduce_debt_cost` · `seeking_loan` |
| 12 | Endividado | Endividado Preventivo | Reduzir custo da dívida | Não buscou nada ainda | `reorganize_financial_life` · `reduce_debt_cost` · `no_search_yet` |
| 13 | Endividado | Endividado Preventivo | Renegociar antes que piore | Já tentou negociar com banco | `reorganize_financial_life` · `renegotiate_early` · `tried_bank` |
| 14 | Endividado | Endividado Preventivo | Renegociar antes que piore | Tentando vender imóvel | `reorganize_financial_life` · `renegotiate_early` · `selling_property` |
| 15 | Endividado | Endividado Preventivo | Renegociar antes que piore | Buscando empréstimo | `reorganize_financial_life` · `renegotiate_early` · `seeking_loan` |
| 16 | Endividado | Endividado Preventivo | Renegociar antes que piore | Não buscou nada ainda | `reorganize_financial_life` · `renegotiate_early` · `no_search_yet` |
| 17 | Empresário Endividado | Empresário Travado | Dívidas da empresa | Aumentar faturamento | `invest_in_company` · `company_debts` · `increase_revenue` |
| 18 | Empresário Endividado | Empresário Travado | Dívidas da empresa | Quitar pendências | `invest_in_company` · `company_debts` · `pay_debts` |
| 19 | Empresário Endividado | Empresário Travado | Dívidas da empresa | Melhorar estrutura | `invest_in_company` · `company_debts` · `improve_structure` |
| 20 | Empresário Endividado | Empresário Travado | Dívidas da empresa | Sem clareza de retorno | `invest_in_company` · `company_debts` · `unclear_return` |
| 21 | Empresário Endividado | Empresário Alavancado | Expansão ou novos projetos | Aumentar faturamento | `invest_in_company` · `expansion_or_new_projects` · `increase_revenue` |
| 22 | Empresário Endividado | Empresário Alavancado | Expansão ou novos projetos | Quitar pendências | `invest_in_company` · `expansion_or_new_projects` · `pay_debts` |
| 23 | Empresário Endividado | Empresário Alavancado | Expansão ou novos projetos | Melhorar estrutura | `invest_in_company` · `expansion_or_new_projects` · `improve_structure` |
| 24 | Empresário Endividado | Empresário Alavancado | Expansão ou novos projetos | Sem clareza de retorno | `invest_in_company` · `expansion_or_new_projects` · `unclear_return` |
| 25 | Empresário Endividado | Empresário Travado | Fôlego para atravessar momento difícil | Aumentar faturamento | `invest_in_company` · `cash_flow_relief` · `increase_revenue` |
| 26 | Empresário Endividado | Empresário Travado | Fôlego para atravessar momento difícil | Quitar pendências | `invest_in_company` · `cash_flow_relief` · `pay_debts` |
| 27 | Empresário Endividado | Empresário Travado | Fôlego para atravessar momento difícil | Melhorar estrutura | `invest_in_company` · `cash_flow_relief` · `improve_structure` |
| 28 | Empresário Endividado | Empresário Travado | Fôlego para atravessar momento difícil | Sem clareza de retorno | `invest_in_company` · `cash_flow_relief` · `unclear_return` |
| 29 | Empresário Endividado | Empresário Travado | Questões jurídicas/operacionais | Aumentar faturamento | `invest_in_company` · `legal_or_operational_issues` · `increase_revenue` |
| 30 | Empresário Endividado | Empresário Travado | Questões jurídicas/operacionais | Quitar pendências | `invest_in_company` · `legal_or_operational_issues` · `pay_debts` |
| 31 | Empresário Endividado | Empresário Travado | Questões jurídicas/operacionais | Melhorar estrutura | `invest_in_company` · `legal_or_operational_issues` · `improve_structure` |
| 32 | Empresário Endividado | Empresário Travado | Questões jurídicas/operacionais | Sem clareza de retorno | `invest_in_company` · `legal_or_operational_issues` · `unclear_return` |
| 33 | Quer vender - Todos | Vendedor Frustrado | Vendendo há meses | Propostas abaixo do valor | `anticipate_property_sale` · `selling_for_months` · `offers_below_value` |
| 34 | Quer vender - Todos | Vendedor Frustrado | Vendendo há meses | Imóvel sem propostas | `anticipate_property_sale` · `selling_for_months` · `property_without_offers` |
| 35 | Quer vender - Todos | Vendedor Frustrado | Vendendo há meses | Dificuldade compradores | `anticipate_property_sale` · `selling_for_months` · `buyer_difficulty` |
| 36 | Quer vender - Todos | Vendedor Frustrado | Vendendo há meses | Ainda não anunciou | `anticipate_property_sale` · `selling_for_months` · `not_listed_yet` |
| 37 | Quer vender - Todos | Vendedor Frustrado | Vendendo há meses | Vender com desconto | `anticipate_property_sale` · `selling_for_months` · `sell_with_discount` |
| 38 | Quer vender - Todos | Vendedor Frustrado | Quer antecipar parte do valor | Propostas abaixo do valor | `anticipate_property_sale` · `anticipate_part_value` · `offers_below_value` |
| 39 | Quer vender - Todos | Vendedor Frustrado | Quer antecipar parte do valor | Imóvel sem propostas | `anticipate_property_sale` · `anticipate_part_value` · `property_without_offers` |
| 40 | Quer vender - Todos | Vendedor Frustrado | Quer antecipar parte do valor | Dificuldade compradores | `anticipate_property_sale` · `anticipate_part_value` · `buyer_difficulty` |
| 41 | Quer vender - Todos | Vendedor Frustrado | Quer antecipar parte do valor | Ainda não anunciou | `anticipate_property_sale` · `anticipate_part_value` · `not_listed_yet` |
| 42 | Quer vender - Todos | Vendedor Frustrado | Quer antecipar parte do valor | Vender com desconto | `anticipate_property_sale` · `anticipate_part_value` · `sell_with_discount` |
| 43 | Quer vender - Todos | Vendedor Curioso | Apenas curioso | Propostas abaixo do valor | `anticipate_property_sale` · `just_curious` · `offers_below_value` |
| 44 | Quer vender - Todos | Vendedor Curioso | Apenas curioso | Imóvel sem propostas | `anticipate_property_sale` · `just_curious` · `property_without_offers` |
| 45 | Quer vender - Todos | Vendedor Curioso | Apenas curioso | Dificuldade compradores | `anticipate_property_sale` · `just_curious` · `buyer_difficulty` |
| 46 | Quer vender - Todos | Vendedor Curioso | Apenas curioso | Ainda não anunciou | `anticipate_property_sale` · `just_curious` · `not_listed_yet` |
| 47 | Quer vender - Todos | Vendedor Curioso | Apenas curioso | Vender com desconto | `anticipate_property_sale` · `just_curious` · `sell_with_discount` |
| 48 | Quer vender - Todos | Vendedor Curioso | Começando a vender | Propostas abaixo do valor | `anticipate_property_sale` · `starting_to_sell` · `offers_below_value` |
| 49 | Quer vender - Todos | Vendedor Curioso | Começando a vender | Imóvel sem propostas | `anticipate_property_sale` · `starting_to_sell` · `property_without_offers` |
| 50 | Quer vender - Todos | Vendedor Curioso | Começando a vender | Dificuldade compradores | `anticipate_property_sale` · `starting_to_sell` · `buyer_difficulty` |
| 51 | Quer vender - Todos | Vendedor Curioso | Começando a vender | Ainda não anunciou | `anticipate_property_sale` · `starting_to_sell` · `not_listed_yet` |
| 52 | Quer vender - Todos | Vendedor Curioso | Começando a vender | Vender com desconto | `anticipate_property_sale` · `starting_to_sell` · `sell_with_discount` |
| 53 | Outros - Todos | Patrimônio Ocioso | Saúde | Empréstimo bancário | `understand_homecash` · `health` · `bank_loan` |
| 54 | Outros - Todos | Patrimônio Ocioso | Saúde | Pensou em vender imóvel | `understand_homecash` · `health` · `considered_selling_property` |
| 55 | Outros - Todos | Patrimônio Ocioso | Saúde | Tentou Home Equity | `understand_homecash` · `health` · `tried_home_equity` |
| 56 | Outros - Todos | Patrimônio Ocioso | Saúde | Não sabe caminho seguir | `understand_homecash` · `health` · `unsure_how_to_proceed` |
| 57 | Outros - Todos | Patrimônio Ocioso | Educação | Empréstimo bancário | `understand_homecash` · `education` · `bank_loan` |
| 58 | Outros - Todos | Patrimônio Ocioso | Educação | Pensou em vender imóvel | `understand_homecash` · `education` · `considered_selling_property` |
| 59 | Outros - Todos | Patrimônio Ocioso | Educação | Tentou Home Equity | `understand_homecash` · `education` · `tried_home_equity` |
| 60 | Outros - Todos | Patrimônio Ocioso | Educação | Não sabe caminho seguir | `understand_homecash` · `education` · `unsure_how_to_proceed` |
| 61 | Outros - Todos | Patrimônio Ocioso | Viagem ou mudança | Empréstimo bancário | `understand_homecash` · `travel_or_move` · `bank_loan` |
| 62 | Outros - Todos | Patrimônio Ocioso | Viagem ou mudança | Pensou em vender imóvel | `understand_homecash` · `travel_or_move` · `considered_selling_property` |
| 63 | Outros - Todos | Patrimônio Ocioso | Viagem ou mudança | Tentou Home Equity | `understand_homecash` · `travel_or_move` · `tried_home_equity` |
| 64 | Outros - Todos | Patrimônio Ocioso | Viagem ou mudança | Não sabe caminho seguir | `understand_homecash` · `travel_or_move` · `unsure_how_to_proceed` |
| 65 | Outros - Todos | Patrimônio Ocioso | Apoio familiar | Empréstimo bancário | `understand_homecash` · `family_support` · `bank_loan` |
| 66 | Outros - Todos | Patrimônio Ocioso | Apoio familiar | Pensou em vender imóvel | `understand_homecash` · `family_support` · `considered_selling_property` |
| 67 | Outros - Todos | Patrimônio Ocioso | Apoio familiar | Tentou Home Equity | `understand_homecash` · `family_support` · `tried_home_equity` |
| 68 | Outros - Todos | Patrimônio Ocioso | Apoio familiar | Não sabe caminho seguir | `understand_homecash` · `family_support` · `unsure_how_to_proceed` |
| 69 | Outros - Todos | Patrimônio Ocioso | Pendências jurídicas | Empréstimo bancário | `understand_homecash` · `legal_pending` · `bank_loan` |
| 70 | Outros - Todos | Patrimônio Ocioso | Pendências jurídicas | Pensou em vender imóvel | `understand_homecash` · `legal_pending` · `considered_selling_property` |
| 71 | Outros - Todos | Patrimônio Ocioso | Pendências jurídicas | Tentou Home Equity | `understand_homecash` · `legal_pending` · `tried_home_equity` |
| 72 | Outros - Todos | Patrimônio Ocioso | Pendências jurídicas | Não sabe caminho seguir | `understand_homecash` · `legal_pending` · `unsure_how_to_proceed` |
| 73 | Outros - Todos | Patrimônio Ocioso | Outros objetivos | Empréstimo bancário | `understand_homecash` · `other_goals` · `bank_loan` |
| 74 | Outros - Todos | Patrimônio Ocioso | Outros objetivos | Pensou em vender imóvel | `understand_homecash` · `other_goals` · `considered_selling_property` |
| 75 | Outros - Todos | Patrimônio Ocioso | Outros objetivos | Tentou Home Equity | `understand_homecash` · `other_goals` · `tried_home_equity` |
| 76 | Outros - Todos | Patrimônio Ocioso | Outros objetivos | Não sabe caminho seguir | `understand_homecash` · `other_goals` · `unsure_how_to_proceed` |

Os textos de cada ID estão em `planoPersonalizadoV2TextLibrary.js`. Para alterar um texto, edite a planilha e regenere a biblioteca; não edite o JS à mão.
