import Script from "next/script";

export default function GA() {
  return (
    <div>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-V9C8G57R1D"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
         window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());
         
         gtag('config', 'G-V9C8G57R1D');
         `}
      </Script>
    </div>
  );
}
