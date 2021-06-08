// EXAMPLE: for script compilation navigate to the cheerp_test_app dir and run:
// $ ./build.sh cpp/buttons/buttons.cpp
// EXAMPLE: for manual compilation navigate to the cheerp_test_app dir and run:
// $ mkdir -p app/cheerp/buttons; /opt/cheerp/bin/clang++ -target cheerp-wasm cpp/buttons/buttons.cpp -I cpp/dom -o app/cheerp/buttons/buttons.js -O3 -fcxx-exceptions -frtti -cheerp-secondary-output-file=app/cheerp/buttons/buttons.wasm -cheerp-secondary-output-path=cheerp/buttons/buttons.wasm -cheerp-linear-heap-size=1024 -cheerp-linear-stack-size=256 -cheerp-avoid-wasm-traps -cheerp-pretty-code -cheerp-strict-linking=warning

// REF: code adopted from:
// https://github.com/leaningtech/cheerp-meta/wiki/Browser-side-programming-guide#even-more-cheerpcallback-buttons--mouse
// https://raw.githubusercontent.com/wiki/leaningtech/cheerp-meta/tutorials/dom_buttons/buttons.cpp

#include <cheerp/client.h>    //Misc client side stuff
#include <cheerp/clientlib.h> //Complete DOM/HTML5 interface

int created = 0;

[[cheerp::genericjs]] void addButton(const std::string &text, client::EventListener *callback)
{
  // client::console.log("--> addButton");
  client::HTMLButtonElement *button = static_cast<client::HTMLButtonElement *>(client::document.createElement("button"));
  button->set_innerHTML(text.c_str());
  if (callback)
    button->addEventListener("click", callback);
  ++created; // IMPORTANT: comment out if re-using addButton in other tests since created counter is not used there!
  // client::document.get_body()->appendChild(button);
  client::document.querySelector("#buttons")->appendChild(button); // INFO: adopted for test app html structure
}

std::string randomColor()
{
  std::string color = "#";
  const std::string digits = "0123456789abcdef";
  for (int i = 0; i < 6; i++)
    color += digits[rand() % 16];
  return color;
}

[[cheerp::genericjs]] void addBox()
{
  client::HTMLElement *box = static_cast<client::HTMLElement *>(client::document.createElement("div"));
  std::string color = randomColor();
  box->get_style()->set_backgroundColor(color.c_str());
  box->get_style()->set_display("inline-block");
  box->get_style()->set_height("50px");
  box->get_style()->set_width("100px");
  // client::document.get_body()->appendChild(box);
  client::document.querySelector("#buttons")->appendChild(box); // INFO: adopted for test app html structure
}

[[cheerp::genericjs]] void addMousePosition()
{
  client::HTMLElement *text = static_cast<client::HTMLElement *>(client::document.createElement("h5"));
  text->get_style()->set_backgroundColor("lightgrey");
  text->get_style()->set_display("inline-block");
  text->get_style()->set_height("50px");
  text->get_style()->set_width("100px");
  text->set_textContent("uninitialized");
  auto setMousePosition = [text](client::MouseEvent *e) -> void
  {
    if (text)
      text->set_textContent((std::to_string((int)e->get_x()) + ", " + std::to_string((int)e->get_y())).c_str());
  };
  client::document.addEventListener("mousemove", cheerp::Callback(setMousePosition));
  // client::document.get_body()->appendChild(text);
  client::document.querySelector("#buttons")->appendChild(text); // INFO: adopted for test app html structure
}

[[cheerp::genericjs]] void createMainButton();

[[cheerp::genericjs]] void buttonCreator()
{
  // client::console.log("--> buttonCreator");
  switch (created % 6)
  {
  case 0:
    client::console.log("--> buttonCreator: case 0: Add a button");
    addButton("Add a button", cheerp::Callback(buttonCreator));
    break;
  case 1:
    client::console.log("--> buttonCreator: case 1: Reset");
    addButton("Reset",
              cheerp::Callback(
                  []()
                  {
                    //  auto body = client::document.get_body();
                    auto body = client::document.querySelector("#buttons"); // INFO: adopted for test app html structure
                    client::Node *last = body->get_lastChild();
                    while (last)
                    {
                      body->removeChild(last);
                      last = body->get_lastChild();
                    }
                    createMainButton();
                  }));
    break;
  case 2:
    client::console.log("--> buttonCreator: case 2: Add box");
    addButton("Add box", cheerp::Callback(addBox));
    break;
  case 3:
    client::console.log("--> buttonCreator: case 3: Double boxes!");
    addButton("Double boxes!",
              cheerp::Callback(
                  []()
                  {
                    //  auto body = client::document.get_body();
                    auto body = client::document.querySelector("#buttons"); // INFO: adopted for test app html structure
                    auto cloneIfDiv = [body](client::Node *node)
                    {
                      if (((client::HTMLElement *)node)->get_tagName() == new client::String("DIV"))
                        body->appendChild(node->cloneNode());
                    };
                    client::Node *first = body->get_firstChild();
                    client::Node *last = body->get_lastChild();
                    do
                    {
                      cloneIfDiv(first);
                      first = first->get_nextSibling();
                    } while (first != last);
                    cloneIfDiv(last);
                  }));
    break;
  case 4:
    client::console.log("--> buttonCreator: case 4: Fake button");
    addButton("Fake button", nullptr);
    break;
  case 5:
    client::console.log("--> buttonCreator: case 5: Track mouse");
    addButton("Track mouse", cheerp::Callback(addMousePosition));
    break;
  }
}

[[cheerp::genericjs]] void createMainButton()
{
  client::console.log("--> createMainButton");
  created = 0;
  buttonCreator();
}

//This function will be called only after the DOM is fully loaded
[[cheerp::genericjs]] void loadCallback()
{
  client::console.log("--> loadCallback");
  createMainButton();
}

[[cheerp::genericjs]] void webMain()
{
  client::console.log("--> webMain");
  // Load here as we are fetching the test glue script on-demand, i.e. long after DOMContentLoaded event
  loadCallback(); // load here as DOMContentLoaded below will not work
  // client::document.addEventListener("DOMContentLoaded", cheerp::Callback(loadCallback));
}
