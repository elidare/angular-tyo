# Angular harjoitustyö

## Käynnistäminen
`git clone git@github.com:elidare/angular-tyo.git`
`cd konferenssit/`
`ng serve`

Sovellus on saatavilla http://localhost:4200/

## Selitykset

Tämä työ oli vaikea kombinatorisen tehtävän vuoksi ja myös siksi, että minulla ei ole ollut Angularin kokemusta.

Ensin, oli hankala ymmärtää tehtävää (en ole todella hyvä tällaisissa matemaattisissa tehtävissä ja jos se olisi venäjäksi, olisin samassa tilanteessa). Siellä pyysin chatGPT:tä auttamaan minua löytämään ratkaisun. Se antoi jonkinlaisen ratkaisun, joka lopulta osoittautui virheelliseksi, ja luulen, että sen selvittäminen kestäisi minulle useita tunteja. Sillä tavalla päätin keskittyä Angularin osaan.

Loin form:in, jossa on 2 input:ia, ja tulokset lasketaan napsauttamalla `Lähetä` painiketta.
Input:iin voi syöttää vain kokonaisluku numerot enemmän kuin 0. `Lähetä` on `disabled` kun yksi tai molemmat inputit on tyhjät, tai jos inputeilla on 0/0. Molemmat määrät on rajoitettu 1000:ksi.

Calculation.service on tehnyt minä itse, paitsi generateWorkshopGroups() joka on tehty chatpgt:n tuottaman palvelun pohjalta.
CSS on tekemäni.

## Keinoälyn käyttö
Tunnustan OpenAI:n (2025). ChatGPT (v4) [Large language model]. https://openai.com käytön tässä tehtävässä. Tekoäly loi seuraavat:
- Matemaattinen selitys tehtävään https://chatgpt.com/share/67eda822-5f64-8003-ad9a-035b85cd5c94
- Koodi joka voi laskea työpajakierroksen määrä https://chatgpt.com/share/67efd0ec-fd4c-8003-a873-8aa4ab90428b
- Angular service koodi https://chatgpt.com/c/67ee70a7-aa40-8003-94c7-09cfd06701d1
- Angular FormBuilder alkukoodi https://chatgpt.com/canvas/shared/67eda8b15c4c8191b30fd1d0718e936b

## Muut referenssit
- Angular tutorials https://angular.dev/tutorials
- Angular docs https://angular.dev/overview

## Tunnetut ongelmat
- Osallistuja ei saa olla kuin kerran toisen osallistujan kanssa työpajassa -sääntö ei valitettavasti toimi.
