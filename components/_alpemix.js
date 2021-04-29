import Document, { Html, Head, Main, NextScript } from 'next/document'
class Alpemix extends Document {
  render() {
    return (
        <script dangerouslySetInnerHTML={{ __html: `window.$alpemixweb ||( window.$alpemixweb=function()
{
  var e = document.createElement( "script" );
  var Departman = "";
  var Param1 = "";
  var Param2 = "";
  e.type="text/javascript", e.src='https://www.alpemix.com/webc/js/index.js?FirmaAdi=TERAPIYAZILIM&Departman='+ Departman + '&Param1=' + Param1 + '&Param2=' + Param2 + '&t=' + new Date(), e.async=!0;
  var h = document.getElementsByTagName( "head" )[0];
  h.insertBefore( e,h.firstChild )
} )();`}}></script>
    )
  }
}
export default Alpemix