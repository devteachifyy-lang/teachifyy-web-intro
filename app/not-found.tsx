export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center section-padding">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
        <p className="text-zinc-400 mb-8">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <a
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 bg-primary text-dark rounded-lg font-medium hover:bg-primary-600 transition-colors"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}
