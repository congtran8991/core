export const listKeyBreadcrumbs = () => {
  let stringConcatenation = "";
  let listPathname = window.location.pathname.split("/").filter((x) => x);
  let arrLink = [];
  listPathname.forEach((item) => {
    stringConcatenation += "/"+item;
    arrLink.push(stringConcatenation);
  });
  return arrLink;
};
