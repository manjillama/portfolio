window.addEventListener('message', (event) => {
  const iframe = document.getElementById('commentsyIframe');
  if (iframe && event.data) {
    if (event.data.type === 'commentsyResize' && event.data.height) {
      iframe.style.height = `${event.data.height}px`;
    }
    if (event.data.type === 'pingCommentsyParent') {
      iframe.contentWindow.postMessage(
        {
          type: 'commentsyParentSiteData',
          title: document.title,
          url: window.location.href.split('?')[0]
        },
        'https://commentsy.vercel.app'
      );
    }
  }
});
