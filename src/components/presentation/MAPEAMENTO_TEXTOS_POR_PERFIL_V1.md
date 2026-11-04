# Mapeamento de texto por perfil — Plano de Liquidez Personalizada (v1)

Fonte: `src/components/presentation/presentationTextLibrary.jsx` (`TEXT_VARIANTS`, 76 variantes).

## Como a variante é escolhida

`getPresentationTextContent(questionnaireAnswers)` pega a primeira variante cujas respostas batem com `answers`. Se nenhuma bater, usa `DEFAULT_PRESENTATION_TEXT_CONTENT`.

Os perfis do diagnóstico (`domain/profileClassification.js`) saem das mesmas respostas. O objetivo (`main_goal`) define a família; situação e solução definem a variante.

## Campos que mudam

| Campo | Onde aparece no slide |
|---|---|
| `whoWeAreBody` | Slide "Quem somos" — texto principal |
| `whoWeArePunchline` | Slide "Quem somos" — destaque (box) |
| `mechanismSubtitle` | Slide "Mecanismo" — subtítulo |
| `threeStepsTitle` | Slide "3 passos" — título |

## Texto padrão (sem variante correspondente)

- Quem somos: "Rooftop constrói pontes entre proprietários de imóveis que precisam de liquidez rápida e fundos de investimentos listado na bolsa de valores (B3)" + "Criamos a nova solução imobiliária do mercado!"
- Destaque: "Parceria com os maiores players do mercado +R$ 3 BILHÕES EM PROPOSTAS"
- Mecanismo: "A melhor solução do mercado, levante capital rápido com seu imóvel. Pague com Financiamento ou Consórcio."
- 3 passos: "São 3 passos para sua virada chave"

## Dívida — debt_holder / debt_holder_legal

Objetivo `reorganize_financial_life` (questionário de dívida). Variantes 1–16.

### Variante 1
Respostas: `main_situation` = `late_installments`, `sought_solution` = `tried_bank`

- **Quem somos (corpo):** A Rooftop é uma empresa especializada em apoiar proprietários de imóveis sob pressão a recuperar o equilíbrio financeiro utilizando o próprio patrimônio de forma estruturada.
- **Quem somos (destaque):** Já apoiamos nossos clientes na renegociação de mais de R$ 1 bilhão em pendências financeiras.
- **Mecanismo:** A única solução para quem busca ampliar suas possibilidades além das soluções financeiras tradicionais.
- **3 passos:** São 3 etapas para recuperar sua estabilidade financeira.

### Variante 2
Respostas: `main_situation` = `late_installments`, `sought_solution` = `selling_property`

- **Quem somos (corpo):** A Rooftop é uma empresa especializada em apoiar proprietários de imóveis sob pressão a recuperar o equilíbrio financeiro utilizando o próprio patrimônio de forma estruturada.
- **Quem somos (destaque):** Já apoiamos nossos clientes na renegociação de mais de R$ 1 bilhão em pendências financeiras.
- **Mecanismo:** A única solução para quem necessita de liquidez a partir do patrimônio imobiliário sem depender das condições do mercado tradicional.
- **3 passos:** São 3 etapas para recuperar sua estabilidade financeira.

### Variante 3
Respostas: `main_situation` = `late_installments`, `sought_solution` = `seeking_loan`

- **Quem somos (corpo):** A Rooftop é uma empresa especializada em apoiar proprietários de imóveis sob pressão a recuperar o equilíbrio financeiro utilizando o próprio patrimônio de forma estruturada.
- **Quem somos (destaque):** Já apoiamos nossos clientes na renegociação de mais de R$ 1 bilhão em pendências financeiras.
- **Mecanismo:** A única solução para quem busca ampliar suas possibilidades além das soluções financeiras tradicionais.
- **3 passos:** São 3 etapas para recuperar sua estabilidade financeira.

### Variante 4
Respostas: `main_situation` = `late_installments`, `sought_solution` = `no_search_yet`

- **Quem somos (corpo):** A Rooftop é uma empresa especializada em apoiar proprietários de imóveis sob pressão a recuperar o equilíbrio financeiro utilizando o próprio patrimônio de forma estruturada.
- **Quem somos (destaque):** Já apoiamos nossos clientes na renegociação de mais de R$ 1 bilhão em pendências financeiras.
- **Mecanismo:** A única solução que transforma patrimônio imobiliário em recursos antes que a pressão aumente.
- **3 passos:** São 3 etapas para recuperar sua estabilidade financeira.

### Variante 5
Respostas: `main_situation` = `legally_summoned`, `sought_solution` = `tried_bank`

- **Quem somos (corpo):** A Rooftop é uma empresa especializada em apoiar proprietários de imóveis sob pressão jurídica a preservar seu patrimônio e recuperar o controle da situação antes que ela evolua.
- **Quem somos (destaque):** Já apoiamos nossos clientes na regularização de mais de R$ 1 bilhão em processos judiciais.
- **Mecanismo:** A única solução desenvolvida para quem precisa agir antes que um processo judicial se transforme na perda definitiva do patrimônio.
- **3 passos:** São 3 etapas para recuperar controle do seu patrimônio.

### Variante 6
Respostas: `main_situation` = `legally_summoned`, `sought_solution` = `selling_property`

- **Quem somos (corpo):** A Rooftop é uma empresa especializada em apoiar proprietários de imóveis sob pressão jurídica a preservar seu patrimônio e recuperar o controle da situação antes que ela evolua.
- **Quem somos (destaque):** Já apoiamos nossos clientes na regularização de mais de R$ 1 bilhão em processos judiciais.
- **Mecanismo:** A única solução desenvolvida para quem precisa acessar recursos rapidamente sem depender da demora e da incerteza de uma venda tradicional.
- **3 passos:** São 3 etapas para recuperar controle do seu patrimônio.

### Variante 7
Respostas: `main_situation` = `legally_summoned`, `sought_solution` = `seeking_loan`

- **Quem somos (corpo):** A Rooftop é uma empresa especializada em apoiar proprietários de imóveis sob pressão jurídica a preservar seu patrimônio e recuperar o controle da situação antes que ela evolua.
- **Quem somos (destaque):** Já apoiamos nossos clientes na regularização de mais de R$ 1 bilhão em processos judiciais.
- **Mecanismo:** A única solução desenvolvida para quem precisa de recursos financeiros sem assumir uma nova dívida bancária.
- **3 passos:** São 3 etapas para recuperar controle do seu patrimônio.

