export default function PrivacyPolicyPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans text-zinc-900 dark:bg-black dark:text-zinc-50">
      <main className="w-full max-w-3xl space-y-6 px-6 py-20 sm:px-12">
        <header className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
            Polychrome Catch
          </p>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-300">
            This policy describes how the Polychrome Catch extension handles
            data collected from supported course pages.
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">What we collect</h2>
          <p className="text-zinc-600 dark:text-zinc-300">
            The extension reads page data needed to capture assignments, such as
            titles and due dates, from supported course pages only.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Session data</h2>
          <p className="text-zinc-600 dark:text-zinc-300">
            Session data is stored locally in your browser and is used only to
            authenticate requests when saving tasks. It is not sent anywhere
            except Polychrome.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Where data goes</h2>
          <p className="text-zinc-600 dark:text-zinc-300">
            Captured assignment data is sent solely to Polychrome when you click
            save. No other data is shared, sold, or disclosed to third parties.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Retention</h2>
          <p className="text-zinc-600 dark:text-zinc-300">
            The extension does not retain data beyond what is necessary to
            display and submit the assignments you choose to save.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="text-zinc-600 dark:text-zinc-300">
            For privacy questions, contact
            <a
              href="mailto:august.acarlson33@gmail.com"
              className="ml-1 font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 dark:text-zinc-50 dark:decoration-zinc-600"
            >
              august.acarlson33@gmail.com
            </a>
            .
          </p>
        </section>
      </main>
    </div>
  );
}
