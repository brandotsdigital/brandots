import Head from "next/head";

export default function TermsAndConditions() {
  return (
    <>
      <Head>
        <title>Terms & Conditions | BRANDOTSS TECHNOLOGIES PVT LTD</title>
        <meta name="description" content="Read the terms and conditions for using the services and website of BRANDOTSS TECHNOLOGIES PVT LTD, in accordance with Razorpay standards." />
      </Head>
      <main className="container mx-auto px-4 py-10 text-white">
        <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>
        <p className="mb-4">These Terms & Conditions govern your use of the website and services provided by BRANDOTSS TECHNOLOGIES PVT LTD ("we", "us", or "our"). By accessing or using our website, you agree to these terms.</p>
        <h2 className="text-xl font-semibold mt-6 mb-2">Service Use</h2>
        <p className="mb-4">You agree to use our services lawfully and not to engage in any activity that may harm our company or other users.</p>
        <h2 className="text-xl font-semibold mt-6 mb-2">Payments</h2>
        <p className="mb-4">Payments are processed securely via Razorpay. You agree to provide accurate payment information and comply with all payment terms.</p>
        <h2 className="text-xl font-semibold mt-6 mb-2">Intellectual Property</h2>
        <p className="mb-4">All content, trademarks, and intellectual property on this website are owned by BRANDOTSS TECHNOLOGIES PVT LTD unless otherwise stated.</p>
        <h2 className="text-xl font-semibold mt-6 mb-2">Limitation of Liability</h2>
        <p className="mb-4">We are not liable for any indirect, incidental, or consequential damages arising from your use of our services.</p>
        <h2 className="text-xl font-semibold mt-6 mb-2">Changes to Terms</h2>
        <p className="mb-4">We may update these terms at any time. Continued use of our website constitutes acceptance of the revised terms.</p>
        <h2 className="text-xl font-semibold mt-6 mb-2">Contact</h2>
        <p className="mb-4">For questions about these terms, contact us at info@brandots.in.</p>
      </main>
    </>
  );
}
