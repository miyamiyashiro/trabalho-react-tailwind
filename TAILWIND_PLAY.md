# Tailwind Play — exercícios 01 a 09

Parte sem React. 01 e 02 são os arquivos da aula com pequenas correções. 03 a 09 foram implementados com apoio de IA a partir dos enunciados.

## Como usar

Abra https://play.tailwindcss.com/ com Tailwind v4. Copie o HTML e o CSS do mesmo exercício nos painéis correspondentes. Para visualizar localmente, abra `index.html` na raiz desta pasta e escolha um exercício (requer internet).

Os arquivos por exercício são `index.html` (fragmento para Play), `style.css` e `preview.html` (página completa). Não foram criados links compartilhados do Play.

## 01 — Card de Perfil

### HTML

```html
<main class="min-h-screen bg-slate-100 p-6 text-slate-900">
  <article class="mx-auto max-w-md rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
    <div class="flex items-center gap-4">
      <div class="grid size-20 shrink-0 place-items-center rounded-full bg-blue-600 text-2xl font-black text-white">LM</div>

      <div>
        <span class="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-700">Front-end</span>

        <h1 class="mt-2 text-2xl font-black tracking-tight">Luana Miyashiro Salles de Oliveira</h1>

        <p class='text-sm text-slate-600'> FullStack Developer · React · Node • PHP • Angular • Laravel</p>
      </div>
    </div>

    <p
    class="mt-6 leading-7 text-slate-600">
      Estudando como pequenas utilities podem ser combinadas para construir
      uma interface completa sem criar uma classe CSS para cada elemento.
    </p>

    <div class="mt-6 flex gap-3">
      <button class="flex-1 rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white">Seguir</button>
      <button class="rounded-xl border border-slate-300 px-4 py-3 font-semibold text-slate-700">Perfil</button>
    </div>
  </article>
</main>
```

### CSS

```css
@import "tailwindcss";

```

### Explicação / checkpoint

Código da aula: corrigidos `<p = class>` e `flex-l`. `max-w-md` limita a largura; `mx-auto` centraliza; Flexbox alinha avatar e texto.

## 02 — Product Grid

### HTML

```html
<main class="min-h-screen bg-slate-950 p-6 text-white">
  <section class="mx-auto max-w-6xl">
    <header class="mb-8"> 
      <span class="text-sm font-bold uppercase tracking-widest text-cyan-400">Tailwind Play</span>
      <h1 class="mt-2 text-3xl font-black sm:text-4xl lg:text-5xl">Product Grid Responsivo</h1>
      <p class="mt-3 max-w-2xl text-slate-400">
        Pratique breakpoints, Grid, hover, focus, active e disabled.
      </p>
    </header>

    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <article class="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40">
        <div class="grid aspect-[16/10] place-items-center bg-cyan-500 text-6xl font-black text-slate-950 transition duration-500 group-hover:scale-105">
          01
          </div>
        <div class="p-6">
          <span class="text-sm font-bold text-cyan-400">Starter</span>
          <h2 class="mt-1 text-2xl font-black">UI Foundations</h2>
          <p class="mt-3 text-slate-400">Layout, spacing, tipografia e cores.</p>
          <button class="mt-6 w-full rounded-xl bg-cyan-400 px-4 py-3 font-bold text-slate-950 transition enabled:hover:bg-cyan-300 enabled:active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 disabled:cursor-not-allowed disabled:opacity-40">Escolher</button>
        </div>
      </article>

      <article class="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40">
        <div class="grid aspect-[16/10] place-items-center bg-cyan-500 text-6xl font-black text-slate-950 transition duration-500 group-hover:scale-105">02</div>
        <div class="p-6">
          <span class="text-sm font-bold text-cyan-400">Intermediate</span>
          <h2 class="mt-1 text-2xl font-black">Responsive UI</h2>
          <p class="mt-3 text-slate-400">Breakpoints e variantes condicionais.</p>
          <button class="mt-6 w-full rounded-xl bg-cyan-400 px-4 py-3 font-bold text-slate-950 transition enabled:hover:bg-cyan-300 enabled:active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 disabled:cursor-not-allowed disabled:opacity-40">Escolher</button>
        </div>
      </article>

      <article class="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40">
        <div class="grid aspect-[16/10] place-items-center bg-cyan-500 text-6xl font-black text-slate-950 transition duration-500 group-hover:scale-105">03</div>
        <div class="p-6">
          <span class="text-sm font-bold text-cyan-400">Locked</span>
          <h2 class="mt-1 text-2xl font-black">Advanced UI</h2>
          <p class="mt-3 text-slate-400">Este plano ainda está indisponível.</p>
          <button class="mt-6 w-full rounded-xl bg-cyan-400 px-4 py-3 font-bold text-slate-950 transition enabled:hover:bg-cyan-300 enabled:active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 disabled:cursor-not-allowed disabled:opacity-40" disabled>Indisponível</button>
        </div>
      </article>
    </div>
  </section>
</main>
```

