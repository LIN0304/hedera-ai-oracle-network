export class APIFetcher {
  async fetch(url: string): Promise<string> {
    return 'data from ' + url;
  }
}
