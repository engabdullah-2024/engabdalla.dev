// app/data/blogs.ts

export type Blog = {
  slug: string;
  title: string;
  des: string;
  image: string;
  author: string;
  content: string; // ✅ full blog body
};

export const blogs: Blog[] = [
  {
    slug: "modern-html-for-strong-foundations",
    title: "Modern HTML: Building Strong Foundations",
    des: "Learn what HTML really is, why semantic structure matters, and how to write clean markup that works for both users and browsers.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEc9A_S6BPxCDRp5WjMFEfXrpCu1ya2OO-Lw&s",
    author: "Eng Abdalla",
    content: [
      "HTML (HyperText Markup Language) is the skeleton of every website. It defines the structure of your content — headings, paragraphs, images, links, forms, and more. If you write strong HTML, everything else (CSS, JavaScript, SEO, accessibility) becomes easier.",
      "Modern HTML is not just about making something show on the page. It is about semantic structure. That means choosing the right tag for the right job: <header> for page headers, <nav> for navigation, <main> for the main content, <section> for logical sections, and <footer> for page footers. Semantic tags help screen readers, search engines, and other tools understand your page.",
      "When should you use HTML? Always. HTML is the starting point of every web project — from simple landing pages to complex apps. Even when you work with React, Next.js, or any framework, you still end up writing HTML (or JSX, which compiles to HTML).",
      "Simple example structure:\n- <header> for logo and navigation\n- <main> with sections for hero, features, and testimonials\n- <footer> for links, contact info, and social icons",
      "If you’re improving as a developer, mastering HTML is non-negotiable. Don’t rush it — learn semantic tags, proper nesting, and accessible patterns like labelled form fields and alt text on images."
    ].join("\n\n"),
  },
  {
    slug: "css-layouts-that-dont-break",
    title: "CSS Layouts That Don’t Break",
    des: "From Flexbox to Grid, learn how to design responsive layouts that stay stable from small screens to large desktops.",
    image: "https://wproom.com/wp-content/uploads/2024/01/css.png",
    author: "Eng Abdalla",
    content: [
      "CSS (Cascading Style Sheets) controls how your HTML looks. Fonts, colors, spacing, layout, animations — all of that is CSS. The problem many beginners face is layouts that break when the screen size changes.",
      "Modern CSS layout is built around two powerful tools: Flexbox and CSS Grid. Flexbox is great for one-dimensional layouts, like navbars or rows of cards. CSS Grid is better for two-dimensional layouts, like full page sections or dashboard grids.",
      "When to use Flexbox:\n- Centering content horizontally and vertically\n- Building navbars with logo on the left and links on the right\n- Simple card rows that wrap on smaller screens",
      "When to use Grid:\n- Complex page layouts with headers, sidebars, and content\n- Responsive grids that change the number of columns per breakpoint\n- Landing sections where text and image need to align in a clean grid",
      "Example mental model: Use Flexbox for aligning items in a row or column. Use Grid for designing the page skeleton. Combine both for best results. Always test your designs on mobile, tablet, and desktop breakpoints."
    ].join("\n\n"),
  },
  {
    slug: "javascript-from-basics-to-real-projects",
    title: "JavaScript: From Basics to Real Projects",
    des: "Understand variables, functions, events, and async logic — and how JavaScript connects your UI to real behavior.",
    image: "https://www.w3schools.com/js/img_javascript_480.jpg",
    author: "Eng Abdalla",
    content: [
      "JavaScript is the programming language of the web. While HTML structures the page and CSS styles it, JavaScript makes everything dynamic and interactive. It listens to user actions, updates the DOM, talks to APIs, and controls application logic.",
      "Core concepts to master include variables (let, const), data types (strings, numbers, arrays, objects), functions, conditionals, loops, and the DOM. Once you are comfortable with those, you move into modern topics: arrow functions, modules, promises, async/await, and fetch.",
      "When do you use JavaScript? Any time something needs to change without reloading the page: form validation, showing or hiding elements, loading data from an API, implementing a slider, or creating a dashboard.",
      "A simple example flow: You have a button. When the user clicks it, JavaScript listens for the click event, fetches some data from an API, and then updates an element on the page with the new content. That is the core pattern repeated in many web apps.",
      "JavaScript is also used outside the browser (with Node.js), which makes it a great language for full-stack developers who want to use one language on both frontend and backend."
    ].join("\n\n"),
  },
  {
    slug: "clean-interfaces-with-tailwind-css",
    title: "Clean Interfaces with Tailwind CSS",
    des: "How to use Tailwind’s utility classes to design fast, responsive, and professional UIs without fighting CSS.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaBW5lgIikdiDE8ejDn98rxwMHfzJKUIaEHg&s",
    author: "Eng Abdalla",
    content: [
      "Tailwind CSS is a utility-first CSS framework. Instead of writing long custom CSS files, you compose your UI with small utility classes directly in your markup: flex, items-center, justify-between, p-4, bg-slate-900, and so on.",
      "Why use Tailwind? It gives you a consistent design system (spacing, colors, typography) and speeds up development. You spend less time naming CSS classes and more time designing and shipping. It works especially well with component frameworks like React and Next.js.",
      "Typical use cases:\n- Building dashboards, SaaS landing pages, and admin panels\n- Quickly prototyping UI ideas\n- Creating responsive layouts with minimal custom CSS",
      "Example: Instead of writing a custom class .btn, you can write a button with inline utilities like: rounded-lg px-4 py-2 bg-blue-600 text-white hover:bg-blue-700. Over time you can extract common patterns into reusable components.",
      "Tailwind shines when combined with design systems (like shadcn/ui) where Tailwind classes power the styling under the hood, while you use React components on top."
    ].join("\n\n"),
  },
  {
    slug: "react-thinking-in-components",
    title: "React: Thinking in Components",
    des: "Break your UI into components, manage state, and build predictable interfaces using React hooks.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg1MndL-Xp1JcnqaB0YOqTp6zDjrwYyGKsPA&s",
    author: "Eng Abdalla",
    content: [
      "React is a JavaScript library for building user interfaces. Its key idea is ‘components’ — small, reusable pieces of UI that each manage their own structure, styling, and behavior.",
      "Instead of manipulating the DOM manually, you describe how the UI should look for a given state, and React updates the DOM for you when the state changes. Hooks like useState and useEffect allow you to manage local state and side effects in a clean way.",
      "When should you use React? For any project where the UI is dynamic: dashboards, SaaS apps, admin tools, multi-step forms, or anything with complex user interaction. For simple static landing pages, plain HTML/CSS or Next.js server-rendered pages might be enough.",
      "A mental example: You have a TodoList component with a list of tasks in state. When the user submits a form, you add a new task to the array. React re-renders the list, and the UI updates automatically. No manual DOM query or innerHTML needed.",
      "React becomes even more powerful when paired with Next.js, TypeScript, and a design system. You get routing, data fetching, and type safety on top of your components."
    ].join("\n\n"),
  },
  {
    slug: "nextjs-for-production-ready-apps",
    title: "Next.js for Production-Ready Apps",
    des: "Use Next.js to handle routing, data fetching, and performance so you can focus on building real features.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiK-0QP1g5jIyVrxe13ViM3nDde7k5oup_EQ&s",
    author: "Eng Abdalla",
    content: [
      "Next.js is a React framework designed for production. It adds file-based routing, server rendering, static generation, API routes, and powerful data-fetching patterns on top of React.",
      "With Next.js you can choose how each page is rendered: static at build time, server-side on every request, or as a client-side React component. This flexibility helps with SEO, performance, and user experience.",
      "You should use Next.js when building serious web applications: SaaS products, dashboards, blogs, documentation sites, and marketing pages — especially when SEO and performance matter.",
      "Example patterns:\n- Create pages simply by adding files under app/ or pages/\n- Fetch data on the server to keep secrets secure\n- Use dynamic routes for resources like /blogs/[slug] or /projects/[id]",
      "Next.js works extremely well with TypeScript, Tailwind CSS, Prisma, and MongoDB, forming a modern full-stack setup that is popular in many companies today."
    ].join("\n\n"),
  },
  {
    slug: "why-typescript-makes-you-a-better-dev",
    title: "Why TypeScript Makes You a Better Dev",
    des: "Type safety, great autocompletion, and fewer runtime bugs — TypeScript helps you build more confident code.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Typescript.svg/1200px-Typescript.svg.png",
    author: "Eng Abdalla",
    content: [
      "TypeScript is a superset of JavaScript that adds static typing. This means you can describe the shapes of your data — objects, arrays, functions — and get errors at compile time instead of at runtime.",
      "In modern full-stack apps, TypeScript gives you better autocomplete, safer refactoring, and clearer contracts between frontend and backend. You can define types or interfaces for your API responses, database models, and component props.",
      "When to use TypeScript? Almost always for production apps, especially if the codebase will grow over time or multiple developers will work on it. For small throwaway scripts, plain JavaScript might be simpler.",
      "Simple example: Instead of guessing what a function expects, you declare it: function add(a: number, b: number): number. Now TypeScript prevents you from passing a string accidentally.",
      "TypeScript truly shines when combined with tools like Prisma (type-safe database queries), Next.js (typed server components and routes), and React (typed props and hooks)."
    ].join("\n\n"),
  },
  {
    slug: "nodejs-building-backends-with-javascript",
    title: "Node.js: Building Backends with JavaScript",
    des: "Use Node.js to run JavaScript on the server, build APIs, CLIs, and background workers.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png",
    author: "Eng Abdalla",
    content: [
      "Node.js allows you to run JavaScript outside the browser. It uses an event-driven, non-blocking I/O model that makes it efficient for building APIs and real-time applications.",
      "With Node.js you can create HTTP servers, CLI tools, bots, task runners, and background jobs. It powers a huge ecosystem of libraries through npm and is widely used for backend services in modern startups.",
      "When to choose Node.js? If your team already knows JavaScript and you want to reuse skills on both frontend and backend, Node.js is an excellent choice. It is perfect for JSON APIs, microservices, and real-time features like chat.",
      "Example flow: A client sends a request to /api/users, Node.js receives it, talks to the database, then responds with JSON. Frameworks like Express.js make this even easier by handling routing and middleware.",
      "Pair Node.js with TypeScript, Express.js (or NestJS), and a database like MongoDB or PostgreSQL for a powerful full-stack setup."
    ].join("\n\n"),
  },
  {
    slug: "expressjs-apis-that-stay-maintainable",
    title: "Express.js: APIs That Stay Maintainable",
    des: "Express.js gives you a minimal but powerful way to build clean, structured REST APIs on top of Node.js.",
    image: "https://miro.medium.com/v2/resize:fit:1400/1*XP-mZOrIqX7OsFInN2ngRQ.png",
    author: "Eng Abdalla",
    content: [
      "Express.js is a minimal web framework for Node.js. It handles HTTP requests and responses, routing, and middleware, giving you a simple way to build REST APIs.",
      "The core idea is middleware: small functions that run in sequence for each request. You can use them to log requests, check authentication, parse JSON bodies, or handle errors.",
      "Use Express.js when you need full control over your API structure without a heavy framework. It is great for learning backend fundamentals and still powers many production systems.",
      "Simple conceptual example:\n- app.get('/api/users') to return a list of users\n- app.post('/api/users') to create a new user\n- app.use(errorHandler) to handle errors in one place",
      "Express becomes even more powerful with TypeScript and proper folder structure: routes, controllers, services, and database layers separated clearly."
    ].join("\n\n"),
  },
  {
    slug: "mongodb-for-modern-web-apps",
    title: "MongoDB for Modern Web Apps",
    des: "A flexible NoSQL database that stores JSON-like documents, great for fast-moving modern applications.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png",
    author: "Eng Abdalla",
    content: [
      "MongoDB is a document-oriented NoSQL database. Instead of tables and rows, you have collections and documents (which look similar to JSON objects). This makes it very natural to use with JavaScript and TypeScript.",
      "MongoDB is a good fit when your data is flexible, when schemas might evolve quickly, or when you want to prototype fast. It is often used in MERN and similar stacks with Node.js, Express, and React/Next.js.",
      "Common use cases:\n- User profiles and authentication data\n- Content for blogs, dashboards, and SaaS apps\n- Event logs and analytics data",
      "Even though MongoDB is schema-less, you should still design your models carefully: decide which fields are required, how to reference or embed related documents, and how to index queries for performance.",
      "Using tools like Prisma or Mongoose on top of MongoDB brings structure and type safety, helping you avoid many common mistakes."
    ].join("\n\n"),
  },
  {
    slug: "prisma-the-orm-that-feels-modern",
    title: "Prisma: The ORM That Feels Modern",
    des: "Prisma gives you a typed, schema-first way to work with databases from TypeScript and Node.js projects.",
    image: "https://miro.medium.com/v2/1*1d4T0TNb33A7Dus2ePdN_g.jpeg",
    author: "Eng Abdalla",
    content: [
      "Prisma is a modern ORM (Object-Relational Mapper) that connects your TypeScript/Node.js app to databases like PostgreSQL, MySQL, MongoDB, and more. It generates a type-safe client based on a schema you define.",
      "The workflow is: you describe your models in schema.prisma, run a migration, and Prisma generates a client. That client has fully typed methods like prisma.user.findMany() or prisma.post.create().",
      "Why use Prisma? It reduces boilerplate, improves type safety, and makes database queries easier to read and maintain. You get autocomplete for fields, relations, and filters directly in your editor.",
      "Example mental model: Instead of writing raw SQL, you write queries like prisma.user.findUnique({ where: { email } }). TypeScript ensures you don’t query fields that don’t exist or pass wrong data types.",
      "Prisma fits perfectly with Next.js and TypeScript. It encourages a clean, schema-first approach to your data layer, which is exactly what you want for professional full-stack applications."
    ].join("\n\n"),
  },
  {
  slug: "Python",
  title: "Python: Backend APIs & Fast Automation",
  des: "How Python helps you build clean backend APIs, automate boring tasks, and prototype ideas quickly.",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkUB_nE3PpnmOUQoiR4FvY8H7D_eT2KBOz2g&s",
  author: "Eng Abdalla",
  content: [
    "Python is a high-level, beginner-friendly programming language that’s used for everything from small scripts to large production systems. Its clean syntax and huge ecosystem make it perfect for backend APIs, automation, data analysis, and more.",
    "In web development, Python shines when you pair it with frameworks like Django and FastAPI. Django gives you a full batteries-included framework (auth, ORM, admin panel), while FastAPI focuses on building fast, modern REST APIs with async support and automatic docs.",
    "One of Python’s superpowers is automation. You can write small scripts to rename files, send emails, scrape websites, or interact with APIs. Instead of doing repetitive tasks manually, you automate them once and reuse the script whenever you need.",
    "A good mental model: use Python for anything that feels like a repeatable workflow. For example, a script that reads data from a CSV, cleans it, and pushes it into your database or a Google Sheet. Each script is like a tiny worker that never gets tired.",
    "Python also plays nicely with JavaScript/TypeScript. You can have a Next.js frontend talking to a FastAPI or Django REST backend written in Python. This lets you combine the best of both worlds: a modern React-based UI and a powerful, flexible Python server."
  ].join("\\n\\n"),
},

];

