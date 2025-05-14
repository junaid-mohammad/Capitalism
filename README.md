# Capitalism 🦈

[![Deployed via GitHub Actions](https://img.shields.io/badge/Deployed%20via-GitHub%20Actions-blue?logo=github)](https://github.com/junaid-mohammad/Capitalism)
[![Azure App Service](https://img.shields.io/badge/Hosted%20on-Azure%20App%20Service-brightgreen)](https://capitalism-hhgph9gsambaf6hm.canadacentral-01.azurewebsites.net/)
[![Azure DevOps](https://img.shields.io/badge/Tracked%20in-Azure%20DevOps-blue)](https://dev.azure.com/Junaid-Arif/Capitalism)

This repository contains the source code for **Capitalism**, a chaotic, meme-fueled quiz game that asks: _how well do you know your capital cities?_ Get it right and grow your net worth. Get it wrong... and suffer the consequences. It’s ruthless, unhinged, and unapologetically capitalist.

Now powered by a full-stack architecture with a live **PostgreSQL cloud database**, this app dynamically fetches capital cities in real time and is fully deployed via **Azure App Service** with continuous deployment from **GitHub Actions**. Whether you're shorting your IQ or liquidating your pride, the system is scalable, secure, and savage.

---

## 🖥️ Live Website

👉 **[Capitalism Quiz](https://capitalism-hhgph9gsambaf6hm.canadacentral-01.azurewebsites.net/)**  
👉 **[GitHub Repo](https://github.com/junaid-mohammad/Capitalism)**  
👉 **[Azure DevOps](https://dev.azure.com/Junaid-Arif/Capitalism)**

---

## 🎯 Purpose

**Capitalism** was designed to:

- Reinforce my experience building **full-stack apps** with **Node.js**, **Express**, and **EJS**.
- Integrate a live **PostgreSQL cloud database** using Azure's managed database service.
- Explore **server-side rendering**, user input handling, and quiz state management.
- Design a bold, humorous, and mobile-friendly **UI/UX**.
- Structure an app for **long-term maintainability**, including **modular EJS partials** and organized static assets.
- Host a real-world project using **Azure App Service** and deploy continuously via **GitHub Actions**.
- Enable seamless local and cloud development environments using `.env` and Azure App Config.

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
- **Cloud-Backed Quiz Data**: All capital cities are now pulled from a live PostgreSQL instance hosted in Azure.

---

## 💻 Technologies Used

- **Node.js** — JavaScript runtime
- **Express** — Web framework
- **EJS** — Embedded JavaScript templates
- **PostgreSQL** — Relational database (local + Azure cloud)
- **pg** — Node.js PostgreSQL client
- **Body-Parser** — Middleware for form data
- **JavaScript (Client-side)** — Handles dynamic button labeling and Game Over rendering
- **HTML5 / CSS3** — Semantic layout and styling
- **Flexbox & Media Queries** — Responsive layout design
- **Azure App Service** — Cloud hosting
- **Azure PostgreSQL Flexible Server** — Managed cloud database
- **GitHub** — Source control and CI/CD via GitHub Actions

---

## 🧠 What I Learned

- Managing a **game state** server-side using variables and logic.
- Dynamically rendering responses with **EJS templating**.
- Using **JavaScript modules** for partial UI logic and separation of concerns.
- Implementing a consistent, unhinged **brand voice** across technical UI.
- Writing responsive **mobile-first CSS**, accounting for max-width and overflow issues.
- Modularizing large projects with **partials**, **script folders**, and **clean stylesheets**.
- Working with **Azure cloud infrastructure**, including App Service and PostgreSQL Flexible Server.
- Setting up **environment-agnostic database logic** with `.env` and Azure App Settings.
- Deploying via **GitHub Actions** and debugging full-stack cloud deployment pipelines.

---

## 🚀 Deployment & Workflow

Capitalism is deployed using **Azure App Service** and backed by a cloud-hosted **PostgreSQL Flexible Server** for persistent quiz data. Continuous deployment is handled via **GitHub Actions**, while **Azure DevOps** is retained for secondary version control and potential future CI/CD pipelines.

The app supports **dual-environment development**: it runs locally using a `.env` file and connects to cloud infrastructure in production via Azure App Settings. Below is a complete deployment and configuration guide for reproducing this setup.

---

### 🧱 1. Set Up Azure Services

- Create a **Resource Group** to organize your cloud resources
- Provision an **Azure Database for PostgreSQL Flexible Server**:
  - Recommended: `Burstable B1ms` for development
  - Create a new PostgreSQL database (e.g., `capitalism`)
  - Ensure public access is enabled and add your current IP under **Firewall Rules**
- Create an **Azure App Service** with a Node.js runtime (e.g., Node 18 LTS)

---

### 🗃 2. Prepare and Upload Your SQL Table

To move your local PostgreSQL data to Azure, follow this full workflow:

#### ✅ Step 1: Export Your Table from Local PostgreSQL

Use `pg_dump` to export the desired table to a `.sql` file:

```bash
pg_dump -U your_local_user -d your_local_db -t your_table --column-inserts > your_table.sql
# You’ll be prompted for your local PostgreSQL password
```

This generates a portable SQL dump you can import into your Azure DB.

---

#### ✅ Step 2: Configure Azure PostgreSQL for Access

Go to **Azure Portal → PostgreSQL Flexible Server → Networking**:

- ✅ Add your **current IP address** under **Firewall Rules**
- ✅ Set **Public Access** to **"Enabled (all IPs allowed)"** (You can restrict it later after import)

---

#### ✅ Step 3: Connect to Azure and Create the Target Database

You **cannot import directly** unless the database already exists. First, connect to your Azure server using the default `postgres` DB:

```bash
psql "host=your-server-name.postgres.database.azure.com port=5432 dbname=postgres user=your_admin_user sslmode=require"
```

Enter your **Azure DB password** when prompted.

Then, inside the `psql` prompt:

```sql
CREATE DATABASE your_target_db;
\q
```

✅ This creates the database where your table will live.

---

#### ✅ Step 4: Import the Table into Your New Azure DB

Now import your SQL dump using:

```bash
psql "host=your-server-name.postgres.database.azure.com port=5432 dbname=your_target_db user=your_admin_user sslmode=require" < your_table.sql
# You’ll be prompted again for your Azure DB password
```

If successful, you’ll see many `SET`, `CREATE`, and `INSERT` statements.

---

#### ✅ Step 5: Verify the Table

To check that the table and data were imported:

```bash
psql "host=your-server-name.postgres.database.azure.com port=5432 dbname=your_target_db user=your_admin_user sslmode=require"
```

Then inside the SQL shell:

```sql
-- List all tables
\dt
-- View a sample of imported data
SELECT * FROM your_table LIMIT 5;
\q
```

---

### ⚠️ Common Gotchas

| Problem                                           | Fix                                                                                                |
| ------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `FATAL: database "your_target_db" does not exist` | You skipped creating the DB — go back to Step 3                                                    |
| `Operation timed out`                             | IP firewall not configured properly in Azure                                                       |
| `role "postgres" does not exist`                  | Dump references local roles — safe to ignore unless you're using ownership or permissions          |
| `zsh: command not found: \q`                      | You’re typing psql commands in the regular terminal — make sure you're inside the SQL shell (`=>`) |

---

#### 🧼 Optional but Recommended Cleanup

Add your `.sql` dump to `.gitignore`:

```bash
echo "*.sql" >> .gitignore
git rm --cached your_table.sql
git commit -m "Removed SQL dump from version control"
```

✅ At this point, your data is now live in the cloud and ready to be queried from your Node.js app!

---

### ⚙️ 3. Configure Environment Variables

#### 📍 Local Development (`.env`)

```env
DB_USER=postgres
DB_HOST=localhost
DB_NAME=your_local_db
DB_PASSWORD=your_local_password
DB_PORT=5432
```

#### ☁️ Azure Production (App Service > Configuration)

```env
DB_USER=your_azure_admin_user
DB_HOST=your-db-host.postgres.database.azure.com
DB_NAME=newly_created_db_in_azure
DB_PASSWORD=your_azure_db_password
DB_PORT=5432
NODE_ENV=production
```

---

### 🔐 4. Secure Cross-Environment Database Logic

In your database connection file (e.g., `quizData.js`), use:

```js
const db = new pg.Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  ssl:
    process.env.NODE_ENV === "production"
      ? { rejectUnauthorized: false }
      : false,
});
```

✅ This allows you to switch between local and cloud DBs without touching the code.

---

### 🚀 5. Set Up GitHub Actions Deployment

1. Go to **Azure Portal → App Service → Deployment Center**
2. Choose:

   - Source: `GitHub`
   - Repo: your project repo
   - Branch: `main`
   - Build provider: `GitHub Actions`

3. Azure will auto-generate a GitHub Actions workflow (e.g., `.github/workflows/main.yml`) to handle deployments automatically.

---

### 🔁 6. Deployment Workflow

After making changes:

```bash
git add .                                    # Stage changes
git commit -m "Your change message"          # Commit locally
git pull origin main --rebase                # Sync with remote (prevent conflicts)
git push origin main                         # Trigger GitHub Actions deployment
```

GitHub Actions will build and deploy your app automatically to Azure.

---

### 📦 Azure DevOps (Optional)

This project is also connected to **Azure DevOps** as a secondary remote:

```bash
git remote add azure https://dev.azure.com/your-org/your-project/_git/your-repo
git push azure main
```

Currently used for **backup source control**, Azure DevOps may be used in the future for CI/CD via **Azure Pipelines**.

---

### ✅ Summary

| Environment | DB Location      | Configuration Source |
| ----------- | ---------------- | -------------------- |
| Local       | Localhost        | `.env` file          |
| Production  | Azure PostgreSQL | Azure App Settings   |

This setup enables seamless development and deployment with a live cloud database and continuous delivery.

---

## 🤝 Contribution

This project was built as a personal passion project (and possibly a coping mechanism), but contributions are welcome. If you’d like to add multiplayer mode, global leaderboards, or just inject some fresh economic insults — fork away and submit a PR.

---

## 📄 License

This project is open-source and available for cloning, remixing, learning, and unleashing upon your unsuspecting friends. Use it wisely — or irresponsibly. It’s your call.

---

## 🔗 Credits

- Inspired by capitalism. Unfortunately.
- Built with **Node.js**, **Express**, **PostgreSQL**, and an aggressive amount of sarcasm.
- Concept, code, and chaos by [@junaid-arif](https://github.com/junaid-mohammad)
