export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans text-zinc-900 dark:bg-black dark:text-zinc-50">
      <main className="flex min-h-screen w-full max-w-4xl flex-col gap-10 px-6 py-20 sm:px-12">
        <header className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
            Polychrome Catch
          </p>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            Capture assignments from Schoology in seconds.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-300">
            Polychrome Catch is a Chrome extension that scans supported course
            pages, extracts upcoming assignments, and lets you review or edit
            them before saving directly to your Polychrome tasks.
          </p>
        </header>

        <section className="grid gap-6 rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">How it works</h2>
            <p className="text-zinc-600 dark:text-zinc-300">
              The extension scrapes upcoming items from Schoology, normalizes
              due dates to ISO, and sends them to Polychrome via a secure
              <span className="font-medium"> POST /api/tasks</span> request with
              your active session.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-zinc-200 p-4 dark:border-zinc-800">
              <h3 className="text-lg font-semibold">Key features</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-zinc-600 dark:text-zinc-300">
                <li>Auto-scan on page load with one-click refresh.</li>
                <li>Edit titles, due dates, and labels before saving.</li>
                <li>Works with both production and local dev targets.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-4 dark:border-zinc-800">
              <h3 className="text-lg font-semibold">API payload</h3>
              <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
                <li>Title, description, status, priority</li>
                <li>Due date in ISO format</li>
                <li>Labels: capture, schoology (default)</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Quick start</h2>
          <ol className="list-decimal space-y-2 pl-5 text-zinc-600 dark:text-zinc-300">
            <li>Load the extension in Chrome with Developer Mode enabled.</li>
            <li>Open a supported course page and launch the popup.</li>
            <li>
              Review the extracted assignments and click Save to Polychrome.
            </li>
          </ol>
        </section>

        <section className="space-y-4 rounded-3xl border border-dashed border-zinc-300 bg-zinc-100 p-6 text-zinc-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200">
          <h2 className="text-xl font-semibold">Troubleshooting</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Nothing is detected: refresh the page and click Refresh in the
              popup.
            </li>
            <li>
              Save fails: confirm you are signed in to Polychrome in the same
              browser.
            </li>
            <li>
              Wrong target: switch the API selector between dev and production.
            </li>
            <li>
              Missing due dates: verify the course page shows due info visibly.
            </li>
          </ul>
        </section>

        <footer className="text-sm text-zinc-500 dark:text-zinc-400">
          <a
            href="/privacy"
            className="underline decoration-zinc-300 underline-offset-4 hover:text-zinc-900 dark:decoration-zinc-600 dark:hover:text-zinc-50"
          >
            View the Polychrome Catch privacy policy.
          </a>
        </footer>
      </main>
    </div>
  );
}
