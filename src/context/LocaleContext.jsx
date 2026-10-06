import { createContext, useContext, useEffect, useMemo, useState } from "react";

const LocaleContext = createContext(null);

const translations = {
  en: { home: "Home", destinations: "Destination", about: "About", contact: "Contact", login: "Login", searchPlaceholder: "Search for your perfect place...", language: "ភាសាខ្មែរ" },
  km: { home: "ទំព័រដើម", destinations: "គោលដៅទេសចរណ៍", about: "អំពីយើង", contact: "ទំនាក់ទំនង", login: "ចូលគណនី", searchPlaceholder: "ស្វែងរកកន្លែងដែលអ្នកចូលចិត្ត...", language: "English" },
};

// Shared page copy is translated locally so the site does not depend on an
// external translation widget. Place names remain recognisable to travellers.
const pageTranslations = {
  "DISCOVER THE KINGDOM OF WONDER": "ស្វែងយល់ពីព្រះរាជាណាចក្រអស្ចារ្យ",
  "See Cambodia": "មើលកម្ពុជា",
  "beyond the map.": "លើសពីផែនទី។",
  "Ancient temples, vibrant cities, quiet coastlines, and stories worth taking home. Start planning a journey that feels truly yours.": "ប្រាសាទបុរាណ ទីក្រុងរស់រវើក ឆ្នេរសមុទ្រស្ងប់ស្ងាត់ និងរឿងរ៉ាវដែលគួរយកទៅចងចាំ។ ចាប់ផ្តើមរៀបចំដំណើរដែលជារបស់អ្នកពិតប្រាកដ។",
  "Explore destinations": "ស្វែងយល់ពីគោលដៅទេសចរណ៍",
  "Why Cambodia": "ហេតុអ្វីកម្ពុជា",
  "Featured route": "ផ្លូវទេសចរណ៍ពិសេស",
  "Siem Reap to Kampot": "សៀមរាបទៅកំពត",
  "Culture, coast & countryside": "វប្បធម៌ ឆ្នេរសមុទ្រ និងជនបទ",
  "Tourism": "ទេសចរណ៍",
  "Tourist": "ទេសចរ",
  "About Cambodia": "អំពីកម្ពុជា",
  "Welcome to Cambodia": "សូមស្វាគមន៍មកកាន់កម្ពុជា",
  "Why Visit Cambodia ?": "ហេតុអ្វីត្រូវមកទស្សនាកម្ពុជា?",
  "Why Visit": "ហេតុអ្វីត្រូវមកទស្សនា",
  "Cambodia ?": "កម្ពុជា?",
  "About Us": "អំពីយើង",
  "Meet Our Team": "ជួបក្រុមការងាររបស់យើង",
  "Experienced professionals dedicated to your satisfaction": "អ្នកជំនាញដែលប្តេជ្ញាចិត្តដើម្បីភាពពេញចិត្តរបស់អ្នក",
  "Travel Tips": "គន្លឹះធ្វើដំណើរ",
  "A Rich History": "ប្រវត្តិសាស្ត្រដ៏សម្បូរបែប",
  "Destination": "គោលដៅទេសចរណ៍",
  "Province": "ខេត្ត",
  "All 24 Provinces of Cambodia": "ខេត្តទាំង ២៤ របស់កម្ពុជា",
  "Explore Phnom Penh": "ស្វែងយល់ពីភ្នំពេញ",
  "Explore": "ស្វែងយល់",
  "View Detail": "មើលលម្អិត",
  "Learn More About Cambodia": "ស្វែងយល់បន្ថែមអំពីកម្ពុជា",
  "Contact Now": "ទាក់ទងឥឡូវនេះ",
  "Contect Now": "ទាក់ទងឥឡូវនេះ",
  "Back": "ត្រឡប់ក្រោយ",
  "Load More": "បង្ហាញបន្ថែម",
  "Home": "ទំព័រដើម",
  "About": "អំពីយើង",
  "Contact": "ទំនាក់ទំនង",
  "Login": "ចូលគណនី",
  "Log In": "ចូលគណនី",
  "Sign up": "ចុះឈ្មោះ",
  "Email": "អ៊ីមែល",
  "Password": "ពាក្យសម្ងាត់",
  "Welcome Back": "សូមស្វាគមន៍មកវិញ",
  "Search for your perfect place...": "ស្វែងរកកន្លែងដែលអ្នកចូលចិត្ត...",
  "No provinces or tourism places found.": "រកមិនឃើញខេត្ត ឬកន្លែងទេសចរណ៍ទេ។",
  "Tourism place": "កន្លែងទេសចរណ៍",
  "Cambodia": "កម្ពុជា",
  "World-Class Flights": "ជើងហោះហើរលំដាប់ពិភពលោក",
  "Luxury Hotels": "សណ្ឋាគារប្រណីត",
  "Modern Transport": "ការដឹកជញ្ជូនទំនើប",
  "24/7 Service": "សេវាកម្ម ២៤/៧",
  "Getting There": "ការធ្វើដំណើរមកដល់",
  "Best Time to Visit": "ពេលល្អបំផុតសម្រាប់ទស្សនា",
  "Budget & Currency": "ថវិកា និងរូបិយប័ណ្ណ",
  "Getting Around": "ការធ្វើដំណើរក្នុងតំបន់",
  "Health & Safety": "សុខភាព និងសុវត្ថិភាព",
  "Food & Dining": "អាហារ និងការទទួលទាន",
  "Geography": "ភូមិសាស្ត្រ",
  "Culture": "វប្បធម៌",
  "Language": "ភាសា",
  "Historical": "ប្រវត្តិសាស្ត្រ",
  "Beach": "ឆ្នេរ",
  "Nature & Adventure": "ធម្មជាតិ និងការផ្សងព្រេង",
  "City": "ទីក្រុង",
  "Market & Entertainment": "ផ្សារ និងការកម្សាន្ត",
  "Landmark": "ទីតាំងសម្គាល់",
  "Eco-Tourism": "ទេសចរណ៍ធម្មជាតិ",
};

