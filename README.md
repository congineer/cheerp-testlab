<!-- markdownlint-disable MD033 MD041 -->

<!-- HINT:  loading logo from local file is for debugging puroses only -->
<!-- ![Cheerp Testlab logo](./cheerp_testlab_logo.png "Cheerp Testlab") -->

<div align="center">
  <a href="https://github.com/congineer/cheerp-testlab">
    <img height="100" src="https://raw.githubusercontent.com/congineer/cheerp-testlab/master/cheerp_testlab_logo.png" alt="Cheerp Testlab">
  </a>
  <p></p>
  <a href="https://www.youtube.com/channel/UCT4TzDSHnq2e0p5YlF37NeQ">
    <img alt="YouTube channel: congineer" src="https://img.shields.io/badge/screencast%20channel-congineer-ff0000?style=for-the-badge&logo=youtube&logoColor=ff0000">
  </a><span>&nbsp;</span>
  <a href="https://opensource.org/licenses/mit">
    <img alt="Code license: MIT" src="https://img.shields.io/badge/code%20license-mit-greene.svg?style=for-the-badge&logo=Open+Source+Initiative&logoColor=white">
  </a><span>&nbsp;</span>
  <a href="https://creativecommons.org/licenses/by/4.0/">
    <img alt="Assets license: CC-BY" src="https://img.shields.io/badge/assets%20license-by%204.0-greene.svg?style=for-the-badge&logo=creative-commons&logoColor=white">
  </a>
  <br><p></p>
  <a href="https://nodejs.org/en/download/package-manager/">
    <img alt="Prerequisite mandatory: Node.js" src="https://img.shields.io/badge/prerequisite:%20mandatory-node.js-339933?style=for-the-badge&logo=node.js&logoColor=white&labelColor=blue">
  </a><span>&nbsp;</span>
  <a href="https://leaningtech.com/cheerp/">
    <img alt="Prerequisite optional: Cheerp compiler" src="https://img.shields.io/badge/prerequisite:%20optional-cheerp%20compiler-4fdbd1?style=for-the-badge&logo=c%2B%2B&logoColor=white">
  </a>
  <br><p></p>
  <a href="https://github.com/congineer/cheerp-testlab/tree/jsonparse">
    <img alt="Git branch stability: jsonparse" src="https://img.shields.io/badge/branch%20stability:%20jsonparse-unstable-ff6700?style=for-the-badge&logo=github&logoColor=f5f5f5">
  </a>
  <p></p><hr>
</div>

# CHEERP WEBASSEMBLY TESTING APP

## jsonparse tests

### Parsing and manipulating JSON in C++ using nlohmann/json.hpp

This is a lightweight [Snowpack](https://www.snowpack.dev/) application for rapid testing (with auto-reload on code change) of the [Cheerp](https://leaningtech.com/cheerp/) C/C++ to WebAssembly compiler with C++ code examples aimed at testing how the C++11 code performs, in particular, when it uses STL string arrays or [nlohmann/json](https://github.com/nlohmann/json) processing of complex JSON documents.

## Why C++ processing of JSON is needed?

* There are numerous C++ applications that access JSON databases (such as MongoDB, ArangoDB) and analyze or process the data. Porting such applications to WebAssembly allows running them on web browser clients and, thus, eventually reach the goals of massively scalable architecture and distributed computing.

* Building into WebAssembly the existing C++ codes that can parse/manipulate JSON would be a rapid, low-cost alternative to a tedious rewriting of parts of the C++ code in a way that JSON is processed in the JavaScript part.

* The nlohmann/json.hpp header, written in vanilla C++11 and tested on dozens of C++ compilers on linux, MacOS and Windows, is by far the most popular open-source code enabling the parsing and fine-grained access to JSON objects at various levels in C++ programs.

---

## Licensing

* Code (scripts and compiled code) under [MIT](LICENSE) license.
* Cheerp brand assets (icons, logos) under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) license. Copyright by Leaning Technologies Ltd.
* Brand assets (icons, logos) under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) license. Copyright by CONGINEER Ltd.
* Media assets (video, audio, graphics, animations) under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) license. Copyright by CONGINEER Ltd.

---

## How to download and run the test app

Clone the specific branch from the git repository (suppose in **git/testlab**) into your home directory:

~~~shell
mkdir -p ~/git/testlab
git clone -b jsonparse https://github.com/congineer/cheerp-testlab.git ~/git/testlab/cheerp
~~~

Install Node.js, as described:

