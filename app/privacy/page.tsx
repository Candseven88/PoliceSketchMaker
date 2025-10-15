import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - PoliceSketchMaker',
  description: 'Privacy policy for PoliceSketchMaker AI-powered police sketch generation tool.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
        <div className="text-slate-300 space-y-6 leading-relaxed">
          
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
            <p className="mb-4">
              PoliceSketchMaker is committed to protecting your privacy. We collect minimal information necessary 
              to provide our AI-powered police sketch generation services and to improve user experience.
            </p>
            
            <h3 className="text-xl font-semibold text-blue-300 mb-3">Information You Provide</h3>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
              <li>Images uploaded for sketch generation</li>
              <li>Text descriptions and prompts</li>
              <li>Contact information when you reach out to us</li>
              <li>Feedback and survey responses</li>
            </ul>

            <h3 className="text-xl font-semibold text-blue-300 mb-3">Information Automatically Collected</h3>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
              <li>IP address and geographic location</li>
              <li>Browser type, version, and operating system</li>
              <li>Device information and screen resolution</li>
              <li>Pages visited, time spent, and click patterns</li>
              <li>Referring websites and search terms</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>

            <h3 className="text-xl font-semibold text-blue-300 mb-3">How We Use Your Information</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>To provide and improve our sketch generation services</li>
              <li>To personalize your experience and show relevant content</li>
              <li>To display targeted advertisements through Google AdSense</li>
              <li>To analyze website usage and optimize performance</li>
              <li>To communicate with you about our services</li>
              <li>To comply with legal obligations and protect our rights</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Image Processing</h2>
            <p>
              Images uploaded to our platform are processed temporarily to generate police sketches. 
              We do not store your uploaded images on our servers permanently. All image data is processed 
              securely and deleted after the sketch generation is complete.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Advertising and Third-Party Services</h2>
            <p className="mb-4">
              Our website displays advertisements provided by third-party advertising networks, including Google AdSense and ADSTERRA. 
              These advertisements help us maintain our free services and continue improving our AI-powered police sketch generation tools.
            </p>
            
            <h3 className="text-xl font-semibold text-blue-300 mb-3">Google AdSense</h3>
            <p className="mb-3">
              We use Google AdSense to display relevant advertisements on our website. Google AdSense may collect and use information about your visits to this and other websites to provide advertisements about goods and services of interest to you.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
              <li>Google uses cookies to serve ads based on your prior visits to our website or other websites</li>
              <li>Google's use of advertising cookies enables it and its partners to serve ads based on your visit to our sites and/or other sites on the Internet</li>
              <li>You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Google Ads Settings</a></li>
              <li>You can also opt out of a third-party vendor's use of cookies for personalized advertising by visiting <a href="http://www.aboutads.info/choices/" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">www.aboutads.info</a></li>
            </ul>

            <h3 className="text-xl font-semibold text-blue-300 mb-3">Other Advertising Partners</h3>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
              <li>Advertisements are clearly marked as "Sponsored" or "Ad"</li>
              <li>Third-party advertisers may use cookies and tracking technologies</li>
              <li>We do not control the privacy practices of third-party advertisers</li>
              <li>You can opt out of personalized advertising through your browser settings</li>
            </ul>

            <h3 className="text-xl font-semibold text-blue-300 mb-3">Cookie Consent</h3>
            <p className="mb-3">
              By using our website, you consent to the use of cookies by Google AdSense and our other advertising partners in accordance with our Cookie Policy. 
              If you do not consent to the use of these cookies, please disable them in your browser settings or leave our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Analytics and Tracking</h2>
            <p>
              We use Google Analytics and Microsoft Clarity to understand how visitors use our website. 
              This helps us improve our services and user experience. These services may collect:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
              <li>IP address and location information</li>
              <li>Browser type and version</li>
              <li>Pages visited and time spent on site</li>
              <li>Referring websites and search terms</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Cookies</h2>
            <p>
              We use cookies to enhance your browsing experience and for analytics purposes. 
              You can disable cookies in your browser settings, though this may affect website functionality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
            <p>
              We implement appropriate security measures to protect your information against unauthorized access, 
              alteration, disclosure, or destruction. However, no internet transmission is completely secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at:{" "}
              <a href="mailto:support@policesketchmaker.com" className="text-blue-400 hover:underline">
                support@policesketchmaker.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Updates to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify users of any material changes 
              by posting the new Privacy Policy on this page with an updated effective date.
            </p>
            <p className="mt-4 text-slate-400">
              <strong>Last updated:</strong> {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </section>

        </div>
      </div>
    </div>
  )
} 