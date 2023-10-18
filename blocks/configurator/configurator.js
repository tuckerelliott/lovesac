function createAndAppendLink(href, media, onload) {
  // Create a <link> element
  const linkElement = document.createElement('link');

  // Set its attributes
  linkElement.rel = 'stylesheet';
  linkElement.media = media;
  linkElement.href = href;

  // Add an onload event handler if specified
  if (onload) {
    linkElement.onload = () => {
      this.onload = null;
      this.media = media;
    };
  }

  // Append it to the <head> element
  document.head.appendChild(linkElement);
}

export default function decorate(block) {
  const app = document.createElement('div');
  const script = document.createElement('script');

  app.id = 'app';
  script.src = `${window.hlx.codeBasePath}/blocks/configurator/bundle.2ef5f.js`;

  block.innerHTML = '';
  app.appendChild(script);
  block.appendChild(app);

  createAndAppendLink(
    'https://www.lovesac.com/static/version1676459308/frontend/BlueAcorn/site/en_US/css/styles-m.css',
    'all',
    true,
  );

  createAndAppendLink(
    'https://www.lovesac.com/static/version1676459308/frontend/BlueAcorn/site/en_US/css/styles-l.css',
    'screen and (min-width: 768px)',
    true,
  );

  createAndAppendLink(
    'https://use.typekit.net/pee8cij.css',
    'all',
    true,
  );
}
