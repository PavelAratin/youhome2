export function accordeon(accordeonElems) {

  if (!accordeonElems.length) return //если аккордеона нет,выходим

  accordeonElems.forEach((accordeon) => {
    accordeon.addEventListener('click', () => {
      accordeon.classList.toggle('js-active-accordeon')
    })
  })
}