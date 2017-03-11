export default function getMonthName(date, locale = "fr-FR"){
  return date.toLocaleString(locale, { month: "long" });
}
