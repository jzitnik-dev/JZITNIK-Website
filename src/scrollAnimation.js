function ScrollAnimation(elements,animateMultiple) {
    const observer = new IntersectionObserver((enteries)=> {
        enteries.forEach(entry=> {
            if (entry.isIntersecting) {
                entry.target.classList.add('show')
            }
            else {
                if (animateMultiple) {
                    entry.target.classList.remove('show')
                }
            }
        })
    })
    elements.forEach((el)=> observer.observe(el))
}
export default ScrollAnimation;