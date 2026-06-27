"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

type SocialIconProps = {
  icon: string;
  darkIcon?: string;
  alt: string;
  className?: string;
};

const SocialIcon = ({ icon, darkIcon, alt, className }: SocialIconProps) => {
  return (
    <span className="relative inline-flex shrink-0">
      <Image
        src={icon}
        alt={alt}
        width={24}
        height={24}
        className={cn("block", className, darkIcon ? "dark:hidden" : "")}
      />
      {darkIcon ? (
        <Image
          src={darkIcon}
          alt={alt}
          width={24}
          height={24}
          className={cn("hidden", className, "dark:block")}
        />
      ) : null}
    </span>
  );
};

export default SocialIcon;
