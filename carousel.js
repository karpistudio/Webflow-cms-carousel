<!-- Carousel images in the plans -->
<script>
const changeCarousel = (e, reverse) => {
    const SELECTED_CLASS = 'y-selected'
    // Carousel root element
    const rootElement = e.target?.parentElement?.parentElement?.parentElement || e.parentElement?.parentElement
    // Find wrappers of list that should be changed 
    const imagesWrapper = rootElement?.getElementsByClassName('y-cs-list')[0]
    const dotsWrapper = rootElement?.getElementsByClassName('y-custom-slider-dots-bar')[0]
    // Create array from the children
    const imagesArray = Array.from(imagesWrapper?.children || [])
    const dotsArray = Array.from(dotsWrapper?.children || [])
    // Find index of the selected dot
    const pivot = Math.max(dotsArray?.findIndex((el) => el.className.includes(SELECTED_CLASS)), 0)
    const setSelectedClass = elements => elements?.forEach((el, i) => {
        const selected = ((elements.length + pivot + (reverse ? -1 : 1)) % elements.length) === i ? SELECTED_CLASS : ''
      el.className = `${el.className.replace(SELECTED_CLASS, '')} ${selected}`
    })
    setSelectedClass(dotsArray)
    setSelectedClass(imagesArray)
  }
</script>