### CSS

```css
@import "tailwindcss";

```

### Explicação / checkpoint

Código da aula com correções de tracking, tamanho de texto e opacidade. Adicionados hover, active, foco visível e disabled. A grade tem 1 coluna, 2 em sm e 3 em lg.

## 03 — Theme Lab

### HTML

```html
<main class="min-h-screen bg-slate-100 p-6 text-slate-900 sm:p-10">
  <header class="mx-auto mb-8 max-w-6xl">
    <span class="text-sm font-bold uppercase tracking-widest text-blue-600">Theme Lab</span>
    <h1 class="mt-2 text-3xl font-black sm:text-4xl">Tailwind Design Tokens</h1>
    <p class="mt-3 text-slate-600">O mesmo componente funciona com tokens do tema claro e escuro.</p>
  </header>
  <div class="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
    <section class="rounded-3xl border border-border bg-background p-6 text-foreground shadow-sm sm:p-8">
      <span class="text-sm font-bold uppercase tracking-widest text-primary dark:text-blue-300">Light</span>
      <h2 class="mt-2 text-2xl font-black">Tema claro</h2>
      <p class="mt-3 text-muted">Este bloco utiliza os valores de :root.</p>
      <div class="token-card mt-6"><strong>Surface token</strong><p class="mt-2 text-muted">Background, surface, foreground, muted e border respondem ao tema.</p></div>
      <div class="custom-colors mt-4">Cor Chestnut customizada</div>
      <span class="mt-4 inline-block rounded-full bg-success px-3 py-1 text-sm font-bold text-white">Tokens aplicados</span>
      <button type="button" class="mt-6 block rounded-xl bg-primary px-5 py-3 font-bold text-white hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600">Primary Button</button>
      <p class="mt-4 text-sm text-muted dark:italic">As mesmas utilities funcionam nos dois temas.</p>
    </section>
    <section class="dark rounded-3xl border border-border bg-background p-6 text-foreground shadow-sm sm:p-8">
      <span class="text-sm font-bold uppercase tracking-widest text-primary dark:text-blue-300">Dark</span>
      <h2 class="mt-2 text-2xl font-black">Tema escuro</h2>
      <p class="mt-3 text-muted">Este bloco utiliza os valores de .dark.</p>
      <div class="token-card mt-6"><strong>Surface token</strong><p class="mt-2 text-muted">Background, surface, foreground, muted e border respondem ao tema.</p></div>
      <div class="custom-colors mt-4">Cor Chestnut customizada</div>
      <span class="mt-4 inline-block rounded-full bg-success px-3 py-1 text-sm font-bold text-white">Tokens aplicados</span>
      <button type="button" class="mt-6 block rounded-xl bg-primary px-5 py-3 font-bold text-white hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600">Primary Button</button>
      <p class="mt-4 text-sm text-muted dark:italic">As mesmas utilities funcionam nos dois temas.</p>
    </section>
  </div>
</main>
```

### CSS

