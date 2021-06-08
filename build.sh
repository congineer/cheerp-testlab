#!/bin/bash

# HOW-TO: this file accepts ONE argument: path to a C++ file
# EXAMPLE: $ bash build.sh PATH_TO/file.cpp
# EXAMPLE: $ ./build.sh PATH_TO/file.cpp

# IMPORTANT: adjust Cheerp bin path according to your system installation
#!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
compiler_bin=/opt/cheerp/bin/clang++ # cheerp compiler path on the system
#!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

# INFO: this is a very simple Cheerp->Snowpack build script, i.e. a stripped down
# version of an elaborated Cheerp->Webpack ES6-module-imports build script.

#____________________________________[+]_BUILD WASM/JS FOR SNOWPACK
# Define repetitive messages
abort="\n\nScript execution aborted!"

# Init timer with nanosecond time stamp
ts=$(date +%s%N) # nanoseconds

# Prevent operation if target file.cpp not provided
[[ $# -eq 0 ]]  && { # if zero arguments
	echo -e "\nThis script must be run with a target file argument, e.g. $0 file.cpp $abort"; exit 1
}

# Get the script argument
file_target=$1 # DIRPATH/file.cpp, i.e. path to C++ file is the first script argument
echo -e "-->    : Initiating Cheerp build for the file target: $file_target"

# Get target basename
target_filename="${file_target##*/}" # strip PATH from PATH/file.cpp to get naked file.cpp
target_basename="${target_filename%.*}" # strip extension from file.cpp to get base 'file'

# Define paths
app_dir="app" # simplified version here: a relative path
js_dir="cheerp/$target_basename" # simplified version here: a relative path
wasm_dir="cheerp/$target_basename" # simplified version here: a relative path
js_target_dir="$app_dir/$js_dir" # simplified version here: a relative path
wasm_target_dir="$app_dir/$wasm_dir" # simplified version here: a relative path


# Define targets
js_target="$js_target_dir/$target_basename.js" # assemble GlueJS target: APP/JS_DIR/file.js
wasm_target="$wasm_target_dir/$target_basename.wasm" # assemble WASM target: APP/WASM_DIR/file.wasm

# Set secondary output path to wasm target for simple Snowpack serve
secondary_wasm_target="$wasm_dir/$target_basename.wasm"
# echo -e "secondary_wasm_target: $secondary_wasm_target"
# echo -e "target_filename: $target_filename \ntarget_basename: $target_basename"

# Ensure build target directory exists
mkdir -p $js_target_dir $wasm_target_dir

# Compile to WASM and GlueJS code
echo -e "«¦»    : Compiling C++ to WASM/GlueJS..."
if [[ -n $file_target ]]; then # lightweight file build
	COMPILE=( # define compile command array
		$compiler_bin # system path to Cheerp compiler
		-target cheerp-wasm $file_target # C++ compile target
		# -I cpp/dom # additional directory to search includes
		-o $js_target -O3 # JS glue code output
		-fcxx-exceptions -frtti # -fexceptions same as in cmake environment
		-cheerp-secondary-output-file=$wasm_target # WASM code output
		-cheerp-secondary-output-path=$secondary_wasm_target # set path to WASM output inside JS glue code output
		# -cheerp-linear-heap-size=256 -cheerp-linear-stack-size=32 # 32 times default
		# ASK: if Cheerp has something similar to allocate/free buffer as in Emscripten: https://emscripten.org/docs/porting/connecting_cpp_and_javascript/Interacting-with-code.html#access-memory-from-javascript
		-cheerp-linear-heap-size=1024 -cheerp-linear-stack-size=256
		-cheerp-avoid-wasm-traps # to make the same environment for all
		-cheerp-pretty-code # IMPORTANT: not minified glue code is mandatory for further modification for webpack
		-cheerp-strict-linking=warning
		# -cheerp-strict-linking=error
		# -v # verbose
		# -fno-exceptions
		)
	"${COMPILE[@]}" # expand array and execute it
fi
echo -e "-->    : C++ compiled to WASM/GlueJS"

# Echo duration from nanosecond timer
ms=$((($(date +%s%N) - $ts)/1000000)) # milliseconds
s=$(($ms/1000)) # seconds
let "hours=s/3600"
let "minutes=(s%3600)/60"
let "seconds=(s%3600)%60"
let "milliseconds=ms%1000"
# echo "hours: $hours; minutes: $minutes; seconds: $seconds; milliseconds: $milliseconds"

if [[ $hours > 1 ]]; then echo -e "Completed in $hours hour(s), $minutes minute(s) and $seconds second(s)"
elif [[ $minutes > 1 ]]; then echo -e "Completed in $minutes minute(s) and $seconds second(s)"
elif [[ $seconds > 10 ]]; then echo -e "Completed in $seconds second(s) and $milliseconds milliseconds(s)"
else echo -e "»·«    : ...completed in $ms millisecond(s)"
fi
#____________________________________[-]_BUILD WASM/JS FOR SNOWPACK
