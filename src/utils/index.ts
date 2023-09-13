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

export async function preloadImages(imgSources: string[], callback: () => void) {
  const promises = imgSources.map((src) => {
    return new Promise(function (resolve, reject) {
      const img = new Image();

      img.src = src;
      img.onload = () => resolve(true);
      img.onerror = () => reject();
    });
  });
  await Promise.all(promises);
  callback();
}
