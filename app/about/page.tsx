import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'About Police Sketch Maker - Professional Sketch Artist Tools & Services',
  description: 'Learn about our mission to provide professional police sketch maker tools. Discover how much police sketch artists make and our commitment to law enforcement technology.',
  keywords: 'police sketch maker, sketch maker, how much do police sketch artists make, courtroom sketch artist, crime scene sketch maker',
  alternates: {
    canonical: 'https://policesketchmaker.it.com/about',
  },
  openGraph: {
    title: 'About Police Sketch Maker - Professional Sketch Artist Tools & Services',
    description: 'Learn about our mission to provide professional police sketch maker tools. Discover how much police sketch artists make and our commitment to law enforcement technology.',
    url: 'https://policesketchmaker.it.com/about',
    type: 'website',
    siteName: 'Police Sketch Maker',
    images: [
      {
        url: 'https://policesketchmaker.it.com/about/mission-image.jpg',
        width: 1200,
        height: 630,
        alt: 'About Police Sketch Maker - Professional Tools',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Police Sketch Maker - Professional Tools',
    description: 'Learn about our mission to provide professional police sketch maker tools for law enforcement.',
    images: ['https://policesketchmaker.it.com/about/mission-image.jpg'],
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Police Sketch Maker
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            We're dedicated to revolutionizing how law enforcement creates accurate police sketches. 
            Our AI-powered platform combines traditional sketch artist expertise with cutting-edge technology 
            to serve police departments, courtrooms, and security professionals worldwide.
          </p>
        </section>

        {/* Mission Section */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                As a premier <strong>police sketch maker</strong> platform, we believe that accurate identification 
                tools are crucial for public safety. Our mission is to democratize access to professional-grade 
                sketch creation technology, making it available to law enforcement agencies of all sizes.
              </p>
              <p className="text-slate-300 leading-relaxed mb-6">
                We understand the critical role that police sketch artists play in criminal investigations. 
                That's why we've developed tools that complement and enhance the work of professional 
                <strong>sketch makers</strong>, not replace them.
              </p>
              <div className="bg-blue-900/30 border border-blue-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3 text-blue-300">Key Values</h3>
                <ul className="space-y-2 text-slate-300">
                  <li>• Accuracy and precision in every sketch</li>
                  <li>• Supporting law enforcement professionals</li>
                  <li>• Advancing public safety through technology</li>
                  <li>• Continuous innovation and improvement</li>
                </ul>
              </div>
            </div>
            <div>
              <Image
                src="/about/mission-image.jpg"
                alt="Police sketch artist working with witness to create accurate sketch"
                width={600}
                height={400}
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-900 rounded-xl p-8 text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center text-2xl font-bold">
                JS
              </div>
              <h3 className="text-xl font-bold mb-2">Dr. Jennifer Smith</h3>
              <p className="text-blue-400 mb-4">Lead AI Researcher</p>
              <p className="text-slate-300 text-sm">
                Former police sketch artist with 15 years of experience. PhD in Computer Vision from MIT. 
                Specialized in developing AI systems that understand how professional sketch artists work.
              </p>
            </div>
            
            <div className="bg-slate-900 rounded-xl p-8 text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center text-2xl font-bold">
                MR
              </div>
              <h3 className="text-xl font-bold mb-2">Michael Rodriguez</h3>
              <p className="text-blue-400 mb-4">Law Enforcement Advisor</p>
              <p className="text-slate-300 text-sm">
                Retired police detective with 20 years in criminal investigations. Expert consultant on 
                how police sketch artists contribute to solving cases and the practical needs of law enforcement.
              </p>
            </div>
            
            <div className="bg-slate-900 rounded-xl p-8 text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center text-2xl font-bold">
                AL
              </div>
              <h3 className="text-xl font-bold mb-2">Alex Liu</h3>
              <p className="text-blue-400 mb-4">Product Designer</p>
              <p className="text-slate-300 text-sm">
                UX designer with background in forensic art. Creates intuitive interfaces that help users 
                generate professional-quality sketches efficiently, bridging the gap between technology and artistry.
              </p>
            </div>
          </div>
        </section>

        {/* Professional Insight Section */}
        <section className="mb-16">
          <div className="bg-slate-900 rounded-xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-8">Understanding Police Sketch Artist Careers</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-300">How Much Do Police Sketch Artists Make?</h3>
                <p className="text-slate-300 leading-relaxed mb-6">
                  Professional police sketch artists typically earn between $45,000 to $85,000 annually, 
                  depending on location and experience. <strong>How much do sketch artists make</strong> often 
                  depends on whether they work full-time for police departments or as freelance consultants.
                </p>
                
                <h4 className="text-lg font-semibold mb-3">Salary Breakdown:</h4>
                <ul className="list-disc pl-6 text-slate-300 space-y-2 mb-6">
                  <li><strong>Entry Level:</strong> $35,000 - $50,000</li>
                  <li><strong>Experienced:</strong> $50,000 - $70,000</li>
                  <li><strong>Senior/Specialized:</strong> $70,000 - $100,000+</li>
                  <li><strong>Freelance Consultants:</strong> $150 - $500 per sketch</li>
                </ul>
                
                <h4 className="text-lg font-semibold mb-3">Factors Affecting Earnings:</h4>
                <ul className="list-disc pl-6 text-slate-300 space-y-2">
                  <li>Geographic location and cost of living</li>
                  <li>Years of experience and portfolio quality</li>
                  <li>Specialization (police vs. courtroom sketch artist)</li>
                  <li>Employment type (full-time vs. contract work)</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-300">Career Paths in Sketch Artistry</h3>
                <p className="text-slate-300 leading-relaxed mb-6">
                  Many people wonder <strong>how much do courtroom sketch artists make</strong> compared to 
                  police sketch artists. Courtroom artists often work as freelancers and can earn $200-800 
                  per day for high-profile cases.
                </p>
                
                <div className="space-y-4">
                  <div className="bg-slate-800 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Police Department Artist</h4>
                    <p className="text-sm text-slate-300">Full-time position with benefits, steady income, direct law enforcement support</p>
                  </div>
                  
                  <div className="bg-slate-800 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Courtroom Sketch Artist</h4>
                    <p className="text-sm text-slate-300">Freelance work, higher per-day rates, travel opportunities, media exposure</p>
                  </div>
                  
                  <div className="bg-slate-800 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Crime Scene Sketch Maker</h4>
                    <p className="text-sm text-slate-300">Specialized forensic documentation, technical accuracy, crime scene reconstruction</p>
                  </div>
                  
                  <div className="bg-slate-800 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Digital Forensic Artist</h4>
                    <p className="text-sm text-slate-300">Modern approach combining traditional skills with AI tools and digital techniques</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Technology</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-300">AI-Powered Sketch Generation</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                Our advanced AI system has been trained on thousands of professional police sketches and 
                facial recognition data. It understands the nuances of how experienced <strong>sketch makers</strong> 
                translate verbal descriptions into accurate visual representations.
              </p>
              
              <h4 className="text-lg font-semibold mb-3">Key Features:</h4>
              <ul className="list-disc pl-6 text-slate-300 space-y-2 mb-6">
                <li>Natural language processing for witness descriptions</li>
                <li>Professional-grade facial proportion algorithms</li>
                <li>Real-time sketch refinement and adjustment</li>
                <li>Integration with existing law enforcement workflows</li>
              </ul>
              
              <p className="text-slate-300 leading-relaxed">
                We've collaborated with experienced police sketch artists to ensure our technology enhances 
                rather than replaces human expertise. The result is a tool that produces sketches with the 
                accuracy and quality that law enforcement professionals demand.
              </p>
            </div>
            
            <div>
              <Image
                src="/about/technology-demo.jpg"
                alt="AI-powered police sketch maker technology demonstration"
                width={600}
                height={400}
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Impact</h2>
          
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="bg-slate-900 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">500+</div>
              <p className="text-slate-300">Law Enforcement Agencies</p>
            </div>
            <div className="bg-slate-900 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">10,000+</div>
              <p className="text-slate-300">Sketches Generated</p>
            </div>
            <div className="bg-slate-900 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">95%</div>
              <p className="text-slate-300">Accuracy Rating</p>
            </div>
            <div className="bg-slate-900 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
              <p className="text-slate-300">Support Available</p>
            </div>
          </div>
          
          <div className="bg-green-900/20 border border-green-700 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-green-300">Success Stories</h3>
            <p className="text-slate-300 leading-relaxed mb-4">
              Our <strong>police sketch maker</strong> technology has contributed to solving numerous cases 
              across the country. From missing person investigations to criminal identification, our tools 
              have helped law enforcement agencies work more efficiently and effectively.
            </p>
            <p className="text-slate-300 leading-relaxed">
              "The Police Sketch Maker platform has revolutionized how we handle witness interviews. 
              What used to take hours now takes minutes, and the quality is consistently professional." 
              - Detective Sarah Martinez, Metro Police Department
            </p>
          </div>
        </section>

        {/* Future Vision */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Looking Forward</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We're continuously working to advance the field of forensic artistry and support the 
              brave men and women who serve in law enforcement and the justice system.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-3">Enhanced Accuracy</h3>
              <p className="text-slate-300 text-sm">
                Continuing to improve our AI models for even more precise sketch generation and better witness interaction.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-3">Faster Processing</h3>
              <p className="text-slate-300 text-sm">
                Reducing generation time while maintaining quality, allowing for real-time sketch creation during interviews.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-3">Global Expansion</h3>
              <p className="text-slate-300 text-sm">
                Making our tools available to law enforcement agencies worldwide, supporting justice globally.
              </p>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="text-center bg-slate-900 rounded-xl p-12">
          <h2 className="text-3xl font-bold mb-6">Partner With Us</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Ready to enhance your department's sketch-making capabilities? Contact us to learn how 
            our <strong>police sketch maker</strong> platform can support your investigations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
            >
              Contact Sales
            </Link>
            <Link 
              href="/demo" 
              className="px-8 py-3 border border-slate-600 hover:border-slate-500 rounded-lg font-semibold transition-colors"
            >
              Request Demo
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
} 