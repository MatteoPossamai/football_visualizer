import requests
from bs4 import BeautifulSoup

"""
General scraper class that will be inherited by other scrapers
1. scrape() - main method that will be called to scrape a website
"""
class Scraper:

    traducer = {'Confederazione': 'Confederation', 'Federazione': 'Federation', 'Trofei internazionali':'International trophies',
                'Coppe di Lega inglesi': 'League Cups', 'Coppa Italia': 'Italian Cup', 'Supercoppa Italiana': 'Italian Supercup',
                'Coppe d\'Inghilterra': 'Fa Cups', 'Titoli d\'Inghilterra': 'Premier League', 'Sito web': 'Website',
                'Campionato di Serie A': 'Serie A', 'Campionato di Serie B': 'Serie B', 'Campionato di Serie C': 'Serie C',
                'Allenatore': 'Manager', 'Stadio': 'Stadium', 'Capacità': 'Capacity', 'Fondazione': 'Foundation', 'Campionato':'Championship',
                'Nazione':'Nation', 'Città':'City', 'Stato':'State', 'Squadra':'Team', 'Colori sociali':'Colors', 'Simboli':'Symbols',
                'Coppa UEFA': 'UEFA Cup', 'Coppe dei Campioni/Champions League':'UEFA Champions League', 'Coppe delle Coppe': 'UEFA Cup Winners\' Cup',
                'Supercoppe UEFA': 'UEFA Super Cups', 'Coppe Intertoto': 'Intertoto Cup', 'Coppe Intercontinentali': 'Intercontinental Cups',
                'Coppa delle Alpi': 'Alps Cup', 'Coppa delle Fiere': 'Fair Cup', 'Coppa delle Regioni': 'Regions Cup', 'Coppa delle Città': 'Cities Cup',
                'Italia': 'Italy', 'Regno Unito\xa0Inghilterra': 'England', 'Coppe Mitropa':'Mitropa Cup', 'Coppe UEFA/Europa League':'Europa League',
                'Coppe Latine':'Latin Cup', 'Comunità autonoma':'Autonomous community', 'Provincia':'Province', 'Alcalde': 'Alcade',
                'Coordinate':'Coordinates', 'Altitudine': 'Altitude', 'Superficie': 'Surface', 'Titoli di Spagna': 'Spanish League', 'Coppe delle Fiere':'Fair Cup',
                'Coppe del mondo per club': 'Clubs World Cup', 'Coppe Mitropa[2]': 'Mitropa Cup', 'Coppe delle Fiere[2]': 'Fair Cup', 
                'Titoli di Germania': 'German League', 'Charity/Community Shield': 'Community Sheild', 'Titoli d\'Inghilterra': 'Premier League', 
                'Proprietario': 'Owner', 'Inno': 'Anthem', 'Presidente': 'President', 'Coppe Italia':'Italian Cups', 'Supercoppe italiane': 'Italian Super Cups',
                'Titoli di Spagna': 'LaLiga', 'Titoli di Germania': 'Bundesliga', 'Titoli di Francia': 'Ligue 1', 'Titoli di Olanda': 'Eredivisie',
                'Coppe di Germania': 'DFB-Polkal', 'Supercoppe di Germania': 'DFL-Supercups', 'Coppe di Francia': 'Coupe de France', 'Coppe di Lega francese': 'Coupe de la Ligue',
                'Supercoppe di Francia': 'France Supercup', 'Coppe di Olanda': 'KNVB Cup', 'Supercoppe di Olanda': 'KNVB Supercup', 'Coppe di Belgio': 'Coupe de Belgique'}

    def __init__(self, url):
        self.url = url
        self.page = ""
        self.soup = None

    def scrape(self):
        self.url =  self.url[:8] + "it" + self.url[10:]
        self.page = requests.get(self.url).text
        self.soup = BeautifulSoup(self.page, 'html.parser')

    def next_int(self, string):
        return int(''.join(filter(str.isdigit, string)))