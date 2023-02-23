import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {

  return (<>
    <Script dangerouslySetInnerHTML={{
      __html:  `window.referralJS = ((window.referralJS !== null && window.referralJS !== undefined) ? window.referralJS : {}); window.referralJS.scriptConfig = { parameters: { src: "//ziggy74773.referralrock.com/ReferralSdk/referral.js", transactionKey: "a03f7617-75a2-4e85-b5e4-56290cfd5da3" } }; (function(f,r,n,d,b,y){b=f.createElement(r),y=f.getElementsByTagName(r)[0];b.async=1;b.src=n+"?referrer="+encodeURIComponent(window.location.origin+window.location.pathname).replace(/[!'()*]/g,escape);b.id="RR_DIVID_V5";b.setAttribute("transactionKey",window.referralJS.scriptConfig.parameters.transactionKey);y.parentNode.insertBefore(b,y)})(document,"script",window.referralJS.scriptConfig.parameters.src);`
    }}  />
    <Component {...pageProps} />
  </>);
}

export default MyApp
