# Gallery

Jednoduchá galéria obrázkov s modálnym zobrazením a progress barom.  
Projekt je napísaný v čistom HTML, CSS (s Tailwind CSS) a JavaScript (ES6 modules).

## Funkcie

- Zobrazenie galérie obrázkov z Picsum Photos API
- Kliknutie na obrázok otvorí modal s väčším zobrazením
- Navigácia v modale (predchádzajúci, ďalší obrázok)
- Progress bar s bodkami indikujúcimi aktuálny obrázok
- Responzívny dizajn pomocou Tailwind CSS
- Hover efekty na obrázkoch v galérii

## Použitie

### Klonovanie repozitára

```
git clone [URL vášho repozitára na GitHub-e]
```

### Otvorenie projektu

- Stačí otvoriť `src/index.html` v prehliadači.
- Nie je potrebná žiadna inštalácia ani build.

## Štruktúra projektu

Projekt je napísaný v HTML, CSS (s Tailwind CSS) a JavaScript (ES6 modules). Nepoužíva žiadny framework, všetko je čistý kód.

### Stromová štruktúra

```
Gallery/
├── .gitignore               # Ignorované súbory pre Git
├── package.json             # Základný balíček pre npm (meta, dev závislosti pre Tailwind)
├── package-lock.json        # Lock súbor pre npm závislosti
├── postcss.config.js        # Konfigurácia pre PostCSS (spracovanie CSS)
├── tailwind.config.js       # Konfigurácia pre Tailwind CSS
└── src/
    ├── index.html           # Hlavný HTML súbor aplikácie
    ├── css/
    │   ├── output.css       # Vygenerované štýly z Tailwind
    │   └── style.css        # Import Tailwind direktív
    └── js/
        ├── constants.js     # Funkcie na generovanie URL obrázkov
        ├── galleryImg.js    # Generovanie a zobrazenie galérie obrázkov
        ├── openModal.js     # Logika modálneho okna (navigácia, zobrazenie)
        └── progressBar.js   # Logika progress baru (bodky)
```

### Popis technológií a súborov

#### HTML

- `src/index.html` – základná štruktúra stránky, obsahuje galériu a modálne okno.

#### CSS

- `src/css/style.css` – import základných Tailwind direktív.
- `src/css/output.css` – vygenerované štýly z Tailwind (automaticky vytvorené).

#### JavaScript

- `src/js/constants.js` – funkcia na generovanie URL obrázkov z Picsum Photos API a konštanta pre maximálny počet obrázkov.
- `src/js/galleryImg.js` – generovanie poľa obrázkov a zobrazenie galérie v HTML.
- `src/js/openModal.js` – logika modálneho okna (otváranie, zatváranie, navigácia medzi obrázkami).
- `src/js/progressBar.js` – vytvorenie a aktualizácia progress baru s bodkami.

#### Obrázky

- Obrázky sa načítavajú dynamicky z externej API (Picsum Photos), nie sú uložené lokálne.

#### Ostatné

- `package.json` – základný npm balíček s dev závislosťami pre Tailwind CSS.
- `.gitignore` – zoznam ignorovaných súborov pre Git.
- `postcss.config.js` – konfigurácia pre PostCSS na spracovanie CSS.
- `tailwind.config.js` – konfigurácia pre Tailwind CSS.

## Ako projekt funguje

- Po načítaní stránky sa vygeneruje pole obrázkov pomocou `constants.js` a zobrazí sa galéria v `galleryImg.js`.
- Kliknutím na obrázok sa otvorí modal s väčším zobrazením a progress barom.
- V modale možno navigovať medzi obrázkami pomocou tlačidiel alebo zatvoriť modal kliknutím mimo obrázka.
- Progress bar indikuje aktuálny obrázok bodkami.
- Všetko funguje bez frameworku, len s čistým JS, HTML a CSS (Tailwind).

## Ako rozšíriť projekt

- Pridajte viac obrázkov zmenou `MAX_IMAGE_ID` v `constants.js`.
- Upravte štýly v `src/css/style.css` alebo priamo v HTML triedach Tailwind.
- Pridajte nové funkcie, ako napríklad lazy loading alebo ďalšie efekty, do JS súborov.

## Online verzia

Projekt live: [URL vášho GitHub Pages, ak máte]
