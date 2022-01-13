class EventsController {
  static events(selector, eventType, funct) {
    document.querySelector(selector).addEventListener(eventType, funct);
  }
}

class ButtonsActions {
  static itemAddSubmit(e) {
    console.log("Engi no se baña");
    e.preventDefault();
  }
}

//Controlador de la aplicacion
class App {
  static run() {
    EventsController.events("#boton", "click", ButtonsActions.itemAddSubmit);
  }
}
App.run();
