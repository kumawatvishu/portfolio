import { motion } from "framer-motion";

interface TechTagsProps {
  tech: string[];
  dark: boolean;
  limit?: number;
  onShowMore?: () => void;
}

export default function TechTags({
  tech,
  dark,
  limit = 3,
  onShowMore,
}: TechTagsProps) {
  const visibleTech = tech.slice(0, limit);
  const remainingTechCount = tech.length - limit;

  return (
    <div className="flex flex-wrap gap-2">
      {visibleTech.map((t: string, i: number) => (
        <span
          key={i}
          className={`px-3 py-1 text-sm rounded-full font-medium transition-all duration-200 ${
            dark
              ? "bg-gray-700 text-gray-100 border border-gray-600"
              : "bg-gray-100 text-gray-900 border border-gray-200"
          }`}
        >
          {t}
        </span>
      ))}

      {remainingTechCount > 0 && onShowMore && (
        <motion.button
          onClick={onShowMore}
          className={`px-3 py-1 text-sm rounded-full font-medium transition-all duration-200 ${
            dark
              ? "bg-gray-700 text-gray-100 border border-gray-600 hover:bg-gray-900"
              : "bg-gray-100 text-gray-900 border border-gray-200 hover:bg-gray-400"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          +{remainingTechCount}
        </motion.button>
      )}
    </div>
  );
}
