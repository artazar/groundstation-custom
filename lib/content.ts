import data from "@/content/waitlist.json";

/** The exact JSON contract the copy-generation prompt must return. */
export type WaitlistFeature = {
  icon: string;
  title: string;
  description: string;
};

export type WaitlistFaq = {
  question: string;
  answer: string;
};

export type WaitlistContent = {
  product_name: string;
  hero_title: string;
  hero_subtitle: string;
  cta_button_text: string;
  social_proof_badge: string;
  features: WaitlistFeature[];
  faq: WaitlistFaq[];
  footer_note: string;
};

export const content = data as WaitlistContent;
