export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center relative">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Top left floating square */}
          <div className="absolute top-10 left-10 w-20 h-20 border-4 border-yellow-400 rotate-45 animate-pulse opacity-60 shadow-lg shadow-yellow-400/20"></div>

          {/* Top right bouncing diamond */}
          <div className="absolute top-40 right-20 w-16 h-16 border-4 border-orange-500 rotate-12 animate-bounce opacity-50 shadow-lg shadow-orange-500/20"></div>

          {/* Bottom left pulsing square */}
          <div className="absolute bottom-20 left-20 w-12 h-12 border-4 border-red-500 rotate-45 animate-pulse opacity-55 shadow-lg shadow-red-500/20"></div>

          {/* Bottom right spinning diamond */}
          <div className="absolute bottom-40 right-10 w-24 h-24 border-4 border-yellow-600 rotate-12 animate-spin opacity-40 shadow-lg shadow-yellow-600/20"></div>

          {/* Additional floating elements for more animation */}
          <div className="absolute top-1/3 left-1/4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-bounce opacity-30 blur-sm"></div>
          <div className="absolute top-2/3 right-1/3 w-6 h-6 bg-gradient-to-r from-red-500 to-pink-500 rounded-full animate-pulse opacity-40 blur-sm"></div>
          <div className="absolute top-1/2 left-1/2 w-10 h-10 border-2 border-dashed border-yellow-300 rounded-full animate-spin opacity-25"></div>

          {/* Floating particles */}
          <div className="absolute top-20 right-1/3 w-3 h-3 bg-yellow-400 rounded-full animate-ping opacity-60"></div>
          <div className="absolute bottom-32 left-1/3 w-2 h-2 bg-orange-500 rounded-full animate-ping opacity-50"></div>
          <div className="absolute top-1/2 right-20 w-4 h-4 bg-red-400 rounded-full animate-ping opacity-40"></div>
        </div>

        {/* Main content */}
        <div className="relative z-10 bg-black/60 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-yellow-500/30 shadow-2xl">
          {/* Construction helmet icon */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-yellow-500 rounded-full mb-4 animate-bounce">
              <svg
                className="w-12 h-12 text-black"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 1.74.6 3.34 1.61 4.61L12 22l5.39-8.39C18.4 12.34 19 10.74 19 9c0-3.87-3.13-7-7-7z" />
                <circle cx="12" cy="9" r="2" />
              </svg>
            </div>
          </div>

          {/* Warning tape design */}
          <div className="relative mb-8">
            <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-yellow-400 via-black to-yellow-400 opacity-80 transform -skew-y-1"></div>
            <div className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-yellow-400 via-black to-yellow-400 opacity-80 transform skew-y-1"></div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 py-6">
              <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                UNDER CONSTRUCTION
              </span>
            </h1>
          </div>

          {/* Studio name */}
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2">
              🎨 <span className="text-yellow-400">Tattoo Web Studio</span> 🎨
            </h2>
            <p className="text-gray-300 text-lg">
              Something incredible is being inked...
            </p>
          </div>

          {/* Construction details */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-800/50 rounded-lg p-4 border border-yellow-500/20">
              <div className="text-2xl mb-2">🏗️</div>
              <h3 className="text-yellow-400 font-semibold mb-1">Building</h3>
              <p className="text-gray-300 text-sm">
                Crafting the perfect experience
              </p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-4 border border-orange-500/20">
              <div className="text-2xl mb-2">⚡</div>
              <h3 className="text-orange-400 font-semibold mb-1">Designing</h3>
              <p className="text-gray-300 text-sm">Creating stunning visuals</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-4 border border-red-500/20">
              <div className="text-2xl mb-2">🎯</div>
              <h3 className="text-red-400 font-semibold mb-1">Testing</h3>
              <p className="text-gray-300 text-sm">
                Ensuring quality perfection
              </p>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-gray-400 mb-2">
              <span>Progress</span>
              <span>0%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
              <div
                className="bg-gradient-to-r from-yellow-400 to-orange-500 h-full rounded-full animate-pulse"
                style={{ width: "75%" }}
              ></div>
            </div>
          </div>

          {/* Contact info */}
          <div className="text-center">
            <p className="text-gray-300 mb-4">
              Have questions? We&apos;re working hard to bring you something
              amazing!
            </p>
            <div className="flex justify-center space-x-6 text-sm">
              <div className="flex items-center space-x-2 text-gray-400">
                <span>📧</span>
                <span>contact@idealhubstudio.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <span>📱</span>
                <span>Coming Soon</span>
              </div>
            </div>
          </div>

          {/* Animated tools */}
          <div className="mt-8 flex justify-center space-x-4 text-2xl">
            <span className="animate-spin">⚙️</span>
            <span className="animate-bounce delay-100">🔨</span>
            <span className="animate-pulse delay-200">🎨</span>
            <span className="animate-bounce delay-300">✨</span>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>&copy; 2025 Tattoo Web Studio. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
