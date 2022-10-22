from types import NoneType
from .Scraper import Scraper
from bs4 import BeautifulSoup
import re

from .Player import Player

"""
WikiScraper class that will scrape a wikipedia page specifically
1. scrape() - main method that will be called to scrape a website
2. is_valid() - checks if the url is a proper wikipedia url, not anythign else
3. get_team_name() - gets the team name from the url
4. get_team_roster() - gets the players from the url
"""
class WikiScraper(Scraper):

    trophies = {}
    team_roster = {}
    all_titles = ['Titoli nazionali', 'Trofei Nazionali', 'International trophies',
                       'Trofei nazionali']
    national_title = ['Scudetti', 'Titoli d\'Inghilterra', 'Community Sheild', 'League Cups',
                       'Fa Cups', 'Premier League', 'LaLiga', 'Serie A', 'Bundesliga', 'Ligue 1']
    esport_team = ['Paris Saint-Germain Football Club']

    def __init__(self, url):
        super().__init__(url)
        self.trophies = {}
        self.team_roster = {}
        self.team_name = ""

    def scrape(self):
        super().scrape()
        if not self.is_valid() or not "wikipedia.org" in self.url:
            raise ValueError("The given URL is not a valid wikipedia URL")

    def is_valid(self):
        return self.soup.find('div', {'id': 'siteSub'}) is not None
        
    def get_team_name(self):
        """
        Description: it gets the team name from the wikipedia page
        """
        self.team_name = self.soup.find("span", {"class": "mw-page-title-main"}).text
        return self.team_name

    def get_team_roster(self):
        """
        Description: it gets the team roster from the wikipedia page
        """
        self.get_team_name()
        
        table = self.soup.find_all("table", {"class": "wikitable football-squad nogrid"})
        

        if len(table) == 0:
            table = self.soup.find_all("table", {"class": "wikitable"})
            if self.team_name in self.esport_team:
                table1 = table[-2]
                table2 = table[-3]
            else:
                table1 = table[-2]
                table2 = table[-1]
        else: 
            table1 = table[-2]
            table2 = table[-1]

        table = [table1, table2]
        for t in table:
            for row in t.find_all("tr"):              
                line = row.find_all("td")
                if len(line) > 3: 
                    
                    number = re.sub(r"\W", "", line[0].text)
                    position = re.sub(r"\W", "", line[1].text)
                    if not position:
                        position = re.sub(r"\W", "", line[2].text)
                    name = line[3].text.lstrip().replace("\n", "")
                    if ' (capitano)' in name:
                        name = name[:-11]
                        player = Player(name, number, position, is_captain=True)
                    else:
                        player = Player(name, number, position)
                    self.team_roster[name] = player
        return self.team_roster

    def get_team_informations(self):
        """
        Description: it gets all the informations from the wikipedia page
        """
        self.team_informations = {}

        table = self.soup.find("table", {"class": "sinottico"})
        body = table.find("tbody")
        lines = body.find_all('tr')
        for li in lines:
            header = li.find("th")
            try: 
                if header.text:
                    header = header.text.lstrip().replace("\n", "")
                    content = li.find("td").text.lstrip().replace("\n", "")
                    try:
                        header = self.traducer[header]
                    except:
                        pass
                    if header in self.all_titles:
                        content = self.parse_trophies_string(content)
                        header = 'Trophies'
                    elif header in self.national_title:
                        try:
                            self.trophies[self.traducer[header]] = int(content)
                        except:
                            self.trophies[header] = int(content)
                    else:
                        try:
                           content = self.traducer[content]
                        except: 
                            pass
                        self.team_informations[header] = content
                    self.team_informations[header] = content
            except Exception as e:
                pass
        try:
            stadium = self.team_informations['Stadium']
            stadium_name = stadium.split('(')[0]
            stadium_capacity = stadium.split('(')[1].split(')')[0][:-6]
            stadium_capacity = stadium_capacity[:2] + stadium_capacity[3:]
            self.team_informations['Stadium'] = stadium_name
            self.team_informations['Stadium_capacity'] = stadium_capacity
        except Exception as e:
            pass
        return self.team_informations

    def parse_trophies_string(self, content):
        """
        Description: it parses the string of the trophies
        """
        x = 0
        i = 0
        while i < len(content) - 1:
            if content[i].isdigit():
                
                x = i
                while content[x].isdigit():
                    x += 1

                j = i + 1             
                while j < len(content) - 1 and not content[j+1].isdigit():
                    j += 1
                
                try:
                    self.trophies[self.traducer[content[i+(x-i)+1:j + 1]]] = int(content[i:x])
                except:
                    self.trophies[content[i+(x-i)+1:j + 1]] = int(content[i:x])

                i = j + 1
        return self.trophies
