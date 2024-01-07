# Assignment
In deze opdracht maak je stapsgewijs kennis met de opbouw van de app.
Hierna ben je klaar om een eigen toepassing toe te voegen.

## Kennismaking module smart-building
1. Open de console en inspecteer de SmartBuilding klasse
1. Open de console en klik op de plattegrond
1. Klik op 1 van de icoontjes om de modal te openen
1. Voeg een sensor toe op de plattegrond door 1 regel toe te voegen aan `data.json` en de positie aan te passen
1. Wijzig de grootte van de icoontjes door de `config` aan te passen

## Sensors afmaken
1. Klik op alle icoontjes
1. Sommigen hebben geen titel (UNKOWN). Geef deze een omschrijving door de klasses aan te passen
1. Voeg logische omschrijvingen toe bij de sensorklasses welke wordt weergegeven in de modal content bij openen.
1. Pas de stijl aan door sensors een andere fill en stroke te geven in `layout.less`
1. Voeg een veld `location` toe aan alle sensors in data.json.
Deze content geeft een logische omschrijving van de positie van de sensor.
1. Voeg de veldwaarde van location toe aan de modal-content door:
    1. deze data toe te voegen aan de klasse(s) in constructor van `SmartBuildingObject`
    1. de getter `get htmlBody` uit te breiden

### Uitdaging:
Pas de SVG in de SmartObject klasse aan zodat de marker een map-pin afbeelding genereert.
De subklasses laden hun eigen vorm binnen de universele map pin.

## Gebouw uitbreiden
1. Voeg een eigen plattegrond toe aan `assets/maps` en voeg deze toe aan `data.json`
1. Voeg sensors toe op de andere bouwlagen door `data.json` uit te breiden
1. Wijzig de plattegrond in de config om te zien dat deze sensors worden weergegeven
1. Voeg in data.json voor elke sensor een `id` toe welke uniek is per sensor, deze gebruik je later bij de tracker opdracht

## Functionaliteit verbeteren
1. Sluit de modal zodra escape wordt ingedrukt door `SmartBuildingModal:registerEvents` uit te breiden.

### Uitdaging:
Implementeer d3.zoom om te kunnen zoomen op de plattegrond

## Deursensor
Pas de deursensor aan zodat deze functioneel wordt.
De deursensor telt deuropeningen.
- De modal toont het aantal deuropeningen dat de sensor heeft gemeten
- Zodra de iemand de sensor opent wordt de deuropening gesimuleerd

## Sensor toevoegen
Voeg een sensor toe en geef deze een eigen SVG vorm.
Bij gebrek aan inspiratie kun je een CO2 sensor toevoegen met een driehoek vorm in het paars.

1. Maak een nieuwe klasse aan in objects en pas deze aan voor jouw situatie
1. Voeg een sensor van dit type toe aan `data.json`
1. Pas annotations.js aan om deze klasse te kunnen laden

## Beacon sensor
Beacons doen niets zonder trackers.
Het is tijd om trackers toe te voegen, zodat de beacons niet voor niets zijn geplaatst.

- Voeg trackers toe aan de data.json
- Geef de trackers een duidelijke omschrijving van wat of wie zij volgen.
- Trackers staan niet op de plattegrond, dus zorg dat deze worden gefilterd in de prepare data van annotation.js
Er mogen geen onnodige elementjes gemaakt worden.
- Voeg de velden `beacon_id` en `time` toe aan de data
- Zorg dat de Beacon modal een lijst met trackers toont die bij deze beacon horen (breid deze uit).
- Voeg een config veld `trackerOfflineTime` toe.
- De tracker is offline indien de time langer dan x minuten geleden is.
Maak de online status van de trackers inzichtelijk.

### Challenge
- Simuleer activiteit: Indien je rechtsklikt op de beacon wordt de time van 1 van de gekoppelde trackers op online gezet
(de tijd wordt aangepast naar nu).

## Eigen toepassing
Je hebt nu de app doorlopen en bent klaar om deze zelf uit te breiden.
Hieronder staan enkele idee&euml;n ter inspiratie.

Veel succes!

### UI verbeteren
- Voeg een toolbar toe voor extra functies
  - Het wisselen van plattegrond
  - Lijst van trackers openen, per tracker toon je:
    - Gekoppelde beacon
    - Online status
  - Toevoegen van sensors
- Heb je d3.zoom aan de praat gekregen?
Probeer eens een minimap toe te voegen die aangeeft welk gedeelte wordt weergegeven tijdens het zoomen.
(Let op: deze opdracht is moeilijk)
- Maak een balkje onderin de plattegrond die tevoorschijn komt op mouseenter en verdwijnt bij mouseleave van een object.
Dit balkje toont de longDescription tekst van het object.

### Data verwerken
Koppel de data aan een database.

### Nieuwe toepassing
Bedenk en ontwikkel een geheel eigen toepassing die nuttig kan zijn voor gebouwbeheerders.


