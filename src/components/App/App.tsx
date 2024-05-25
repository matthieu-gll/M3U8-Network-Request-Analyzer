import { useVideos } from "../../hooks/useVideos";
import { copyToClipboard } from "../../utils/copyToClipboard";

function App() {
  const { clearVideos, videos } = useVideos();

  return (
    <main className="p-4 w-[500px] h-[500px] relative overflow-y-auto bg-neutral-950 text-neutral-50">
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-xs text-white ring-1 ring-inset ring-gray-800 text-opacity-50">
          <svg
            className="h-1.5 w-1.5 fill-green-400 animate-pulse"
            viewBox="0 0 6 6"
            aria-hidden="true"
          >
            <circle cx={3} cy={3} r={3} />
          </svg>
          Analyse du réseau (en arrière plan)
        </span>
      </div>
      <ul className="mt-6 space-y-2 mb-12">
        {videos.length > 0 && (
          <li className="fixed right-0 bottom-0 px-4 py-2 flex gap-2 items-center justify-end bg-neutral-900 border-t border-indigo-500 w-full">
            <p>{videos.length} résultat(s)</p>
            <button
              className="rounded bg-white/10 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-white/20"
              onClick={clearVideos}
            >
              Vider la liste
            </button>
          </li>
        )}
        {videos.map((url) => (
          <li
            className="max-w-full block break-all cursor-pointer hover:blur-sm"
            key={url}
            onClick={() => copyToClipboard(url)}
          >
            {url}
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
