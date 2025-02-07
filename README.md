# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Project Overview:
A straightforward project in theory, but involves a lot of technical elements. The execution of these elements can be done in several ways and be refactored several more ways.
My approach was not to overcomplicate the brief and layout the folder structure as intuitively as possible hopefully allowing other Devs to follow along and know where everything is.


Setup:
To start the project 'cd' to the root directory and type "npm run dev"
I used Vite to setup and build the project as it comes with quick out of the box configurations ( React, JavaScript )


Technical Decisions:
As the brief requested, I initially started working on the project in Typescript, however when it came to  structuring prop  types for the hooks and working with createContext I admittedly struggled and came up against a lot of syntax issues. As time ticked on I was very conscious that I wouldn't be able to complete the brief so I abandoned the project and started again using .jsx.
Although defeated by .tsx, I wanted to complete the project and for my own peace of mind be happy with the level of work submitted.
I thought it best to work with what I know and tools that I think are the most intuitive which is why I used react router dom for the routing, radixUI for the toast notification and the context provider for global state management.
For projects, I tend to style using SCSS, but for efficiency I opted for the styled-components option.

Fetching and displaying the data was straightforward, when it came to styling the pages i thought it best to mimic real world PDP pages as they are laid out in that manor for a reason.

Another issue I came up against was the 'Create Cart' within mock.shop  as I initially attempted to use the POST requests to build the mini basket. I couldn't work out if I needed to be fetching specific product variant data in order to retrieve the merchandiseId.
The only option I could then think of to retrieve the added basket options was to save the items within localStorage.


Potential Improvements:
Manipulation of the data in localStorage to allow quantity changes within the mini basket