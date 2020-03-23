function getImage(folder, element) {
  // eslint-disable-next-line global-require, import/no-dynamic-require
  return require(`../assets/images/${folder}/${element}`);
}

function getIconClasses(image) {
  return `fab fa-${image}-square`;
}

module.exports = {
  getIconClasses,
  getImage,
};
