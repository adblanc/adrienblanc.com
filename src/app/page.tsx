export default function Home() {
  return (
    <div className="container mx-auto px-4 pt-16 pb-4">
      <h1 className="text-xl font-semibold">Hello 👋</h1>
      <section className="mt-8">
        <h2 className="text-lg font-medium">• Projects :</h2>
        <ul className="mt-2 space-y-1 pl-4">
          <ProjectItem label="TOZ" href="https://www.toz-app.com/" />
          <ProjectItem
            label="Rendez-vous | Passeports et Cartes d'identités"
            href="https://cni-passeports-web.vercel.app/"
          />
        </ul>
      </section>
    </div>
  )
}

const ProjectItem = ({ href, label }: { href: string; label: string }) => (
  <li>
    ◦
    <a
      href={href}
      className="ml-1 hover:underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      {label}
    </a>
  </li>
)
