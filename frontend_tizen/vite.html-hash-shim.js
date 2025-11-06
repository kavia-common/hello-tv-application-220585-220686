export default function htmlHashShim() {
  return {
    name: 'html-hash-shim',
    enforce: 'pre',
    transformIndexHtml(html) {
      // No-op transform to avoid triggering problematic hashing paths under older Node
      return html;
    },
  };
}
