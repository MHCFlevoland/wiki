# Kantine Schermen

De informatieschermen in de kantine zijn een eigen systeem van MHC Flevoland.

De schermen worden aangestuurd met Raspberry Pi's waarop balenaOS draait. Op de Raspberry Pi draait een browser die automatisch de schermapplicatie opent.

Architectuur
Internet
│
┌───────┴────────┐
│ │
▼ ▼
MHC/API's MHC Website
│ │
│ scraping/data
│ │
└───────┬────────┘
│
▼
React applicatie
│
▼
Browser
│
▼
Raspberry Pi + balenaOS
│
▼
Kantinescherm
Raspberry Pi

Iedere televisie heeft een Raspberry Pi die verantwoordelijk is voor het weergeven van de applicatie.

Per apparaat documenteren:

Naam:
Raspberry Pi model:
Locatie:
Scherm:
Netwerk:
MAC-adres:
balena device:
Applicatieversie:
Opmerkingen:

Bijvoorbeeld:

Naam: SCREEN-KANTINE-01
Locatie: Kantine links
Device: Raspberry Pi
OS: balenaOS
Functie: Informatiescherm
Applicatie: MHC Screen
Netwerk: Ethernet
React-applicatie

De eigen React-applicatie bepaalt wat er op de schermen wordt weergegeven.

De applicatie haalt informatie op uit API's en gebruikt daarnaast informatie die van de website wordt opgehaald/gescrapet.

Daarvoor zou ik binnen de wiki een aparte ontwikkelaarssectie maken:

Kantineschermen
│
├── Overzicht
├── Raspberry Pi
├── balenaOS
└── Chrome brouwser

https://dashboard.balena-cloud.com/fleets/2155456/summary

Bij scraping is vooral belangrijk om te documenteren welke pagina's en elementen worden uitgelezen. Een wijziging aan de AllUnited/clubwebsite kan anders onverwacht de schermen kapotmaken.
