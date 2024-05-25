import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { motion } from "framer-motion";
import { reference } from "three/examples/jsm/nodes/Nodes.js";

function card({ data, reference }) {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.2 }}
      dragElastic={0.1}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
      className="relative w-60 h-72 bg-zinc-900/90 rounded-[30px] text-white px-8 py-10 overflow-hidden"
    >
      <FaRegFileAlt />
      <p className="py-4 font-semibold text-sm">{data.desc}</p>
      <div className="footer absolute bottom-0 w-full  left-0 ">
        <div className="flex items-center justify-between py-3 px-8">
          {data.filesize}
          <button>
            <LuDownload />
          </button>
        </div>
        {data.tag.isOpen && (
          <div className="bg-green-600 w-full flex items-center justify-center h-10">
            <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default card;
