import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service - PoliceSketchMaker',
  description: 'Terms of service and user agreement for PoliceSketchMaker AI-powered police sketch generation tool.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://policesketchmaker.it.com/terms'
  }
}

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="text-white hover:text-blue-300 transition-colors">
            ← Back to Home
          </Link>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
        <div className="text-slate-300 space-y-6 leading-relaxed">
          
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
            <p className="mb-4">
              By accessing and using PoliceSketchMaker ("the Service"), you accept and agree to be bound by the terms 
              and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
            <p>
              These Terms of Service ("Terms") govern your use of our website located at policesketchmaker.it.com 
              (the "Service") operated by PoliceSketchMaker ("us", "we", or "our").
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Description of Service</h2>
            <p className="mb-4">
              PoliceSketchMaker provides AI-powered police sketch generation services, including:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
              <li>AI-generated police sketches from text descriptions</li>
              <li>Image-to-sketch conversion tools</li>
              <li>Professional sketch enhancement features</li>
              <li>Educational resources about police sketch artistry</li>
              <li>Professional services for law enforcement agencies</li>
            </ul>
            <p>
              Our service is intended for legitimate law enforcement, security, educational, and artistic purposes only.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. User Responsibilities and Acceptable Use</h2>
            <h3 className="text-xl font-semibold text-blue-300 mb-3">You agree to use our service only for lawful purposes and in accordance with these Terms.</h3>
            
            <h4 className="text-lg font-semibold text-blue-200 mb-2">Prohibited Uses:</h4>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
              <li>Creating sketches for harassment, stalking, or intimidation</li>
              <li>Generating false or misleading identification materials</li>
              <li>Using the service to violate any local, state, national, or international law</li>
              <li>Uploading copyrighted images without permission</li>
              <li>Creating sketches of minors without proper authorization</li>
              <li>Using the service for any commercial purpose without our written consent</li>
              <li>Attempting to reverse engineer or copy our AI technology</li>
            </ul>

            <h4 className="text-lg font-semibold text-blue-200 mb-2">User Conduct:</h4>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>You must be at least 18 years old to use this service</li>
              <li>You are responsible for maintaining the confidentiality of your account</li>
              <li>You agree to provide accurate and complete information</li>
              <li>You will not share your account credentials with others</li>
              <li>You will respect the intellectual property rights of others</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Intellectual Property Rights</h2>
            <h3 className="text-xl font-semibold text-blue-300 mb-3">Our Content</h3>
            <p className="mb-4">
              The Service and its original content, features, and functionality are and will remain the exclusive 
              property of PoliceSketchMaker and its licensors. The service is protected by copyright, trademark, 
              and other laws.
            </p>

            <h3 className="text-xl font-semibold text-blue-300 mb-3">User-Generated Content</h3>
            <p className="mb-4">
              You retain ownership of any images you upload to our service. However, by uploading content, you grant us 
              a limited, non-exclusive, royalty-free license to process your content for the purpose of providing our services.
            </p>
            
            <h3 className="text-xl font-semibold text-blue-300 mb-3">Generated Sketches</h3>
            <p>
              You own the sketches generated through our service, subject to these Terms. However, you may not use 
              generated sketches in ways that violate these Terms or applicable laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Privacy and Data Protection</h2>
            <p className="mb-4">
              Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your 
              information when you use our Service. By using our Service, you agree to the collection and use of 
              information in accordance with our Privacy Policy.
            </p>
            <p className="mb-4">
              We implement appropriate security measures to protect your personal information. However, no method of 
              transmission over the Internet or electronic storage is 100% secure.
            </p>
            <p>
              We do not permanently store uploaded images. All image data is processed temporarily and deleted after 
              sketch generation is complete.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Payment Terms and Refunds</h2>
            <h3 className="text-xl font-semibold text-blue-300 mb-3">Free Services</h3>
            <p className="mb-4">
              Basic sketch generation features are provided free of charge, supported by advertising revenue.
            </p>

            <h3 className="text-xl font-semibold text-blue-300 mb-3">Premium Services</h3>
            <p className="mb-4">
              Premium features and professional services are available for a fee. All fees are non-refundable unless 
              otherwise specified or required by law.
            </p>

            <h3 className="text-xl font-semibold text-blue-300 mb-3">Third-Party Payments</h3>
            <p>
              We use third-party payment processors (such as PayPal) to handle transactions. By making a payment, 
              you agree to the terms and conditions of our payment processors.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Disclaimers and Limitations of Liability</h2>
            <h3 className="text-xl font-semibold text-blue-300 mb-3">Service Availability</h3>
            <p className="mb-4">
              We strive to maintain service availability but do not guarantee uninterrupted access. The service is 
              provided "as is" without warranties of any kind.
            </p>

            <h3 className="text-xl font-semibold text-blue-300 mb-3">Accuracy Disclaimer</h3>
            <p className="mb-4">
              While our AI technology achieves high accuracy rates, we cannot guarantee that generated sketches will 
              be 100% accurate or suitable for all purposes. Users should verify and validate results independently.
            </p>

            <h3 className="text-xl font-semibold text-blue-300 mb-3">Limitation of Liability</h3>
            <p>
              To the maximum extent permitted by law, PoliceSketchMaker shall not be liable for any indirect, 
              incidental, special, consequential, or punitive damages, or any loss of profits or revenues.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Advertising and Third-Party Content</h2>
            <p className="mb-4">
              Our service displays advertisements from third-party networks, including Google AdSense. We are not 
              responsible for the content of these advertisements or the practices of advertisers.
            </p>
            <p className="mb-4">
              Third-party advertisers may use cookies and tracking technologies. Please refer to our Privacy Policy 
              for more information about how we handle advertising-related data.
            </p>
            <p>
              We reserve the right to refuse, modify, or remove any advertisement at our discretion.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Termination</h2>
            <p className="mb-4">
              We may terminate or suspend your access immediately, without prior notice or liability, for any reason 
              whatsoever, including without limitation if you breach the Terms.
            </p>
            <p className="mb-4">
              Upon termination, your right to use the Service will cease immediately. All provisions of the Terms 
              which by their nature should survive termination shall survive termination.
            </p>
            <p>
              You may terminate your use of our service at any time by discontinuing use of the website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. Changes to Terms</h2>
            <p className="mb-4">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a 
              revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
            </p>
            <p>
              What constitutes a material change will be determined at our sole discretion. By continuing to access 
              or use our Service after those revisions become effective, you agree to be bound by the revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">11. Governing Law</h2>
            <p className="mb-4">
              These Terms shall be interpreted and governed by the laws of the jurisdiction in which our company is 
              incorporated, without regard to its conflict of law provisions.
            </p>
            <p>
              Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">12. Contact Information</h2>
            <p className="mb-4">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <div className="bg-slate-900 rounded-lg p-4">
              <p className="mb-2">
                <strong>Email:</strong>{" "}
                <a href="mailto:legal@policesketchmaker.com" className="text-blue-400 hover:underline">
                  legal@policesketchmaker.com
                </a>
              </p>
              <p className="mb-2">
                <strong>General Support:</strong>{" "}
                <a href="mailto:support@policesketchmaker.com" className="text-blue-400 hover:underline">
                  support@policesketchmaker.com
                </a>
              </p>
              <p>
                <strong>Website:</strong>{" "}
                <a href="https://policesketchmaker.it.com" className="text-blue-400 hover:underline">
                  https://policesketchmaker.it.com
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">13. Effective Date</h2>
            <p className="text-slate-400">
              <strong>Last updated:</strong> {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
            <p className="mt-4 text-slate-400">
              These Terms of Service are effective as of the date last updated and will remain in effect except 
              with respect to any changes in its provisions in the future, which will be in effect immediately 
              after being posted on this page.
            </p>
          </section>

        </div>
      </div>
    </div>
  )
} 
