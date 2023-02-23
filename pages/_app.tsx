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
    <div
        id="refcandy-mint"
        data-app-id="n87f6burk9rbucnsefrxqepe0"
        data-fname="John"
        data-lname="Smith"
        data-email="mark@ziggy.xyz"
        data-amount="10.99"
        data-currency="USD"
        data-timestamp="1677158359"
        data-external-reference-id="93211001"
        data-signature="87db17d499133c5331204be5d15122b3"
    ></div>
    <Script strategy="lazyOnload" dangerouslySetInnerHTML={{
      __html:  `
          (function(e){var t,n,r,i,s,o,u,a,f,l,c,h,p,d,v;z="script";l="refcandy-purchase-js";c="refcandy-mint";p="go.referralcandy.com/purchase/";t="data-app-id";r={email:"a",fname:"b",lname:"c",amount:"d",currency:"e","accepts-marketing":"f",timestamp:"g","referral-code":"h",locale:"i","external-reference-id":"k",signature:"ab"};i=e.getElementsByTagName(z)[0];s=function(e,t){if(t){return""+e+"="+encodeURIComponent(t)}else{return""}};d=function(e){return""+p+h.getAttribute(t)+".js?aa=75&"};if(!e.getElementById(l)){h=e.getElementById(c);if(h){o=e.createElement(z);o.id=l;a=function(){var e;e=[];for(n in r){u=r[n];v=h.getAttribute("data-"+n);e.push(s(u,v))}return e}();o.src="//"+d(h.getAttribute(t))+a.join("&");return i.parentNode.insertBefore(o,i)}}})(document);`
    }}  />
    <Component {...pageProps} />
  </>);
}

export default MyApp
