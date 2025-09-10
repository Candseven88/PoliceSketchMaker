import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Police Sketch Maker Blog - How to Make Sketches & Learn Digital Art',
  description: 'Learn how to make sketch of face, create police sketches, and transform photos into professional sketches. Expert tips on sketch making techniques and digital art creation.',
  keywords: 'sketch maker, police sketch maker, how to make sketch of face, make picture sketch, photo sketch maker online, image sketch maker',
}

const blogPosts = [
  {
    id: 1,
    title: 'How to Make Sketch of Face: Complete Beginner\'s Guide',
    excerpt: 'Learn the essential techniques for creating realistic facial sketches, from understanding proportions to capturing unique features.',
    image: '/blog/face-sketch-guide.jpg',
    date: '2024-01-15',
    category: 'Tutorials',
    slug: 'how-to-make-sketch-of-face-complete-guide'
  },
  {
    id: 2,
    title: 'Make Picture into Sketch: Professional Photo to Sketch Conversion',
    excerpt: 'Discover easy methods to transform your photos into stunning sketches using both digital tools and traditional techniques.',
    image: '/blog/photo-to-sketch.jpg',
    date: '2024-01-12',
    category: 'Digital Art',
    slug: 'make-picture-into-sketch-professional-conversion'
  },
  {
    id: 3,
    title: 'Police Sketch Artist Careers: How Much Do They Make?',
    excerpt: 'Explore the career path of police sketch artists, including salary expectations, required skills, and how to become a professional sketch artist.',
    image: '/blog/police-sketch-career.jpg',
    date: '2024-01-10',
    category: 'Career Guide',
    slug: 'police-sketch-artist-careers-salary-guide'
  },
  {
    id: 4,
    title: 'Easy to Make Sketches: Quick Techniques for Beginners',
    excerpt: 'Simple and effective methods for creating beautiful sketches quickly, perfect for those just starting their artistic journey.',
    image: '/blog/easy-sketching.jpg',
    date: '2024-01-08',
    category: 'Beginner Tips',
    slug: 'easy-to-make-sketches-quick-techniques'
  },
  {
    id: 5,
    title: 'Crime Scene Sketch Maker: Tools and Techniques',
    excerpt: 'Professional guide to creating accurate crime scene sketches and understanding the tools used by law enforcement professionals.',
    image: '/blog/crime-scene-sketch.jpg',
    date: '2024-01-05',
    category: 'Professional',
    slug: 'crime-scene-sketch-maker-tools-techniques'
  },
  {
    id: 6,
    title: 'Make Photo into Sketch Free: Best Online Tools',
    excerpt: 'Comprehensive review of free online tools that can help you convert photos to sketches without any cost.',
    image: '/blog/free-photo-sketch.jpg',
    date: '2024-01-03',
    category: 'Tools Review',
    slug: 'make-photo-into-sketch-free-online-tools'
  }
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Sketch Maker Blog: Learn to Create Professional Sketches
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Master the art of sketch making with our comprehensive guides. Learn how to make sketch of face, 
            transform photos into sketches, and discover professional techniques used by police sketch artists.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-400">
            <span className="bg-slate-800 px-3 py-1 rounded-full">Police Sketch Maker</span>
            <span className="bg-slate-800 px-3 py-1 rounded-full">Photo Sketch Maker Online</span>
            <span className="bg-slate-800 px-3 py-1 rounded-full">Image Sketch Maker</span>
            <span className="bg-slate-800 px-3 py-1 rounded-full">Make Picture Sketch</span>
          </div>
        </section>

        {/* Featured Article */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Guide</h2>
          <div className="bg-slate-900 rounded-xl overflow-hidden shadow-2xl">
            <div className="md:flex">
              <div className="md:w-1/2">
                <Image
                  src="/blog/face-sketch-guide.jpg"
                  alt="How to make sketch of face - complete tutorial"
                  width={600}
                  height={400}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <span className="text-blue-400 text-sm font-semibold">FEATURED TUTORIAL</span>
                <h3 className="text-2xl font-bold mt-2 mb-4">
                  How to Make Sketch of Face: Complete Beginner's Guide
                </h3>
                <p className="text-slate-300 mb-6">
                  Learn professional techniques for creating realistic facial sketches. This comprehensive guide covers 
                  everything from basic proportions to advanced shading techniques that police sketch artists use.
                </p>
                <Link 
                  href="/blog/how-to-make-sketch-of-face-complete-guide"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
                >
                  Read Full Guide →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Popular Categories</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-900 p-6 rounded-xl text-center">
              <h3 className="text-xl font-bold mb-3">Sketch Making Tutorials</h3>
              <p className="text-slate-300 mb-4">Learn how to make sketches of people, faces, and scenes with step-by-step guides.</p>
              <span className="text-blue-400 text-sm">12 Articles</span>
            </div>
            <div className="bg-slate-900 p-6 rounded-xl text-center">
              <h3 className="text-xl font-bold mb-3">Digital Sketch Tools</h3>
              <p className="text-slate-300 mb-4">Discover the best photo sketch maker online tools and image sketch maker applications.</p>
              <span className="text-blue-400 text-sm">8 Articles</span>
            </div>
            <div className="bg-slate-900 p-6 rounded-xl text-center">
              <h3 className="text-xl font-bold mb-3">Professional Sketching</h3>
              <p className="text-slate-300 mb-4">Professional insights into police sketch making and courtroom sketch artist techniques.</p>
              <span className="text-blue-400 text-sm">6 Articles</span>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-slate-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-blue-400 text-sm font-semibold">{post.category}</span>
                    <span className="text-slate-400 text-sm">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 hover:text-blue-400 transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-slate-300 mb-4 line-clamp-3">{post.excerpt}</p>
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="text-blue-400 hover:text-blue-300 font-semibold text-sm transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* SEO Content Section */}
        <section className="mt-16 bg-slate-900 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6">Master the Art of Sketch Making</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">How to Make Sketch of Face</h3>
              <p className="text-slate-300 mb-4">
                Creating realistic facial sketches requires understanding of proportions, features, and shading techniques. 
                Our comprehensive guides show you how to make picture sketch from photos and develop your artistic skills.
              </p>
              <h3 className="text-xl font-semibold mb-4">Digital Sketch Making Tools</h3>
              <p className="text-slate-300">
                Discover the best image sketch maker online tools and photo sketch maker applications. Learn how to 
                make a picture into a sketch using professional software and free online platforms.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Professional Sketch Artists</h3>
              <p className="text-slate-300 mb-4">
                Learn about careers in police sketch making and courtroom sketching. Find out how much do sketch artists make 
                and what skills are required to become a professional crime scene sketch maker.
              </p>
              <h3 className="text-xl font-semibold mb-4">Easy Sketching Techniques</h3>
              <p className="text-slate-300">
                Start with easy to make sketches and gradually build your skills. Our tutorials cover everything from 
                basic drawing techniques to advanced methods for making photo into sketch professionally.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
} 