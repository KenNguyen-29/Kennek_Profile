"use client";

import { Download } from "lucide-react";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/LanguageProvider";

export default function CvDownloadButton() {
  const { t } = useI18n();

  const handleDownload = () => {
    window.open("/cv?print=1", "_blank", "noopener,noreferrer");
  };

  return (
    <motion.button
      type="button"
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.98 }}
      onClick={handleDownload}
      className="btn-ghost-hud"
    >
      <Download size={16} />
      {t.ui.cv.download}
    </motion.button>
  );
}
