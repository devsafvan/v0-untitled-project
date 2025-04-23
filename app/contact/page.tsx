import { Mail, MessageSquare, User } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-6 flex items-center">
          <Mail className="mr-2 text-blue-600 dark:text-blue-400" />
          <span className="bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300 text-transparent bg-clip-text">
            Contact Us
          </span>
        </h1>

        <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
          Have questions or feedback about our service? We'd love to hear from you.
        </p>

        <div className="space-y-4">
          <div className="relative">
            <label htmlFor="name" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
              Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                id="name"
                className="w-full pl-10 px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-800"
              />
            </div>
          </div>

          <div className="relative">
            <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
              Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="email"
                id="email"
                className="w-full pl-10 px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-800"
              />
            </div>
          </div>

          <div className="relative">
            <label htmlFor="message" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
              Message
            </label>
            <div className="relative">
              <div className="absolute top-3 left-3 flex items-start pointer-events-none">
                <MessageSquare className="h-5 w-5 text-gray-400" />
              </div>
              <textarea
                id="message"
                rows={4}
                className="w-full pl-10 px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-800"
              ></textarea>
            </div>
          </div>

          <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-500 dark:to-blue-400 text-white rounded-md hover:from-blue-700 hover:to-blue-600 dark:hover:from-blue-600 dark:hover:to-blue-500 transition-colors shadow-md">
            Send Message
          </button>
        </div>
      </div>
    </main>
  )
}
