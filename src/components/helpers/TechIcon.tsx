"use client";

import { cn } from "@/lib/utils";
import type { TechItem } from "@/data/tech";
import Image from "next/image";

type TechIconProps = {
  item: TechItem;
  className?: string;
};

const TechIcon = ({ item, className }: TechIconProps) => {
  return (
    <span className="relative inline-flex shrink-0">
      <Image
        src={item.icon}
        alt={item.name}
        width={16}
        height={16}
        className={cn("block", className, item.darkIcon ? "dark:hidden" : "")}
      />
      {item.darkIcon ? (
        <Image
          src={item.darkIcon}
          alt={item.name}
          width={16}
          height={16}
          className={cn("hidden", className, "dark:block")}
        />
      ) : null}
    </span>
  );
};

export default TechIcon;
