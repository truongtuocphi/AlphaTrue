interface ILink {
  label: string;
  href: string;
}

interface IlistItemFooter {
  name: string;
  slug: string;
}

export const links: ILink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Moments", href: "/moments" },
];

export const listItemFooter: IlistItemFooter[] = [
  { name: "TWITTER", slug: "https://twitter.com/AlphaTrueAPT" },
  { name: "LINKEDIN", slug: "https://www.linkedin.com/company/alphatrue" },
  { name: "TEAM", slug: "/team" },
  { name: "ABOUT US", slug: "/about" },
  { name: "MOMENTS", slug: "/moments" },
  { name: "Copyright © 2021 AlphaTrue", slug: "/#" },
];
