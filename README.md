# BasicJavaConcepts
This repository is to experience both JavaScript and GitHub: Must be moved to JS repo of its own.
=====================================================================================

# How javascript works behind the scene.

Basic defination: Javascript is a high-level, object-oriented, multi-paradign programming language.

Advan Defination: Javascript is a high-level, object-oriented, multi-paradign, prototype-based, interpretted or just-in-time compiled, dynamic, single-treaded, grabage-collected programing language with first-class functions and a non-blocking event loop concurrency model.

More about interpreted or just in time compiled.
paradigm: coding styles
they are Imperative or Declarative // read more about his.
Top ones:
1. Procedural programming
2. Object-oriented programming
3. Functional programming


// Handling controls form keyboard:
KeyDown
KeyUp
Keypress: As long as key is pressed, the event will be created continuesly.

JS engine - V8 by google,
Powers chrome and nodeJS.

JS used to be purely interpretted language, but interpretted langs are not fast.
To build full applications with slow lang is not acceptable.
Thus JS engines line V8 used mix of compilation and interpretation called: Just in time compilation.

AST: abstract syntax tress: parsed JS code.

AST then gets compiled to generate machine code.

JS Runtime: Its a box or container that includes everything we need to run the JS code.
> The heart of runtime is JS engine(V8),
> We also need access to WEB APIs additional functions given thru window object.
> callBack Queue: aka Execution queue (events, timers, data)

For NodeJS: There are no webAPIs, But there are C++ Bindings and THREAD POOL. More on this later.



