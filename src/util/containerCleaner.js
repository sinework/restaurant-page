const containerCleaner = () => {
  const container = document.getElementById('content');


  let child = container.lastElementChild;
  while (child) {
    container.removeChild(child);
    child = container.lastElementChild;
  }
  return container;
};
export default containerCleaner;