```css
@import "tailwindcss";

@custom-variant dark (&:where(.dark, .dark *));
@theme { --color-primary: #2563eb; --color-success: #15803d; }
/* inline permite resolver os aliases dentro de cada seção .dark. */
@theme inline {
  --color-background: var(--background);
  --color-surface: var(--surface);
  --color-foreground: var(--foreground);
  --color-muted: var(--muted);
  --color-border: var(--border);
  --color-chestnut: var(--chestnut);
}
:root {
  --background: #ffffff; --surface: #f4f4f5; --foreground: #18181b;
  --muted: #52525b; --border: #e4e4e7; --chestnut: #973f29;
}
.dark {
  --background: #15155a; --surface: #18181b; --foreground: #fafafa;
  --muted: #a1a1aa; --border: #52525b; --chestnut: #d9785f;
}
@layer components {
  .custom-colors { @apply rounded-xl bg-chestnut p-4 text-center font-bold text-white dark:text-zinc-950; }
  .token-card { @apply rounded-2xl border border-border bg-surface p-5 text-foreground; }
}

```

### Explicação / checkpoint

`:root` fornece valores padrão; `.dark` os redefine no tema escuro. `@theme` registra tokens: `--color-primary` cria utilities como `bg-primary` e `text-primary`. Nomes semânticos descrevem a função da cor. `@custom-variant` associa `dark:` à classe `.dark`. `@layer components` organiza componentes e `@apply` reúne utilities. Os aliases usam `@theme inline` para funcionar no escopo de cada painel. Incluídos success e a segunda classe token-card.

## 04 — Login Form

### HTML

```html
<main class="grid min-h-screen place-items-center bg-slate-100 p-6 text-slate-900">
  <section class="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8">
    <h1 class="text-3xl font-black tracking-tight">Welcome back</h1>
    <p class="mt-2 text-slate-600">Entre na sua conta para continuar.</p>
    <!-- Formulário demonstrativo: não transmite credenciais. -->
    <form class="mt-8 space-y-4" onsubmit="event.preventDefault()">
      <div>
        <label for="email" class="mb-2 block text-sm font-semibold">E-mail</label>
        <input id="email" type="email" autocomplete="email" required placeholder="you@example.com" class="h-12 w-full rounded-xl border border-slate-300 px-4 outline-none placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100" />
      </div>
      <div>
        <label for="password" class="mb-2 block text-sm font-semibold">Senha</label>
        <input id="password" type="password" autocomplete="current-password" required placeholder="••••••••" class="h-12 w-full rounded-xl border border-slate-300 px-4 outline-none placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100" />
      </div>
      <div class="flex flex-wrap items-center justify-between gap-3 text-sm">
        <label class="flex cursor-pointer items-center gap-2"><input type="checkbox" checked class="size-4 accent-blue-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600" />Lembrar de mim</label>
        <a href="#recuperacao" class="rounded font-semibold text-blue-700 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600">Esqueci minha senha</a>
      </div>
      <button type="submit" class="w-full rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600">Sign In</button>
    </form>
    <p id="recuperacao" class="mt-5 text-xs leading-5 text-slate-500">Interface de estudo. Login e recuperação não estão conectados a um servidor.</p>
  </section>
</main>
```

### CSS

```css
@import "tailwindcss";

```

### Explicação / checkpoint

`focus:` vale para o elemento focado; `focus-visible:` segue a indicação de foco do navegador, normalmente com teclado. `outline-none` remove o contorno padrão, substituído aqui por ring e borda visíveis. `accent-*` altera a cor nativa do checkbox. Labels associam nomes aos campos e ampliam a área clicável. `space-y-4` espaça os filhos do formulário.

## 05 — Pricing Cards

### HTML

