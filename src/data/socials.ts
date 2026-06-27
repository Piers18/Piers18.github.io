export interface SocialLink {
  name: string;
  icon: string;
  darkIcon?: string;
  href: string;
}

export const socials: SocialLink[] = [
  {
    name: "Github",
    icon: "/social/github.svg",
    darkIcon: "/social/github-dark.svg",
    href: "https://github.com/Piers18",
  },
  {
    name: "Linkedin",
    icon: "/social/linkedin.svg",
    darkIcon: "/social/linkedin-dark.svg",
    href: "https://www.linkedin.com/in/piero-antonio-aguilar-anticona-336214228/",
  },
  {
    name: "Gmail",
    icon: "/social/gmail.svg",
    href: "mailto:pieroaguilaranticonajob@gmail.com",
  },
];
