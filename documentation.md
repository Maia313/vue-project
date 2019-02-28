```
npm run serve
```

`file structure in single file components`

```
<template>
</template>

<script>
</script>

<style>
</style>
```

`Top level component - render method of the Vue instance in main.js is rendering the UI`
`HomePage component - naming convention for vue - name components with 2 words`


#### Creating Vue.js components
`Using bindings to display data and handle events`
`Conditionally displaying elements with v-if and v-show`
`Repeating elements with v-for`

##### Struktur:

*Components:
    `HomePage.vue` - presentationssida(Navbar, Sidebar, Main Content)
    `PartSelector.vue`
    `PatternMaker.vue` - där man ska kunna sätta ihop bilder till ett större mönster(3 rader x 3 kolumner)
    `PatternLibrary.vue` - där man ska kunna se alla sparade mönster
    `BrowseParts.vue` 
    `PatternInfo.vue` - där man ska kunna se varje mönster enskilt
    `PatternTops.vue`
    `PatternCenters.vue`
    `PatternSides.vue`
    `PatternBases.vue`
    `CollapsibleSection.vue` - pattern prewiew section, som man ska kunna öppna och stänga ner
    `SidebarStandard.vue` - för att enkelt kunna skilja mellan create vyn och övriga
    `SidebarCreate.vue`  - för att enkelt kunna skilja mellan create vyn och övriga
    `App.vue`

##### Funktionalitet:

* man ska kunna navigera mellan HomePage.vue, PatternMaker.vue, PatternInfo.vue, PatternLibrary.vue
* i PatternMaker.vue ska man kunna se en 3 rader x 3 kolumner ruta med mönsterbilder
* för varje bild ska det finnas framåt/tillbaka knappar så att man ska kunna enkelt byta bild
* det ska gå att stänga eller öppna CollapsibleSection.vue
* i CollapsibleSection.vue ska man kunna se en preview av mönsterbilden för 3 rader x 3 kolumner rutan
* man ska kunna se de sparade mönstrena genom att navigera till PatternLibrary.vue 

Eventuellt ska man kunna även göra följande, beroende på tillgängliga tiden:
* ta bort mönster från biblioteket
* sätta filter för att ändra färgen på mönstret
* flytta ordningen på de sparade mönstrena


Appen ska utvecklas enligt följande tidsplan:

`Vecka 6` påbörja arbetet med appen sätta upp miljö, prototyping, fundera kring verktyg, lära mig grunderna i Vue.js
`Vecka 7` skapa den statiska versionen av appen, bestämma mer tydligt kring hur den ska se ut, vilka verktyg ska användas, reflektera kring svårigheter, begränsningar, möjliga lösningar
`Vecka 8` refakturera kod, förfina detaljer, skriva första rapportutkasten
`Vecka 9` skriva klart rapporten, fundera mer kring vad som skulle kunna förbättra applikationen
`Vecka 10` vara färdig med applikationen, skriva ner slutreflektioner