```html
<main class="min-h-screen bg-slate-100 px-6 py-12 text-slate-900">
  <section class="mx-auto max-w-6xl">
    <header class="mb-12 text-center">
      <span class="text-sm font-bold uppercase tracking-widest text-blue-600">Pricing</span>
      <h1 class="mt-2 text-3xl font-black sm:text-4xl">Escolha o plano ideal</h1>
      <p class="mt-3 text-slate-600">Compare recursos e preços.</p>
    </header>
    <div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <article class="relative flex flex-col rounded-3xl border border-slate-200 shadow-sm bg-white p-6 transition hover:shadow-xl sm:p-8">
        
        <h2 class="text-xl font-bold">Starter</h2>
        <p class="mt-4"><strong class="text-4xl font-black">$0</strong> <span class="text-slate-500">/ month</span></p>
        <ul class="my-8 flex-1 list-inside list-disc space-y-3 text-slate-600 marker:text-blue-600"><li>Projects</li><li>Basic support</li></ul>
        <button type="button" aria-label="Choose Starter" class="w-full rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600">Choose</button>
      </article>
      <article class="relative flex flex-col rounded-3xl border-2 border-blue-600 shadow-xl lg:-translate-y-2 bg-white p-6 transition hover:shadow-xl sm:p-8">
        <span class="mb-4 self-start rounded-full bg-blue-100 px-3 py-1 text-xs font-bold uppercase text-blue-800">Popular</span>
        <h2 class="text-xl font-bold">Pro</h2>
        <p class="mt-4"><strong class="text-4xl font-black">$29</strong> <span class="text-slate-500">/ month</span></p>
        <ul class="my-8 flex-1 list-inside list-disc space-y-3 text-slate-600 marker:text-blue-600"><li>Projects</li><li>Analytics</li><li>Priority support</li></ul>
        <button type="button" aria-label="Choose Pro" class="w-full rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600">Choose</button>
      </article>
      <article class="relative flex flex-col rounded-3xl border border-slate-200 shadow-sm bg-white p-6 transition hover:shadow-xl sm:p-8">
        
        <h2 class="text-xl font-bold">Team</h2>
        <p class="mt-4"><strong class="text-4xl font-black">$79</strong> <span class="text-slate-500">/ month</span></p>
        <ul class="my-8 flex-1 list-inside list-disc space-y-3 text-slate-600 marker:text-blue-600"><li>Projects</li><li>Analytics</li><li>Team access</li></ul>
        <button type="button" aria-label="Choose Team" class="w-full rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600">Choose</button>
      </article>
    </div>
  </section>
</main>
```

### CSS

```css
@import "tailwindcss";

```

### Explicação / checkpoint

`lg:grid-cols-3` cria três colunas no desktop. Pro tem borda azul e deslocamento `lg:-translate-y-2`. `flex flex-col` e a lista `flex-1` alinham os CTAs na base. Os três cards têm hover. Botões são demonstrativos.

## 06 — Settings Toggle

### HTML

```html
<main class="grid min-h-screen place-items-center bg-slate-100 p-6 text-slate-900">
  <section class="w-full max-w-lg space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8">
    <h1 class="text-2xl font-black">Notification Settings</h1>
    <p class="pb-4 text-slate-600">Controle suas preferências de comunicação.</p>
    <label class="flex cursor-pointer items-center justify-between gap-4 rounded-2xl border border-slate-200 p-4">
      <span class="min-w-0"><strong class="block">Email notifications</strong><span class="mt-1 block text-sm text-slate-500">Receive product updates</span></span>
      <input type="checkbox" checked class="peer sr-only" />
      <span aria-hidden="true" class="relative h-7 w-12 shrink-0 rounded-full bg-slate-300 transition-colors peer-checked:bg-blue-600 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-4 peer-focus-visible:outline-blue-600 after:absolute after:top-1 after:left-1 after:size-5 after:rounded-full after:bg-white after:shadow after:transition-transform after:content-[''] peer-checked:after:translate-x-5"></span>
    </label>
    <label class="flex cursor-pointer items-center justify-between gap-4 rounded-2xl border border-slate-200 p-4">
      <span class="min-w-0"><strong class="block">Marketing</strong><span class="mt-1 block text-sm text-slate-500">Receive campaigns</span></span>
      <input type="checkbox" class="peer sr-only" />
      <span aria-hidden="true" class="relative h-7 w-12 shrink-0 rounded-full bg-slate-300 transition-colors peer-checked:bg-blue-600 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-4 peer-focus-visible:outline-blue-600 after:absolute after:top-1 after:left-1 after:size-5 after:rounded-full after:bg-white after:shadow after:transition-transform after:content-[''] peer-checked:after:translate-x-5"></span>
    </label>
    <label class="flex cursor-pointer items-center justify-between gap-4 rounded-2xl border border-slate-200 p-4">
      <span class="min-w-0"><strong class="block">Security alerts</strong><span class="mt-1 block text-sm text-slate-500">Receive security updates</span></span>
      <input type="checkbox" checked class="peer sr-only" />
      <span aria-hidden="true" class="relative h-7 w-12 shrink-0 rounded-full bg-slate-300 transition-colors peer-checked:bg-blue-600 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-4 peer-focus-visible:outline-blue-600 after:absolute after:top-1 after:left-1 after:size-5 after:rounded-full after:bg-white after:shadow after:transition-transform after:content-[''] peer-checked:after:translate-x-5"></span>
    </label>
  </section>
</main>
```