### Variante 8
Respostas: `main_situation` = `legally_summoned`, `sought_solution` = `no_search_yet`

- **Quem somos (corpo):** A Rooftop é uma empresa especializada em apoiar proprietários de imóveis sob pressão jurídica a preservar seu patrimônio e recuperar o controle da situação antes que ela evolua.
- **Quem somos (destaque):** Já apoiamos nossos clientes na regularização de mais de R$ 1 bilhão em processos judiciais.
- **Mecanismo:** A única solução desenvolvida para quem precisa agir antes que um processo judicial reduza suas possibilidades de solução.
- **3 passos:** São 3 etapas para recuperar controle do seu patrimônio.

### Variante 9
Respostas: `main_situation` = `reduce_debt_cost`, `sought_solution` = `tried_bank`

- **Quem somos (corpo):** A Rooftop é uma empresa especializada em apoiar proprietários de imóveis sob pressão a recuperar o equilíbrio financeiro utilizando o próprio patrimônio de forma estruturada.
- **Quem somos (destaque):** Já apoiamos nossos clientes na renegociação de mais de R$ 1 bilhão em dívidas.
- **Mecanismo:** A única solução para quem precisa de recursos para negociar dívidas em melhores condições.
- **3 passos:** São 3 etapas para recuperar sua estabilidade financeira.

### Variante 10
Respostas: `main_situation` = `reduce_debt_cost`, `sought_solution` = `selling_property`

- **Quem somos (corpo):** A Rooftop é uma empresa especializada em apoiar proprietários de imóveis sob pressão a recuperar o equilíbrio financeiro utilizando o próprio patrimônio de forma estruturada.
- **Quem somos (destaque):** Já apoiamos nossos clientes na renegociação de mais de R$ 1 bilhão em dívidas.
- **Mecanismo:** A única solução para quem precisa de liquidez imediata, sem depender do prazo e da incerteza de uma venda tradicional.
- **3 passos:** São 3 etapas para recuperar sua estabilidade financeira.

### Variante 11
Respostas: `main_situation` = `reduce_debt_cost`, `sought_solution` = `seeking_loan`

- **Quem somos (corpo):** A Rooftop é uma empresa especializada em apoiar proprietários de imóveis sob pressão a recuperar o equilíbrio financeiro utilizando o próprio patrimônio de forma estruturada.
- **Quem somos (destaque):** Já apoiamos nossos clientes na renegociação de mais de R$ 1 bilhão em dívidas.
- **Mecanismo:** A única solução para quem precisa de recursos financeiros sem assumir uma nova dívida bancária.
- **3 passos:** São 3 etapas para recuperar seu controle financeiro.

### Variante 12
Respostas: `main_situation` = `reduce_debt_cost`, `sought_solution` = `no_search_yet`

- **Quem somos (corpo):** A Rooftop é uma empresa especializada em apoiar proprietários de imóveis sob pressão a recuperar o equilíbrio financeiro utilizando o próprio patrimônio de forma estruturada.
- **Quem somos (destaque):** Já apoiamos nossos clientes na renegociação de mais de R$ 1 bilhão em dívidas.
- **Mecanismo:** A única solução para quem busca reorganizar sua vida financeira com mais segurança e previsibilidade.
- **3 passos:** São 3 etapas para recuperar sua estabilidade financeira.

### Variante 13
Respostas: `main_situation` = `renegotiate_early`, `sought_solution` = `tried_bank`

- **Quem somos (corpo):** A Rooftop é uma empresa especializada em criar alternativas para proprietários que precisam recuperar fôlego financeiro antes que a pressão comprometa seu patrimônio.
- **Quem somos (destaque):** Já apoiamos nossos clientes na renegociação de mais de R$ 1 bilhão em dívidas.
- **Mecanismo:** A única solução desenvolvida para quem precisa fortalecer sua capacidade de negociação antes que as opções acabem.
- **3 passos:** São 3 etapas para recuperar sua estabilidade financeira.

### Variante 14
Respostas: `main_situation` = `renegotiate_early`, `sought_solution` = `selling_property`

- **Quem somos (corpo):** A Rooftop é uma empresa especializada em criar alternativas para proprietários que precisam recuperar fôlego financeiro antes que a pressão comprometa seu patrimônio.
- **Quem somos (destaque):** Já apoiamos nossos clientes na renegociação de mais de R$ 1 bilhão em dívidas.
- **Mecanismo:** A única solução que permite acessar recursos imediatos sem depender da venda do imóvel.
- **3 passos:** São 3 etapas para recuperar sua estabilidade financeira.

### Variante 15
Respostas: `main_situation` = `renegotiate_early`, `sought_solution` = `seeking_loan`

- **Quem somos (corpo):** A Rooftop é uma empresa especializada em criar alternativas para proprietários que precisam recuperar fôlego financeiro antes que a pressão comprometa seu patrimônio.
- **Quem somos (destaque):** Já apoiamos nossos clientes na renegociação de mais de R$ 1 bilhão em dívidas.
- **Mecanismo:** A única solução para quem busca recursos financeiros sem assumir novas dívidas bancárias.
- **3 passos:** São 3 etapas para recuperar sua estabilidade financeira.

### Variante 16
Respostas: `main_situation` = `renegotiate_early`, `sought_solution` = `no_search_yet`

- **Quem somos (corpo):** A Rooftop é uma empresa especializada em criar alternativas para proprietários que precisam recuperar fôlego financeiro antes que a pressão comprometa seu patrimônio.
- **Quem somos (destaque):** Já apoiamos nossos clientes na renegociação de mais de R$ 1 bilhão em dívidas.
- **Mecanismo:** A única solução que transforma patrimônio imobiliário em recursos para aliviar a pressão financeira.
- **3 passos:** São 3 etapas para recuperar sua estabilidade financeira.

## Empresário — indebted_entrepreneur / indebted_entrepreneur_expansion / entrepreneur_without_debt

Objetivo `invest_in_company`. Variantes 17–32. Usa `business_main_situation` e `business_sought_solution`.

### Variante 17
Respostas: `business_main_situation` = `company_debts`, `business_sought_solution` = `increase_revenue`

- **Quem somos (corpo):** A Rooftop é uma empresa especializada em transformar patrimônio imobiliário em capital estratégico para empresas que precisam se reestruturar e recuperar capacidade de crescimento.
- **Quem somos (destaque):** Já estruturamos mais de R$ 100 milhões para a reestruturação financeira de empresas.
- **Mecanismo:** A única solução que permite reorganizar a empresa e voltar a crescer mesmo quando o crédito tradicional já não é uma opção.
- **3 passos:** São 3 etapas para a reestruturação do seu negócio.

