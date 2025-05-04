import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans p-6">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold text-purple-600">FURIA Fans Chat</h1>
        <p className="mt-4 text-lg">O canal oficial da torcida apaixonada! 🔥🐍</p>
      </header>

      <main className="grid gap-6 md:grid-cols-2">
        <section className="bg-gray-900 rounded-2xl p-6 shadow-xl">
          <h2 className="text-2xl font-semibold mb-2">📺 Status ao Vivo</h2>
          <p>Próximo jogo: <strong>FURIA x NAVI</strong></p>
          <p>Data: 06/05 às 16h</p>
        </section>

        <section className="bg-gray-900 rounded-2xl p-6 shadow-xl">
          <h2 className="text-2xl font-semibold mb-2">🔥 Comandos do Chat</h2>
          <ul className="list-disc list-inside">
            <li>/grito – Grito de guerra</li>
            <li>/provoca – Provocar rivais</li>
            <li>/mvp – Votação do melhor jogador</li>
            <li>/jogo – Informações da partida</li>
          </ul>
        </section>

        <section className="bg-gray-900 rounded-2xl p-6 shadow-xl col-span-full">
          <h2 className="text-2xl font-semibold mb-2">💬 Acesse o Chat</h2>
          <p className="mb-2">Entre agora para torcer com a gente no Telegram:</p>
          <a
            href="https://t.me/seu_bot_furia"
            className="inline-block bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition"
            target="_blank" rel="noopener noreferrer"
          >
            Entrar no Chat da Torcida
          </a>
        </section>
      </main>

      <footer className="text-center mt-12 text-sm text-gray-400">
        Projeto FURIA Fans • Desenvolvido por Jonathan Harano © 2025
      </footer>
    </div>
  );
}
