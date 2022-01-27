// This is test-json.cpp example, uses nlohmann/json.hpp single header json parser
// EXAMPLE: for script compilation navigate to the cheerp_test_app dir and run:
// $ ./build.sh cpp/jsonparse/jsonparse.cpp
// EXAMPLE: for manual compilation navigate to the cheerp_test_app dir and run:
// $ mkdir -p app/cheerp/jsonparse; /opt/cheerp/bin/clang++ -target cheerp-wasm cpp/jsonparse/jsonparse.cpp -o app/cheerp/jsonparse/jsonparse.js -O3 -fcxx-exceptions -frtti -cheerp-secondary-output-file=app/cheerp/jsonparse/jsonparse.wasm -cheerp-secondary-output-path=cheerp/jsonparse/jsonparse.wasm -cheerp-linear-heap-size=1024 -cheerp-linear-stack-size=256 -cheerp-avoid-wasm-traps -cheerp-pretty-code -cheerp-strict-linking=warning

#include <cheerp/client.h>    //Misc client side stuff
#include <cheerp/clientlib.h> //Complete DOM/HTML5 interface
#include <string.h>
// #include <algorithm>
// #include <memory>
#include <vector>
#include <cstdlib>
#include <unistd.h>
#include <iostream>
#include <iomanip>
#include <sstream>
// GitHub: nlohmann/json <- using nlohmann json.hpp release 3.9.1 of 6.Aug 2020
// REF: https://github.com/nlohmann/json
#include "nlohmann/json.hpp" // This is nlohmann json stuff
//#include "serializer.h"

using json = nlohmann::json;

namespace [[cheerp::genericjs]] client
{
   const client::String *readRecordFromDatabase(const client::String &docId);
   void writeRecordToDatabase(const client::String &docId, const client::String &docStr);
}

using namespace client;

// Generate a test button
[[cheerp::genericjs]] void addButton(const std::string &text, client::EventListener *callback)
{
  // client::console.log("--> addButton");
  client::HTMLButtonElement *button = static_cast<client::HTMLButtonElement *>(client::document.createElement("button"));
  button->set_innerHTML(text.c_str());
  if (callback)
    button->addEventListener("click", callback);
  client::document.querySelector("#buttons")->appendChild(button);
}

// ********************************************************************************
// Utility: convert from C++ std::string to JavaScript client::String
[[cheerp::genericjs]] client::String *strCPPtoJS(const std::string &src)
{
	//Take a view (as Uint8Array) of the memory representing the std::string (encoded in UTF8)
	client::Uint8Array* bufferView = cheerp::MakeTypedArray<client::Uint8Array>(src.c_str(), src.length());

	//Create a client::String with the equivalent content
	return (new client::TextDecoder())->decode(bufferView);
}

// Utility: convert from JavaScript client::String to C++ std::string
[[cheerp::genericjs]] const std::string strJStoCPP(const client::String *src)
{
	//Encodes the UTF8-encoded content of client::String into Uint8Array
	client::Uint8Array* view = (new client::TextEncoder())->encode(src);

	//Fills res with the content of the Array
	std::string res;

	int i=0;
	char c = view->operator[](i);
	while (c)
	{
		res.push_back(c);
		i++;
		c = view->operator[](i);
	}

	return res;
}

// Global pointer to C++ JSON string
// RATIONALE: keep out of below function stack
// static const std::string *p_json_str = nullptr;

// Utility: reading a document from web app database
[[cheerp::genericjs]] auto readFromDatabase(const std::string &idKey) -> const std::string
{
  const client::String *docId = strCPPtoJS(idKey);
  // client::console.log("wasm: reading a document with id: ", *docId);
  const client::String *jsString = client::readRecordFromDatabase(*docId);
  // client::String jsString = client::readRecordFromDatabase(*docId);
  // prototype:     client::String readRecordFromDatabase(client::String docId);
  // const std::string *p_json_str = nullptr;
  // Need to wait here for completion of async read operation?
  // client::console.log(jsString);  // tested, the read method works now
  // CASE (A) simple pointer
  // const std::string *p_json_str = new std::string((std::string)*jsString);
  // if (p_json_str != nullptr)
  // {
  //   // CHEERP_SAFE_INLINE(
  //   //     void, (const char *c), { client::console.warn(c); }, "p_json_str != nullptr");
  //   delete p_json_str;
  // }
  // Use global pointer above to keep it NOT in current function stack
  return strJStoCPP(jsString);
  // CASE (B) shared pointer
  // auto p_json_str = std::make_shared<const std::string>(std::string((std::string)*jsString));

  // const std::string w_json_str = (std::string)*jsString; // https://leaningtech.com/API/
  // strJStoCPP(*jsString);
  // const std::string *w_json_str = strJStoCPP(jsString);
  // CASE (A) simple pointer
  // return p_json_str;
  // CASE (B) shared pointer
}

