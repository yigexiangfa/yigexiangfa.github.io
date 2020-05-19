window.application = Stimulus.Application.start()

class NavbarController extends Stimulus.Controller {
  static targets = ['menu']

  connect() {
    console.log('Navbar Controller works!')
  }

  toggle(element) {
    element.currentTarget.classList.toggle('is-active')
    this.menuTarget.classList.toggle('is-active')
  }

}

application.register('navbar', NavbarController)
