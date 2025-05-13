# Capitalism 🦈

[![GitHub](https://img.shields.io/badge/Source-GitHub-black?logo=github)](https://github.com/junaid-mohammad/Capitalism)
[![Azure DevOps](https://img.shields.io/badge/Version%20Controlled-Azure%20DevOps-blue?logo=azure-devops)](https://dev.azure.com/Junaid-Arif/Capitalism)
[![Azure App Service](https://img.shields.io/badge/Hosted%20on-Azure%20App%20Service-brightgreen?logo=microsoft-azure)](https://capitalism-prod-url.com) <!-- Replace with real link -->

This repository contains the source code for **Capitalism**, a chaotic, meme-fueled quiz game that asks: _how well do you know your capital cities?_ Get it right and grow your net worth. Get it wrong... and suffer the consequences. It’s ruthless, unhinged, and unapologetically capitalist.

---

## 🖥️ Live Website

👉 **[Capitalism Quiz](https://capitalism-prod-url.com)** _(Hosted on Microsoft Azure)_  
👉 **[Azure DevOps Project](https://dev.azure.com/Junaid-Arif/Capitalism)**  
👉 **[GitHub Repository](https://github.com/junaid-mohammad/Capitalism)**

---

## 🎯 Purpose

**Capitalism** was designed to:

- Reinforce my experience building **full-stack apps** with **Node.js**, **Express**, and **EJS**.
- Build an app with a **fully dynamic back-end** and **PostgreSQL** integration.
- Explore **server-side rendering**, user input handling, and quiz state management.
- Design a bold, humorous, and mobile-friendly **UI/UX**.
- Structure an app for **long-term maintainability**, including **modular EJS partials** and organized static assets.
- Use **Azure App Service** and **multi-remote Git setups** with **GitHub + Azure DevOps**.
- Lay the groundwork for future **CI/CD integration via GitHub Actions** or **Azure Pipelines**.

---

## 🛠️ Features

- **Random Country Prompts**: Every round presents a new country for which you must guess the capital.
- **Immediate Feedback**: The app roasts you with brutal messages on failure. No sugar-coating.
- **Net Worth Tracking**: Your score is styled as "Net Worth" to match the theme.
- **Passive-Aggressive UX**: Button labels like _“Short your IQ”_ and _“Liquidate your pride”_ rotate with each round.
- **Game Over Screen**: A generationally humiliating message and the correct answer are displayed if you fail.
- **Mobile Responsive**: Looks clean and savage across screen sizes thanks to **CSS Flexbox** and media queries.
- **Custom Background + Theming**: Consistent visual identity through SVG backgrounds, bold fonts, and emoji branding.
- **Modular EJS Structure**: Views are divided into partials (`header`, `footer`) for cleaner maintenance.
- **Scripts & Styling**: Submit button insults and Game Over content are handled via separate JS modules.

---

## 💻 Technologies Used

- **Node.js** — JavaScript runtime
- **Express** — Web framework
- **EJS** — Embedded JavaScript templates
- **PostgreSQL** — Relational database
- **pg** — Node.js PostgreSQL client
- **Body-Parser** — Middleware for form data
- **JavaScript (Client-side)** — Handles dynamic button labeling and Game Over rendering
- **HTML5 / CSS3** — Semantic layout and styling
- **Flexbox & Media Queries** — Responsive layout design
- **Azure App Service** — Production hosting
- **Azure DevOps** — Secondary version control and CI/CD
- **GitHub** — Main repository + Actions for future CI/CD setup

---

## 🧠 What I Learned

- Managing a **game state** server-side using variables and logic.
- Dynamically rendering responses with **EJS templating**.
- Using **JavaScript modules** for partial UI logic and separation of concerns.
- Implementing a consistent, unhinged **brand voice** across technical UI.
- Writing responsive **mobile-first CSS**, accounting for max-width and overflow issues.
- Modularizing large projects with **partials**, **script folders**, and **clean stylesheets**.
- Integrating multi-remote Git workflows with **GitHub and Azure DevOps**.
- Structuring projects with **future expansion and CI/CD in mind**.

---

## 🚀 Deployment & Workflow

The app is currently **hosted on Azure App Service** and version-controlled via both **GitHub** and **Azure DevOps**.  
CI/CD is not configured _yet_, but the structure is in place for **GitHub Actions** or **Azure Pipelines**.

---

### 🛠 Deployment Setup (Steps I Took)

1. **Created Azure App Service**

   - Provisioned a new Node.js app on Azure.

2. **Initialized GitHub Repo**

   - Created the `Capitalism` GitHub repo and pushed full codebase.

3. **Created Azure DevOps Project**

   - Added a project under the name _Capitalism_ for backup control and future pipelines.

4. **Added Azure DevOps Remote**

   ```bash
   git remote add azure https://Junaid-Arif@dev.azure.com/Junaid-Arif/Capitalism/_git/Capitalism
   git push azure main
   ```

5. **Dual Remote Deployment**

   ```bash
   git push origin main   # Pushes to GitHub
   git push azure main    # Pushes to Azure DevOps
   ```

6. **Linked DevOps to App Service**

   - Connected Azure DevOps repo to App Service via Deployment Center.

7. **Ready for GitHub Actions (Optional)**

   - Project structure supports easy CI/CD integration via `.yml` workflows when ready.

---

### 🔥 Deployment Workflow (Current)

```bash
git add .
git commit -m "your roast-worthy commit message"
git push origin main    # GitHub
git push azure main     # Azure DevOps & auto-deploy
```

---

## 🤝 Contribution

This was built as a personal passion project (and maybe a cry for help), but PRs are welcome. If you’d like to add multiplayer, leaderboard logic, or just fresh roasts — fork away.

---

## 📄 License

Open-source and available for chaos, cloning, remixing, and educational trauma.

---

## 🔗 Credits

- Inspired by capitalism. Unfortunately.
- Built with Node.js, PostgreSQL, Express, and way too much sarcasm.
- Branding and concept by [@junaid-mohammad](https://github.com/junaid-mohammad)

---

Let me know when you're ready to drop this into the repo and want a matching `README.md` badge set for GitHub Actions, or if you’d like a `LICENSE`, `CONTRIBUTING.md`, or `docs/` folder too.