### CSS

```css
@import "tailwindcss";

```

### Explicação / checkpoint

O input `peer` precede o trilho. `peer-checked:` reage ao estado marcado. `sr-only` esconde visualmente sem remover do teclado ou leitores de tela. O knob usa `after:absolute` dentro do trilho `relative`. `translate-x-5` desloca a bolinha. Terceira preferência e foco visível incluídos; não há persistência.

## 07 — FAQ Accordion

### HTML

```html
<main class="min-h-screen bg-slate-100 p-6 text-slate-900 sm:py-16">
  <section class="mx-auto max-w-2xl space-y-4">
    <h1 class="mb-8 text-3xl font-black tracking-tight">Frequently Asked Questions</h1>
    <details open class="rounded-2xl border border-slate-200 bg-white p-5 transition-colors open:border-blue-500 open:bg-blue-50">
      <summary class="cursor-pointer rounded font-bold marker:text-blue-600 hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600">O que é utility-first?</summary>
      <p class="mt-4 leading-7 text-slate-600">É uma abordagem baseada na composição de pequenas utilities.</p>
    </details>
    <details class="rounded-2xl border border-slate-200 bg-white p-5 transition-colors open:border-blue-500 open:bg-blue-50">
      <summary class="cursor-pointer rounded font-bold marker:text-blue-600 hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600">Tailwind substitui CSS?</summary>
      <p class="mt-4 leading-7 text-slate-600">Tailwind continua sendo CSS, mas oferece utilities e ferramentas.</p>
    </details>
    <details class="rounded-2xl border border-slate-200 bg-white p-5 transition-colors open:border-blue-500 open:bg-blue-50">
      <summary class="cursor-pointer rounded font-bold marker:text-blue-600 hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600">Como funciona dark mode?</summary>
      <p class="mt-4 leading-7 text-slate-600">Variantes permitem alterar estilos quando um tema dark está ativo.</p>
    </details>
    <details class="rounded-2xl border border-slate-200 bg-white p-5 transition-colors open:border-blue-500 open:bg-blue-50">
      <summary class="cursor-pointer rounded font-bold marker:text-blue-600 hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600">Preciso de JavaScript para este FAQ?</summary>
      <p class="mt-4 leading-7 text-slate-600">Não. Details e summary oferecem abertura nativa e operação pelo teclado.</p>
    </details>
  </section>
</main>
```

### CSS

```css
@import "tailwindcss";

```

### Explicação / checkpoint

`open` abre inicialmente o primeiro details. `open:` estiliza apenas o estado aberto. O marcador nativo foi preservado e colorido com `marker:text-blue-600`; `list-none` o removeria. Details/summary já têm semântica e interação por teclado. Quarta pergunta e hover incluídos.

## 08 — Dashboard Summary

### HTML