### Variante 18
Respostas: `business_main_situation` = `company_debts`, `business_sought_solution` = `pay_debts`

- **Quem somos (corpo):** A Rooftop é uma empresa especializada em transformar patrimônio imobiliário em capital estratégico para empresas que precisam se reestruturar e recuperar capacidade de crescimento.
- **Quem somos (destaque):** Já estruturamos mais de R$ 100 milhões para a reestruturação financeira de empresas.
- **Mecanismo:** A única solução que permite regularizar pendências empresariais sem depender de crédito bancário.
- **3 passos:** São 3 etapas para a reestruturação do seu negócio.

### Variante 19
Respostas: `business_main_situation` = `company_debts`, `business_sought_solution` = `improve_structure`

- **Quem somos (corpo):** A Rooftop é uma empresa especializada em transformar patrimônio imobiliário em capital estratégico para empresas que precisam se reestruturar e recuperar capacidade de crescimento.
- **Quem somos (destaque):** Já estruturamos mais de R$ 100 milhões para a reestruturação financeira de empresas.
- **Mecanismo:** A única solução que permite reorganizar a operação mesmo quando o acesso ao crédito está comprometido.
- **3 passos:** São 3 etapas para a reestruturação do seu negócio.

### Variante 20
Respostas: `business_main_situation` = `company_debts`, `business_sought_solution` = `unclear_return`

- **Quem somos (corpo):** A Rooftop é uma empresa especializada em transformar patrimônio imobiliário em capital estratégico para empresas que precisam se reestruturar e recuperar capacidade de crescimento.
- **Quem somos (destaque):** Já estruturamos mais de R$ 100 milhões para a reestruturação financeira de empresas.
- **Mecanismo:** A única solução que permite recuperar capacidade financeira e tomar decisões com mais previsibilidade para o negócio.
- **3 passos:** São 3 etapas para a reestruturação do seu negócio.

### Variante 21
Respostas: `business_main_situation` = `expansion_or_new_projects`, `business_sought_solution` = `increase_revenue`

- **Quem somos (corpo):** A Rooftop é uma empresa especializada em apoiar empresários a utilizar seu patrimônio como uma ferramenta estratégica de crescimento e alavancagem empresarial.
- **Quem somos (destaque):** Já destinamos mais de R$ 100 milhões para impulsionar a expansão e o crescimento de empresas.
- **Mecanismo:** A única solução que permite acelerar o crescimento da empresa utilizando o patrimônio já conquistado.
- **3 passos:** São 3 etapas para a expansão do seu negócio.

### Variante 22
Respostas: `business_main_situation` = `expansion_or_new_projects`, `business_sought_solution` = `pay_debts`

- **Quem somos (corpo):** A Rooftop é uma empresa especializada em apoiar empresários a utilizar seu patrimônio como uma ferramenta estratégica de crescimento e alavancagem empresarial.
- **Quem somos (destaque):** Já destinamos mais de R$ 100 milhões para impulsionar a expansão e o crescimento de empresas.
- **Mecanismo:** A única solução que permite reorganizar pendências sem comprometer os recursos destinados ao crescimento da empresa.
- **3 passos:** São 3 etapas para a expansão do seu negócio.

### Variante 23
Respostas: `business_main_situation` = `expansion_or_new_projects`, `business_sought_solution` = `improve_structure`

- **Quem somos (corpo):** A Rooftop é uma empresa especializada em apoiar empresários a utilizar seu patrimônio como uma ferramenta estratégica de crescimento e alavancagem empresarial.
- **Quem somos (destaque):** Já destinamos mais de R$ 100 milhões para impulsionar a expansão e o crescimento de empresas.
- **Mecanismo:** A única solução que transforma patrimônio imobiliário em investimento para fortalecer a operação e acelerar o crescimento da sua empresa.
- **3 passos:** São 3 etapas para a expansão do seu negócio.

### Variante 24
Respostas: `business_main_situation` = `expansion_or_new_projects`, `business_sought_solution` = `unclear_return`

- **Quem somos (corpo):** A Rooftop é uma empresa especializada em apoiar empresários a utilizar seu patrimônio como uma ferramenta estratégica de crescimento e alavancagem empresarial.
- **Quem somos (destaque):** Já destinamos mais de R$ 100 milhões para impulsionar a expansão e o crescimento de empresas.
- **Mecanismo:** A única solução que permite investir no crescimento da empresa com mais segurança e previsibilidade.
- **3 passos:** São 3 etapas para a expansão do seu negócio.

### Variante 25
Respostas: `business_main_situation` = `cash_flow_relief`, `business_sought_solution` = `increase_revenue`

- **Quem somos (corpo):** A Rooftop é uma empresa especializada em apoiar empresários a recuperar fôlego financeiro, preservar a operação e retomar o controle do negócio utilizando seu patrimônio.
- **Quem somos (destaque):** Já estruturamos mais de R$ 100 milhões para preservar a capacidade operacional de empresas.
- **Mecanismo:** A única solução que permite preservar a operação hoje para voltar a crescer amanhã.
- **3 passos:** São 3 etapas para reorganizar e retomar o controle financeiro do seu negócio.

### Variante 26
Respostas: `business_main_situation` = `cash_flow_relief`, `business_sought_solution` = `pay_debts`

- **Quem somos (corpo):** A Rooftop é uma empresa especializada em apoiar empresários a recuperar fôlego financeiro, preservar a operação e retomar o controle do negócio utilizando seu patrimônio.
- **Quem somos (destaque):** Já estruturamos mais de R$ 100 milhões para preservar a capacidade operacional de empresas.
- **Mecanismo:** A única solução que permite reorganizar obrigações imediatas sem comprometer o funcionamento da empresa.
- **3 passos:** São 3 etapas para reorganizar e retomar o controle financeiro do seu negócio.

### Variante 27
Respostas: `business_main_situation` = `cash_flow_relief`, `business_sought_solution` = `improve_structure`

- **Quem somos (corpo):** A Rooftop é uma empresa especializada em apoiar empresários a recuperar fôlego financeiro, preservar a operação e retomar o controle do negócio utilizando seu patrimônio.
- **Quem somos (destaque):** Já estruturamos mais de R$ 100 milhões para preservar a capacidade operacional de empresas.
- **Mecanismo:** A única solução que libera recursos para fortalecer a operação sem depender de aprovação bancária.
- **3 passos:** São 3 etapas para reorganizar e retomar o controle financeiro do seu negócio.