// Utility: saving a document to web app database
[[cheerp::genericjs]] auto saveToDatabase(const std::string &idKey, const std::string &json_str) -> void
{
  client::String *docId = strCPPtoJS(idKey);
  client::String *docStr = strCPPtoJS(json_str);
  // client::console.log("wasm: writing/upserting a document with id: ", *docId);
  client::writeRecordToDatabase(*docId, *docStr);
  // delete[] docId;
  // delete[] docStr;
}

// ********************************************************************************
// Running all provided tests with Ids given in vector argw
//
[[cheerp::wasm]] const std::string runTestAll(const std::vector<std::string> &argw)
{
  // Code snippet from  https://json.nlohmann.me/api/basic_json/parse/   (parsing from string)
  auto smalltext = R"(
    {
        "Image": {
            "Width":  800,
            "Height": 600,
            "Title":  "View from 15th Floor",
            "Thumbnail": {
                "Url":    "http://www.example.com/image/481989943",
                "Height": 125,
                "Width":  100
            },
            "Animated" : false,
            "IDs": [116, 943, 234, 38793]
        }
    }
    )";
  json test_tag = R"( {"tested": "yes"} )"_json;

  CHEERP_SAFE_INLINE(
      void, (const char *s), { client::console.log(s); },
      "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Processing all tests for json::parse()");

  auto argc = argw.size(); // Entering the loop over document keys
  //CHEERP_SAFE_INLINE(
  //      void, (size_t n, const char *s), { client::console.log(n, s); }, argc, argw[0].c_str());
  for (auto i = 0; i < argc; i++)
  {
    if (i > 0)
    { // Reading and parsing JSON documents supplied by the test web app
      CHEERP_SAFE_INLINE(
          void, (const char *c, const char *s), { client::console.log(c, s); },
          "++++++++++++++++++++++++++++++++++++++\nProcessing test from web app database:", argw[i].c_str());
      // Reading from web app database
      const std::string jsstring = readFromDatabase(argw[i]);
      // parsing the input document string
      // json *jotest = new json(json::parse(*jsstring));
      json jotest = json::parse(jsstring, nullptr, false); // Alternative (in stack)

      if (jotest.is_discarded())
      { // Check if not parsed
        CHEERP_SAFE_INLINE(
            void, (const char *s), { client::console.error(s); },
            // "JSON in-code doc parse() with suppressed exceptions failed! ");
            "JSON from DB doc parse() failed! ");
      }
      else
      {
        CHEERP_SAFE_INLINE(
            void, (const char *s), { client::console.log(s); },
            "JSON DB doc parsed into a JSON object! Now manipulate and dump it to string");

        // Manipulation with JSON object (optional)
        //jotest->update(test_tag);
        jotest.update(test_tag);

        // Dumping JSON to string
        // std::string *outjstring = new std::string(jotest->dump());
        std::string outjstring = jotest.dump(); // Alternative
        // delete [] jotest;

        std::string snippetString = outjstring.substr(0, 80);
        const char *snippet = snippetString.c_str();
        CHEERP_SAFE_INLINE(
            void, (const char *s), { client::console.log(s); }, snippet);
        // Saving the dumped document back to web app database
        // saveToDatabase(argw[i], *outjstring);
        saveToDatabase(argw[i], outjstring);
        // delete [] outjstring;
      }
    }
    else
    { // Test of parsing a simple in-code document
      CHEERP_SAFE_INLINE(
          void, (const char *c, const char *s), { client::console.log(c, s); },
          "\nParsing the small in-code JSON doc [0]: ", argw[i].c_str());
      json jsmall = json::parse(smalltext, nullptr, false);

      if (jsmall.is_discarded())
      { // Check if not parsed
        CHEERP_SAFE_INLINE(
            void, (const char *s), { client::console.error(s); },
            // "JSON in-code doc parse() with suppressed exceptions failed! ");
            "JSON in-code doc parse() failed! ");
      }
      else
      {
        CHEERP_SAFE_INLINE(
            void, (const char *s), { client::console.log(s); }, "JSON in-code doc parsed! Now manipulate and dump it to string");
        // JSON manipulation (optional)
        jsmall["Image"]["Height"] = 888;
        jsmall["Image"]["Title"] = "View from the roof";
        jsmall.update(test_tag);
        // Dumping JSON to string
        std::string outjstring = jsmall.dump();
        CHEERP_SAFE_INLINE(
            void, (const char *s), { client::console.log(s); }, outjstring.c_str());
      }
    }
    CHEERP_SAFE_INLINE(
        void, (const char *s, size_t i), { client::console.log(s, i); }, "Test completed: ", i);
  } // for i
  return "All tests completed!\n";
}

