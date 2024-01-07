# Sensors assigment
Tijdens deze opdracht gaan jullie middels sensors gebouwen slim maken.

Tijdens het college zijn de volgende sensors gedemonstreerd:

- Positiebepaling middels GPS
- Positiebepaling middels Beacons
- Deur sensor (een teller)
- Waterlekdetectie
- Afstandssensor
- Liquid level
- Temperatuursensor

[Open assigment](assignment.md)

## Quickstart
- `npm install` node\_modules installeren
- `npm run start` start the server op port 8080 (config.js om aan te passen)
- [http://localhost:8080](http://localhost:8080);

## Project opbouw
De projectopbouw is als volgt:

- `server.js` is het startscript waar de server wordt geladen met behulp van de node module `express`
  - `browserify` wordt gebruikt om de module te laden uit `src/js/smart-building`
  - `lessc` wordt gebruikt om less bestanden uit `src/less` te gebruiken in de styling
- `nodemon` wordt gebruikt om de server te starten en zorgt voor autoreload
- `assets` is de map waar alle statische bestanden worden bewaard, deze map is voor de client bereikbaar
- `public` is de client directory
  - `index.html` is de pagina waar de module wordt gedemonstreerd
- [d3.js](https://d3js.org/) wordt gebruikt om de elementen op te bouwen

## Smart Building opbouw
Smart building wordt ingeladen als comonJS module.
Deze is ontworpen om binnen een element met willekeurige (maar wel vaste) afmetingen te laden.

Vanuit `src/js/smart-building/index.js` worden modules ingeladen met de volgende opbouw:

- data: `data.json` is de brondata voor de plattegrond
- config: De plaats voor instellingen van de module
- Hub: Centrale event hub
- Map: De plattegrond view
- Annotations: Objecten tekenen op de plattegrond
    - sensors: de objecten op de plattegrond `src/js/smart-building/objects/`
- Minimap: Werkt nog niet
- Modal: Weergave van een informatie popup


