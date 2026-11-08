# Portfólio profissional de Guilherme Ribeiro

Portfólio de Guilherme Ribeiro, desenvolvedor full stack com foco em C# e .NET. O site reúne uma apresentação profissional, estudos de caso e o currículo, com navegação em português e inglês.

**Site publicado:** [guilherme-ribeiro-dev.vercel.app](https://guilherme-ribeiro-dev.vercel.app/)

## Projetos

| Projeto | O que você encontra |
| --- | --- |
| [FindAll](projetos/findall.html) | Estudo de caso sobre monitoramento e rastreabilidade de ativos com IoT. |
| [Workstation Kit](projetos/workstation.html) | Estudo de caso sobre automação da configuração de ambientes Windows com PowerShell. |
| [FlowFin](https://guilherme-ribeiro-dev.vercel.app/#projetos) | Apresentação do aplicativo full stack de finanças pessoais, com .NET, React e TypeScript. O estudo de caso está em desenvolvimento. |

## Executar localmente

O site usa HTML, CSS e JavaScript puro. Abra `index.html` no navegador ou, com Python 3 instalado, execute na raiz do repositório:

```bash
python -m http.server 8000
```

Acesse [localhost:8000](http://localhost:8000/).

## Estrutura

```text
.
├── index.html          # Página inicial, projetos, contato e currículo
├── sobre.html          # Trajetória, formação e competências
├── projetos/           # Páginas dos estudos de caso
├── css/style.css       # Estilos, responsividade e animações
├── js/script.js        # Navegação, interações e traduções PT/EN
└── assets/
    ├── files/          # Currículo em PDF
    └── images/         # Imagens do site e de compartilhamento
```

## Manutenção e publicação

Ao editar um texto, atualize o HTML em português e as entradas correspondentes no objeto `translations` em `js/script.js`. Os atributos `data-i18n` associam os elementos às traduções. O botão de currículo da página inicial aponta para o PDF em `assets/files/`.

Na Vercel, a raiz do repositório é a raiz do site. A publicação é estática e dispensa instalação de dependências ou compilação. Se o domínio mudar, atualize as URLs canônicas e os metadados Open Graph das quatro páginas.
