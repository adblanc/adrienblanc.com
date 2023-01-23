import Link from 'next/link'

export const Footer = () => (
  <section className="flex h-20 w-full flex-col items-center justify-center text-sm">
    <div className="flex flex-row items-center space-x-2">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/adblanc"
        className="font-medium hover:underline"
      >
        Github
      </a>
      <div>•</div>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/adrien-blanc-904915196/"
        className="font-medium hover:underline"
      >
        LinkedIn
      </a>
    </div>
    <Link href="/legal-mentions" className="hover:underline">
      Mentions légales
    </Link>
  </section>
)
