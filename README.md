# Davis Williams TypeScript Portfolio

This is my personal portfolio website, built to showcase different projects I've contributed to in some way. 

The site has two modes:

- **Simple Mode**: A clean, resume-like view - meant to be easily readable without any fancy effects.
- **Cool Mode**: A more interactive and visually appealing (maybe) experience with fancy effects

## Features

- Responsive mobile/desktop layout
- Dynamic content for About and Projects
- Toggle button between simple/cool mode
- Adjustable verbosity for descriptions (ranging from short -> very detailed)
- Interactive header w/ random dynamic text
- Modular component system built with TypeScript using vanilla DOM manipulation

## Tech Stack

- TypeScript
- CSS
- Vite
- Vercel (hosting)

## Project Structure

```bash
/src
    /data # Filler/back-up for projects/about (including some types)
    /layout # Layout elements (nav bar, header)
    /sections # Each project section (About, Projects, Contact)
    /state # Home to 1 file, but where we'd have more state containers
    /styles # All .css files, including simple_mode styling
    /utils # Utilitiy and helper functions used across the project
    index.html # HTML Entry
    main.ts # Entry TypeScript file
```

## Installation

Installation is fairly basic and straightforward. Here's the steps to get it up and running.


Clone the repository:

```bash
git clone https://github.com/dwilliams304/typescript-portfolio.git
cd typescript-portfolio
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

## Usage

- Toggle between Simple/Cool Mode using the button under the sections list.
- Adjust the description length for the projects and about section via radio buttons.
- Click the header to randomize the displayed name.

## Contributing

This repository is a personal projects, and therefore contributions are not generally accepted. However, if you (for some reason) really, really, really want to, they're welcome for:

- Improving UI/UX
- Refactoring/optimizations


## Dev Notes

This project was a challenge to be able to understand TypeScript (and therefore, vanilla JavaScript) much better. It additionally very quickly answered the reasoning behind many javascript frameworks existing. I tend to have a preference towards statically typed languages, and TypeScript helped to slightly ease the pain of the errors that can easily come with JavaScripts dynamic typing.

React, while it is a huge time saver in development - I greatly appreciate the small size and the efficiency behind not using/building your own custom frameworks. For something like this, where it is very small - I do not need most of what React has to offer other than the reactivity.

I built this especially to see how to handle reactivity/state in a vanilla (non-framework) environment. And it definitely proves many points behind using a framework in the first place.