# Paradise Nursery 🌿

Paradise Nursery is a responsive houseplant shopping application built with React, React Router, Redux Toolkit, and Vite. Browse plants by category, add products to the cart, adjust quantities, remove items, and view live totals.

## Features

- Landing page with a background image, company introduction, and Get Started link.
- 18 unique houseplants grouped into three categories.
- Shared navigation on the Plants and Cart pages.
- Redux Toolkit cart state with a dynamic item count, quantity controls, removal, and subtotal calculations.
- Responsive layout for desktop and mobile screens.
- Hash-based routing so page navigation works on GitHub Pages.

## Run locally

Requirements: Node.js and npm.

```bash
npm install
npm run dev
```

Open the local URL printed in your terminal. To check a production build:

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

1. Create a **public** GitHub repository named `paradise-nursery` (or update the Vite `base` in `vite.config.js` to match your chosen repository name).
2. Upload/push the project files to the repository's `main` branch.
3. Open **Settings → Pages** and set the source to **GitHub Actions**.
4. The workflow at `.github/workflows/deploy.yml` builds the project and publishes the `dist` folder.
5. Open the **Actions** tab and wait for the Pages deployment workflow to finish. Your site URL will look like `https://YOUR-USERNAME.github.io/paradise-nursery/`.

## Main files for project evaluation

- `src/App.jsx` — landing page and page routes.
- `src/App.css` — landing page background image and application styling.
- `src/AboutUs.jsx` — company description.
- `src/redux/CartSlice.jsx` — Redux Toolkit cart slice.
- `src/ProductList.jsx` — grouped product listing and add-to-cart behavior.
- `src/CartItem.jsx` — cart details, quantity controls, delete, totals, checkout, and continue shopping.

Replace `YOUR-USERNAME` in the published URL with your GitHub username when submitting. Submit the **public GitHub URL to each file**, not a local path.
