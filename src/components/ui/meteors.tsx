'use client';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import React, { useMemo } from 'react';

function seededRandom(seed: number) {
  return function () {
    seed ^= seed << 13;
    seed ^= seed >> 17;
    seed ^= seed << 5;
    // Normalize to [0, 1) range
    return ((seed < 0 ? ~seed + 1 : seed) % 1000) / 1000;
  };
}

export const Meteors = ({
  number,
  className,
  seed = 42,
}: {
  number?: number;
  className?: string;
  seed?: number;
}) => {
  const meteorCount = number || 20;

  // Generate meteor properties using a consistent seed
  const meteors = useMemo(() => {
    const random = seededRandom(seed);
    return Array.from({ length: meteorCount }, (_, idx) => {
      // Calculate position to evenly distribute meteors across container width
      const position = idx * (800 / meteorCount) - 400; // Spread across 800px range, centered
      const delay = random() * 5; // Random delay between 0-5s
      const duration = Math.floor(random() * 5 + 5); // Random duration between 5-10s

      return { position, delay, duration };
    });
  }, [meteorCount, seed]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      {meteors.map((meteor, idx) => (
        <span
          key={'meteor' + idx}
          className={cn(
            'animate-meteor-effect absolute h-0.5 w-0.5 rotate-[45deg] rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10]',
            "before:absolute before:top-1/2 before:h-[1px] before:w-[50px] before:-translate-y-[50%] before:transform before:bg-gradient-to-r before:from-[#64748b] before:to-transparent before:content-['']",
            className
          )}
          style={{
            top: '-40px', // Start above the container
            left: meteor.position + 'px',
            animationDelay: meteor.delay + 's',
            animationDuration: meteor.duration + 's',
          }}
        />
      ))}
    </motion.div>
  );
};
