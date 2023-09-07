export function readingTimeInMin(text = ' ') {
  const wordsPerMinute = 250; // Average case.

  let textLength = text.trim().split(/\s+/).length; // Split by words
  let value = Math.ceil(textLength / wordsPerMinute);
  return value;
}

export function formatDate(date: string | Date) {
  var options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(date).toLocaleDateString('en-US', options as any);
}

export function removeHTMLEntities(html: string) {
  // removing html tags and entities if any
  return html.replace(/<(?:.|\n)*?>/gm, '').replace(/&nbsp;/g, ' ');
}
