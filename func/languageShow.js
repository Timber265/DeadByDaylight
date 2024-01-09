function languageShow() {
  let valid = true;
  const headerNavLanguage = document.querySelector('.header-nav-language')
  const langListsElem = document.querySelector('.lang-lists')
  const itemLinkArow = document.querySelectorAll('.item-link-arrow')
  const lastElementArrow = itemLinkArow[itemLinkArow.length - 1]
  function langWrap() {
    headerNavLanguage.addEventListener('click', e => {
      if(valid) {
        langListsElem.style.height = `${200}px`;
        lastElementArrow.style.transform = `rotate(${180}deg)`
        lastElementArrow.style.opacity = `1`
        valid = false;
      }else {
        langListsElem.style.height = `${0}px`;
        lastElementArrow.style.transform = `rotate(${0}deg)`
        lastElementArrow.style.opacity = `.5`
        valid = true;
      }
    });
    document.addEventListener('click', e => {
      if(!headerNavLanguage.contains(e.target)) {
        langListsElem.style.height = `${0}px`;
        lastElementArrow.style.transform = `rotate(${0}deg)`
        lastElementArrow.style.opacity = `.5`
        valid = true;
      }
    });
  }
  langWrap();
}
export default languageShow