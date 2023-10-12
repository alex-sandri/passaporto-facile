# Passaporto Facile

Sito per accedere direttamente alla schermata di conferma dell'appuntamento del
passaporto sul [portale ufficiale della Polizia di Stato](https://www.passaportonline.poliziadistato.it).

## Documentazione

### `POST /GestioneAppuntamentiCittadinoAction.do`

| Campo | Descrizione | Formato |
| :- | :- | :- |
| `codop` | - | `confermaInserimentoAppuntamentoCittadino` |
| `idRegista` | *Identificativo dell'ufficio* | *Vedi [**Uffici**](https://passaporto-facile.alexsandri.com/uffici/)* |
| `richiedente` | - | `altriRic` |
| `idAppuntamento` | *Identificativo del richiedente* | - |
| `linguaApp` | *La lingua dell'applicazione* | `italiano` |
| `data` | *La data dell'appuntamento* | `dd-mm-yyyy` |
| `orario` | *L'ora dell'appuntamento* | `h.00` o `hh.00` |
| `valoreOra` | *Uguale a `orario`* | `h.00` o `hh.00` |
| `oraPlus` | *`orario` con un'ora in più* | `h.00` o `hh.00` |
| `codiceFiscale` | *Il codice fiscale del richiedente* | - |
| `nome` | *Il nome del richiedente* | - |
| `cognome` | *Il cognome del richiedente* | - |
| `sesso` | *Il sesso del richiedente* | `M` o `F` |
| `dataNascita` | *La data di nascita del richiedente* | `dd-mm-yyyy` |
| `codStatoNascita` | *Il codice dello Stato di nascita del richiedente* | `XXX` (*ISO 3166-1 alpha 3*) |
| `provinciaNascita` | *Sigla della provincia di nascita del richiedente* | `XX` |
| `comuneNascita` | *Comune di nascita del richiedente* | - |
| `codStatoResidenza` | *Il codice dello Stato di residenza del richiedente* | `XXX` (*ISO 3166-1 alpha 3*) |
| `provincia` | *Sigla della provincia di residenza del richiedente* | `XX` |
| `comuneResidenza` | *Comune di residenza del richiedente* | - |
| `indirizzo` | *Indirizzo di residenza del richiedente* | - |
| `numeroCivico` | *Numero civico dell'indirizzo di residenza del richiedente* | - |
| `telefono` | *Numero di telefono del richiedente* | - |
| `altezza` | *Altezza del richiedente in centimetri* | - |
| `email` | *Indirizzo email del richiedente* | - |
| `email2` | *Uguale ad `email`* | - |
| `occhi` | *Colore degli occhi del richiedente* | `Azzurri`, `Grigi`, `Verdi`, `Marroni` o `Neri` |
| `statoCivile` | *Stato civile del richiedente* | `celibe`, `coniugato/a`, `divorziato/a`, `nubile`, `separato/a`, `tutelato/a` o `vedovo/a` |
| `cognomeConiuge` | *Eventuale cognome del coniuge* | - |
| `nomeConiuge` | *Eventuale nome del coniuge* | - |
| `codiceDocumento` | *Tipo di documento d'identità del richiedente* | *Vedi [`codiceDocumento`](#codicedocumento)* |
| `numeroDocumento` | *Numero del documento d'identità del richiedente* | - |
| `haFigli` | *Se il richiedente ha figli minori* | `S`(ì) o `N`(o) |
| `precedentiPenali` | *Se il richiedente è a conoscenza di motivi ostativi al rilascio del passaporto (**art.3 L.1185/67**)* | `S`(ì) o `N`(o) |
| `sDataScadenzaPassaporto` | *Eventuale data di scadenza del passaporto in possesso del richiedente* | `dd-mm-yyyy` |
| `note` | *Eventuali note* | - |

#### `codiceDocumento`

I possibili valori per questo campo sono:
- `SPROVVISTO DI DOCUMENTO`
- `CARTA DI IDENTITA'`
- `CARTA IDENTITA' ELETTRONICA`
- `CERTIFICATO D'IDENTITA'`
- `PASSAPORTO DI SERVIZIO`
- `PASSAPORTO DIPLOMATICO`
- `PASSAPORTO ORDINARIO`
- `PATENTE DI GUIDA`
- `PATENTE NAUTICA`
- `TES. ENTE NAZ. ASSIS.VOLO`
- `TES. FERROV. EX DEPUTATI`
- `TES. FERROVIARIA DEPUTATI`
- `TES. POSTE E TELECOMUNIC.`
- `TES. UNICO PER LA CAMERA`
- `TES. DOGANALE RIL.MIN.FIN.`
- `TESS. AG. E AG.SC. C.F.S.`
- `TESS. AGENTI/ASS.TI P.P.`
- `TESS. AGENTI/ASS.TI P.S.`
- `TESS. APP.TO AG.CUSTODIA`
- `TESS. APP.TO CARABINIERI`
- `TESS. APP.TO FINANZIERE`
- `TESS. APP.TO/VIG. URBANO`
- `TESS. APP.TO/VIG. VV.FF.`
- `TESS. CONSIGLIO DI STATO`
- `TESS. CORTE D'APPELLO`
- `TESS. CORTE DEI CONTI`
- `TESS. FERROV. SENATO`
- `TESS. FUNZIONARI P.S.`
- `TESS. IDENTIF.TELECOM IT.`
- `TESS. ISCR. ALBO MED/CHI.`
- `TESS. ISCRIZ. ALBO ODONT.`
- `TESS. ISPETTORI P.P.`
- `TESS. ISPETTORI P.S.`
- `TESS. MEMBRO EQUIP. AEREO`
- `TESS. MILIT. M.M.`
- `TESS. MILIT. TRUPPA SISMI`
- `TESS. MILITARE E.I.`
- `TESS. MILITARE NATO`
- `TESS. MILITARE TRUPPA A.M`
- `TESS. MIN.BEN.E ATT.CULT.`
- `TESS. MIN.PUBB.ISTRUZIONE`
- `TESS. MINIST. TRASP/NAVIG`
- `TESS. MINISTERO DIFESA`
- `TESS. MINISTERO FINANZE`
- `TESS. MINISTERO GIUSTIZIA`
- `TESS. MINISTERO INTERNO`
- `TESS. MINISTERO LAVORI PU`
- `TESS. MINISTERO SANITA'`
- `TESS. MINISTERO TESORO`
- `TESS. ORDINE GIORNALISTI`
- `TESS. PARLAMENTARI`
- `TESS. PERS. MAGISTRATI`
- `TESS. POL. TRIB. G.D.F.`
- `TESS. POLIZIA FEMMINILE`
- `TESS. PRES.ZA CONS. MIN.`
- `TESS. PUBBLICA ISTRUZIONE`
- `TESS. S.I.S.D.E.`
- `TESS. SOTT.LI AG.CUSTODIA`
- `TESS. SOTT.LI G.D.F.`
- `TESS. SOTT.LI VIG. URBANI`
- `TESS. SOTTUFF.LI VV.FF.`
- `TESS. SOTTUFFICIALI A.M.`
- `TESS. SOTTUFFICIALI CC`
- `TESS. SOTTUFFICIALI E.I.`
- `TESS. SOTTUFFICIALI SISMI`
- `TESS. SOTTUFICIALI C.F.S.`
- `TESS. SOTTUFICIALI M.M.`
- `TESS. SOVRINTENDENTI P.P.`
- `TESS. SOVRINTENDENTI P.S.`
- `TESS. UFF.LI AG.CUSTODIA`
- `TESS. UFF.LI VIG.URBANI`
- `TESS. UFFICIALE`
- `TESS. UFFICIALI A.M.`
- `TESS. UFFICIALI C.F.S.`
- `TESS. UFFICIALI E.I.`
- `TESS. UFFICIALI G.D.F.`
- `TESS. UFFICIALI M.M.`
- `TESS. UFFICIALI P.P.`
- `TESS. UFFICIALI P.S.`
- `TESS. UFFICIALI SISMI`
