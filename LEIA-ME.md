# Site Reabilita em Casa · Andréa Rangel

Site estático com 7 páginas. Para ver no computador, abra `index.html` no navegador.

## Páginas
- `index.html`: início (as duas frentes, Andréa, equipamentos, depoimentos, conteúdos, e-book)
- `andrea-rangel.html`: trajetória, formação, princípios, vida pessoal
- `equipamentos.html`: catálogo com os 21 itens do site antigo, filtros por categoria, ficha técnica e botão de WhatsApp com o nome do item já na mensagem
- `fisioterapia.html`: especialidades, recursos, como funciona, depoimentos, perguntas frequentes
- `conteudos.html`: 6 guias escritos a partir das orientações da Andréa, com os vídeos dela
- `contato.html`: WhatsApp, telefone, mapa, horário e formulário que abre o WhatsApp com a mensagem pronta
- `links.html`: central de links que substitui o `/bio`. Use esta URL na bio do Instagram
- `404.html`: página de erro no padrão do site. Configure-a como página 404 na hospedagem

## Como editar
Os textos ficam em `src/*.html`. O cabeçalho, o rodapé, os links de WhatsApp e os metadados ficam em `src/build.py`.
Depois de editar, gere as páginas de novo com:

    python src/build.py

Os produtos ficam em `assets/js/produtos.js`.

## Identidade aplicada
Segue o manual "Proposta de Identidade Visual" e o "Projeto revisado":
- Fonte Poppins (títulos SemiBold 600, textos Regular)
- Cores laranja #FFA500, branco acolhedor #FFF9EF, marfim #F7F3EB, grafite #2E2E2E, damasco #FFE2B0 e terracota #A64B00
- Logo refinado (nome em grafite, pomba em laranja)
- Quadrados arredondados com animação de entrada rápida e troca de cor em loop, mais o arco e a onda laranja

## Fotos da Andréa
- `assets/img/andrea-hero.webp`: retrato de camisa branca, com fundo transparente (topo da home e página de links)
- `assets/img/andrea-vestido.webp`: retrato de corpo inteiro com roupa preta, fundo transparente (página da Andréa e seção "Quem está por trás")
- Os frames de vídeo de baixa resolução deixaram de ser usados como foto principal.

## Animações
- Transição entre páginas: cortina de colunas amarelas com a pomba (cerca de meio segundo). Desligada para quem ativa "reduzir movimento" no sistema.
- Topo da home e da página da Andréa: a foto sobe e se revela; arco, quadrados e onda entram em sequência, com parallax leve ao rolar e ao mover o mouse.
- Menu: indicador que desliza entre os itens no desktop; no celular, painel que se abre a partir do botão, com itens em cascata.
- Cabeçalho some ao descer a página e volta ao subir, com barra de progresso de leitura.

## Sempre no tema claro
O site tem uma única aparência, a clara. Em celulares com modo noturno ligado ele continua igual: `color-scheme: only light` no CSS e nos metadados impede que o navegador escureça ou inverta as cores. Não adicione regras `prefers-color-scheme: dark`.

## A confirmar com a empresa antes de publicar
1. **Horário de segunda-feira.** O Google mostrou segunda fechada por causa do feriado de 12/10. O site exibe terça a sexta, 9h às 18h, e sábado, 9h às 13h.
2. **Página do e-book.** O botão leva a `reclocacao.com.br/guia-pratico-do-andador/`. Essa página precisa continuar no ar, ou o link precisa ser atualizado.
3. **Domínio final.** Canonical, sitemap e Open Graph usam `https://reabilitaemcasa.com.br/`.
4. **Números.** 5,0 no Google com mais de 130 avaliações e 36 mil seguidores são dados de 08/10/2026. 25 anos de experiência vem da bio atual.
5. **CNPJ no rodapé.** Veio de um cadastro secundário (Casa dos Dados).
6. **Ilustrações das categorias.** As imagens recortadas de cadeira, andador, cama e cadeira de banho (`assets/img/cat-*.webp`) são ilustrações geradas para o manual. Os cards de cada produto usam as fotos reais do catálogo.
7. **Área de atendimento e condições de locação.** Prazo mínimo e regiões atendidas não aparecem no site porque não foram informados.