### Variante 28
Respostas: `business_main_situation` = `cash_flow_relief`, `business_sought_solution` = `unclear_return`

- **Quem somos (corpo):** A Rooftop é uma empresa especializada em apoiar empresários a recuperar fôlego financeiro, preservar a operação e retomar o controle do negócio utilizando seu patrimônio.
- **Quem somos (destaque):** Já estruturamos mais de R$ 100 milhões para preservar a capacidade operacional de empresas.
- **Mecanismo:** A única solução que oferece previsibilidade financeira em momentos de maior pressão sobre o negócio.
- **3 passos:** São 3 etapas para reorganizar e retomar o controle financeiro do seu negócio.

### Variante 29
Respostas: `business_main_situation` = `legal_or_operational_issues`, `business_sought_solution` = `increase_revenue`

- **Quem somos (corpo):** A Rooftop é uma empresa especializada em apoiar empresários a superar entraves jurídicos e operacionais para recuperar capacidade de execução e voltar a crescer.
- **Quem somos (destaque):** Já estruturamos mais de R$ 100 milhões para a regularização e reestruturação de empresas.
- **Mecanismo:** A única solução que permite superar entraves jurídicos e operacionais para sua empresa voltar a crescer.
- **3 passos:** São 3 etapas para a reestruturação do seu negócio.

### Variante 30
Respostas: `business_main_situation` = `legal_or_operational_issues`, `business_sought_solution` = `pay_debts`

- **Quem somos (corpo):** A Rooftop é uma empresa especializada em apoiar empresários a superar entraves jurídicos e operacionais para recuperar capacidade de execução e voltar a crescer.
- **Quem somos (destaque):** Já estruturamos mais de R$ 100 milhões para a regularização e reestruturação de empresas.
- **Mecanismo:** A única solução que permite regularizar pendências que comprometem a operação e o crescimento da sua empresa.
- **3 passos:** São 3 etapas para a reestruturação do seu negócio.

### Variante 31
Respostas: `business_main_situation` = `legal_or_operational_issues`, `business_sought_solution` = `improve_structure`

- **Quem somos (corpo):** A Rooftop é uma empresa especializada em apoiar empresários a superar entraves jurídicos e operacionais para recuperar capacidade de execução e voltar a crescer.
- **Quem somos (destaque):** Já estruturamos mais de R$ 100 milhões para a regularização e reestruturação de empresas.
- **Mecanismo:** A única solução que transforma patrimônio imobiliário em recursos para reorganizar e fortalecer a sua operação.
- **3 passos:** São 3 etapas para a reestruturação do seu negócio.

### Variante 32
Respostas: `business_main_situation` = `legal_or_operational_issues`, `business_sought_solution` = `unclear_return`

- **Quem somos (corpo):** A Rooftop é uma empresa especializada em apoiar empresários a superar entraves jurídicos e operacionais para recuperar capacidade de execução e voltar a crescer.
- **Quem somos (destaque):** Já estruturamos mais de R$ 100 milhões para a regularização e reestruturação de empresas.
- **Mecanismo:** A única solução que permite reestruturar a empresa com mais segurança e previsibilidade mesmo em cenários complexos.
- **3 passos:** São 3 etapas para a reestruturação do seu negócio.

## Vendedor — seller_all

Objetivo `anticipate_property_sale`. Variantes 33–52. Usa `selling_main_situation` e `selling_sought_solution`.

### Variante 33
Respostas: `selling_main_situation` = `selling_for_months`, `selling_sought_solution` = `offers_below_value`

- **Quem somos (corpo):** A Rooftop é uma empresa especializada em criar alternativas para proprietários que desejam antecipar parte do valor do imóvel e ganhar mais tempo para vender pelo preço certo.
- **Quem somos (destaque):** Já viabilizamos mais de R$ 100 milhões em liquidez antecipada e centenas de imóveis vendidos.
- **Mecanismo:** A única solução que permite acessar recursos agora sem precisar aceitar propostas abaixo do valor do imóvel.
- **3 passos:** São 3 etapas para acessar liquidez agora sem abrir mão do valor do seu imóvel.

### Variante 34
Respostas: `selling_main_situation` = `selling_for_months`, `selling_sought_solution` = `property_without_offers`

- **Quem somos (corpo):** A Rooftop é uma empresa especializada em criar alternativas para proprietários que desejam antecipar parte do valor do imóvel e ganhar mais tempo para vender pelo preço certo.
- **Quem somos (destaque):** Já viabilizamos mais de R$ 100 milhões em liquidez antecipada e centenas de imóveis vendidos.
- **Mecanismo:** A única solução que permite acessar recursos imediatamente enquanto buscamos juntos o comprador certo para o imóvel.
- **3 passos:** São 3 etapas para acessar liquidez agora sem abrir mão do valor do seu imóvel.

### Variante 35
Respostas: `selling_main_situation` = `selling_for_months`, `selling_sought_solution` = `buyer_difficulty`

- **Quem somos (corpo):** A Rooftop é uma empresa especializada em criar alternativas para proprietários que desejam antecipar parte do valor do imóvel e ganhar mais tempo para vender pelo preço certo.
- **Quem somos (destaque):** Já viabilizamos mais de R$ 100 milhões em liquidez antecipada e centenas de imóveis vendidos.
- **Mecanismo:** A única solução que combina liquidez imediata com apoio especializado para acelerar a venda do imóvel.
- **3 passos:** São 3 etapas para acessar liquidez agora sem abrir mão do valor do seu imóvel.

### Variante 36
Respostas: `selling_main_situation` = `selling_for_months`, `selling_sought_solution` = `not_listed_yet`

- **Quem somos (corpo):** A Rooftop é uma empresa especializada em criar alternativas para proprietários que desejam antecipar parte do valor do imóvel e ganhar mais tempo para vender pelo preço certo.
- **Quem somos (destaque):** Já viabilizamos mais de R$ 100 milhões em liquidez antecipada e centenas de imóveis vendidos.
- **Mecanismo:** A única solução que permite acessar parte do valor do imóvel antes da venda e definir com mais liberdade sua estratégia de comercialização.
- **3 passos:** São 3 etapas para acessar liquidez agora sem abrir mão do valor do seu imóvel.

### Variante 37
Respostas: `selling_main_situation` = `selling_for_months`, `selling_sought_solution` = `sell_with_discount`

