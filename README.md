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
  <a href="https://github.com/congineer/cheerp-testlab/tree/master">
    <img alt="Git branch stability: master" src="https://img.shields.io/badge/branch%20stability:%20master-stable-greene?style=for-the-badge&logo=github&logoColor=f5f5f5">
  </a><span>&nbsp;</span>
  <a href="https://github.com/congineer/cheerp-testlab/tree/jsonparse">
    <img alt="Git branch stability: jsonparse" src="https://img.shields.io/badge/branch%20stability:%20jsonparse-unstable-ff6700?style=for-the-badge&logo=github&logoColor=f5f5f5">
  </a>
  <br><p></p>
  <a href="https://alm.congineer.com/plugins/git/testlab/cheerp?a=tree&hb=runxgems">
    <img alt="Git branch stability: runxgems" src="https://img.shields.io/badge/branch%20stability:%20runxgems-stable-greene?style=for-the-badge&logo=git&logoColor=f34f28">
  </a><span>&nbsp;</span>
  <p></p><hr>
</div>

# CHEERP WEBASSEMBLY TESTING APP

This is a lightweight [Snowpack](https://www.snowpack.dev/) application for rapid testing (with auto-reload on code change) of the [Cheerp](https://leaningtech.com/cheerp/) C/C++ to WebAssembly compiler with C++ code examples.

## Why C++ compiling to WebAssembly (WASM) is needed?

* There are many C++ applications that analyze or process data. Porting such applications to WebAssembly allows running them on web browser clients and thus eventually reach the goals of massively scalable architecture and low-cost computing.

---

## Licensing

* Code (scripts and compiled code) under [MIT](LICENSE) license.
* Cheerp brand assets (icons, logos) under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) license. Copyright by Leaning Technologies Ltd.
* Brand assets (icons, logos) under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) license. Copyright by CONGINEER Ltd.
* Media assets (video, audio, graphics, animations) under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) license. Copyright by CONGINEER Ltd.

---

## How to download and run the test app

Clone the git repository (suppose in **git/testlab**) into your home directory:

~~~shell
mkdir -p ~/git/testlab/cheerp
git clone https://github.com/congineer/cheerp-testlab.git ~/git/testlab/cheerp
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

### To run the test app

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

and build the C++ target, e.g. here an example for buttons.cpp:

~~~shell
./build.sh cpp/buttons/buttons.cpp
~~~

__NOTE:__ Upon re-building the C++ target, the running web app will update automatically and will reload the browser page to reflect the changes.

## What is tested and how to test

### Git branch "master" is a basic Cheerp test application

The app part consists of two versions of a basic "buttons" test. Cheerp version to showcase both WebAssembly and JavaScript compiled methods. Pure JavaScript version to allow direct performance profiling against the Cheerp one.

To run the pure Javescript version uncomment it in `app/js/index.js` whilst commenting out the Cheerp one.

#### A how-to-test screencast will be available on YouTube: (link)

### How to test

* Open the browser console to see test results logged there.
* Run a test by clicking on its test buttons.
* Watch the test output and examine error messages (if any).

### Description of test cases

TBD
