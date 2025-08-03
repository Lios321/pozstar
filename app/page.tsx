import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen font-sans flex flex-col bg-gradient-to-tr from-blue-200 via-white to-blue-400 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-80 h-80 bg-blue-300 opacity-30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-700 opacity-20 rounded-full blur-3xl animate-pulse" />
      </div>
      <header className="bg-blue-700 text-white py-6 px-8 flex items-center justify-between shadow-md z-10">
        <div className="flex items-center gap-3">
          <Image src="/globe.svg" alt="Pozstar logo" width={48} height={48} />
          <span className="text-3xl font-extrabold tracking-tight drop-shadow">
            Pozstar
          </span>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-4 z-10">
        <div className="max-w-xl w-full text-center mb-14">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-700 dark:text-blue-300 mb-4 drop-shadow-lg">
            Bem-vindo!
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-200 mb-6">
            O sistema Pozstar facilita o controle financeiro, ordens de serviço
            e clientes da sua empresa.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 w-full max-w-3xl">
          <a
            href="#financeiro"
            className="group bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-10 flex flex-col items-center hover:-translate-y-2 hover:shadow-blue-400 dark:hover:shadow-blue-900 transition-all duration-300 cursor-pointer border border-transparent hover:border-blue-400 dark:hover:border-blue-500"
          >
            <Image
              src="/file.svg"
              alt="Financeiro"
              width={64}
              height={64}
              className="group-hover:scale-110 transition-transform duration-300"
            />
            <span className="mt-6 text-xl font-bold text-blue-700 dark:text-blue-300">
              Financeiro
            </span>
            <span className="text-base text-gray-500 mt-2">
              Receitas, despesas e saldo em tempo real
            </span>
          </a>
          <a
            href="#ordens"
            className="group bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-10 flex flex-col items-center hover:-translate-y-2 hover:shadow-blue-400 dark:hover:shadow-blue-900 transition-all duration-300 cursor-pointer border border-transparent hover:border-blue-400 dark:hover:border-blue-500"
          >
            <Image
              src="/window.svg"
              alt="Ordens de Serviço"
              width={64}
              height={64}
              className="group-hover:scale-110 transition-transform duration-300"
            />
            <span className="mt-6 text-xl font-bold text-blue-700 dark:text-blue-300">
              Ordens de Serviço
            </span>
            <span className="text-base text-gray-500 mt-2">
              Acompanhe e gerencie ordens facilmente
            </span>
          </a>
          <a
            href="#clientes"
            className="group bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-10 flex flex-col items-center hover:-translate-y-2 hover:shadow-blue-400 dark:hover:shadow-blue-900 transition-all duration-300 cursor-pointer border border-transparent hover:border-blue-400 dark:hover:border-blue-500"
          >
            <Image
              src="/globe.svg"
              alt="Clientes"
              width={64}
              height={64}
              className="group-hover:scale-110 transition-transform duration-300"
            />
            <span className="mt-6 text-xl font-bold text-blue-700 dark:text-blue-300">
              Clientes
            </span>
            <span className="text-base text-gray-500 mt-2">
              Gestão completa da sua base de clientes
            </span>
          </a>
        </div>
      </main>

      <footer className="bg-blue-700 text-white py-4 px-8 text-center text-sm mt-auto z-10">
        Pozstar &copy; 2025 &mdash; Sistema Empresarial
      </footer>
    </div>
  );
}
