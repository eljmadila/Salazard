# Salazard 🍽️

Salazard is a premium, full-stack fine dining restaurant web application featuring a stunning dark-mode aesthetic, dynamic animations, and a fully functional custom backend. It is designed to offer an immersive digital experience that reflects the high standards of a Michelin-star establishment.

## ✨ Features

- **Beautiful Dark-Mode UI**: Crafted with Tailwind CSS and Framer Motion for sleek, smooth, and premium micro-interactions.
- **Dynamic Content**: Menu items, blogs, reservations, and testimonials are fetched in real-time from the backend using Axios.
- **Reservation System**: Users can submit reservations directly from the Contact page with date validation.
- **Interactive Testimonials**: An auto-rotating, animated carousel showcasing guest experiences.
- **Custom Admin Panel**: A tailored Django Admin interface using `django-unfold`, stylized to match the frontend's sophisticated gold/bronze branding.

## 🛠️ Technology Stack

### Frontend
- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Data Fetching**: Axios

### Backend
- **Framework**: Django & Django Rest Framework (DRF)
- **Language**: Python
- **Database**: SQLite3 (optimized for seamless local setup and zero latency)
- **Admin Theme**: django-unfold

---

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (for the frontend) and [Python 3.x](https://www.python.org/) (for the backend) installed on your machine.

### 1. Backend Setup (Django)

1. Navigate to the backend directory:
   ```bash
   cd backend/my_restaurant
   ```
2. Create and activate a virtual environment (optional but recommended):
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use: venv\Scripts\activate
   ```
3. Install dependencies:
   ```bash
   pip install -r requirement.txt
   ```
4. Run migrations to setup the SQLite database:
   ```bash
   python manage.py migrate
   ```
5. Start the backend development server:
   ```bash
   python manage.py runserver
   ```
   *The backend will be running at `http://localhost:8000/`*

### 2. Frontend Setup (Next.js)

1. Open a new terminal window and navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend development server:
   ```bash
   npm run dev
   ```
   *The frontend will be running at `http://localhost:3000/`*

## 📁 Project Structure

```
Salazard/
│
├── frontend/               # Next.js Application
│   ├── app/                # Pages and routing (Home, Menu, Blog, Contact, About)
│   ├── components/         # Reusable UI components (Navbar, Footer, SplashScreen)
│   └── public/             # Static assets
│
└── backend/                # Django REST API
    ├── my_restaurant/      # Main Django project folder
    ├── backend/            # Django app handling API views, models, and serializers
    └── db.sqlite3          # Local database
```

## 📸 Preview

The application relies on high-quality assets sourced from Unsplash to ensure a premium look and feel. 

Enjoy the Salazard experience!
