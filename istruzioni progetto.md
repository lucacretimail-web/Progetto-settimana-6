# Specifiche progettuali sito aziendale (Versione aggiornata)

Documento di specifica per il sito aziendale **EPICODE**, basato sul transcript più recente del progetto e sulla versione aggiornata con Bootstrap.

---

## 1. Tecnologie

### Requisiti obbligatori
* **Bootstrap 5.x** come framework CSS principale (*"l’unico requisito obbligatorio di questo progetto è buzzrap"*).
* Utilizzo delle **classi utility di Bootstrap** per layout, griglie, allineamenti (es. `d-flex`, `justify-content-center`, `align-items-center`, `col-12`, `col-md-4`).

### Requisiti facoltativi
* **Sass/SCSS** per la gestione dei CSS modulari e uso di mixin, consigliato ma non obbligatorio (*"SAS non è obbligatorio, provateci ma se ci spalmate, non mi applicate"*).
* **Bootstrap Icons** o icone equivalenti gratuite (es. Google Icons) per le card servizi e lavori.

---

## 2. Struttura generale delle pagine

### Requisiti obbligatori
* **Sito monopagina** (tipicamente una `index.html`) con sezione principale che scorre verticalmente.
* **Struttura base delle sezioni:**
  * **Navbar** (menu principale)
  * **Hero / Studio** (sezione di apertura con testo e call to action)
  * **Servizi** (card di presentazione dei servizi)
  * **Contatti** (form contatti e info)
* Rispetto della struttura grafica mostrata in preview: proporzioni del banner, spaziatura, colori, linee decorative (es. “linetta” sotto ai titoli).

### Requisiti facoltativi
* **Sezione Lavori (portfolio)** come sezione aggiuntiva opzionale tra Studio/Servizi o Servizi/Contatti.
* Eventuali **pagine secondarie** (es. pagina di ringraziamento post invio form) come extra.

---

## 3. Navbar (header, menu di navigazione)

### Requisiti obbligatori
* Navbar realizzata con componenti Bootstrap (`.navbar`, `.navbar-expand-md`, `.navbar-toggler` ecc.).
* Posizionamento in alto, fissa all’inizio della pagina (non necessariamente sticky, comportamento a scelta).
* **Voci di menu principali:**
  * `Studio` (o equivalente: hero/intro)
  * `Servizi`
  * `Contatti`
  * In caso di aggiunta sezione Lavori, inserire la quarta voce di menu `Lavori` con ancoraggio alla relativa sezione.
* **Comportamento responsivo:**
  * Navbar espansa su viewport ≥ `md` (`768px`) tramite `navbar-expand-md`.
  * Sotto `768px`, navbar collassata con icona hamburger e menu a lista verticale.

### Requisiti facoltativi (extra)
* Navbar che cambia colore durante lo scroll o con tema chiaro/scuro.
* Navbar che si restringe (`height` ridotta) dopo lo scroll, come nella versione "completa" del progetto precedente.

---

## 4. Sezione Hero / Studio
*Questa è la sezione di apertura con il "bannerone".*

### Requisiti obbligatori
* **Altezza minima `80vh`** (*"mini ottanta VH", "questo lo dovete fare CSS vostro, non c’è una classe che fa questo"*).
* **Contenuto centrato** sia verticalmente sia orizzontalmente, usando Flexbox e classi Bootstrap (`d-flex`, `justify-content-center`, `align-items-center`, eventualmente `text-center`).
* Presenza di un **titolo principale `H1` molto grande** (più grande dell’`H1` del resto del sito) che presenti l’azienda/sito.
* Sottotitolo o breve testo descrittivo opzionale ma consigliato.
* Presenza di un **pulsante call to action** che non apre una modale, ma esegue uno scroll verso la sezione Contatti (ancora interna, es. `href="#contatti"`).
* Rispetto dei colori indicati (palette del progetto) e della struttura grafica vista in preview.

### Requisiti facoltativi
* Eventuali micro-animazioni sull’hover del pulsante (cambio colore, ombra) coerenti con lo stile generale.

---

## 5. Sezione Servizi (versione base)

### Requisiti obbligatori
* Titolo di sezione (es. *"Servizi"*) + sottotitolo descrittivo.
* **Layout con 3 card** disposte in griglia Bootstrap:
  * Su schermi piccoli: `col-12` (una card per riga).
  * Da viewport `md` (≥ `768px`): `col-md-4` (3 card affiancate).
* **Ogni card deve contenere:**
  * Un’icona (Bootstrap Icons, Google Icons, emoji di sistema, ecc.).
  * Un titolo di servizio.
  * Un breve testo descrittivo.
* **Effetto hover** sulle card ("lift", leggera traslazione verso l’alto, eventuale ombra) per indicare interattività.
* **Spaziatura sufficiente:** *"fra le card ci dev’essere un po’ di aria"*.

### Requisiti facoltativi (extra servizi)
* **Variante Servizi con 6 card:**
  * Sotto `768px`: `col-12` (tutte in verticale).
  * Da `768px` a `992px`: `col-md-6` (2 card per riga).
  * Da `992px` in su: `col-lg-4` (3 card per riga, quindi 2 righe da 3 card).
