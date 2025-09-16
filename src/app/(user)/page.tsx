function HomePage() {
  return (
    <section className="flex w-full flex-col px-6 py-4">
      <div className="flex-1">
        <h1 className="text-2xl font-bold">Welcome to the Dashboard</h1>
        <p className="mt-2">Here you can find an overview of your activity.</p>
      </div>

      {/* Analytics */}
      <div className="w-full">
        <div className="flex md:flex-row flex-col w-full border border-red-500 gap-8">
          <div className="bg-white p-4 rounded shadow flex-1 min-w-0">
            <h2 className="font-bold">Resume Analysis</h2>
            <p className="mt-2">Get insights on your resume's performance.</p>
          </div>

          <div className="bg-white p-4 rounded shadow flex-1 min-w-0">
            <h2 className="font-bold">Job Matching</h2>
            <p className="mt-2">
              Find jobs that match your skills and experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
