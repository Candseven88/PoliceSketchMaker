'use client'

import { Toaster } from 'react-hot-toast'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AnimatedBackground from '@/components/AnimatedBackground'
import MonkeyIdentifier from '@/components/MonkeyIdentifier'
import GoogleAdSense from '@/components/GoogleAdSense'
import AdsterraAd from '@/components/AdsterraAd'
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-slate-700 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-800/50 transition-colors"
      >
        <span className="text-white font-medium pr-4">{question}</span>
        {open ? <ChevronUp className="w-5 h-5 text-amber-400 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />}
      </button>
      {open && (
        <div className="px-5 pb-5 text-slate-300 leading-relaxed border-t border-slate-700/50 pt-4">
          {answer}
        </div>
      )}
    </div>
  )
}

export default function PunchTheMonkeyPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <Toaster
        position="top-center"
        toastOptions={{
          style: { background: '#1e293b', color: '#f8fafc', border: '1px solid #334155' },
        }}
      />
      <Header />

      <main>
        {/* Hero */}
        <AnimatedBackground variant="hero" className="pt-32 pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-amber-500/30">
              <span>🐒</span>
              <span>INSPIRED BY PUNCH&apos;S STORY</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-amber-300 via-orange-400 to-amber-500 bg-clip-text text-transparent">
                Punch the Monkey
              </span>
              <span className="block text-white text-2xl md:text-3xl mt-3">
                AI Primate Species Identifier
              </span>
            </h1>

            <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-4">
              Millions fell in love with Punch, the baby Japanese macaque who captured hearts worldwide
              with his stuffed orangutan companion. We built this free tool so you can explore the
              incredible diversity of primates — upload any photo and let AI tell you what species it is.
            </p>

            <p className="text-sm text-slate-500 max-w-xl mx-auto mb-10">
              This is an unofficial fan project. We are not affiliated with Ichikawa City Zoo,
              its staff, or any official Punch-related organizations.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400 mb-12">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                100% Free
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                No Sign-up Required
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                Educational &amp; Animal-Friendly
              </div>
            </div>
          </div>
        </AnimatedBackground>

        {/* Identifier Tool */}
        <section className="py-16 bg-slate-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-white mb-3">Upload a Photo</h2>
              <p className="text-slate-400">
                Got a monkey pic? A zoo selfie? Even your cat? Drop it in and see what our AI thinks.
              </p>
            </div>
            <MonkeyIdentifier />
          </div>
        </section>

        {/* Ad break */}
        <div className="py-6 bg-slate-950/50">
          <div className="max-w-4xl mx-auto px-4">
            <GoogleAdSense size="medium" className="mb-4" />
            <AdsterraAd size="medium" adType="banner" className="mt-4" />
          </div>
        </div>

        {/* Punch's Story — original writing, factual */}
        <AnimatedBackground variant="dark" className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">The Story Behind the Name</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                A tiny macaque, a plush orangutan, and a wave of global compassion.
              </p>
            </div>

            <div className="space-y-8 text-slate-300 leading-relaxed">
              <div className="bg-slate-800/60 rounded-2xl p-6 border border-slate-700/50">
                <h3 className="text-xl font-semibold text-amber-400 mb-3">Who Is Punch?</h3>
                <p>
                  Punch is a Japanese macaque (<em>Macaca fuscata</em>) born in July 2025 at Ichikawa City Zoo
                  in Chiba Prefecture, Japan. Shortly after birth, his mother stopped caring for him — zoo
                  staff believe extreme summer heat may have played a role. A zookeeper named Kosuke Shikano
                  stepped in, providing round-the-clock bottle feeding and keeping the infant warm against
                  his chest.
                </p>
              </div>

              <div className="bg-slate-800/60 rounded-2xl p-6 border border-slate-700/50">
                <h3 className="text-xl font-semibold text-amber-400 mb-3">The Stuffed Orangutan</h3>
                <p>
                  Keepers tried various comfort objects — towels, blankets, different plush toys — before
                  discovering that a stuffed IKEA orangutan worked best. Its long fur and primate-like shape
                  gave Punch something to grip, mimicking the way infant macaques cling to their mothers.
                  The toy became inseparable from Punch, and footage of the tiny monkey dragging around a
                  plush bigger than himself went viral in early 2026, racking up tens of millions of views
                  across social media platforms.
                </p>
              </div>

              <div className="bg-slate-800/60 rounded-2xl p-6 border border-slate-700/50">
                <h3 className="text-xl font-semibold text-amber-400 mb-3">Why It Matters</h3>
                <p>
                  Beyond the heartwarming clips, Punch&apos;s story highlights real challenges in primate care:
                  maternal rejection, hand-rearing risks, and the delicate process of reintroducing a
                  hand-raised infant into a social troop with strict hierarchies. Recent reports suggest
                  other macaques have begun grooming and sitting with Punch — encouraging signs of social
                  acceptance. The zoo has asked supporters to cheer for Punch&apos;s resilience rather than
                  feel sorry for him.
                </p>
              </div>

              <div className="bg-amber-500/10 rounded-2xl p-6 border border-amber-500/20">
                <h3 className="text-xl font-semibold text-amber-300 mb-3">About Japanese Macaques</h3>
                <p className="text-amber-200/80">
                  Japanese macaques are the world&apos;s northernmost non-human primates, found across the
                  Japanese archipelago. They&apos;re famous for bathing in hot springs during winter — earning
                  them the nickname &quot;snow monkeys.&quot; They live in matrilineal troops of 20–100 individuals
                  and have complex social structures with clear dominance hierarchies. Their conservation
                  status is currently listed as Least Concern by the IUCN, though habitat fragmentation
                  remains an ongoing challenge.
                </p>
              </div>
            </div>
          </div>
        </AnimatedBackground>

        {/* FAQ */}
        <section className="py-20 bg-slate-900">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
            <div className="space-y-3">
              <FAQItem
                question="Is this website affiliated with Ichikawa City Zoo or any official Punch organization?"
                answer="No. This is an independent, unofficial fan project inspired by Punch's story. We have no connection to Ichikawa City Zoo, its staff, The Punch Foundation, or any official entity. We're just developers who love primates and wanted to build something fun and educational."
              />
              <FAQItem
                question="How does the AI primate identifier work?"
                answer="Upload any photo and our AI vision model analyzes it to determine whether it contains a primate. If it does, the tool identifies the likely species, provides the scientific name, conservation status, natural habitat, and a few fun facts. It's powered by the same AI technology we use across our other tools."
              />
              <FAQItem
                question="What species is Punch?"
                answer="Punch is a Japanese macaque (Macaca fuscata), also known as a snow monkey. They're native to Japan and are the northernmost-living non-human primates on Earth. They're well known for their habit of soaking in natural hot springs during cold weather."
              />
              <FAQItem
                question="Is my uploaded photo stored or shared?"
                answer="No. Your photo is sent to our AI model for analysis and is not stored on our servers. We don't share, sell, or retain any images you upload. Once the analysis is complete, the image data is discarded."
              />
              <FAQItem
                question="Can I use this tool for any animal, not just monkeys?"
                answer="You can upload any image! If it's not a primate, the AI will let you know with a friendly message and suggest trying a monkey photo instead. It's specifically trained to identify primate species, so results are most accurate for monkeys and apes."
              />
              <FAQItem
                question="How can I support Punch and primate welfare?"
                answer="If you'd like to support Punch directly, consider visiting Ichikawa City Zoo's official channels for donation information. For broader primate conservation, organizations like the IUCN Primate Specialist Group and the Jane Goodall Institute do important work worldwide."
              />
            </div>
          </div>
        </section>

        {/* Disclaimer footer */}
        <div className="py-8 bg-slate-950 border-t border-slate-800">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <p className="text-xs text-slate-500 leading-relaxed">
              This page is an unofficial, independently created tribute inspired by the story of Punch the
              Japanese macaque. All factual information is sourced from publicly available news reports
              (Reuters, BBC, The Japan Times). We are not affiliated with, endorsed by, or connected to
              Ichikawa City Zoo, its staff, IKEA, The Punch Foundation, or any related entity. &quot;Punch the
              Monkey&quot; is used here in a descriptive, editorial context. All trademarks belong to their
              respective owners. We advocate for ethical treatment of all animals and encourage supporting
              accredited zoos and conservation organizations.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