```html
<main class="min-h-screen bg-slate-100 p-6 text-slate-900 sm:p-10">
  <section class="mx-auto max-w-6xl">
    <header class="mb-8 flex flex-wrap items-center justify-between gap-4"><h1 class="text-3xl font-black">Overview</h1><button type="button" class="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600">Export</button></header>
    <div class="grid gap-4 sm:grid-cols-3">
      <article class="rounded-2xl border border-slate-200 bg-white p-6"><span class="text-sm text-slate-500">Revenue</span><strong class="mt-2 block text-3xl font-black">128k</strong></article>
      <article class="rounded-2xl border border-slate-200 bg-white p-6"><span class="text-sm text-slate-500">Orders</span><strong class="mt-2 block text-3xl font-black">1,842</strong></article>
      <article class="rounded-2xl border border-slate-200 bg-white p-6"><span class="text-sm text-slate-500">Conversion</span><strong class="mt-2 block text-3xl font-black">4.7%</strong></article>
    </div>
    <div class="mt-6 grid gap-6 lg:grid-cols-[2fr_1fr]">
      <section class="min-w-0 rounded-2xl border border-slate-200 bg-white p-6">
        <h2 class="text-lg font-bold">Performance</h2>
        <div role="img" aria-label="Gráfico ilustrativo com seis barras; a sexta tem o maior valor." class="mt-8 flex h-52 items-end gap-3 border-b border-slate-200 px-2">
          <span class="h-16 flex-1 rounded-t-lg bg-blue-500"></span>
          <span class="h-28 flex-1 rounded-t-lg bg-blue-500"></span>
          <span class="h-20 flex-1 rounded-t-lg bg-blue-500"></span>
          <span class="h-40 flex-1 rounded-t-lg bg-blue-500"></span>
          <span class="h-32 flex-1 rounded-t-lg bg-blue-500"></span>
          <span class="h-48 flex-1 rounded-t-lg bg-indigo-600"></span>
        </div>
        <p class="mt-4 text-xs text-slate-500">Visualização ilustrativa de desempenho.</p>
      </section>
      <aside class="rounded-2xl border border-slate-200 bg-white p-6"><h2 class="text-lg font-bold">Activity</h2><div class="mt-5 divide-y divide-slate-100 text-sm text-slate-600"><p class="py-4">New order</p><p class="py-4">Payment approved</p><p class="py-4">User created</p></div></aside>
    </div>
  </section>
</main>
```

### CSS

```css
@import "tailwindcss";

```

### Explicação / checkpoint

Grid organiza KPIs e áreas principais. `lg:grid-cols-[2fr_1fr]` divide o espaço na proporção 2:1. Flexbox alinha header e barras. `flex-1` distribui a largura das barras igualmente; `h-*` muda suas alturas. Utilities reutilizadas: p-6, border, rounded-2xl e gap. Export é demonstrativo, como previsto no dashboard estático.

## 09 — Theme Toggle

### HTML

```html
<main class="grid min-h-screen place-items-center bg-background p-6 text-foreground transition-colors duration-500">
  <section class="w-full max-w-2xl rounded-3xl border border-border bg-background p-6 shadow-xl transition-colors duration-500 sm:p-8">
    <header class="flex flex-wrap items-center justify-between gap-5">
      <div><span class="text-sm font-bold uppercase tracking-widest text-primary dark:text-blue-300">Theme Lab</span><h1 class="mt-2 text-3xl font-black">Light &amp; Dark Mode</h1></div>
      <button type="button" aria-label="Tema escuro" aria-pressed="false" onclick="document.documentElement.classList.toggle('dark'); this.setAttribute('aria-pressed', document.documentElement.classList.contains('dark'))" class="flex items-center gap-3 rounded-full border border-border bg-surface px-4 py-3 text-sm font-bold transition-colors duration-500 hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 dark:hover:brightness-125">
        <span aria-hidden="true" class="relative h-6 w-11 rounded-full bg-slate-400 transition-colors dark:bg-violet-500"><span class="absolute top-1 left-1 size-4 rounded-full bg-white transition-transform dark:translate-x-5"></span></span>
        <span class="dark:hidden">☾ Dark mode</span><span class="hidden dark:inline">☀ Light mode</span>
      </button>
    </header>
    <p class="mt-6 leading-7 text-muted">O mesmo componente muda de aparência sem trocar sua estrutura HTML.</p>
    <div class="token-card mt-6 transition-colors duration-500"><strong>Surface token</strong><p class="mt-2 text-muted">Background e texto respondem ao tema.</p></div>
    <span class="mt-4 inline-block rounded-full border border-border bg-surface px-3 py-1 text-sm font-semibold text-foreground transition-colors duration-500">Badge · Tema adaptável</span>
    <aside aria-label="Informação sobre o tema" class="mt-4 rounded-xl border border-border bg-surface p-4 text-foreground transition-colors duration-500"><strong>Alert</strong><p class="mt-1 text-sm text-muted">Os tokens desta área também acompanham o tema.</p></aside>
    <div class="custom-colors mt-4 transition-colors duration-500">Chestnut</div>
    <button type="button" class="mt-6 rounded-xl bg-primary px-5 py-3 font-semibold text-white hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600">Primary Button</button>
  </section>
</main>
```

