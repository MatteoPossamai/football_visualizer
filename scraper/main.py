import scraper 

if __name__ == '__main__':
    
    scraper4 = scraper.WikiScraper('https://it.wikipedia.org/wiki/Juventus_Football_Club')
    scraper4.scrape()
    info = scraper4.get_team_informations()
    print(info)