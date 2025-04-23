import { Film } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 flex items-center">
          <Film className="mr-2 text-blue-600 dark:text-blue-400" />
          <span className="bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300 text-transparent bg-clip-text">
            About Movie Downloader
          </span>
        </h1>

        <div className="space-y-4 text-gray-700 dark:text-gray-300">
          <p className="text-lg">
            Welcome to Movie Downloader, your premium destination for high-quality movie content.
          </p>

          <p>
            Our platform is designed to provide a seamless experience for movie enthusiasts. We focus on delivering
            content quickly and efficiently, with our innovative countdown system that ensures your downloads are
            prepared properly.
          </p>

          <p>
            With our extensive library of films spanning all genres, you'll always find something that matches your
            taste. From classic cinema to the latest blockbusters, Movie Downloader has you covered.
          </p>

          <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800">
            <h2 className="text-xl font-semibold mb-2 text-blue-700 dark:text-blue-400">Our Features</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>High-quality movie content</li>
              <li>Fast and reliable downloads</li>
              <li>User-friendly interface</li>
              <li>Extensive movie library</li>
              <li>Regular updates with new releases</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}
