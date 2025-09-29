import { Metadata } from 'next'
import Link from 'next/link'
import { Mail, MessageSquare, Phone, MapPin, Clock } from 'lucide-react'
import StructuredData from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Contact Us | PoliceSketchMaker - Professional Support & Assistance',
  description: 'Get in touch with PoliceSketchMaker for technical support, business inquiries, or professional assistance with AI-powered police sketch generation.',
  keywords: 'contact police sketch maker, technical support, customer service, business inquiries, professional assistance',
  openGraph: {
    title: 'Contact PoliceSketchMaker - Professional Support',
    description: 'Contact our team for technical support, business inquiries, or professional assistance with AI-powered sketch generation.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://policesketchmaker.it.com/contact'
  }
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact PoliceSketchMaker",
  "description": "Contact page for PoliceSketchMaker - Professional AI-powered police sketch generation service",
  "url": "https://policesketchmaker.it.com/contact",
  "mainEntity": {
    "@type": "Organization",
    "name": "PoliceSketchMaker",
    "email": "support@policesketchmaker.com",
    "url": "https://policesketchmaker.it.com",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "support@policesketchmaker.com",
      "availableLanguage": "English"
    }
  }
}

export default function ContactPage() {
  return (
    <>
      <StructuredData type="organization" data={structuredData} />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        {/* Header */}
        <header className="bg-black/20 backdrop-blur-sm border-b border-white/10">
          <div className="container mx-auto px-4 py-4">
            <Link href="/" className="text-white hover:text-blue-300 transition-colors">
              ← Back to Home
            </Link>
          </div>
        </header>

        <main className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Title Section */}
            <header className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Contact Us
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get in touch with our team for technical support, business inquiries, or professional assistance with AI-powered police sketch generation.
              </p>
            </header>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-600/20 p-3 rounded-lg">
                        <Mail className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Email Support</h3>
                        <p className="text-gray-300 mb-2">For technical support and general inquiries</p>
                        <a 
                          href="mailto:support@policesketchmaker.com"
                          className="text-blue-400 hover:text-blue-300 transition-colors"
                        >
                          support@policesketchmaker.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-green-600/20 p-3 rounded-lg">
                        <MessageSquare className="w-6 h-6 text-green-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Business Inquiries</h3>
                        <p className="text-gray-300 mb-2">Partnership opportunities and enterprise solutions</p>
                        <a 
                          href="mailto:business@policesketchmaker.com"
                          className="text-blue-400 hover:text-blue-300 transition-colors"
                        >
                          business@policesketchmaker.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-purple-600/20 p-3 rounded-lg">
                        <Clock className="w-6 h-6 text-purple-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Response Time</h3>
                        <p className="text-gray-300">We typically respond within 24 hours during business days</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Support Categories */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">How We Can Help</h2>
                  <div className="grid gap-4">
                    <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4">
                      <h3 className="text-lg font-semibold text-blue-300 mb-2">Technical Support</h3>
                      <p className="text-gray-300 text-sm">Issues with sketch generation, image uploads, or platform functionality</p>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4">
                      <h3 className="text-lg font-semibold text-green-300 mb-2">Professional Services</h3>
                      <p className="text-gray-300 text-sm">Custom solutions for law enforcement agencies and security professionals</p>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4">
                      <h3 className="text-lg font-semibold text-purple-300 mb-2">Partnership Opportunities</h3>
                      <p className="text-gray-300 text-sm">Business partnerships, integrations, and enterprise licensing</p>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4">
                      <h3 className="text-lg font-semibold text-orange-300 mb-2">Media & Press</h3>
                      <p className="text-gray-300 text-sm">Press inquiries, interviews, and media collaboration</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="" className="bg-gray-800">Select a subject</option>
                      <option value="technical" className="bg-gray-800">Technical Support</option>
                      <option value="business" className="bg-gray-800">Business Inquiry</option>
                      <option value="partnership" className="bg-gray-800">Partnership Opportunity</option>
                      <option value="media" className="bg-gray-800">Media & Press</option>
                      <option value="other" className="bg-gray-800">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
                      placeholder="Please describe your inquiry or issue in detail..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent"
                  >
                    Send Message
                  </button>

                  <p className="text-sm text-gray-400 text-center">
                    * Required fields. We'll respond to your inquiry within 24 hours.
                  </p>
                </form>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-16">
              <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-blue-300 mb-3">How do I get technical support?</h3>
                  <p className="text-gray-300">Send us an email at support@policesketchmaker.com with details about your issue. Include screenshots if possible.</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-blue-300 mb-3">Do you offer enterprise solutions?</h3>
                  <p className="text-gray-300">Yes, we provide custom solutions for law enforcement agencies and large organizations. Contact our business team for details.</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-blue-300 mb-3">Is the service free to use?</h3>
                  <p className="text-gray-300">We offer both free and premium features. Basic sketch generation is free, with advanced features available through our premium plans.</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-blue-300 mb-3">How accurate are the AI-generated sketches?</h3>
                  <p className="text-gray-300">Our AI achieves 95% accuracy rate and is used by over 500 law enforcement agencies worldwide. Results depend on the quality of input descriptions.</p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16 bg-blue-600/20 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-gray-300 mb-6">
                Try our AI-powered police sketch generator or explore our professional tools and resources.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Try Sketch Generator
                </Link>
                <Link 
                  href="/ai-image-describer" 
                  className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Try Image Describer
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
} 