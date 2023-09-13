import index from './index.abell';
import docs from './docs.abell';



const contentGlob = import.meta.glob('./content/**/*.md', { eager: true });

const makeWebURL = (markdownFilePath) => {
  const webURL = markdownFilePath.split('/')[2];
  return `/${webURL}`;
}

const content = Object.entries(contentGlob).reduce((prev, [contentMdPath, contentObj]) => {
  const path = makeWebURL(contentMdPath)
  prev[path] = {
    attributes: contentObj.attributes,
    html: contentObj.html,
    path
  }
  return prev;
}, {});

const docsPaths = Object.values(content).map((currentContent) => ({
  path: currentContent.path,
  render: () => docs({ content, path: currentContent.path })
}))

/**
 * 
 * @return { import('abell').Route[] }
 */
export const makeRoutes = () => {
  return [
    {
      path: '/',
      render: () => index({ content })
    },
    ...docsPaths
  ]
}