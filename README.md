# ✈️ AI Trip Planner

An AI-powered Trip Planner that generates personalized day-by-day travel itineraries from a free-form user prompt. The application uses Google's Gemini AI to generate structured JSON, which is parsed and rendered into an interactive and responsive React interface.

This project was built as part of a Frontend Internship Assignment to demonstrate AI integration, structured data handling, responsive UI development, and robust error handling.

---

# 🚀 Features

- Generate personalized travel itineraries using AI
- Free-form text input for trip planning
- Day-by-day itinerary generation
- Interactive itinerary cards
- Trip summary (destination, duration, budget)
- Responsive design for desktop, tablet, and mobile
- Light/Dark mode
- Smooth animations with Framer Motion
- Loading, error, and empty states
- Structured JSON parsing (no chatbot interface)
- Backend validation using Zod

---

# 🛠 Tech Stack

## Frontend

- React
- TypeScript
- Vite
- Tailwind CSS v4
- Axios
- Framer Motion
- Lucide React

## Backend

- Node.js
- Express
- TypeScript
- Google Gemini AI
- Zod
- dotenv

---

# 📁 Project Structure

```
trip-planner/
│
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── routes/
│   ├── prompts/
│   ├── schemas/
│   ├── utils/
│   ├── server.ts
│   └── package.json
│
├── .gitignore
└── README.md
```

---

# ⚙️ Installation & Setup

## 1. Clone the repository

```bash
git clone <https://github.com/mohinisri23/trip-planner>
cd trip-planner
```

---

## 2. Backend Setup

```bash
cd server
npm install
```

Create a `.env` file inside the `server` directory.

```env
GEMINI_API_KEY=your_gemini_api_key
PORT=5000
```

Start the backend server:

```bash
npm run dev
```

The backend runs at:

```
http://localhost:5000
```

---

## 3. Frontend Setup

Open a new terminal.

```bash
cd client
npm install
npm run dev
```

The frontend runs at:

```
http://localhost:5173
```

---

# ▶️ Usage

1. Start both the backend and frontend servers.
2. Enter a travel prompt in the text box (for example: "Plan a 5-day trip to Japan with a moderate budget.").
3. Click **Generate Trip**.
4. Wait for the AI to generate the itinerary.
5. View the generated trip summary and day-by-day itinerary.

---

# 🤖 AI Usage

## AI Model

This project uses **Google Gemini AI** to generate structured travel itineraries.

The backend prompts the model to return JSON instead of plain text. The response is validated and parsed before being rendered in the React application.

## AI Tools Used During Development

ChatGPT was used as a development assistant to:

- Debug backend and frontend issues
- Improve React component structure
- Refine prompts for structured JSON generation
- Improve TypeScript code
- Improve Express API implementation
- Enhance UI/UX and responsive design
- Troubleshoot Git and project configuration

All AI-generated suggestions were reviewed, understood, tested, and modified where necessary before being incorporated into the final project.

---

# 🛡️ Error Handling

The application gracefully handles:

- Empty user input
- Invalid AI responses
- Malformed JSON
- Failed API requests
- Network errors
- Loading state while waiting for AI
- Retry by submitting a new prompt

The backend validates requests using **Zod** before sending them to Gemini AI.

---

# 📱 Responsive Design

The application is fully responsive and optimized for:

- Desktop
- Tablet
- Mobile devices

---

# ⚠️ Known Limitations

- AI-generated itineraries depend on the quality of the prompt.
- The application does not save generated trips after refreshing the page.
- Users cannot currently edit or reorder itinerary stops after generation.
- Authentication and user accounts are not implemented.
- The application runs locally and is not deployed.

---

# ⏱ Time Spent

Approximately **8 hours**.

---

# 📹 Demo

A short screen recording demonstrating the application has been included with the project submission.

*(If hosting the video online, replace this section with the demo link.)*

Example:

```
https://your-demo-link.com
```

---

# 👨‍💻 Author

**Mohini**

---

# 📄 License

This project was created solely for educational and internship assessment purposes.
