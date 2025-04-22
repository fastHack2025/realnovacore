import { useMemo } from "react";

export function useSearchHighlight<T extends { titre: string; description: string }>(
  items: T[],
  keyword: string
) {
  const normalized = keyword.trim().toLowerCase();

  const results = useMemo(() => {
    if (!normalized) return items;
    return items.filter((item) => {
      return (
        item.titre.toLowerCase().includes(normalized) ||
        item.description.toLowerCase().includes(normalized)
      );
    });
  }, [items, normalized]);

  function highlight(text: string) {
    if (!normalized) return text;
    const regex = new RegExp(`(${normalized})`, "gi");
    return <span dangerouslySetInnerHTML={{ __html: text.replace(regex, "<mark>$1</mark>") }} />;
  }

  return { results, highlight };
}
