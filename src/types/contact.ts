export interface SocialLink {
  platform: string;
  url: string;
  icon?: string;
}

export interface ContactInfo {
  phone?: string;
  email?: string;
  instagram?: string;
  location?: string;
  collegeName?: string;
  otherSocials?: SocialLink[];
}
