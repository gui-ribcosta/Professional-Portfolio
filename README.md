# Portfólio — Guilherme Ribeiro

Portfólio profissional estático construído apenas com HTML5, CSS3 e JavaScript puro. A interface usa uma linguagem editorial escura, detalhes roxos, grid técnico e conteúdo bilíngue em português e inglês.

## Como executar

Não há dependências ou etapa de compilação. Abra `index.html` diretamente no navegador ou sirva a pasta `portfolio` com qualquer servidor estático.

Exemplo com Python instalado:

```bash
cd portfolio
python -m http.server 8000
```

Depois, acesse `http://localhost:8000`.

## Estrutura

- `index.html`: estrutura semântica e conteúdo da página.
- `sobre.html`: página editorial independente de apresentação pessoal, com conteúdo bilíngue.
- `projetos/findall.html`: estudo de caso conceitual do FindAll, com navegação própria e conteúdo em nível público.
- `css/style.css`: variáveis visuais, layout, responsividade e animações.
- `js/script.js`: menu mobile, ano do rodapé e alternância PT/EN.
- `assets/images/`: espaço reservado para imagens futuras.

## Como editar

1. Atualize textos e seções no `index.html` e as respectivas traduções no objeto `translations` em `js/script.js`.
2. Ajuste cores e medidas pelas variáveis no início de `css/style.css`.
3. Para adicionar canais de contato, substitua o destino do botão na seção `#contato` por um endereço real ou link confirmado.
4. Imagens futuras podem ser colocadas em `assets/images/`, sem tornar o carregamento delas obrigatório para o conteúdo principal.

## Estudo de caso FindAll

O card principal de FindAll aponta para `projetos/findall.html`. A página usa uma composição SVG abstrata própria em vez de telas ou imagens internas, mantendo o projeto em nível conceitual para preservar a confidencialidade. Os textos bilíngues do case ficam no objeto `translations.caseStudy` em `js/script.js`.
