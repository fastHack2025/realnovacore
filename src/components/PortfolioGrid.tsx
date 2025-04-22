import ZoomableImage from "./ZoomableImage";

export default function PortfolioGrid({
  items,
  highlight,
}: {
  items: any[];
  highlight: (text: string) => any;
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="bg-white dark:bg-zinc-800 rounded shadow p-3 flex flex-col justify-between"
        >
          <div className="mb-2">
            {item.type === "video" ? (
              <video
                controls
                src={item.image}
                className="rounded w-full object-cover mb-3"
              />
            ) : (
              <ZoomableImage
                src={item.image}
                alt={item.titre}
                className="rounded w-full object-cover mb-3"
              />
            )}
            <h3 className="font-semibold text-lg mb-1">{highlight(item.titre)}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
              {highlight(item.description)}
            </p>
            <p className="text-xs text-gray-400">
              🕒 {new Date(item.date).toLocaleDateString()}
            </p>
          </div>
          <a
            href={item.lien}
            target="_blank"
            className="text-blue-600 dark:text-blue-400 text-sm underline"
          >
            🔗 Voir le projet
          </a>
        </div>
      ))}
    </div>
  );
}
