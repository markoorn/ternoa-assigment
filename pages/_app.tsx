import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {

  return (<>
    {/* Referral Rock */}
    {/*<Script strategy="beforeInteractive" dangerouslySetInnerHTML={{*/}
    {/*  __html:  `window.referralJS = ((window.referralJS !== null && window.referralJS !== undefined) ? window.referralJS : {}); window.referralJS.scriptConfig = { parameters: { src: "//ziggy74773.referralrock.com/ReferralSdk/referral.js", transactionKey: "a03f7617-75a2-4e85-b5e4-56290cfd5da3" } }; (function(f,r,n,d,b,y){b=f.createElement(r),y=f.getElementsByTagName(r)[0];b.async=1;b.src=n+"?referrer="+encodeURIComponent(window.location.origin+window.location.pathname).replace(/[!'()*]/g,escape);b.id="RR_DIVID_V5";b.setAttribute("transactionKey",window.referralJS.scriptConfig.parameters.transactionKey);y.parentNode.insertBefore(b,y)})(document,"script",window.referralJS.scriptConfig.parameters.src);`*/}
    {/*}}  />*/}

    {/*<Script strategy="lazyOnload" dangerouslySetInnerHTML={{*/}
    {/*  __html:  `window.referralJS = ((window.referralJS !== null && window.referralJS !== undefined) ? window.referralJS : {});*/}
    {/*            var firstName = 'Mark';*/}
    {/*            var email = 'mark@referred2.xyz';*/}
    {/*            var externalIdentifier = '123456789';*/}
    {/*            var amount = 100;*/}
    {/*            */}
    {/*            window.referralJS.conversion = {*/}
    {/*                debug: "false",*/}
    {/*                parameters: {*/}
    {/*                    firstName: "Mark",*/}
    {/*                    email: "mark@referred2.xyz",*/}
    {/*                    externalIdentifier: "marktest1223",*/}
    {/*                    amount: 100*/}
    {/*                }*/}
    {/*            };`*/}
    {/*}}  />*/}
    {/*ReferralCandy*/}
    <Script strategy="lazyOnload" dangerouslySetInnerHTML={{
      __html:  `!function(d,s) {
                  var rc = "//go.referralcandy.com/purchase/n87f6burk9rbucnsefrxqepe0.js";
                  var js = d.createElement(s);
                  js.src = rc;
                  var fjs = d.getElementsByTagName(s)[0];
                  fjs.parentNode.insertBefore(js,fjs);
                }(document,"script");`
    }}  />
    <Component {...pageProps} />
  </>);
}

export default MyApp