- **Quem somos (corpo):** A Rooftop é uma empresa especializada em criar alternativas para proprietários que desejam antecipar parte do valor do imóvel e ganhar mais tempo para vender pelo preço certo.
- **Quem somos (destaque):** Já viabilizamos mais de R$ 100 milhões em liquidez antecipada e centenas de imóveis vendidos.
- **Mecanismo:** A única solução que permite ganhar tempo para encontrar o comprador certo pelo preço certo.
- **3 passos:** São 3 etapas para acessar liquidez agora sem abrir mão do valor do seu imóvel.

### Variante 38
Respostas: `selling_main_situation` = `anticipate_part_value`, `selling_sought_solution` = `offers_below_value`

- **Quem somos (corpo):** A Rooftop é uma empresa especializada em apoiar proprietários a acessar parte do valor do imóvel antes da venda, preservando tempo e poder de negociação.
- **Quem somos (destaque):** Já viabilizamos mais de R$ 100 milhões em liquidez antecipada e centenas de imóveis vendidos.
- **Mecanismo:** A única solução que permite acessar recursos agora sem precisar aceitar propostas abaixo do valor do imóvel.
- **3 passos:** São 3 etapas para acessar parte do valor do seu imóvel sem precisar esperar pela venda.

### Variante 39
Respostas: `selling_main_situation` = `anticipate_part_value`, `selling_sought_solution` = `property_without_offers`

- **Quem somos (corpo):** A Rooftop é uma empresa especializada em apoiar proprietários a acessar parte do valor do imóvel antes da venda, preservando tempo e poder de negociação.
- **Quem somos (destaque):** Já viabilizamos mais de R$ 100 milhões em liquidez antecipada e centenas de imóveis vendidos.
- **Mecanismo:** A única solução que permite acessar parte do valor do imóvel imediatamente enquanto sua venda continua avançando.
- **3 passos:** São 3 etapas para acessar parte do valor do seu imóvel sem precisar esperar pela venda.

### Variante 40
Respostas: `selling_main_situation` = `anticipate_part_value`, `selling_sought_solution` = `buyer_difficulty`

- **Quem somos (corpo):** A Rooftop é uma empresa especializada em apoiar proprietários a acessar parte do valor do imóvel antes da venda, preservando tempo e poder de negociação.
- **Quem somos (destaque):** Já viabilizamos mais de R$ 100 milhões em liquidez antecipada e centenas de imóveis vendidos.
- **Mecanismo:** A única solução que combina liquidez imediata com apoio especializado para acelerar a venda do imóvel.
- **3 passos:** São 3 etapas para acessar parte do valor do seu imóvel sem precisar esperar pela venda.

### Variante 41
Respostas: `selling_main_situation` = `anticipate_part_value`, `selling_sought_solution` = `not_listed_yet`

- **Quem somos (corpo):** A Rooftop é uma empresa especializada em apoiar proprietários a acessar parte do valor do imóvel antes da venda, preservando tempo e poder de negociação.
- **Quem somos (destaque):** Já viabilizamos mais de R$ 100 milhões em liquidez antecipada e centenas de imóveis vendidos.
- **Mecanismo:** A única solução que permite acessar parte do valor do imóvel antes mesmo de iniciar o processo de venda.
- **3 passos:** São 3 etapas para acessar parte do valor do seu imóvel sem precisar esperar pela venda.

### Variante 42
Respostas: `selling_main_situation` = `anticipate_part_value`, `selling_sought_solution` = `sell_with_discount`

- **Quem somos (corpo):** A Rooftop é uma empresa especializada em apoiar proprietários a acessar parte do valor do imóvel antes da venda, preservando tempo e poder de negociação.
- **Quem somos (destaque):** Já viabilizamos mais de R$ 100 milhões em liquidez antecipada e centenas de imóveis vendidos.
- **Mecanismo:** A única solução que permite ganhar tempo para vender melhor sem abrir mão do valor do imóvel.
- **3 passos:** São 3 etapas para acessar parte do valor do seu imóvel sem precisar esperar pela venda.

### Variante 43
Respostas: `selling_main_situation` = `just_curious`, `selling_sought_solution` = `offers_below_value`

- **Quem somos (corpo):** A Rooftop é uma empresa especializada em apresentar novas possibilidades para proprietários que desejam acessar o valor do imóvel sem precisar vendê-lo imediatamente.
- **Quem somos (destaque):** Já viabilizamos mais de R$ 100 milhões em liquidez antecipada e centenas de imóveis vendidos.
- **Mecanismo:** A única solução que permite avaliar alternativas antes de aceitar propostas abaixo do valor do imóvel.
- **3 passos:** São 3 etapas para conhecer novas alternativas para o seu patrimônio.

### Variante 44
Respostas: `selling_main_situation` = `just_curious`, `selling_sought_solution` = `property_without_offers`

- **Quem somos (corpo):** A Rooftop é uma empresa especializada em apresentar novas possibilidades para proprietários que desejam acessar o valor do imóvel sem precisar vendê-lo imediatamente.
- **Quem somos (destaque):** Já viabilizamos mais de R$ 100 milhões em liquidez antecipada e centenas de imóveis vendidos.
- **Mecanismo:** A única solução que permite acessar parte do valor do imóvel enquanto buscamos juntos o comprador certo pelo preço certo.
- **3 passos:** São 3 etapas para conhecer novas alternativas para o seu patrimônio.

### Variante 45
Respostas: `selling_main_situation` = `just_curious`, `selling_sought_solution` = `buyer_difficulty`

- **Quem somos (corpo):** A Rooftop é uma empresa especializada em apresentar novas possibilidades para proprietários que desejam acessar o valor do imóvel sem precisar vendê-lo imediatamente.
- **Quem somos (destaque):** Já viabilizamos mais de R$ 100 milhões em liquidez antecipada e centenas de imóveis vendidos.
- **Mecanismo:** A única solução que combina liquidez imediata com apoio especializado para ampliar suas possibilidades de negociação.
- **3 passos:** São 3 etapas para conhecer novas alternativas para o seu patrimônio.

### Variante 46
Respostas: `selling_main_situation` = `just_curious`, `selling_sought_solution` = `not_listed_yet`

- **Quem somos (corpo):** A Rooftop é uma empresa especializada em apresentar novas possibilidades para proprietários que desejam acessar o valor do imóvel sem precisar vendê-lo imediatamente.
- **Quem somos (destaque):** Já viabilizamos mais de R$ 100 milhões em liquidez antecipada e centenas de imóveis vendidos.
- **Mecanismo:** A única solução que permite acessar parte do valor do imóvel antes mesmo de decidir como será sua estratégia de venda.
- **3 passos:** São 3 etapas para conhecer novas alternativas para o seu patrimônio.

