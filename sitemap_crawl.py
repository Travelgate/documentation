# THIS SCRIPT IS USED TO CRAWL THE SITEMAP AND GET THE TITLE AND DESCRIPTION OF THE PAGES
# LATER TO BE USED FOR SEO PURPOSES AND FOR ALNA BOT
import requests
from datetime import datetime
from bs4 import BeautifulSoup
import csv

EXCLUDE = [
    'docs.travelgate.com/markdown-page',
    #'docs.travelgate.com/api'
]

SITEMAP_URL = 'https://docs.travelgate.com/sitemap.xml'

def text_in_exclude_list(text):
    for exclude in EXCLUDE:
        if exclude in text:
            return True
    return False

def read_sitemap(url):
    response = requests.get(url)
    sitemap = BeautifulSoup(response.content, 'xml')
    urls = [loc.text for loc in sitemap.find_all('loc') if not text_in_exclude_list(loc.text)]
    return urls

def save_to_csv(data, filename='sitemap_titles.csv'):
    with open(filename, 'w', newline='', encoding='utf-8') as file:
        writer = csv.writer(file)
        writer.writerow(['Page Title', 'Page description' 'URL'])
        writer.writerows(data)

def get_page_details(url):
    response = requests.get(url)
    soup = BeautifulSoup(response.content, 'html.parser')
    title = soup.title.string if soup.title else 'No Title'
    description_meta = soup.find('meta', attrs={'name': 'description'})
    description = description_meta['content'] if description_meta else 'No Description'
    return title, description

def save_to_text(data, filename='sitemap_details.txt'):
    with open(filename, 'w', encoding='utf-8') as file:
        for url, title, description in data:
            file.write(f'{url}: {title}\n{description}\n\n')

def main(sitemap_url):
    urls = read_sitemap(sitemap_url)
    url_details_list = []
    for url in urls:
        title, description = get_page_details(url)
        url_details_list.append((url, title, description))
    save_to_text(url_details_list)


if __name__ == '__main__':
    print(f'Crawling sitemap started at: {datetime.now()}')
    main(SITEMAP_URL)
    print(f'Crawling sitemap finished at: {datetime.now()}')
