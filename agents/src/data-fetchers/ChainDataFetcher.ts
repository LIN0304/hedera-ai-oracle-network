export class ChainDataFetcher {
  async getData(address: string): Promise<string> {
    return 'chain data from ' + address;
  }
}
