export default function (locale='fr-FR') {
  const date = new Date();
  return new Intl.DateTimeFormat().format(date);
}
