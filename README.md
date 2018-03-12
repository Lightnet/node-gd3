# node-gd3

Created by: Lightnet

# Notes:
 * Work in progress.
 * It will require godot engine github branch 3.0 to run build for modules setup.
 * Just testing websocket and modules test builds.

# Information:
 Test build for nodejs server with godot engine 3.0 application export to html game. To build the game client and server it required some javscript in nodejs. Since gulp package can be auto task builds scripts.

# Notes:
 * Might need to used godot git build to able to call function in module setup.

# Project File layout:
 * dist (server host public)
 * godot3_app (godot engine 3 project)
 * src (nodejs client/server)
 * modules (godot module)

# Programs:
 * Godot Engine 3.0
 * Nodejs 8.9.4 LTS
 * Visual Studio Code 1.20.1
 * Git

# Install:
 * Python 2.7.x (emscripten sdk) (godot) (recommended)
 * Python 3.x (godot) optional
 * Git 2.16.2

 * emscripten sdk 1.37.35 (https://kripken.github.io/emscripten-site/index.html)
If you are on window you might getting error on download. Manual download file and place zip folder depend files down unless it fixed.

 * Viusal Studio 2017
 * Viusal Studio Code

 * check out godot 3.0 branch and the master branch it tend to fail to compile for modules builds.
 * https://github.com/godotengine/godot

```
system path:

EMSCRIPTEN C:\emsdk\emscripten\1.37.35
```
 * You need to edit window system variable paths.

```
@echo off
rem setup build context
call "C:\Program Files (x86)\Microsoft Visual Studio\2017\Community\VC\Auxiliary\Build\vcvars64.bat"

rem update repo
cd C:\godot
git pull origin

rem build
scons platform=windows
pause

```
 * Batch file command
 * Need to be in godot folder and git to update and build.

```
scons platform=javascript tools=no target=release
```
 This is for html javascript build


 If all thing work out that should at least build application execute.

# Guides:
 * Modules build is not unless you know how to setup right for c++, javascript and python. But as long you understand some basics.

 * godot_app folder is the godot project folder test build.


godot.windows.tools.64.exe --export "Windows Desktop" -path "E:\srctree\node-gd3\godot3_app" "E:\srctree\node-gd3\assets"
godot.windows.tools.64.exe --export "levels/Main.tscn" -path "E:\srctree\node-gd3" "E:\srctree\node-gd3\assets"


# refs:
 * http://docs.godotengine.org/en/3.0/getting_started/workflow/export/exporting_for_web.html?highlight=javascript
 * http://docs.godotengine.org/en/3.0/getting_started/workflow/export/customizing_html5_shell.html
 * http://docs.godotengine.org/en/3.0/development/compiling/compiling_for_web.html?highlight=web%20export
 * http://docs.godotengine.org/en/3.0/getting_started/workflow/export/customizing_html5_shell.html?highlight=web%20export#doc-javascript-engine-object
 * https://godotengine.org/qa/23735/possible-call-gdscript-function-javascript-project-export?show=23735#q23735
 * http://docs.godotengine.org/en/3.0/development/cpp/creating_android_modules.html?highlight=module
 * https://www.reddit.com/r/godot/comments/7zfcmd/wrote_a_text_tutorial_on_how_i_finally_got_vscode/
 * http://docs.godotengine.org/en/3.0/development/compiling/compiling_for_windows.html