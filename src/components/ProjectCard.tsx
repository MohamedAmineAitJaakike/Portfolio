"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { IconGitHub, IconExternal } from "./icons/Icons";

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  tags: string[];
  liveUrl?: string;
  githubUrl: string;
  index: number;
}

const ProjectCard = ({
  title,
  description,
  image,
  tags,
  liveUrl,
  githubUrl,
  index,
}: ProjectCardProps) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: index * 0.1 },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -10 }}
      className="glass p-6 rounded-2xl border border-blue-500/20 hover:border-blue-500/40 overflow-hidden group transition-all duration-300 h-full flex flex-col"
    >
      {/* Project Image */}
      {image && (
        <div className="mb-6 h-48 bg-slate-800 rounded-xl overflow-hidden relative">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
      )}

      {/* Content */}
      <div className="flex-1 flex flex-col">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        <p className="text-slate-300 text-sm mb-4 flex-1">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm border border-blue-500/30"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 pt-4 border-t border-slate-700">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-slate-100 hover:bg-slate-800/40 rounded-lg transition-colors text-sm"
          >
            <IconGitHub className="w-4 h-4" />
            Code
          </a>
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-slate-100 hover:bg-slate-800/40 rounded-lg transition-colors text-sm"
            >
              <IconExternal className="w-4 h-4" />
              Live
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
