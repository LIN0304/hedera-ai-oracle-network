export class WebScrapeFetcher {
  async scrape(url: string): Promise<string> {
    return 'scraped data from ' + url;
  }
}
