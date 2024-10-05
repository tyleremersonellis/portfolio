if (document.getElementById('my-work-link')) {
  document.getElementById('my-work-link').addEventListener('click', () => {
    document.getElementById('my-work-section').scrollIntoView({behavior: "smooth"})
  })
}
if (document.getElementById('about-section-link')) {
  document.getElementById('about-section-link').addEventListener('click', () => {
    document.getElementById('about-section').scrollIntoView({behavior: "smooth"})
  })
}