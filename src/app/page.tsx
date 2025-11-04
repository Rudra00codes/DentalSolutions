export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto container-padding section-padding">
        <div className="text-center">
          <h1 className="mb-6 text-balance">
            Welcome to Dental Solutions
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Professional dental care with advanced technology and painless treatments in Zirakpur.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Book Appointment
            </button>
            <button className="btn-secondary">
              Call Us Now
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}