* [Installing Node.js via package manager](https://nodejs.org/en/download/package-manager)

OPTIONAL: Install Cheerp compiler, as described:

* [For macOS/Windows](https://github.com/leaningtech/cheerp-meta/wiki/Windows-and-macOS-installation)
* [For ubuntu/debian linux](https://github.com/leaningtech/cheerp-meta/wiki/Ubuntu-Debian-installation-using-PPA)
* [For centos8/RHEL8 linux](https://github.com/leaningtech/cheerp-meta/wiki/RHEL8-and-CentOS-8-installation)

__NOTE:__ you may have to open build.sh script once to adjust the compiler binary path according to your Cheerp installation.

~~~shell
# IMPORTANT: adjust Cheerp bin path
#!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
compiler_bin=/opt/cheerp/bin/clang++
#!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
~~~

---

### How to run the test app

Open the **1st terminal** window, navigate to the test app folder

~~~shell
cd ~/git/testlab/cheerp
~~~

and start the app:

~~~shell
npm start
~~~

The test app will be loaded and then will open the app page in your default web browser. We recommend to open the browser console in order to watch the test results.

__NOTE:__ Upon any saved change in JavaScript code, the running web app will update automatically and will reload the browser page to reflect the changes.

---

To re-compile the C++ test file with Cheerp, open the **2nd terminal** window, navigate to the test app folder

~~~shell
cd ~/git/testlab/cheerp
~~~

and build the C++ target, e.g. here an example for jsonparse.cpp:

~~~shell
./build.sh cpp/jsonparse/jsonparse.cpp
~~~

__NOTE:__ Upon re-building the C++ target, the running web app will update automatically and will reload the browser page to reflect the changes.

## What is tested and how to test (Git branch "jsonparse")

### Parsing and manipulating JSON documents in C++ using nlohmann/json

The app part comprises a number of generated and real JSON documents of different complexity, containing various types of primitive and structured data as JSON aray elements of different size. The jsonparse.cpp code receives the list of document names and creates a button with each name in the browser app page.

A click on any button runs the test on the related JSON document, which is fetched as a string; parsed (de-serialized); manupilated/changed on purpose; dumped into a string; and sent back to the app part that compares it with the original JSON document to detect the corrupted data (if any). Errors that occur at different stages of this process will be visible as messages in the browser console.

Clicking on the "RUN ALL TESTS" button results in execution of all tests in a loop, which may break at some step because of a terminal error.

#### A how-to-test screencast will be available on YouTube: (link)

### How to test

* Open the browser console to see the test results logged there.
* Run a test by clicking on its test button (more than once to test the stability of processing JSON).
* Watch the test output and examine error messages (if any).

Currently, after reloading the browser page, the first test always fails (this may change in future). To start the testing process, click on the first button (the test fails) and then click on it once more. The test then normally passes o.k.; if not then disable the browser cache, clean the memory, reload the page, and try again.

### Description of test cases

The first test, "stable_on_2nd_run_after_page_load", contains a JSON array of 7 elements, each being a key-value pair with values of different types (string, number, boolean). This test works fine any number of times (provided it worked at least once in this session). The manipulation if JSON in the simplest case consists in adding a key-value pair { "tested": "yes" } at the top level, which is automatically accounted for in calculating the diff between the intial and the processed JSON document. Other test JSON documents form several groups. The number at the end of the test name usually indicates the number of elements in the tested JSON array.

#### intArr group

Tests in this group contain a JSON array of integers of a given length (10, 100k, 1M elements). They all pass, the largest only a few times, then shows "out of memory" error.

#### numArr group

Tests in this group contain a JSON array of numbers (double) of a given length (10, 100k, 1M elements). They all pass, the largest only a few times, then shows "out of memory" error.

#### boolArr group

Tests in this group contain a JSON array of boolean values (true, false) of a given length (10, 17, 27 elements). Currently only the shortest one passes, the one with 17 elements sporadically fails or shows data corruption, and the one with 27 elements always fails.

#### strArr group

Tests in this group contain a JSON array of strings with 10, 17, 27 elements. Currently only the shortest one passes, the one with 17 elements sporadically fails or shows data corruption, and the one with 27 elements always fails.

The tests with names ending on "Expanded" contain, in addition to strings, a number of array elements of simple type integer. Adding these integers allows the array with more elements strings to pass the test (to a limited extent).

#### objArr group

Tests in this group contain a JSON array made of 10, 17, 27 elements that are JSON key-value pairs. Currently only the shortest one passes, the ones with 17 and 27 elements sporadically fail or show the data corruption.

#### numStrObj group

Tests in this group contain a JSON map made of 10, 17, 27 key-value pairs. Currently, all three tests pass (probably because they do not contain an array of non-trivial objects).

#### nested1LevelNumStrObj

Tests in this group contain a JSON map made of 10, 17, 27 key-value pairs, with a nested JSON map also containing 10, 17, 27 key-value pairs. Currently, all three tests pass.

#### nestedDeepNumStrObj

Tests in this group contain a JSON map made of 10, 17, 27 key-value pairs, with JSON maps also containing 10, 17, 27 key-value pairs and nested on three levels. Currently, all three tests pass.

#### nested1LevelNumStrObjArr

Tests in this group contain a JSON array made of 10, 17, 27 key-value pairs, each array containing a nested JSON map made of several key-value pairs. Currently, only the shortest array passes, the ones with 17 and 27 elements sporadically fail or show the data corruption.

#### nestedDeepNumStrObjArr

Tests in this group contain a JSON array made of 10, 17, 27 key-value pairs, each array containing JSON maps made of several key-value pairs, nested in three levels. Currently, all three test fail.

#### ManualObject

These tests contain synthetic complex JSON documents containing arrays with simple-type elements on different levels. Both tests currently fail or show data corruption.

#### realDoc

This test is a real, large and complex JSON document from CemGEMS web app, which contains a partially equilibrated cement recipe. There is a lot of JSON processing in the backend GEMSW C++ code to manipulate such documents. Currently, it fails in 100% cases with an error message returned by json.hpp.

#### inCodeJSONfromNlohmann

This is an in-code test example JSON document taken from [nlohmann/json documentation](https://json.nlohmann.me/api/basic_json/parse/). This JSON snippet can be seen in /cpp/jsonparse/jsonparse.cpp(112-129). This test passes because the JSON array contains less than 7 elements.

TBD
