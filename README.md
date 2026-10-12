# Trabalho React + Tailwind — Luana

Projeto de estudos com React, Vite e Tailwind CSS. Os dez exercícios estão implementados. Veja as explicações de props e classes em [ESTUDO_REACT.md](ESTUDO_REACT.md).

## Abrir e executar no VS Code

1. Abra esta pasta pelo menu **Arquivo > Abrir Pasta**.
2. Abra **Terminal > Novo Terminal**.
3. Na primeira execução, digite `npm.cmd ci` para instalar as dependências do arquivo de lock. Depois execute `npm.cmd run dev`.
4. Abra o endereço Local informado pelo terminal (normalmente http://localhost:5173).
5. Para encerrar o servidor, pressione Ctrl+C no terminal.

Requer Node.js 22.12+ ou 24 LTS e npm. Usamos npm.cmd no PowerShell para evitar bloqueio de scripts .ps1; não é preciso alterar as configurações de segurança.

## Arquivos principais

- `src/App.jsx`: conteúdo da página. Editar e salvar atualiza a prévia.
- `src/components/`: local dos componentes de cada exercício.
- `src/main.jsx`: inicializa o React.
- `src/index.css`: importa Tailwind.
- `vite.config.js`: configura os plugins React e Tailwind.
- `TAILWIND_PLAY.md`: códigos da parte sem React, já preparada.
- `tailwind-play/`: exemplos HTML/CSS e prévias da primeira parte.

## Progresso dos exercícios React

1. Button System — implementado (inclui desafio adicional)
2. Badge + Avatar — implementado
3. Profile Card — implementado
4. Product Card — implementado
5. Login Form — implementado
6. KPI Card — implementado
7. Pricing Card — implementado
8. Alert / Notification — implementado
9. Responsive Navbar — implementado
10. Mini Dashboard — implementado

## Commits pelo VS Code

Após concluir e conferir uma etapa:

1. Abra **Controle do Código-Fonte** (Ctrl+Shift+G).
2. Confira as alterações e clique em **+** ao lado dos arquivos para prepará-los.
3. Escreva uma mensagem, por exemplo: `feat: adiciona Button com variantes`.
4. Clique em **Commit**.

Commit salva a etapa no Git local. Publicar/push envia os commits ao GitHub; o repositório deste trabalho já está conectado ao GitHub. Não adicione node_modules ou dist ao Git: o .gitignore já exclui essas pastas.

## Verificar compilação

`npm.cmd run build`

## Referências

- [Enunciados React](https://deluxe-blue-bc1.notion.site/773dfca74d8d8341a03c016e0fb4127f?v=f19dfca74d8d83ad85f78829c00c9597)
- [Tailwind com Vite](https://tailwindcss.com/docs/installation/using-vite)
- [Vite](https://vite.dev/guide/)

## Exercício 01 — Button System

Arquivo: `src/components/Button.jsx`. Todos os exemplos da página reutilizam esse único componente, sem useState.

- `children`: conteúdo entre as tags, como `<Button>Salvar</Button>`.
- `variant`: escolhe primary, secondary, danger ou success em um mapa de classes completas. Não há construção de cores como `bg-${color}-500`.
- `disabled`: ativa o atributo nativo disabled, impedindo ativação e retirando o botão da sequência de Tab.
- `type`: padrão button, evitando envio acidental de formulários; aceita submit e reset quando necessário.
- `size`: sm, md (padrão) ou lg. No padrão, h-11 = 44px, px-5 = 20px em cada lado e text-sm = 14px.
- `fullWidth`: adiciona w-full para ocupar a largura do contêiner.

`rounded-xl` dá raio de 12px e `font-semibold` define peso 600, com a escala padrão. `enabled:hover:` muda a cor apenas quando habilitado; `enabled:active:brightness-90` escurece durante o clique. `focus-visible:` desenha o contorno de teclado; `disabled:` aplica fundo cinza, texto atenuado e cursor de indisponível. Variantes desconhecidas usam primary; tamanhos desconhecidos usam md.

Para conferir: passe o mouse, mantenha o clique pressionado, navegue com Tab e veja que Disabled não pode ser ativado. Teste a página em uma janela estreita. Os exemplos são estáticos, como pedido no enunciado.

As medidas seguem a especificação textual do Notion. A referência visual do [Figma — Button System](https://www.figma.com/design/68JGQxPGbW0d2xGDEBxya9?node-id=2-4) foi consultada: Secondary cinza, Disabled cinza e uma grade com três botões na primeira linha e Disabled na segunda. Abaixo de 480px, a grade vira uma coluna. A comparação foi visual, sem inspeção dos valores internos do Figma.
## Escopo

Os componentes React são estáticos, conforme os enunciados: os botões de login, compras, exportação e Retry são demonstrações visuais. O menu mobile possui links sempre visíveis, sem lógica de abrir/fechar. O modo escuro aparece em uma segunda composição do dashboard. Não há useState nem backend.

Código desenvolvido com apoio de IA. As explicações de cada exercício estão em ESTUDO_REACT.md para revisão e apresentação.