### Variante 47
Respostas: `selling_main_situation` = `just_curious`, `selling_sought_solution` = `sell_with_discount`

- **Quem somos (corpo):** A Rooftop é uma empresa especializada em apresentar novas possibilidades para proprietários que desejam acessar o valor do imóvel sem precisar vendê-lo imediatamente.
- **Quem somos (destaque):** Já viabilizamos mais de R$ 100 milhões em liquidez antecipada e centenas de imóveis vendidos.
- **Mecanismo:** A única solução que permite conhecer alternativas antes de abrir mão do valor do imóvel.
- **3 passos:** São 3 etapas para conhecer novas alternativas para o seu patrimônio.

### Variante 48
Respostas: `selling_main_situation` = `starting_to_sell`, `selling_sought_solution` = `offers_below_value`

- **Quem somos (corpo):** A Rooftop é uma empresa especializada em apoiar proprietários a iniciar a venda do imóvel com mais liquidez, liberdade de negociação e tranquilidade.
- **Quem somos (destaque):** Já viabilizamos mais de R$ 100 milhões em liquidez antecipada e centenas de imóveis vendidos.
- **Mecanismo:** A única solução que permite iniciar a venda sem pressão para aceitar propostas abaixo do valor do imóvel.
- **3 passos:** São 3 etapas para vender com mais tranquilidade e controle.

### Variante 49
Respostas: `selling_main_situation` = `starting_to_sell`, `selling_sought_solution` = `property_without_offers`

- **Quem somos (corpo):** A Rooftop é uma empresa especializada em apoiar proprietários a iniciar a venda do imóvel com mais liquidez, liberdade de negociação e tranquilidade.
- **Quem somos (destaque):** Já viabilizamos mais de R$ 100 milhões em liquidez antecipada e centenas de imóveis vendidos.
- **Mecanismo:** A única solução que permite acessar parte do valor do imóvel enquanto sua estratégia de venda é construída.
- **3 passos:** São 3 etapas para vender com mais tranquilidade e controle.

### Variante 50
Respostas: `selling_main_situation` = `starting_to_sell`, `selling_sought_solution` = `buyer_difficulty`

- **Quem somos (corpo):** A Rooftop é uma empresa especializada em apoiar proprietários a iniciar a venda do imóvel com mais liquidez, liberdade de negociação e tranquilidade.
- **Quem somos (destaque):** Já viabilizamos mais de R$ 100 milhões em liquidez antecipada e centenas de imóveis vendidos.
- **Mecanismo:** A única solução que combina liquidez imediata com apoio especializado para ampliar suas oportunidades de venda.
- **3 passos:** São 3 etapas para vender com mais tranquilidade e controle.

### Variante 51
Respostas: `selling_main_situation` = `starting_to_sell`, `selling_sought_solution` = `not_listed_yet`

- **Quem somos (corpo):** A Rooftop é uma empresa especializada em apoiar proprietários a iniciar a venda do imóvel com mais liquidez, liberdade de negociação e tranquilidade.
- **Quem somos (destaque):** Já viabilizamos mais de R$ 100 milhões em liquidez antecipada e centenas de imóveis vendidos.
- **Mecanismo:** A única solução que permite acessar parte do valor do imóvel antes mesmo de colocá-lo à venda.
- **3 passos:** São 3 etapas para vender com mais tranquilidade e controle.

### Variante 52
Respostas: `selling_main_situation` = `starting_to_sell`, `selling_sought_solution` = `sell_with_discount`

- **Quem somos (corpo):** A Rooftop é uma empresa especializada em apoiar proprietários a iniciar a venda do imóvel com mais liquidez, liberdade de negociação e tranquilidade.
- **Quem somos (destaque):** Já viabilizamos mais de R$ 100 milhões em liquidez antecipada e centenas de imóveis vendidos.
- **Mecanismo:** A única solução que permite vender com mais calma sem abrir mão do valor do imóvel.
- **3 passos:** São 3 etapas para vender com mais tranquilidade e controle.

## Outros — other_all

Objetivo `understand_homecash`. Variantes 53–76. Usa `other_main_situation` e `other_sought_solution`.

### Variante 53
Respostas: `other_main_situation` = `health`, `other_sought_solution` = `bank_loan`

- **Quem somos (corpo):** A Rooftop é uma empresa especializada em apoiar proprietários a transformar seu patrimônio em recursos para realizar objetivos importantes.
- **Quem somos (destaque):** Já liberamos mais de R$ 100 milhões para transformar patrimônio em novos projetos e objetivos.
- **Mecanismo:** A única solução que permite acessar recursos sem criar uma nova dívida bancária.
- **3 passos:** São 3 etapas para utilizar seu patrimônio a favor dos seus objetivos.

### Variante 54
Respostas: `other_main_situation` = `health`, `other_sought_solution` = `considered_selling_property`

- **Quem somos (corpo):** A Rooftop é uma empresa especializada em apoiar proprietários a transformar seu patrimônio em recursos para realizar objetivos importantes.
- **Quem somos (destaque):** Já liberamos mais de R$ 100 milhões para transformar patrimônio em novos projetos e objetivos.
- **Mecanismo:** A única solução que permite acessar recursos preservando o potencial de valorização do patrimônio.
- **3 passos:** São 3 etapas para utilizar seu patrimônio a favor dos seus objetivos.

### Variante 55
Respostas: `other_main_situation` = `health`, `other_sought_solution` = `tried_home_equity`

- **Quem somos (corpo):** A Rooftop é uma empresa especializada em apoiar proprietários a transformar seu patrimônio em recursos para realizar objetivos importantes.
- **Quem somos (destaque):** Já liberamos mais de R$ 100 milhões para transformar patrimônio em novos projetos e objetivos.
- **Mecanismo:** A única solução que permite acessar recursos sem depender de análise de crédito, renda ou aprovação bancária.
- **3 passos:** São 3 etapas para utilizar seu patrimônio a favor dos seus objetivos.

### Variante 56
Respostas: `other_main_situation` = `health`, `other_sought_solution` = `unsure_how_to_proceed`

