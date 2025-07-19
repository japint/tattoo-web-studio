"use client";

import { FloatingActionButton } from "@/components/business";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-gold-400 mb-8">
          About Ink Rebellion
        </h1>
        <div className="space-y-6 text-gray-300">
          <p className="text-lg">
            Welcome to Ink Rebellion, where artistry meets rebellion. Our studio
            is a sanctuary for those who dare to express their individuality
            through the ancient art of tattooing.
          </p>

          <p>
            Founded by passionate artists who believe that every tattoo tells a
            story, we specialize in creating custom designs that reflect your
            unique journey, personality, and vision.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="glass-effect p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gold-400 mb-4">
                Our Mission
              </h3>
              <p>
                To provide exceptional tattoo artistry in a safe, clean, and
                welcoming environment while helping our clients express their
                authentic selves.
              </p>
            </div>

            <div className="glass-effect p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gold-400 mb-4">
                Our Values
              </h3>
              <ul className="space-y-2">
                <li>• Artistic Excellence</li>
                <li>• Client Safety & Comfort</li>
                <li>• Creative Collaboration</li>
                <li>• Professional Standards</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 p-8 bg-gradient-to-r from-gold-400/10 to-red-500/10 rounded-lg border border-gold-400/30">
            <h3 className="text-2xl font-bold text-gold-400 mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="mb-4">
              The floating action button (FAB) on this page allows you to
              quickly book a consultation or contact us. It&apos;s available on
              every page of our website for your convenience.
            </p>
            <p className="text-sm text-gray-400">
              Notice the &quot;BOOK NOW&quot; button in the bottom-right corner?
              That&apos;s your direct line to scheduling your next tattoo
              session!
            </p>
          </div>
        </div>
      </div>

      <FloatingActionButton />
    </div>
  );
}
