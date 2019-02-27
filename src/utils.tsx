import purify from 'dompurify';

export type LocalizedStringMap = {
  [lang: string]: string;
};

export const gettext = (text: string) => text;

export const getLocalizedString = (
  localizedStringMap: LocalizedStringMap,
  lang = process.env.REACT_APP_DEFAULT_API_LANG as string,
) => {
  return localizedStringMap[lang];
};

export const sanitizeHTML = (
  text: string,
  allowTags: string[] = [],
  _purify = purify,
) => {
  return {
    __html: _purify.sanitize(text, { ALLOWED_TAGS: allowTags }),
  };
};

export const nl2br = (text: string | null) => {
  return (text || '').replace(/(\r\n|\r|\n)(?!<\/?(li|ul|ol)>)/g, '<br />');
};
