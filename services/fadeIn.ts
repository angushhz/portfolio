export const revealComponent = (myRef: any) => {
  myRef.current.classList.add('opacity-0')
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting === true) {
      myRef?.current?.classList.add('motion-safe:animate-fadeIn')
      console.log('fadeIn')
    } else {
      myRef?.current?.classList.remove('motion-safe:animate-fadeIn')
      console.log('fadeOut')
    }
  })
  observer.observe(myRef.current)
}
