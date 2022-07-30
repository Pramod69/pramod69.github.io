const gallery = document.getElementById('lightgallery')
if (gallery) {
    lightGallery(document.getElementById('lightgallery'), {
        plugins: [lgVideo],
        selector: '.item > a',
        download: false,
        mobileSettings: {
            controls: true,
            showCloseIcon: true,
            closeOnTap: true,
        },
    })
}

const mobileDevice = window.matchMedia('(max-width: 992px)')

if (mobileDevice.matches) {
    const navLinks = document.querySelectorAll('.nav-item')
    const menuToggle = document.getElementById('navmenu')
    const bsCollapse = new bootstrap.Collapse(menuToggle, {
        toggle: false,
    })
    navLinks.forEach((l) => {
        l.addEventListener('click', () => {
            bsCollapse.toggle()
        })
    })
}