const originalText = new WeakMap();

const translateText = (value, locale) => {
  if (locale === "en") return value;
  const trimmed = value.trim();
  if (!trimmed || !pageTranslations[trimmed]) return value;
  return value.replace(trimmed, pageTranslations[trimmed]);
};

const updatePageLanguage = (locale) => {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const textNodes = [];
  while (walker.nextNode()) textNodes.push(walker.currentNode);

  textNodes.forEach((node) => {
    const parent = node.parentElement;
    if (!parent || ["SCRIPT", "STYLE"].includes(parent.tagName) || parent.closest("[data-no-translate]")) return;
    if (!originalText.has(node)) originalText.set(node, node.nodeValue);
    const translated = translateText(originalText.get(node), locale);
    if (node.nodeValue !== translated) node.nodeValue = translated;
  });

  document.querySelectorAll("[placeholder], [aria-label]").forEach((element) => {
    if (element.closest("[data-no-translate]")) return;
    ["placeholder", "aria-label"].forEach((attribute) => {
      const value = element.getAttribute(attribute);
      if (!value) return;
      const key = `data-original-${attribute}`;
      if (!element.hasAttribute(key)) element.setAttribute(key, value);
      const translated = translateText(element.getAttribute(key), locale);
      if (value !== translated) element.setAttribute(attribute, translated);
    });
  });
};

export const LocaleProvider = ({ children }) => {
  const [locale, setLocale] = useState(() => localStorage.getItem("locale") || "en");

  useEffect(() => {
    document.documentElement.lang = locale === "km" ? "km" : "en";
    localStorage.setItem("locale", locale);
    updatePageLanguage(locale);

    const observer = new MutationObserver(() => updatePageLanguage(locale));
    observer.observe(document.body, { childList: true, subtree: true, characterData: true });
    return () => observer.disconnect();
  }, [locale]);

  const value = useMemo(() => ({
    locale,
    toggleLocale: () => setLocale((current) => (current === "en" ? "km" : "en")),
    t: (key) => translations[locale][key] || key,
  }), [locale]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
};

export const useLocale = () => {
  const context = useContext(LocaleContext);
  if (!context) throw new Error("useLocale must be used within LocaleProvider");
  return context;
};