### CSS

```css
@import "tailwindcss";

@custom-variant dark (&:where(.dark, .dark *));
@theme { --color-primary: #2563eb; --color-success: #15803d; }
/* inline permite resolver os aliases dentro de cada seção .dark. */
@theme inline {
  --color-background: var(--background);
  --color-surface: var(--surface);
  --color-foreground: var(--foreground);
  --color-muted: var(--muted);
  --color-border: var(--border);
  --color-chestnut: var(--chestnut);
}
:root {
  --background: #ffffff; --surface: #f4f4f5; --foreground: #18181b;
  --muted: #52525b; --border: #e4e4e7; --chestnut: #973f29;
}
.dark {
  --background: #15155a; --surface: #18181b; --foreground: #fafafa;
  --muted: #a1a1aa; --border: #52525b; --chestnut: #d9785f;
}
@layer components {
  .custom-colors { @apply rounded-xl bg-chestnut p-4 text-center font-bold text-white dark:text-zinc-950; }
  .token-card { @apply rounded-2xl border border-border bg-surface p-5 text-foreground; }
}

```

### Explicação / checkpoint

O clique alterna `.dark` na tag `<html>`. Os tokens mudam seus valores, portanto `bg-background` muda sem receber outra classe. `dark:` aplica um estilo explicitamente no escuro. `dark:hidden` oculta o primeiro rótulo; `hidden dark:inline` revela o segundo. A transição suaviza cores. Challenge incluído: switch, Card, Badge e Alert sem duplicar paletas. `aria-pressed` comunica o estado. Não há persistência após recarregar.

## Experimentos para praticar no Play

Altere temporariamente as classes e depois restaure a solução. Não é necessário manter simultaneamente mudanças incompatíveis na versão final.

- **03:** mude primary; altere chestnut apenas em `.dark`; remova `.dark`; experimente `md:grid-cols-2`. Success e segunda classe com @apply estão incluídos.
- **04:** mude max-w, remova space-y, troque h-12 por h-14, compare sem ring, altere accent e radius. Navegue com Tab.
- **05:** remova o deslocamento; teste ring-4 em lugar da borda, outra paleta, md:grid-cols-3 e outro tamanho de preço. Hover incluído nos três cards.
- **06:** retire peer; mude cor checked, deslocamento e tamanho do switch; retire sr-only. Terceira preferência incluída.
- **07:** altere open:bg, remova open:border, compare o marcador com list-none, mude space-y. Quarta pergunta e hover incluídos.
- **08:** altere colunas e proporção 2fr/1fr, alturas e última cor; retire flex-1; mude max-w e experimente um quarto KPI.
- **09 (obrigatórios no enunciado):** clique repetidamente e observe `.dark` em `<html>`; retire transition-colors; troque duration-500 por duration-1000; remova separadamente dark:hidden e hidden dark:inline e observe os rótulos. O switch escuro já usa violeta. Experimente outros valores de background e chestnut em `.dark`. Área adicional bg-surface, variante dark e challenge incluídos.

## Referências e limites

- [Enunciados no Notion](https://deluxe-blue-bc1.notion.site/63adfca74d8d8335879301b920bc0e94?v=46bdfca74d8d82a087d808c36ce9d353)
- [Theme variables e inline](https://tailwindcss.com/docs/theme)
- [Dark mode](https://tailwindcss.com/docs/dark-mode)
- [Estados](https://tailwindcss.com/docs/hover-focus-and-other-states)

Os enunciados foram lidos. Figma não ficou acessível nesta sessão; não foi validada fidelidade pixel a pixel. As interfaces seguem os requisitos textuais e a paleta dos exemplos da aula. Os botões de contratar, seguir e exportar são demonstrativos. Login não transmite dados. FAQ, switches e tema funcionam localmente; não há backend nem persistência.