- **Quem somos (corpo):** A Rooftop é uma empresa especializada em apoiar proprietários a transformar seu patrimônio em recursos para realizar objetivos importantes.
- **Quem somos (destaque):** Já liberamos mais de R$ 100 milhões para transformar patrimônio em novos projetos e objetivos.
- **Mecanismo:** A melhor forma de descobrir novas possibilidades para o seu patrimônio.
- **3 passos:** São 3 etapas para utilizar seu patrimônio a favor dos seus objetivos.

### Variante 57
Respostas: `other_main_situation` = `education`, `other_sought_solution` = `bank_loan`

- **Quem somos (corpo):** A Rooftop é uma empresa especializada em apoiar proprietários a transformar seu patrimônio em recursos para realizar objetivos importantes.
- **Quem somos (destaque):** Já liberamos mais de R$ 100 milhões para transformar patrimônio em novos projetos e objetivos.
- **Mecanismo:** A única solução que permite acessar recursos sem criar uma nova dívida bancária.
- **3 passos:** São 3 etapas para utilizar seu patrimônio a favor dos seus objetivos.

### Variante 58
Respostas: `other_main_situation` = `education`, `other_sought_solution` = `considered_selling_property`

- **Quem somos (corpo):** A Rooftop é uma empresa especializada em apoiar proprietários a transformar seu patrimônio em recursos para realizar objetivos importantes.
- **Quem somos (destaque):** Já liberamos mais de R$ 100 milhões para transformar patrimônio em novos projetos e objetivos.
- **Mecanismo:** A única solução que permite acessar recursos preservando o potencial de valorização do patrimônio.
- **3 passos:** São 3 etapas para utilizar seu patrimônio a favor dos seus objetivos.

### Variante 59
Respostas: `other_main_situation` = `education`, `other_sought_solution` = `tried_home_equity`

- **Quem somos (corpo):** A Rooftop é uma empresa especializada em apoiar proprietários a transformar seu patrimônio em recursos para realizar objetivos importantes.
- **Quem somos (destaque):** Já liberamos mais de R$ 100 milhões para transformar patrimônio em novos projetos e objetivos.
- **Mecanismo:** A única solução que permite acessar recursos sem depender de análise de crédito, renda ou aprovação bancária.
- **3 passos:** São 3 etapas para utilizar seu patrimônio a favor dos seus objetivos.

### Variante 60
Respostas: `other_main_situation` = `education`, `other_sought_solution` = `unsure_how_to_proceed`

- **Quem somos (corpo):** A Rooftop é uma empresa especializada em apoiar proprietários a transformar seu patrimônio em recursos para realizar objetivos importantes.
- **Quem somos (destaque):** Já liberamos mais de R$ 100 milhões para transformar patrimônio em novos projetos e objetivos.
- **Mecanismo:** A melhor forma de descobrir novas possibilidades para o seu patrimônio.
- **3 passos:** São 3 etapas para utilizar seu patrimônio a favor dos seus objetivos.

### Variante 61
Respostas: `other_main_situation` = `travel_or_move`, `other_sought_solution` = `bank_loan`

- **Quem somos (corpo):** A Rooftop é uma empresa especializada em apoiar proprietários a transformar seu patrimônio em recursos para realizar objetivos importantes.
- **Quem somos (destaque):** Já liberamos mais de R$ 100 milhões para transformar patrimônio em novos projetos e objetivos.
- **Mecanismo:** A única solução que permite acessar recursos sem criar uma nova dívida bancária.
- **3 passos:** São 3 etapas para utilizar seu patrimônio a favor dos seus objetivos.

### Variante 62
Respostas: `other_main_situation` = `travel_or_move`, `other_sought_solution` = `considered_selling_property`

- **Quem somos (corpo):** A Rooftop é uma empresa especializada em apoiar proprietários a transformar seu patrimônio em recursos para realizar objetivos importantes.
- **Quem somos (destaque):** Já liberamos mais de R$ 100 milhões para transformar patrimônio em novos projetos e objetivos.
- **Mecanismo:** A única solução que permite acessar recursos preservando o potencial de valorização do patrimônio.
- **3 passos:** São 3 etapas para utilizar seu patrimônio a favor dos seus objetivos.

### Variante 63
Respostas: `other_main_situation` = `travel_or_move`, `other_sought_solution` = `tried_home_equity`

- **Quem somos (corpo):** A Rooftop é uma empresa especializada em apoiar proprietários a transformar seu patrimônio em recursos para realizar objetivos importantes.
- **Quem somos (destaque):** Já liberamos mais de R$ 100 milhões para transformar patrimônio em novos projetos e objetivos.
- **Mecanismo:** A única solução que permite acessar recursos sem depender de análise de crédito, renda ou aprovação bancária.
- **3 passos:** São 3 etapas para utilizar seu patrimônio a favor dos seus objetivos.

### Variante 64
Respostas: `other_main_situation` = `travel_or_move`, `other_sought_solution` = `unsure_how_to_proceed`

- **Quem somos (corpo):** A Rooftop é uma empresa especializada em apoiar proprietários a transformar seu patrimônio em recursos para realizar objetivos importantes.
- **Quem somos (destaque):** Já liberamos mais de R$ 100 milhões para transformar patrimônio em novos projetos e objetivos.
- **Mecanismo:** A melhor forma de descobrir novas possibilidades para o seu patrimônio.
- **3 passos:** São 3 etapas para utilizar seu patrimônio a favor dos seus objetivos.

### Variante 65
Respostas: `other_main_situation` = `family_support`, `other_sought_solution` = `bank_loan`

- **Quem somos (corpo):** A Rooftop é uma empresa especializada em apoiar proprietários a transformar seu patrimônio em recursos para realizar objetivos importantes.
- **Quem somos (destaque):** Já liberamos mais de R$ 100 milhões para transformar patrimônio em novos projetos e objetivos.
- **Mecanismo:** A única solução que permite acessar recursos sem criar uma nova dívida bancária.
- **3 passos:** São 3 etapas para utilizar seu patrimônio a favor dos seus objetivos.

### Variante 66
Respostas: `other_main_situation` = `family_support`, `other_sought_solution` = `considered_selling_property`

- **Quem somos (corpo):** A Rooftop é uma empresa especializada em apoiar proprietários a transformar seu patrimônio em recursos para realizar objetivos importantes.
- **Quem somos (destaque):** Já liberamos mais de R$ 100 milhões para transformar patrimônio em novos projetos e objetivos.
- **Mecanismo:** A única solução que permite acessar recursos preservando o potencial de valorização do patrimônio.
- **3 passos:** São 3 etapas para utilizar seu patrimônio a favor dos seus objetivos.

