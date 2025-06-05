export class SourceVerifier {
  verify(source: string): boolean {
    return source.startsWith('http');
  }
}
