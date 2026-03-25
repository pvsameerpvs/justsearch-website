"use client";

import Script from "next/script";

export function GoogleReviews() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">What Our Clients Say</h2>
        
        {/* Load the Elfsight script using Next.js optimized Script component */}
        <Script src="https://elfsightcdn.com/platform.js" strategy="afterInteractive" />
        
        {/* The target div where your Elfsight Widget will appear */}
        <div 
          className="elfsight-app-18b69258-e4da-4ecf-9e8e-aaf37a351cae" 
          data-elfsight-app-lazy
        ></div>
      </div>
    </section>
  );
}
