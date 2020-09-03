export const unicodeUtil = (input) => {
  let retval = input;
  retval = retval.replace(/á/g, '&aacute;');
  retval = retval.replace(/é/g, '&eacute;');
  retval = retval.replace(/í/g, '&iacute;');
  retval = retval.replace(/ó/g, '&oacute;');
  retval = retval.replace(/ú/g, '&uacute;');
  retval = retval.replace(/ñ/g, '&ntilde;');
  retval = retval.replace(/¿/g, '&iquest;');
  retval = retval.replace(/¡/g, '&iexcl;');
  return retval;
};