// Running a test prescribed by docId string, either from code or from web app database
//
[[cheerp::wasm]] const std::string runTestId(const std::string &docId)
{
  // Code snippet from  https://json.nlohmann.me/api/basic_json/parse/   (parsing from string)
  auto smalltext = R"(
    {
        "Image": {
            "Width":  800,
            "Height": 600,
            "Title":  "View from 15th Floor",
            "Thumbnail": {
                "Url":    "http://www.example.com/image/481989943",
                "Height": 125,
                "Width":  100
            },
            "Animated" : false,
            "IDs": [116, 943, 234, 38793]
        }
    }
    )";
  json test_tag = R"( {"tested": "yes"} )"_json;

  if (docId == "inCodeJSONfromNlohmann")
  {
    // Test of parsing a simple in-code document
    CHEERP_SAFE_INLINE(
        void, (const char *c, const char *s), { client::console.log(c, s); },
        "\nParsing the small in-code JSON doc: ", docId.c_str());

    // fill a stream with JSON text
    // std::stringstream ss;
    // ss << smalltext;
    // parsing json string
    // json *jsmall = new json(json::parse(ss));    // This use always gives RuntimeError: index out of bounds!
    // parsing json string
    // json *jsmall = new json(json::parse(smalltext)); // This use always gives RuntimeError: index out of bounds!
    // json jsmall = json::parse(smalltext);  // normal
    json jsmall = json::parse(smalltext, nullptr, false); // parsing exceptions suppressed
    // see https://json.nlohmann.me/api/basic_json/parse/

    if (jsmall.is_discarded())
    { // Check if not parsed
      CHEERP_SAFE_INLINE(
          void, (const char *s), { client::console.error(s); },
          // "JSON in-code doc parse() with suppressed exceptions failed! ");
          "JSON in-code doc parse() failed! ");
    }
    else
    {
      CHEERP_SAFE_INLINE(
          void, (const char *s), { client::console.log(s); },
          "JSON in-code doc parsed! Now manipulate and dump it to string");
      // JSON manipulation (optional)
      // jsmall.at("Image").at("Height") = 888;  // does not work
      jsmall["Image"]["Height"] = 888;
      jsmall["Image"]["Title"] = "View from the roof";
      jsmall.update(test_tag);
      // Dumping JSON to string
      std::string outjstring = jsmall.dump();
      CHEERP_SAFE_INLINE(
          void, (const char *s), { client::console.log(s); }, outjstring.c_str());
    }
  }
  else
  {
    // Reading and parsing a JSON document supplied by the test web app
    CHEERP_SAFE_INLINE(
        void, (const char *c, const char *s), { client::console.log(c, s); },
        "++++++++++++++++++++++++++++++++++++++\nProcessing test from web app database:", docId.c_str());
    // Reading from web app database
    const std::string jsstring = readFromDatabase(docId);

    // parsing input document string
    //    json *jotest = new json(json::parse(*jsstring));
    json jotest = json::parse(jsstring, nullptr, false); // exceptions suppressed
    // json jotest = json::parse(*jsstring);    // Alternative (in stack)

    if (jotest.is_discarded())
    { // Check if not parsed
      CHEERP_SAFE_INLINE(
          void, (const char *s), { client::console.error(s); },
          // "JSON in-code doc parse() with suppressed exceptions failed! ");
          "JSON app DB doc parse() failed! ");
    }
    else
    {
      CHEERP_SAFE_INLINE(
          void, (const char *s), { client::console.log(s); },
          "JSON doc parsed into a JSON object!  Now manipulate and dump it to string");
      // Manipulation with JSON object (optional)
      // jotest->update(test_tag);
      jotest.update(test_tag);

      // Dumping JSON to string
      // std::string *outjstring = new std::string(jotest->dump());
      std::string outjstring = jotest.dump(); // Alternative
      // delete [] jotest;

      std::string snippetString = outjstring.substr(0, 80);
      const char *snippet = snippetString.c_str();
      CHEERP_SAFE_INLINE(
          void, (const char *s), { client::console.log(s); }, snippet);
      // Saving the dumped document back to web app database
      // saveToDatabase(docId, *outjstring);
      saveToDatabase(docId, outjstring);
      // delete [] outjstring;
    }
  }
  return (docId + "\n");
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Global vector of button name strings
// std::vector<std::string> *argW = new std::vector<std::string>();

