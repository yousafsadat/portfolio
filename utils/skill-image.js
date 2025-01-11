import html from '../app/assets/svg/skills/html.svg';
import css from '../app/assets/svg/skills/css.svg';
import javascript from '../app/assets/svg/skills/javascript.svg';
import typescript from '../app/assets/svg/skills/typescript.svg';
import react from '../app/assets/svg/skills/react.svg';
import nextJS from '../app/assets/svg/skills/nextJS.svg';
import tailwind from '../app/assets/svg/skills/tailwind.svg';
import mongoDB from '../app/assets/svg/skills/mongoDB.svg';
import git from '../app/assets/svg/skills/git.svg';
// import go from '../app/assets/svg/skills/go.svg';
import figma from '../app/assets/svg/skills/figma.svg';
import materialui from '../app/assets/svg/skills/materialui.svg';
import express from '../app/assets/svg/skills/express.svg';
import nodeJS from '../app/assets/svg/skills/node-js.svg';

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'html':
      return html;
    case 'css':
      return css;
    case 'javascript':
      return javascript;
    case 'typescript':
      return typescript;
    case 'react':
      return react;
    case 'next js':
      return nextJS;
    case 'tailwind':
      return tailwind;
    case 'mongodb':
      return mongoDB;
    case 'git':
      return git;
    // case 'go':
    //   return go;
    case 'figma':
      return figma;
    case 'materialui':
      return materialui;
    case 'express':
      return express; // Ensure `express` SVG is imported.
    case 'node.js':
      return nodeJS; // Ensure `nodeJS` SVG is imported.
    case 'tailwind ui':
      return tailwind; // Assuming you use the same SVG for Tailwind and Tailwind UI.
    default:
      break;
  }
};
