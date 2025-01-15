## POWF 

An issue tracking app that is _not Jira_. 🙃 

### Application Description:
The `powf` application is designed as an issue tracking tool, aiming to offer a lightweight yet powerful alternative to existing solutions like Jira. It leverages the strengths of Next.js for efficient rendering and static site generation, TypeScript for robust type safety, and Tailwind CSS along with Radix UI for a modern and accessible interface. Postgres serves as the primary database via Neon for cloud-native PostgreSQL), managed through Prisma for seamless interaction. Sentry is integrated to ensure that any errors encountered during operation are promptly identified and addressed, contributing to a stable and reliable user experience.

💻 Check out [POWF](https://powf-issue-tracker.vercel.app/) now! ✅

---

### Technologies Used:

- **Next.js**: A React framework for building server-side rendered and static web applications.
- **TypeScript**: Adds optional types to JavaScript, enhancing code quality and developer productivity.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Radix UI**: Provides accessible components for building high-quality design systems and web applications.
- **Neon**: An open-source cloud-native PostgreSQL.
- **Prisma**: Simplifies database access and schema management with TypeScript.
- **Postgres**: An open-source relational database system for data storage. (Using [Neon](https://neon.tech/))
- **Sentry**: Monitors and tracks errors in real-time, improving application stability and developer efficiency.





### Integration of Sentry:

Sentry is configured to work seamlessly with Next.js, utilizing its capabilities to automatically capture unhandled exceptions and deprecations, measure performance, and collect other valuable insights. This integration is facilitated through the Sentry SDK, which is set up to automatically detect and report errors across the application's client, server, and edge runtimes. Developers can further customize Sentry's behavior by adding specific integrations relevant to their application's needs, such as the `BrowserTracing` integration for enhanced performance monitoring in the browser runtime.

The integration of Sentry into the `powf` project underscores the importance of proactive error monitoring and tracking in modern web application development. By leveraging Sentry, the development team can focus on building new features and improvements with confidence, knowing that potential issues will be quickly detected and addressed.



---

If you'd like to get started with your own version of the project, developers can clone the repository and run the development server using npm, yarn, or pnpm. The application can then be accessed locally via `http://localhost:3000`.

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

This project showcases a modern approach to building web applications, combining the latest technologies to create a robust, scalable, and user-friendly issue tracking tool.



> This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


<!-- You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details. -->
