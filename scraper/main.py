import scraper 

if __name__ == '__main__':
    
    scraper4 = scraper.WikiScraper('https://fr.wikipedia.org/wiki/Paris_Saint-Germain_Football_Club')
    scraper4.scrape()
    roaster = scraper4.get_team_roster()