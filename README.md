# Puttaraj Portfolio

A fullstack developer portfolio built with React (Vite, Tailwind CSS) and a Node.js/Express backend for secure contact form email notifications.

---

## Features
- Modern, animated React frontend (Vite + Tailwind CSS)
- 3D/animated sections (Three.js, Framer Motion)
- Secure contact form with backend email notification (Nodemailer)
- Auto-reply to users who contact you
- Environment variable security (no secrets in code)

---

## Project Structure
```
Portfolio/
  client/   # React frontend (Vite)
  server/   # Express backend (contact form API)
```

---

## Getting Started (Development)

### 1. Clone the Repository
```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd Portfolio
```

### 2. Install Dependencies
```bash
cd client && npm install
cd ../server && npm install
```

### 3. Configure Environment Variables
Create a `.env` file in `/server`:
```
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-gmail-app-password
PORT=5001
```
- **EMAIL_PASS** must be a Gmail App Password ([how to get one](https://support.google.com/accounts/answer/185833)).
- Never commit your `.env` file (it's in `.gitignore`).

### 4. Start the Backend
```bash
cd server
node app.js
# or: npx nodemon app.js
```

### 5. Start the Frontend
```bash
cd ../client
npm run dev
```
- Frontend: http://localhost:5173
- Backend: http://localhost:5001

---

## Deployment

### Frontend (Recommended: Vercel, Netlify)
- Deploy `/client` as a static site.
- Set `VITE_API_URL` in `/client/.env` to your backend URL (e.g., `https://your-backend.onrender.com`).

### Backend (Recommended: Render, Railway)
- Deploy `/server` as a Node.js web service.
- Set environment variables (`EMAIL_USER`, `EMAIL_PASS`, `PORT`) in the dashboard.

### Update Frontend API URL for Production
In `/client/.env`:
```
VITE_API_URL=https://your-backend.onrender.com
```

---

## Security Notes
- **Never commit your `.env` file** (it's in `.gitignore`).
- Set secrets as environment variables in your deployment dashboard.
- If you accidentally commit secrets, change them immediately.

---

## License
MIT 