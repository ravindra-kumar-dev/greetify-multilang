export type Language = "en" | "hi" | "fr";

export function greetUser(name: string, lang: Language = "en"): string {
  const hour = new Date().getHours();

  const greetings: Record<Language, { morning: string; afternoon: string; evening: string }> = {
    en: {
      morning: "Good morning",
      afternoon: "Good afternoon",
      evening: "Good evening",
    },
    hi: {
      morning: "सुप्रभात",
      afternoon: "नमस्कार",
      evening: "शुभ संध्या",
    },
    fr: {
      morning: "Bonjour",
      afternoon: "Bon après-midi",
      evening: "Bonsoir",
    },
  };

  let timeOfDay: "morning" | "afternoon" | "evening";

  if (hour < 12) timeOfDay = "morning";
  else if (hour < 17) timeOfDay = "afternoon";
  else timeOfDay = "evening";

  return \`\${greetings[lang][timeOfDay]}, \${name}!\`;
}