// This is called upon a docId button click
//
[[cheerp::genericjs]] auto runJsonParseTest(const client::String docId)
{
  // client::console.log("--> runJsonParseTest", docId);
  const std::string docIdCpp = strJStoCPP(&docId);
  const client::String *jjsstr;

  if (docIdCpp != "runAllTests")
  {
    jjsstr = strCPPtoJS(runTestId(docIdCpp));
  }
  client::console.log("---------------------------- single test done: ", *jjsstr);
}

[[cheerp::genericjs]] void createButton(const client::String &docId)
{
  const std::string docIdCpp = strJStoCPP(&docId);
  addButton(docIdCpp, cheerp::Callback([&docId]()
                                        { runJsonParseTest(docId); }));
}

// This is called upon a docId button click
//
[[cheerp::genericjs]] auto runJsonParseTestAll(client::TArray<client::String> &argS)
{
  // client::console.log("--> runJsonParseTest", docId);
  const client::String *jjsstr;
  std::vector<std::string> argw;
  argw.clear();
  int argC = argS.get_length(); // Number of test keys provided by web app
  // client::console.log("Number of provided test JSON documents:", argC);
  for (int i = 0; i < argC; i++)
  {
    // client::console.log(" Test #", i, ", Id: ", argS[i]);
    const std::string argsi = strJStoCPP(argS[i]);
    argw.push_back(argsi);
  }
  argw.push_back("inCodeJSONfromNlohmann"); // button for in-code test example

  jjsstr = strCPPtoJS(runTestAll(argw));
  // jjsstr = strCPPtoJS(runTestAll(argW));
  client::console.log("runTestAll() done: ", *jjsstr,
                      "  ====================================");
}

[[cheerp::genericjs]] void createButtonAll(client::TArray<client::String> &argS)
{
  addButton("RUN_ALL_TESTS", cheerp::Callback([&argS]()
                                              { runJsonParseTestAll(argS); }));
}

// Populating list of tests and creating buttons for them
//
[[cheerp::jsexport]] [[cheerp::genericjs]] int jsonparse(client::TArray<client::String> &argS)
{
  // std::vector<std::string> *argW = new std::vector<std::string>();
  // argW->clear();
  auto argW = std::make_shared<std::vector<std::string>>();
  argW->clear();

  int argC = argS.get_length(); // Number of test keys provided by web app
  client::console.log("Number of provided test JSON documents:", argC);

  for (int i = 0; i < argC; i++)
  {
    // client::console.log(" Test #", i, ", Id: ", argS[i]);
    const std::string argsi = strJStoCPP(argS[i]);
    createButton(argsi.c_str());
    argW->push_back(argsi);
  }

  argW->push_back("inCodeJSONfromNlohmann"); // button for in-code test example
  createButton(argW->at(argC).c_str());

  // Button for calculation of all tests: allowed for now (uses global argW vector)
  createButtonAll(argS); // Making a button to run all tests

  // const client::String *jjsstr = new client::String("Hello");
  // const client::String *jjsstr = strCPPtoJS(runTestAll(argW));
  // const client::String *jjsstr = strCPPtoJS(runTestId("inCodeJSONfromNlohmann"));
  //client::console.log("runTestAll() done: ", *jjsstr);
  client::console.log("Ready to go...\n Please, click on any button with a test name\n  (several clicks to see if the parsing is stable)");

  return 0;
}

// //This function will be called only after the DOM is fully loaded
// [[cheerp::genericjs]] void loadCallback()
// {
//   client::console.log("--> loadCallback");
//   createButton("runAllTests");
// }

[[cheerp::genericjs]] void webMain() // leave emty webMain to suppress Cheerp compiler warnings
{
  // // client::console.log("--> webMain");
  // // Load here as we are fetching the test glue script on-demand, i.e. long after DOMContentLoaded event
  // loadCallback();
  // // client::document.addEventListener("DOMContentLoaded", cheerp::Callback(loadCallback));
}
