# Atelier — Studio di Architettura

Sito monopagina responsive per uno studio di architettura immaginario, costruito con Bootstrap 5.3.3.
Si apre `index.html` nel browser. Serve la connessione a internet, perché Bootstrap arriva dalla CDN.

## Cosa è stato fatto

1. **Navbar** marrone scuro con il marchio «Atelier» e i link Studio, Servizi, Lavori e Contatti.
   Da 768 px (`navbar-expand-md`) i link stanno in linea, sotto diventano un menu hamburger con le voci in verticale.
2. **Hero** («Studio»): occupa almeno l'80% dell'altezza dello schermo, con testo centrato in verticale e in orizzontale.
   Contiene il titolo principale, il sottotitolo e il pulsante «Inizia un progetto», che fa scorrere la pagina fino ai contatti.
3. **Servizi**: 3 card con un'emoji come icona, un titolo e una descrizione.
   Su mobile stanno una per riga, da 768 px sono affiancate (`col-12 col-md-4`).
4. **Lavori**, la sezione extra: un sottotitolo e 6 card con una foto, un titolo e una breve descrizione.
   Sono una per riga su mobile, due da 768 px e tre da 992 px (`col-12 col-md-6 col-lg-4`).
5. **Contattaci**: il form è visibile nella pagina, con i campi Nome, Email, Tipo di progetto (Residenziale, Interior design,
   Ristrutturazione) e Messaggio. Tutti i campi sono obbligatori, e l'email deve essere un indirizzo valido.
   Non c'è un backend: cliccando «Invia» con i campi compilati, `script.js` blocca l'invio, scrive i dati in console
   azzera il form e mostra un messaggio di ringraziamento sotto il pulsante.
6. **Footer** marrone scuro su tre colonne (Atelier, Link, Contatti), affiancate da 768 px; sotto c'è il copyright.
   Passando col mouse sui link, diventano color crema.
7. **Effetti**: le card si sollevano di 4 px e la loro ombra cresce quando ci passa sopra il mouse.
   I pulsanti diventano più scuri e, se ci si arriva con il tasto Tab, mostrano un anello marrone.
   Sotto ogni titolo di sezione c'è una «linetta» marrone.

## Rifiniture

Fatte dopo una prima revisione della pagina completa.

1. **Ordine del menu**: il menu e il footer elencavano Lavori prima di Servizi, mentre nella pagina Servizi viene prima.
   Ora tutti e tre seguono lo stesso ordine: Studio, Servizi, Lavori, Contatti.
2. **Il menu hamburger si chiude da solo**: sul telefono il menu restava aperto dopo aver toccato una voce e copriva
   l'inizio della sezione. Adesso se ne occupa `script.js`, che prima chiude il menu e poi fa scorrere la pagina.
   L'ordine conta: se la pagina scorresse a menu aperto, la chiusura (160 px a 375 px di larghezza) farebbe salire
   l'inizio della sezione fuori dallo schermo. Ogni passaggio scrive un messaggio in console.
3. **Sottotitolo dei lavori**: «Alcuni progetti realizzati negli ultimi anni.», per coerenza con Servizi e Contattaci.
4. **Controllo dell'accessibilità con Lighthouse**, su mobile e su desktop. La prima esecuzione ha segnalato tre problemi:
   - i link del footer erano alti 16,5 px, sotto il minimo di 24 px da toccare con un dito. Ora hanno un po' di spazio
     sopra e sotto e arrivano a 24,5 px;
   - mancava la meta description, la breve descrizione della pagina per i motori di ricerca. L'ho aggiunta;
   - il browser cercava un'icona della scheda che non c'era (`favicon.ico`) e segnalava un errore in console.
     Ora la pagina ha un'icona, scritta direttamente nell'HTML.

   Dopo le correzioni Lighthouse dà 100 su accessibilità, buone pratiche e SEO, sia su mobile sia su desktop.

## Scelte

- **Bootstrap per la struttura**: navbar, griglie, card, form e spaziature usano le classi di Bootstrap.
  Il CSS scritto a mano serve solo per quello che Bootstrap non ha:
  - l'altezza dell'hero all'80% dello schermo;
  - la palette marrone;
  - la linetta sotto i titoli;
  - l'effetto delle card al passaggio del mouse.
- **Palette**: i colori sono quelli delle istruzioni.

  | Uso | Colore |
  |---|---|
  | Hero e pulsanti | `hsl(20, 30%, 35%)` |
  | Pulsanti al passaggio del mouse | `hsl(20, 30%, 27%)` |
  | Navbar e footer | `hsl(20, 20%, 15%)` |
  | Link del footer al passaggio del mouse | `hsl(40, 30%, 90%)` |

  Il resto della pagina è chiaro e la sezione dei contatti è grigio chiaro (`bg-body-tertiary`), come nella reference.
- **Il pulsante dell'hero** ha lo stesso marrone dello sfondo, come nella reference, quindi sembra una scritta senza riquadro.
  Si vede che è un pulsante quando ci si passa sopra e diventa più scuro.
- **Titolo dell'hero**: è più grande degli altri titoli, come chiedono le istruzioni.
  La sua dimensione cresce con la larghezza dello schermo, da 32 px sul telefono a 48 px sul computer.
- **Footer in linea da 768 px**: le istruzioni parlano di circa 1200 px, ma la reference grafica lo mostra
  già in linea sul tablet. Ho seguito la reference.
- **Effetti e movimento ridotto**: se nel sistema è attivo «riduci movimento», le card non si sollevano e non c'è animazione.
  Resta solo l'ombra più grande.
