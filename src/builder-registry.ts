"use client";
import { Builder } from "@builder.io/react";
// import Counter from "./components/Counter/Counter";
import HeaderOne from "./components/Headers/HeaderOne";

// Builder.registerComponent(Counter, {
//   name: "Contador",
//   inputs: [
//     {
//       name: "initialCount",
//       type: "number",
//     },
//   ],
// });

Builder.registerComponent(HeaderOne, {
  name: "HeaderOne",
  inputs: [
    { 
      name: 'Escolhar a Logo',
      type: 'file', 
      allowedFileTypes: ['jpeg', 'png', 'svg'] 
    }
  ],
});
