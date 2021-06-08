# CHEERP WEBASSEMBLY TESTING APP

This is a lightweight [Snowpack](https://www.snowpack.dev/) application for rapid testing (with auto-reload on code change) of the [Cheerp](https://leaningtech.com/cheerp/) C/C++ to WebAssembly compiler with C++ code examples.

## Why C++ compiling to WebAssembly (WASM) is needed?

* There are many C++ applications that analyze or process data. Porting such applications to WebAssembly allows running them on web browser clients and thus eventually reach the goals of massively scalable architecture and low-cost computing.

### License

* MIT license
* See LICENSE file

___

### How to download and run the test app

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

___

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

___

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
