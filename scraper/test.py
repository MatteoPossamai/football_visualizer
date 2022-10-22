import unittest
import scraper 

class Test(unittest.TestCase):
    def test_juventus_endpoint(self):
        scraper1 = scraper.WikiScraper("https://it.wikipedia.org/wiki/Juventus_Football_Club")
        scraper1.scrape()

        name = scraper1.get_team_name()
        self.assertEqual(name, "Juventus Football Club")

        informations = scraper1.get_team_informations()
        self.assertEqual(informations['Website'], "www.juventus.com")
        self.assertEqual(informations['Stadium'], "Allianz Stadium")
        self.assertEqual(informations['Stadium_capacity'], "41507")
        self.assertEqual(informations['President'], "Andrea Agnelli")
        self.assertEqual(informations['Manager'], "Massimiliano Allegri")
        self.assertEqual(informations['City'], "Torino")
        self.assertEqual(informations['Championship'], "Serie A")
        self.assertEqual(informations['Foundation'], '1897')
        self.assertEqual(informations['Colors'], "Bianco, nero")
        self.assertEqual(informations['Trophies']['Scudetti'], 36)
        self.assertEqual(informations['Trophies']['Italian Cups'], 14)
        self.assertEqual(informations['Trophies']['Italian Super Cups'], 9)
        self.assertEqual(informations['Trophies']['UEFA Champions League'], 2)
        self.assertEqual(informations['Trophies']['UEFA Super Cups'], 2)

        roaster = scraper1.get_team_roster()
        self.assertEqual(len(roaster), 27)
        self.assertEqual(roaster['Wojciech Szczęsny'].name, 'Wojciech Szczęsny')
        self.assertEqual(roaster['Wojciech Szczęsny'].number, '1')
        self.assertEqual(roaster['Wojciech Szczęsny'].position, 'P')

        self.assertEqual(roaster['Bremer'].name, 'Bremer')
        self.assertEqual(roaster['Bremer'].number, '3')
        self.assertEqual(roaster['Bremer'].position, 'D')

        self.assertEqual(roaster['Manuel Locatelli'].name, 'Manuel Locatelli')
        self.assertEqual(roaster['Manuel Locatelli'].number, '5')
        self.assertEqual(roaster['Manuel Locatelli'].position, 'C')

        self.assertEqual(roaster['Dušan Vlahović'].name, 'Dušan Vlahović')
        self.assertEqual(roaster['Dušan Vlahović'].number, '9')
        self.assertEqual(roaster['Dušan Vlahović'].position, 'A')

    def test_manchester_city_endpoint(self):
        scraper2 = scraper.WikiScraper('https://en.wikipedia.org/wiki/Manchester_City_F.C.')
        scraper2.scrape()

        name = scraper2.get_team_name()
        self.assertEqual(name, "Manchester City Football Club")

        informations = scraper2.get_team_informations()
        self.assertEqual(informations['Website'], "www.mcfc.co.uk")
        self.assertEqual(informations['Stadium'], "City of Manchester Stadium")
        self.assertEqual(informations['Stadium_capacity'], "53400")
        self.assertEqual(informations['President'], "Khaldoon Al Mubarak")
        self.assertEqual(informations['Manager'], "Josep Guardiola")
        self.assertEqual(informations['City'], "Manchester")
        self.assertEqual(informations['Championship'], "Premier League")
        self.assertEqual(informations['Foundation'], '1880')
        self.assertEqual(informations['Rifondazione'], '1894')
        self.assertEqual(informations['Colors'], "Celeste, bianco")
        self.assertEqual(informations['Trophies']['UEFA Cup Winners\' Cup'], 1)
        self.assertEqual(informations['Trophies']['Premier League'], 8)
        self.assertEqual(informations['Trophies']['Fa Cups'], 6)
        self.assertEqual(informations['Trophies']['League Cups'], 8)
        self.assertEqual(informations['Trophies']['Community Sheild'], 6)

        roaster = scraper2.get_team_roster()
        self.assertEqual(len(roaster), 23)
        self.assertEqual(roaster['Ederson'].name, 'Ederson')
        self.assertEqual(roaster['Ederson'].number, '31')
        self.assertEqual(roaster['Ederson'].position, 'P')

        self.assertEqual(roaster['Kyle Walker'].name, 'Kyle Walker')
        self.assertEqual(roaster['Kyle Walker'].number, '2')
        self.assertEqual(roaster['Kyle Walker'].position, 'D')

        self.assertEqual(roaster['Bernardo Silva'].name, 'Bernardo Silva')
        self.assertEqual(roaster['Bernardo Silva'].number, '20')
        self.assertEqual(roaster['Bernardo Silva'].position, 'C')

        self.assertEqual(roaster['Erling Håland'].name, 'Erling Håland')
        self.assertEqual(roaster['Erling Håland'].number, '9')
        self.assertEqual(roaster['Erling Håland'].position, 'A')

    def test_real_madrid_endpoint(self):
        scraper3 = scraper.WikiScraper('https://es.wikipedia.org/wiki/Real_Madrid_Club_de_F%C3%BAtbol')
        scraper3.scrape()

        name = scraper3.get_team_name()
        self.assertEqual(name, "Real Madrid Club de Fútbol")

        informations = scraper3.get_team_informations()
        self.assertEqual(informations['Website'], "www.realmadrid.com")
        self.assertEqual(informations['Stadium'], "Santiago Bernabéu")
        self.assertEqual(informations['Stadium_capacity'], "81044")
        self.assertEqual(informations['President'], "Florentino Pérez")
        self.assertEqual(informations['Manager'], "Carlo Ancelotti")
        self.assertEqual(informations['City'], "Madrid")
        self.assertEqual(informations['Championship'], "Primera División")
        self.assertEqual(informations['Foundation'], '1902')
        self.assertEqual(informations['Colors'], "Bianco")
        self.assertEqual(informations['Trophies']['LaLiga'], 35)
        self.assertEqual(informations['Trophies']['Coppe del Re'], 19)
        self.assertEqual(informations['Trophies']['Coppe della Liga'], 1)
        self.assertEqual(informations['Trophies']['Coppa Eva Duarte'], 1)
        self.assertEqual(informations['Trophies']['UEFA Champions League'], 14)
        self.assertEqual(informations['Trophies']['Europa League'], 2)
        self.assertEqual(informations['Trophies']['UEFA Super Cups'], 5)
        self.assertEqual(informations['Trophies']['Intercontinental Cups'], 3)
        self.assertEqual(informations['Trophies']['Clubs World Cup'], 4)
        self.assertEqual(informations['Trophies']['Latin Cup'], 2)
        self.assertEqual(informations['Trophies']['Coppa Iberoamericana'], 1)

        roaster = scraper3.get_team_roster()
        self.assertEqual(len(roaster), 23)

        self.assertEqual(roaster['Thibaut Courtois'].name, 'Thibaut Courtois')
        self.assertEqual(roaster['Thibaut Courtois'].number, '1')
        self.assertEqual(roaster['Thibaut Courtois'].position, 'P')

        self.assertEqual(roaster['David Alaba'].name, 'David Alaba')
        self.assertEqual(roaster['David Alaba'].number, '4')
        self.assertEqual(roaster['David Alaba'].position, 'D')

        self.assertEqual(roaster['Luka Modrić'].name, 'Luka Modrić')
        self.assertEqual(roaster['Luka Modrić'].number, '10')
        self.assertEqual(roaster['Luka Modrić'].position, 'C')

        self.assertEqual(roaster['Eden Hazard'].name, 'Eden Hazard')
        self.assertEqual(roaster['Eden Hazard'].number, '7')
        self.assertEqual(roaster['Eden Hazard'].position, 'A')

    def test_psg_endpoint(self):
        scraper4 = scraper.WikiScraper('https://fr.wikipedia.org/wiki/Paris_Saint-Germain_Football_Club')
        scraper4.scrape()
        name = scraper4.get_team_name()
        self.assertEqual(name, "Paris Saint-Germain Football Club")

        informations = scraper4.get_team_informations()
        self.assertEqual(informations['Website'], "www.psg.fr")
        self.assertEqual(informations['Stadium'], "Parco dei Principi")
        self.assertEqual(informations['Stadium_capacity'], "47929")
        self.assertEqual(informations['President'], "Nasser Al-Khelaïfi")
        self.assertEqual(informations['Manager'], "Christophe Galtier")
        self.assertEqual(informations['City'], "Parigi")
        self.assertEqual(informations['Championship'], "Ligue 1")
        self.assertEqual(informations['Foundation'], '1970')
        self.assertEqual(informations['Colors'], "Blu, rosso")
        self.assertEqual(informations['Trophies']['Ligue 1'], 10)
        self.assertEqual(informations['Trophies']['Coupe de France'], 14)
        self.assertEqual(informations['Trophies']['Coupe de la Ligue'], 9)
        self.assertEqual(informations['Trophies']['France Supercup'], 11)

        roaster = scraper4.get_team_roster()
        self.assertEqual(len(roaster), 23)

        self.assertEqual(roaster['Keylor Navas'].name, 'Keylor Navas')
        self.assertEqual(roaster['Keylor Navas'].number, '1')
        self.assertEqual(roaster['Keylor Navas'].position, 'P')

        self.assertEqual(roaster['Achraf Hakimi'].name, 'Achraf Hakimi')
        self.assertEqual(roaster['Achraf Hakimi'].number, '2')
        self.assertEqual(roaster['Achraf Hakimi'].position, 'D')

        self.assertEqual(roaster['Marco Verratti'].name, 'Marco Verratti')
        self.assertEqual(roaster['Marco Verratti'].number, '6')
        self.assertEqual(roaster['Marco Verratti'].position, 'C')

        self.assertEqual(roaster['Kylian Mbappé'].name, 'Kylian Mbappé')
        self.assertEqual(roaster['Kylian Mbappé'].number, '7')
        self.assertEqual(roaster['Kylian Mbappé'].position, 'A')
    
    def test_bayern_munchen_endpoint(self):
        scraper5 = scraper.WikiScraper('https://de.wikipedia.org/wiki/Fu%C3%9Fball-Club_Bayern_M%C3%BCnchen')
        scraper5.scrape()
        name = scraper5.get_team_name()
        self.assertEqual(name, "Fußball-Club Bayern München")

        informations = scraper5.get_team_informations()
        self.assertEqual(informations['Website'], "www.fcbayern.com")
        self.assertEqual(informations['Stadium'], "Allianz Arena")
        self.assertEqual(informations['Stadium_capacity'], "75024")
        self.assertEqual(informations['President'], "Herbert Hainer")
        self.assertEqual(informations['Manager'], "Julian Nagelsmann ")
        self.assertEqual(informations['City'], "Monaco di Baviera")
        self.assertEqual(informations['Championship'], "Bundesliga")
        self.assertEqual(informations['Foundation'], '1900')
        self.assertEqual(informations['Colors'], "Rosso, bianco, blu")
        self.assertEqual(informations['Trophies']['Bundesliga'], 32)
        self.assertEqual(informations['Trophies']['DFB-Polkal'], 20)
        self.assertEqual(informations['Trophies']['DFL-Supercups'], 10)
        self.assertEqual(informations['Trophies']['Coppa di Lega tedesca'], 6)
        self.assertEqual(informations['Trophies']['UEFA Champions League'], 6)
        self.assertEqual(informations['Trophies']['Europa League'], 1)
        self.assertEqual(informations['Trophies']['UEFA Super Cups'], 2)
        self.assertEqual(informations['Trophies']['Intercontinental Cups'], 2)
        self.assertEqual(informations['Trophies']['Clubs World Cup'], 2)

        roaster = scraper5.get_team_roster()
        self.assertEqual(len(roaster), 24)

        self.assertEqual(roaster['Manuel Neuer'].name, 'Manuel Neuer')
        self.assertEqual(roaster['Manuel Neuer'].number, '1')
        self.assertEqual(roaster['Manuel Neuer'].position, 'P')

        self.assertEqual(roaster['Matthijs de Ligt'].name, 'Matthijs de Ligt')
        self.assertEqual(roaster['Matthijs de Ligt'].number, '4')
        self.assertEqual(roaster['Matthijs de Ligt'].position, 'D')

        self.assertEqual(roaster['Leon Goretzka'].name, 'Leon Goretzka')
        self.assertEqual(roaster['Leon Goretzka'].number, '8')
        self.assertEqual(roaster['Leon Goretzka'].position, 'C')

        self.assertEqual(roaster['Leroy Sané'].name, 'Leroy Sané')
        self.assertEqual(roaster['Leroy Sané'].number, '10')
        self.assertEqual(roaster['Leroy Sané'].position, 'A')
        

if __name__ == '__main__':
    unittest.main()