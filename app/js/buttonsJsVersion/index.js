// A JavaScript version of the basic Cheerp WASM test to demonstarte performance records,
// i.e. if any memory leaks occur in Cheerp WASM test version
// The C++ code for a basic test was adopted from the following Cheerp Wiki pages:
// https://github.com/leaningtech/cheerp-meta/wiki/Browser-side-programming-guide#even-more-cheerpcallback-buttons--mouse
// https://raw.githubusercontent.com/wiki/leaningtech/cheerp-meta/tutorials/dom_buttons/buttons.cpp
// The below JavaScript code is a direct rewrite into pure JavaScript

export default function buttonsJsVersionInit () {
  console.log('Init a JavaScript version of the basic Cheerp WebAssebly test...')

  // int created = 0;
  let created = 0

  // [[cheerp::genericjs]] void addButton(const std::string &text, client::EventListener *callback)
  // {
  //   // client::console.log("--> addButton");
  //   client::HTMLButtonElement *button = static_cast<client::HTMLButtonElement *>(client::document.createElement("button"));
  //   button->set_innerHTML(text.c_str());
  //   if (callback)
  //     button->addEventListener("click", callback);
  //   ++created; // IMPORTANT: comment out if re-using addButton in other tests since created counter is not used there!
  //   // client::document.get_body()->appendChild(button);
  //   client::document.querySelector("#buttons")->appendChild(button); // INFO: adopted for test app html structure
  // }

  function addButton (text, callback) {
    // console.log('--> addButton')
    const button = document.createElement('button')
    button.innerHTML = text
    if (callback) button.addEventListener('click', callback)
    ++created // IMPORTANT: comment out if re-using addButton in other tests since created counter is not used there!
    document.querySelector('#buttons').appendChild(button) // INFO: adopted for test app html structure
  }

  // std::string randomColor()
  // {
  //   std::string color = "#";
  //   const std::string digits = "0123456789abcdef";
  //   for (int i = 0; i < 6; i++)
  //     color += digits[rand() % 16];
  //   return color;
  // }

  function randomColor () {
    let color = '#'
    const digits = '0123456789abcdef'
    const getRandomInt = (min, max) => {
      min = Math.ceil(min)
      max = Math.floor(max)
      return Math.floor(Math.random() * (max - min + 1) + min) // [min, max + 1) = [min, max]
    }
    for (let i = 0; i < 6; i++) {
      color += [...digits][getRandomInt(0, 15)]
    }
    return color
  }

  // [[cheerp::genericjs]] void addBox()
  // {
  //   client::HTMLElement *box = static_cast<client::HTMLElement *>(client::document.createElement("div"));
  //   std::string color = randomColor();
  //   box->get_style()->set_backgroundColor(color.c_str());
  //   box->get_style()->set_display("inline-block");
  //   box->get_style()->set_height("50px");
  //   box->get_style()->set_width("100px");
  //   // client::document.get_body()->appendChild(box);
  //   client::document.querySelector("#buttons")->appendChild(box); // INFO: adopted for test app html structure
  // }

  function addBox () {
    const box = document.createElement('div')
    const color = randomColor()
    box.style.backgroundColor = color
    box.style.display = 'inline-block'
    box.style.height = '50px'
    box.style.width = '100px'
    document.querySelector('#buttons').appendChild(box) // INFO: adopted for test app html structure
  }

  // [[cheerp::genericjs]] void addMousePosition()
  // {
  //   client::HTMLElement *text = static_cast<client::HTMLElement *>(client::document.createElement("h5"));
  //   text->get_style()->set_backgroundColor("lightgrey");
  //   text->get_style()->set_display("inline-block");
  //   text->get_style()->set_height("50px");
  //   text->get_style()->set_width("100px");
  //   text->set_textContent("uninitialized");
  //   auto setMousePosition = [text](client::MouseEvent *e) -> void
  //   {
  //     if (text)
  //       text->set_textContent((std::to_string((int)e->get_x()) + ", " + std::to_string((int)e->get_y())).c_str());
  //   };
  //   client::document.addEventListener("mousemove", cheerp::Callback(setMousePosition));
  //   // client::document.get_body()->appendChild(text);
  //   client::document.querySelector("#buttons")->appendChild(text); // INFO: adopted for test app html structure
  // }

  function addMousePosition () {
    const text = document.createElement('h5')
    text.style.backgroundColor = 'darkgrey'
    text.style.display = 'inline-block'
    text.style.height = '50px'
    text.style.width = '100px'
    text.style.textContent = 'uninitialized'
    const setMousePosition = (text) => (e) => {
      if (text) { text.textContent = e.clientX + ', ' + e.clientX }
    }
    document.addEventListener('mousemove', setMousePosition(text))
    document.querySelector('#buttons').appendChild(text) // INFO: adopted for test app html structure
  }

  // [[cheerp::genericjs]] void createMainButton();

  // [[cheerp::genericjs]] void buttonCreator()
  // {
  //   // client::console.log("--> buttonCreator");
  //   switch (created % 6)
  //   {
  //   case 0:
  //     client::console.log("--> buttonCreator: case 0: Add a button");
  //     addButton("Add a button", cheerp::Callback(buttonCreator));
  //     break;
  //   case 1:
  //     client::console.log("--> buttonCreator: case 1: Reset");
  //     addButton("Reset",
  //               cheerp::Callback(
  //                   []()
  //                   {
  //                     //  auto body = client::document.get_body();
  //                     auto body = client::document.querySelector("#buttons"); // INFO: adopted for test app html structure
  //                     client::Node *last = body->get_lastChild();
  //                     while (last)
  //                     {
  //                       body->removeChild(last);
  //                       last = body->get_lastChild();
  //                     }
  //                     createMainButton();
  //                   }));
  //     break;
  //   case 2:
  //     client::console.log("--> buttonCreator: case 2: Add box");
  //     addButton("Add box", cheerp::Callback(addBox));
  //     break;
  //   case 3:
  //     client::console.log("--> buttonCreator: case 3: Double boxes!");
  //     addButton("Double boxes!",
  //               cheerp::Callback(
  //                   []()
  //                   {
  //                     //  auto body = client::document.get_body();
  //                     auto body = client::document.querySelector("#buttons"); // INFO: adopted for test app html structure
  //                     auto cloneIfDiv = [body](client::Node *node)
  //                     {
  //                       if (((client::HTMLElement *)node)->get_tagName() == new client::String("DIV"))
  //                         body->appendChild(node->cloneNode());
  //                     };
  //                     client::Node *first = body->get_firstChild();
  //                     client::Node *last = body->get_lastChild();
  //                     do
  //                     {
  //                       cloneIfDiv(first);
  //                       first = first->get_nextSibling();
  //                     } while (first != last);
  //                     cloneIfDiv(last);
  //                   }));
  //     break;
  //   case 4:
  //     client::console.log("--> buttonCreator: case 4: Fake button");
  //     addButton("Fake button", nullptr);
  //     break;
  //   case 5:
  //     client::console.log("--> buttonCreator: case 5: Track mouse");
  //     addButton("Track mouse", cheerp::Callback(addMousePosition));
  //     break;
  //   }
  // }

  function buttonCreator () {
    // console.log('--> buttonCreator')
    switch (created) {
      case 0:
        console.log('--> buttonCreator: case 0: Add a button')
        addButton('Add a JS button', buttonCreator)
        break
      case 1:
        console.log('--> buttonCreator: case 1: Reset')
        addButton('Reset', () => {
          const body = document.querySelector('#buttons') // INFO: adopted for test app html structure
          let last = body.lastChild
          while (last) {
            body.removeChild(last)
            last = body.lastChild
          }
          createMainButton()
        })
        break
      case 2:
        console.log('--> buttonCreator: case 2: Add box')
        addButton('Add box', addBox)
        break
      case 3:
        console.log('--> buttonCreator: case 3: Double boxes!')
        addButton('Double boxes!', () => {
          const body = document.querySelector('#buttons') // INFO: adopted for test app html structure
          const cloneIfDiv = (node) => {
            if (node.tagName === 'DIV') { body.appendChild(node.cloneNode()) }
          }
          let first = body.firstChild
          const last = body.lastChild
          do {
            cloneIfDiv(first)
            first = first.nextSibling
          } while (first !== last)
          cloneIfDiv(last)
        })
        break
      case 4:
        console.log('--> buttonCreator: case 4: Fake button')
        addButton('Fake button', null)
        break
      case 5:
        console.log('--> buttonCreator: case 5: Track mouse')
        addButton('Track mouse', addMousePosition)
        created = 0 // added re-set here to match Cheerp example behaviour
        break
    }
  }

  // [[cheerp::genericjs]] void createMainButton()
  // {
  //   client::console.log("--> createMainButton");
  //   created = 0;
  //   buttonCreator();
  // }

  function createMainButton () {
    console.log('--> createMainButton')
    created = 0
    buttonCreator()
  }

  // //This function will be called only after the DOM is fully loaded
  // [[cheerp::genericjs]] void loadCallback()
  // {
  //   client::console.log("--> loadCallback");
  //   createMainButton();
  // }

  // This function will be called only after the DOM is fully loaded
  function loadCallback () {
    console.log('--> loadCallback')
    createMainButton()
  }

  // [[cheerp::genericjs]] void webMain()
  // {
  //   client::console.log("--> webMain");
  //   // Load here as we are fetching the test glue script on-demand, i.e. long after DOMContentLoaded event
  //   loadCallback(); // load here as DOMContentLoaded below will not work
  //   // client::document.addEventListener("DOMContentLoaded", cheerp::Callback(loadCallback));
  // }

  (function webMain () {
    console.log('--> webMain')
    loadCallback()
    // document.addEventListener('DOMContentLoaded', loadCallback)
  })() // IIFE call to match Cheerp's special "webMain" behaviour
}