- **Lo stile è scritto in SCSS** (`style.scss`), come nell'esercitazione del 09/11:
  - le variabili contengono la palette e le ombre;
  - il mixin `lift` raccoglie l'effetto delle card;
  - `.btn-brand` dà il colore marrone ai pulsanti.

  Bootstrap arriva dalla CDN già compilato, quindi non si possono cambiare le sue variabili Sass.
  Il pulsante prende il colore ridefinendo le variabili CSS di Bootstrap (`--bs-btn-*`).

## Foto

Le foto dei lavori sono di [Unsplash](https://unsplash.com), segnate come «foto gratuite».
La licenza di Unsplash ne permette l'uso libero, anche commerciale, e non obbliga a citare l'autore.
Le ho scaricate in WebP a 800×600 px, cioè tutte nello stesso formato 4:3.
I titoli e le descrizioni dei lavori sono inventati e partono da quello che si vede nelle foto.

| File | Autore |
|---|---|
| `lavoro-1.webp`, `lavoro-5.webp` | @framesforyourheart |
| `lavoro-2.webp` | @pixasquare |
| `lavoro-3.webp`, `lavoro-4.webp` | @jsnbrsc |
| `lavoro-6.webp` | @webaliser |

## Come si compila lo stile

```
npx sass@1.106.1 --no-source-map style.scss style.css
```

`style.css` viene generato da `style.scss`, non va modificato a mano.
Aggiungendo `--watch` al comando, il file si ricompila da solo a ogni salvataggio.

## Come l'ho verificato

Controllato la pagina in Chrome a 375, 768 e 1280 px di larghezza e l'ho confrontata con la reference grafica:

- **Menu**: c'è l'hamburger sotto i 768 px, si apre e mostra le voci in verticale.
  Toccando Servizi, Lavori o Contatti il menu si chiude e la pagina arriva alla sezione.
  Servizi e Lavori finiscono in cima allo schermo. Contatti si ferma più in basso, perché lì la pagina finisce e non può scorrere oltre.

- **Colonne**:

  | Larghezza | Servizi | Lavori | Footer |
  |---|---|---|---|
  | 375 px | 1 per riga | 1 per riga | in colonna |
  | 768 px | 3 per riga | 2 per riga | 3 colonne |
  | 1280 px | 3 per riga | 3 per riga | 3 colonne |

- **Larghezza della pagina**: non scorre mai in orizzontale.
- **Hero**: occupa l'80% dell'altezza dello schermo.
- **Link interni**: tutti portano a una sezione che esiste.
- **Passaggio del mouse**: la card si alza di 4 px con l'ombra più grande, il pulsante diventa più scuro e il link del footer diventa crema.
- **Tastiera**: arrivando al pulsante «Invia» con il tasto Tab compare l'anello marrone.
- **Contrasto** dei testi, misurato (il minimo richiesto è 4,5:1):

  | Testo | Contrasto |
  |---|---|
  | Link della navbar | 5,6:1 |
  | Testo dell'hero e pulsanti | 7,1:1 |
  | Testo del footer | 10,2:1 |

  ## Accessibilità e Lighthouse

- **Lighthouse accessibility check** su mobile e desktop: 100 su accessibilità, buone pratiche e SEO. 
Lighthouse non apre le pagine da file, quindi l'ho lanciato con un piccolo server locale (`python3 -m http.server`). 

  Per rilanciarlo, si incolla questo comando nel terminale, dalla cartella del progetto:

  ```
  python3 -m http.server 8000 & sleep 1; npx --yes lighthouse@13.6.0 http://localhost:8000 --only-categories=accessibility,best-practices,seo --no-enable-error-reporting --view; kill $!
  ```

  Avvia il server in background, lancia Lighthouse, apre il report nel browser e alla fine chiude il server.
  Per il desktop si aggiunge `--preset=desktop` prima di `--view`.
  La porta deve essere libera: se un altro server la sta già usando, Lighthouse controlla la sua pagina e non questa.

## Struttura

| File | Cosa contiene |
|---|---|
| `index.html` | La pagina intera, nell'ordine: navbar, hero, servizi, lavori, contatti, footer |
| `style.scss` | Il sorgente dello stile: variabili, mixin, poi i blocchi nell'ordine della pagina |
| `style.css` | Lo stile generato da `style.scss`, caricato da `index.html` |
| `script.js` | La chiusura del menu hamburger dopo il tocco su una voce e l'invio del form, che lo azzera e mostra il ringraziamento |
| `assets/img/` | Le 6 foto dei lavori |
| `Docs/` | Questo Readme e `istruzioni progetto.md`, il testo della consegna |

## Extra

Oltre alla versione base:

- **Sezione Lavori**, la «versione intermedia» delle istruzioni (punto 4 di «Cosa è stato fatto»).
- **Il menu hamburger si chiude da solo** dopo il tocco su una voce (punto 2 delle Rifiniture).
- **Lighthouse a 100** su accessibilità, buone pratiche e SEO (punto 4 delle Rifiniture).
- **Messaggio di ringraziamento** dopo l'invio del form, sotto il pulsante (punto 5 di «Cosa è stato fatto»).

Gli extra delle istruzioni che non sono stati fatti:

- **Navbar**: cambio di colore o restringimento durante lo scroll, tema chiaro/scuro.
- **Servizi**: la variante con 6 card.
- **Lavori**: filtri per categoria con transizioni, modale di dettaglio, link di approfondimento sulle card.
- **Contatti**: form dentro una modale, validazione con messaggi di errore e di conferma.