* Numero di card superiore/inferiore a 6 consentito come scelta di extra (*"ce ne volete mettere di più, ce ne volete mettere di meno"*).
* Ulteriori micro-interazioni (es. cambio colore icone, transizioni su hover).

---

## 6. Sezione Lavori (extra / versione intermedia)
*Questa sezione è opzionale e corrisponde alla "versione intermedia" del progetto.*

### Requisiti obbligatori (se la sezione è implementata)
* Titolo di sezione (es. *"Lavori"*, *"Portfolio"*) + eventuale sottotitolo.
* Presenza di **6 card lavori** (*"versione intermedia, sezione lavori con sei cardi"*).
* Ogni card può contenere: titolo lavoro, breve descrizione, eventuale immagine o icona, link/percorso di approfondimento.
* Layout responsive con griglia Bootstrap (schema allineato a quello dei servizi extra: `col-12` / `col-md-6` / `col-lg-4`) o analogo coerente.

### Requisiti facoltativi / extra avanzati
* **Filtri di categoria** (es. pulsanti o select per filtrare i lavori per tipo di progetto).
* **Tema toggle (chiaro/scuro)** con transizioni tra temi applicate per tutta la sezione o l’intero sito.
* **Effetti di transizione** sulle card durante il filtraggio (fade, slide, ecc.).
* Eventuale **modale di dettaglio lavoro** che si apre cliccando una card/CTA (immagine grande, descrizione estesa, ecc.).

---

## 7. Sezione Contatti

### Requisiti obbligatori (versione base, in chiaro)
* Titolo di sezione (es. *"Contatti"*) e breve testo introduttivo.
* **Form contatti con almeno 4 campi** (come nel progetto precedente):
  * Nome
  * Email
  * Oggetto / selezione tipo richiesta (eventuale `select` con 3 voci, in linea col progetto passato)
  * Messaggio
* Il form non deve necessariamente inviare dati reali: può *"non fare un tubo"* (assenza di backend). Inviare può semplicemente azzerare/resettare il form.
* Pulsante di invio form (es. *"Invia"*) con comportamento minimo di reset del form o, se implementato, invio fittizio.

### Requisiti facoltativi / extra
* **Variante con Modale:** la call to action *"Inizia un progetto"* / *"Contattaci"* non mostra il form in chiaro, ma apre una modale Bootstrap (`.modal`, `.modal-dialog`, `.modal-content`) contenente il form con i 4 campi sopra indicati, chiudibile tramite pulsante `"X"` o `"Chiudi"`.
* **Validazione del form** (parte della "versione intermedia" / extra):
  * Validazione lato client: obbligatorietà dei campi, formato email corretto, lunghezza minima messaggio.
  * Feedback di errore/successo (messaggio di conferma, highlight dei campi invalidi).
* **Pagina di ringraziamento** o messaggio di conferma inline dopo l’invio (*"Posso aggiungere la pagina di ringraziamento... posso mettere il messaggio di conferma..."*).

---

## 8. Footer

### Requisiti obbligatori
* Presenza di un **footer a fine pagina**, a larghezza piena.
* **Contenuti minimi:** copyright, nome azienda/sito, eventuali contatti rapidi (email, telefono) e link social opzionali.
* Su viewport ampie (circa ≥ `1200px`, *"mille due"*), **struttura in linea** (layout orizzontale) coerente con quanto mostrato nella preview (*"il futer è in linea"*).

### Requisiti facoltativi
* Eventuali suddivisioni in colonne (es. 3 colonne: contatti, link rapidi, social) con griglia Bootstrap.

---

## 9. Responsività e breakpoint

### Requisiti obbligatori
* Utilizzo del **breakpoint `md` (`768px`)** come unico breakpoint "vero" del progetto:
  * **Sotto `768px`:** layout verticale e a colonna unica (navbar hamburger, card in `col-12`).
  * **Da `768px` in su:** layout a più colonne, card servizi/lavori in `col-md-4` o `col-md-6` a seconda del numero di card.
* Gestione corretta dei componenti Bootstrap per garantire un comportamento fluido tra mobile e desktop.

### Requisiti facoltativi
* Eventuale uso del breakpoint `lg` (≥ `992px`) per passare da 2 a 3 card per riga nelle sezioni con 6 card (schema `col-12` / `col-md-6` / `col-lg-4`).
* Eventuali aggiustamenti a ≥ `1200px` (*"mille due"*) per modificare larghezza delle card e del form, mantenendo coerenza grafica.

---

## 10. Aspetti grafici

### Requisiti obbligatori
* **Coerenza con la preview:** rispetto della palette colori, delle proporzioni e della gerarchia tipografica (titolo Hero molto evidente).
* **Elementi decorativi:** presenza delle linee decorative (es. *"linetta"* sotto ai titoli di sezione) realizzate tramite CSS custom.
* **Spaziature e respiro:** padding generoso tra le sezioni e margini/gap adeguati tra le card.

### Requisiti facoltativi
* **Micro-interazioni:** transizioni fluide (`transition`) su pulsanti, link e card (effetto lift e ombreggiatura al passaggio del mouse).
* **Supporto Dark Mode:** variabili CSS o classi Bootstrap dedicate per il cambio tema chiaro/scuro.