### Variante 67
Respostas: `other_main_situation` = `family_support`, `other_sought_solution` = `tried_home_equity`

- **Quem somos (corpo):** A Rooftop é uma empresa especializada em apoiar proprietários a transformar seu patrimônio em recursos para realizar objetivos importantes.
- **Quem somos (destaque):** Já liberamos mais de R$ 100 milhões para transformar patrimônio em novos projetos e objetivos.
- **Mecanismo:** A única solução que permite acessar recursos sem depender de análise de crédito, renda ou aprovação bancária.
- **3 passos:** São 3 etapas para utilizar seu patrimônio a favor dos seus objetivos.

### Variante 68
Respostas: `other_main_situation` = `family_support`, `other_sought_solution` = `unsure_how_to_proceed`

- **Quem somos (corpo):** A Rooftop é uma empresa especializada em apoiar proprietários a transformar seu patrimônio em recursos para realizar objetivos importantes.
- **Quem somos (destaque):** Já liberamos mais de R$ 100 milhões para transformar patrimônio em novos projetos e objetivos.
- **Mecanismo:** A melhor forma de descobrir novas possibilidades para o seu patrimônio.
- **3 passos:** São 3 etapas para utilizar seu patrimônio a favor dos seus objetivos.

### Variante 69
Respostas: `other_main_situation` = `legal_pending`, `other_sought_solution` = `bank_loan`

- **Quem somos (corpo):** A Rooftop é uma empresa especializada em apoiar proprietários a transformar seu patrimônio em recursos para realizar objetivos importantes.
- **Quem somos (destaque):** Já apoiamos nossos clientes na regularização de mais de R$ 1 bilhão em processos judiciais.
- **Mecanismo:** A única solução que permite acessar recursos sem criar uma nova dívida bancária.
- **3 passos:** São 3 etapas para utilizar seu patrimônio a favor dos seus objetivos.

### Variante 70
Respostas: `other_main_situation` = `legal_pending`, `other_sought_solution` = `considered_selling_property`

- **Quem somos (corpo):** A Rooftop é uma empresa especializada em apoiar proprietários a transformar seu patrimônio em recursos para realizar objetivos importantes.
- **Quem somos (destaque):** Já apoiamos nossos clientes na regularização de mais de R$ 1 bilhão em processos judiciais.
- **Mecanismo:** A única solução que permite acessar recursos para resolver pendências sem abrir mão do patrimônio.
- **3 passos:** São 3 etapas para utilizar seu patrimônio a favor dos seus objetivos.

### Variante 71
Respostas: `other_main_situation` = `legal_pending`, `other_sought_solution` = `tried_home_equity`

- **Quem somos (corpo):** A Rooftop é uma empresa especializada em apoiar proprietários a resolver pendências jurídicas e recuperar tranquilidade financeira utilizando o próprio patrimônio.
- **Quem somos (destaque):** Já apoiamos nossos clientes na regularização de mais de R$ 1 bilhão em processos judiciais.
- **Mecanismo:** A única solução que permite acessar recursos sem depender de análise de crédito, renda ou aprovação bancária.
- **3 passos:** São 3 etapas para utilizar seu patrimônio a favor dos seus objetivos.

### Variante 72
Respostas: `other_main_situation` = `legal_pending`, `other_sought_solution` = `unsure_how_to_proceed`

- **Quem somos (corpo):** A Rooftop é uma empresa especializada em apoiar proprietários a resolver pendências jurídicas e recuperar tranquilidade financeira utilizando o próprio patrimônio.
- **Quem somos (destaque):** Já apoiamos nossos clientes na regularização de mais de R$ 1 bilhão em processos judiciais.
- **Mecanismo:** A melhor forma de descobrir novas possibilidades para o seu patrimônio.
- **3 passos:** São 3 etapas para utilizar seu patrimônio a favor dos seus objetivos.

### Variante 73
Respostas: `other_main_situation` = `other_goals`, `other_sought_solution` = `bank_loan`

- **Quem somos (corpo):** A Rooftop é uma empresa especializada em apoiar proprietários a resolver pendências jurídicas e recuperar tranquilidade financeira utilizando o próprio patrimônio.
- **Quem somos (destaque):** Já liberamos mais de R$ 100 milhões para transformar patrimônio em novos projetos e objetivos.
- **Mecanismo:** A única solução que permite acessar recursos sem criar uma nova dívida bancária.
- **3 passos:** São 3 etapas para utilizar seu patrimônio a favor dos seus objetivos.

### Variante 74
Respostas: `other_main_situation` = `other_goals`, `other_sought_solution` = `considered_selling_property`

- **Quem somos (corpo):** A Rooftop é uma empresa especializada em apoiar proprietários a resolver pendências jurídicas e recuperar tranquilidade financeira utilizando o próprio patrimônio.
- **Quem somos (destaque):** Já liberamos mais de R$ 100 milhões para transformar patrimônio em novos projetos e objetivos.
- **Mecanismo:** A única solução que permite acessar recursos preservando o potencial de valorização do patrimônio.
- **3 passos:** São 3 etapas para utilizar seu patrimônio a favor dos seus objetivos.

### Variante 75
Respostas: `other_main_situation` = `other_goals`, `other_sought_solution` = `tried_home_equity`

- **Quem somos (corpo):** A Rooftop é uma empresa especializada em apoiar proprietários a resolver pendências jurídicas e recuperar tranquilidade financeira utilizando o próprio patrimônio.
- **Quem somos (destaque):** Já liberamos mais de R$ 100 milhões para transformar patrimônio em novos projetos e objetivos.
- **Mecanismo:** A única solução que permite acessar recursos sem depender de análise de crédito, renda ou aprovação bancária.
- **3 passos:** São 3 etapas para utilizar seu patrimônio a favor dos seus objetivos.

### Variante 76
Respostas: `other_main_situation` = `other_goals`, `other_sought_solution` = `unsure_how_to_proceed`

- **Quem somos (corpo):** A Rooftop é uma empresa especializada em apoiar proprietários a resolver pendências jurídicas e recuperar tranquilidade financeira utilizando o próprio patrimônio.
- **Quem somos (destaque):** Já liberamos mais de R$ 100 milhões para transformar patrimônio em novos projetos e objetivos.
- **Mecanismo:** A melhor forma de descobrir novas possibilidades para o seu patrimônio.
- **3 passos:** São 3 etapas para utilizar seu patrimônio a favor dos seus objetivos.

