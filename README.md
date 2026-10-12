# Trabalho React + Tailwind — Luana

Projeto de estudos com React, Vite e Tailwind CSS. A configuração inicial está pronta; os 10 exercícios React ainda serão desenvolvidos.

## Abrir e executar no VS Code

1. Abra esta pasta pelo menu **Arquivo > Abrir Pasta**.
2. Abra **Terminal > Novo Terminal**.
3. Digite `npm.cmd run dev` e pressione Enter.
4. Abra o endereço Local informado pelo terminal (normalmente http://localhost:5173).
5. Para encerrar o servidor, pressione Ctrl+C no terminal.

As dependências já foram instaladas neste computador. Se copiar o projeto para outra máquina, execute `npm.cmd install` antes. Usamos npm.cmd no PowerShell para evitar bloqueio de scripts .ps1; não é preciso alterar as configurações de segurança.

## Arquivos principais

- `src/App.jsx`: conteúdo da página. Editar e salvar atualiza a prévia.
- `src/components/`: local dos componentes de cada exercício.
- `src/main.jsx`: inicializa o React.
- `src/index.css`: importa Tailwind.
- `vite.config.js`: configura os plugins React e Tailwind.
- `TAILWIND_PLAY.md`: códigos da parte sem React, já preparada.
- `tailwind-play/`: exemplos HTML/CSS e prévias da primeira parte.

## Exercícios React pendentes

1. Button System
2. Badge + Avatar
3. Profile Card
4. Product Card
5. Login Form
6. KPI Card
7. Pricing Card
8. Alert / Notification
9. Responsive Navbar
10. Mini Dashboard

## Commits pelo VS Code

Após concluir e conferir uma etapa:

1. Abra **Controle do Código-Fonte** (Ctrl+Shift+G).
2. Confira as alterações e clique em **+** ao lado dos arquivos para prepará-los.
3. Escreva uma mensagem, por exemplo: `feat: adiciona Button com variantes`.
4. Clique em **Commit**.

Commit salva a etapa no Git local. Publicar/push envia os commits ao GitHub; essa publicação será feita depois. Não adicione node_modules ou dist ao Git: o .gitignore já exclui essas pastas.

## Verificar compilação

`npm.cmd run build`

## Entrega final

O Blackboard pede o link do repositório público no GitHub com TAILWIND_PLAY.md, exercícios React, README, código organizado e histórico de commits. Este projeto ainda não está pronto para entrega: faltam os exercícios React e a publicação.

## Referências

- [Enunciados React](https://deluxe-blue-bc1.notion.site/773dfca74d8d8341a03c016e0fb4127f?v=f19dfca74d8d83ad85f78829c00c9597)
- [Tailwind com Vite](https://tailwindcss.com/docs/installation/using-vite)
- [Vite](https://vite.dev/guide/)
