export default function getMonthName(date, locale = "fr"){
  return date.toLocaleString(locale, { month: "long" });
}      
