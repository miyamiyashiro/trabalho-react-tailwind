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

## Verificar compilação

`npm.cmd run build`

## Referências

- [Enunciados React](https://deluxe-blue-bc1.notion.site/773dfca74d8d8341a03c016e0fb4127f?v=f19dfca74d8d83ad85f78829c00c9597)
- [Tailwind com Vite](https://tailwindcss.com/docs/installation/using-vite)
- [Vite](https://vite.dev/guide/)
- [Referência Visual](https://www.figma.com/design/68JGQxPGbW0d2xGDEBxya9?node-id=2-4)
