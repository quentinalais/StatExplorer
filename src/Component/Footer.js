import React from 'react'

const Footer = () => {
  return (
    <div className="footer-custom">
        <footer class="d-flex bg-secondary flex-wrap justify-content-between align-items-center py-3 my-4 border-top mt-auto">
            <div class="col-md-4 d-flex align-items-center">
            <a href="/" class="mb-3 me-2 mb-md-0 text-white text-decoration-none lh-1">
                <svg class="bi" width="30" height="24"><use href="#bootstrap"></use></svg>
            </a>
            <span class="text-white">© 2022 Company, Inc</span>
            </div>

            <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li class="ms-3"><a class="text-white" href="#"><svg class="bi" width="24" height="24"><use href="#twitter"></use></svg></a></li>
            <li class="ms-3"><a class="text-white" href="#"><svg class="bi" width="24" height="24"><use href="#instagram"></use></svg></a></li>
            <li class="ms-3"><a class="text-white" href="#"><svg class="bi" width="24" height="24"><use href="#facebook"></use></svg></a></li>
            </ul>
        </footer>
    </div>
  )
}

export default Footer