import { useEffect, useRef } from "react";
import { batchTranslateText } from "./libreTranslate";

export default function usePageTranslator(language) {
  const originalTextsRef = useRef([]);

  useEffect(() => {
    if (!language) return;

    // Helper: collect all text nodes, ignoring data-no-translate
    const getTextNodes = (node) => {
      let nodes = [];
      if (
        node.nodeType === Node.TEXT_NODE &&
        node.textContent.trim() !== "" &&
        !node.parentElement?.closest("[data-no-translate]")
      ) {
        nodes.push(node);
      } else {
        node.childNodes.forEach((child) => {
          nodes = nodes.concat(getTextNodes(child));
        });
      }
      return nodes;
    };

    const nodes = getTextNodes(document.body);

    // Store original texts once
    if (originalTextsRef.current.length === 0) {
      originalTextsRef.current = nodes.map((n) => n.textContent);
    }

    const translateAll = async () => {
      const originals = originalTextsRef.current;

      // Restore English instantly
      if (language === "en") {
        nodes.forEach((n, i) => (n.textContent = originals[i]));
        return;
      }

      const pathParts = window.location.pathname.split("/").filter(Boolean);
      const page = pathParts.length > 0 ? pathParts : "home";

      try {
        const translated = await batchTranslateText(originals, page, language);

        translated.forEach((text, i) => {
          const clean = (text || "").replace(/\(.*?\)/g, "").trim();
          nodes[i].textContent = clean || originals[i];
        });
      } catch (error) {
        console.error("Translation failed:", error);
      }
    };

    translateAll();
  }, [language]);
}
