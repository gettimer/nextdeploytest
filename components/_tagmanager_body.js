import Document, { Html, Head, Main, NextScript } from 'next/document'
class TagManagerBody extends Document {
  render() {
    return (
        <script dangerouslySetInnerHTML={{ __html: `<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K5JV82G"
        height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>`}}></script>
    )
  }
}
export default TagManagerBody