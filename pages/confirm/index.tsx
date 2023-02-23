import {NextPage} from "next";
import Home from "../index";
import Script from "next/script";
import {Head} from "next/head";

const Confirm: NextPage = () => {
    return (
        <div>
            {/*ReferralCandy*/}
          {/*  <div*/}
          {/*      id="refcandy-mint"*/}
          {/*      data-app-id="n87f6burk9rbucnsefrxqepe0"*/}
          {/*      data-fname="John"*/}
          {/*      data-lname="Smith"*/}
          {/*      data-email="mark@ziggy.xyz"*/}
          {/*      data-amount="10.99"*/}
          {/*      data-currency="USD"*/}
          {/*      data-timestamp="1677158359"*/}
          {/*      data-external-reference-id="93211001"*/}
          {/*      data-signature="87db17d499133c5331204be5d15122b3"*/}
          {/*  ></div>*/}
          {/*  <Script strategy="lazyOnload" dangerouslySetInnerHTML={{*/}
          {/*      __html:  `*/}
          {/*(function(e){var t,n,r,i,s,o,u,a,f,l,c,h,p,d,v;z="script";l="refcandy-purchase-js";c="refcandy-mint";p="go.referralcandy.com/purchase/";t="data-app-id";r={email:"a",fname:"b",lname:"c",amount:"d",currency:"e","accepts-marketing":"f",timestamp:"g","referral-code":"h",locale:"i","external-reference-id":"k",signature:"ab"};i=e.getElementsByTagName(z)[0];s=function(e,t){if(t){return""+e+"="+encodeURIComponent(t)}else{return""}};d=function(e){return""+p+h.getAttribute(t)+".js?aa=75&"};if(!e.getElementById(l)){h=e.getElementById(c);if(h){o=e.createElement(z);o.id=l;a=function(){var e;e=[];for(n in r){u=r[n];v=h.getAttribute("data-"+n);e.push(s(u,v))}return e}();o.src="//"+d(h.getAttribute(t))+a.join("&");return i.parentNode.insertBefore(o,i)}}})(document);`*/}
          {/*  }}  />*/}
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
            <p>Confirm!</p>
        </div>
    );
}

export default Confirm;
