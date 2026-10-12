# React + Tailwind — explicações dos exercícios

Exercícios estáticos: nenhum componente usa useState. Leia e teste as props antes de fazer os commits. Código preparado com apoio de IA conforme permitido na atividade.

## 02 — Badge + Avatar

Avatar e Badge são independentes. size-14 equivale a 56px; size-16, a 64px. grid place-items-center centraliza as iniciais. rounded-full cria o círculo ou pill. Os mapas mantêm strings completas de classes. Teste mudar variant e size nas chamadas, sem editar a estrutura do componente.

Arquivos novos: `Avatar.jsx`, `Badge.jsx`.

## 03 — Profile Card

ProfileCard compõe Avatar, Badge e Button. Recebe os textos por props e é usado duas vezes. O Avatar lg tem 64px. max-w-[420px], p-6 e rounded-3xl implementam as medidas pedidas. O mapa layouts alterna a direção do header sem duplicar JSX. flex-1 permite ao primeiro botão preencher o espaço restante.

Arquivos novos: `ProfileCard.jsx`.

## 04 — Product Card

group identifica o card; group-hover:scale-105 amplia a área visual quando o mouse está sobre ele. overflow-hidden recorta a ampliação. O grid usa 1, 2 e 3 colunas. A área visual ficou dentro de ProductCard porque só é usada aqui e contém pouca lógica; image aceita uma URL, e sem imagem aparece RUN, como na referência. Badge e Button são reutilizados.

Arquivos novos: `ProductCard.jsx`.

## 05 — Login Form

htmlFor associa label e input. useId só gera identificadores únicos (não controla campos nem cria interatividade). Não há useState, onChange nem submit funcional: o Button é type="button". Campos não têm name e o form tem dois campos de texto, evitando submit implícito normal. error define aparência, aria-invalid e aria-describedby. outline-none é acompanhado por ring visível no foco.

Arquivos novos: `InputField.jsx`, `LoginForm.jsx`.

## 06 — KPI Card

trend escolhe apenas o indicador, mantendo a estrutura. As setas e o texto acessível indicam tendência além da cor. min-h-60 representa 240px; w-full permite adaptação ao grid. O tamanho final depende do espaço disponível. A prop icon aceita texto ou JSX. As classes dark preparam reutilização no dashboard.

Arquivos novos: `KpiCard.jsx`.

## 07 — Pricing Card

PricingCard compõe Badge, Price, FeatureList e Button. FeatureList transforma o array em li com map e key (os textos precisam ser únicos). highlighted altera a borda e mostra o badge só no Pro. flex-col e flex-1 alinham os CTAs. O Button mantém a variante primary já definida no exercício 01; não há nova cópia do componente.

Arquivos novos: `Price.jsx`, `FeatureList.jsx`, `PricingCard.jsx`.

## 08 — Alert / Notification

children representa a mensagem. Cada variante possui classes completas, símbolo e título: o significado não depende só da cor. size-10 é 40px e gap-3.5 é 14px. actionLabel mostra um Button demonstrativo. Não foi usado role="alert" na galeria estática para evitar anunciar vários avisos sem necessidade; isso seria apropriado em notificações dinâmicas.

Arquivos novos: `Alert.jsx`.

## 09 — Responsive Navbar

hidden md:flex esconde no mobile e exibe como flex a partir de md (768px padrão). md:hidden faz o inverso. As duas composições compartilham NavLink e os mesmos dados, mantendo a versão mobile estática pedida. active colore Home e gera aria-current. Não há botão com aria-expanded prometendo uma ação inexistente. Os links apontam para exemplos existentes na página.

Arquivos novos: `NavLink.jsx`, `Navbar.jsx`.

## 10 — Mini Dashboard

KpiGrid usa array + map e reutiliza KpiCard. O header reutiliza Button; Performance e Activity têm responsabilidades próprias. Os KPIs ficam em 1/3 colunas, e a parte inferior muda para 2fr/1fr em lg. Barras estáticas não precisam de Recharts. O prop dark coloca a classe .dark no wrapper; @custom-variant conecta dark: a esse ancestral. As duas versões aparecem lado a lado na trilha, sem estado ou botão de alternância.

Arquivos novos: `DashboardHeader.jsx`, `KpiGrid.jsx`, `PerformanceCard.jsx`, `ActivityCard.jsx`, `DashboardOverview.jsx`.
