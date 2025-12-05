import { Logo, LogoIcon } from "./index";

export default function LogoExamples() {
  return (
    <div className="p-8 space-y-8 bg-gray-50 rounded-lg">
      <h2 className="text-2xl font-bold text-center text-gray-900">
        Exemples d'utilisation du Logo
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Logo complet avec texte */}
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-sm font-medium text-gray-600 mb-2">Logo complet (Header)</h3>
          <Logo size="md" showText={true} />
        </div>

        {/* Logo sans texte */}
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-sm font-medium text-gray-600 mb-2">Logo sans texte</h3>
          <Logo size="md" showText={false} />
        </div>

        {/* Petit logo */}
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-sm font-medium text-gray-600 mb-2">Petit logo</h3>
          <Logo size="sm" showText={true} />
        </div>

        {/* Grand logo */}
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-sm font-medium text-gray-600 mb-2">Grand logo</h3>
          <Logo size="lg" showText={true} />
        </div>

        {/* Icône seule */}
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-sm font-medium text-gray-600 mb-2">Icône seule</h3>
          <LogoIcon size="md" />
        </div>

        {/* Logo avec style personnalisé */}
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-sm font-medium text-gray-600 mb-2">Style personnalisé</h3>
          <Logo
            size="md"
            className="bg-red-500 hover:bg-red-600"
            showText={true}
          />
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Comment utiliser:</h3>
        <div className="space-y-2 text-sm text-gray-600">
          <p><code>{`import { Logo, LogoIcon } from '@/components';`}</code></p>
          <p><code>{`<Logo size="md" showText={true} />`}</code></p>
          <p><code>{`<LogoIcon size="lg" href="/home" />`}</code></p>
        </div>
      </div>
    </div>
  );
}