let links = [
  {
    name: 'Base',
    url: '/base',
  },
  {
    name: 'Moon',
    url: '/moon',
  },
  {
    name: 'Dawn',
    url: '/dawn',
  },
]

const Index = () => (
  <header className="px-6 h-20 flex items-center justify-between">
    <h1 className="text-sm font-medium">Rosé Pine</h1>

    <nav className="space-x-3">
      {links.map((link) => (
        <a
          key={link.url}
          href={link.url}
          className="text-sm text-gray-700 hover:text-gray-900"
        >
          {link.name}
        </a>
      ))}
    </nav>
  </header>
)
