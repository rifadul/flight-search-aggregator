# Flight Search Aggregator

A modern flight search and booking application built with Next.js, TypeScript, Redux Toolkit, and shadcn/ui.

This project was developed as a take-home assignment for the Senior Software Engineer (Frontend) position at iBox Lab.

---

## Features

### Flight Search

- Search flights by origin, destination, departure date, and passenger count
- Display available flight options
- Empty state handling for no results

### Sorting & Filtering

- Sort by:
    - Lowest Price
    - Highest Price
    - Shortest Duration

- Filter by:
    - Airline
    - Number of Stops

### Booking Flow

- Select a flight
- Review flight details
- Complete passenger information
- Submit booking
- View booking confirmation

### User Experience

- Responsive design
- Loading states
- Error states
- Form validation using Zod
- Accessible UI components using shadcn/ui

---

## Tech Stack

### Framework

- Next.js 16 (App Router)
- React 19
- TypeScript

### Styling

- Tailwind CSS v4
- shadcn/ui
- Lucide Icons

### State Management

- Redux Toolkit
- React Redux

### Forms & Validation

- React Hook Form
- Zod

### Mock API

- Next.js Route Handlers
- Local JSON dataset

---

## Project Structure

```text
src
├── app
├── components
├── constants
├── data
├── lib
├── schemas
├── services
├── store
├── types
└── utils
```

---

## Getting Started

### Install Dependencies

```bash
yarn install
```

### Run Development Server

```bash
yarn dev
```

### Production Build

```bash
yarn build
```

### Start Production Server

```bash
yarn start
```

---

## Key Engineering Decisions

### Mock API Layer

Instead of directly consuming JSON files from UI components, a service layer and API routes were introduced to simulate a real-world backend architecture.

### Redux Usage

Redux Toolkit is used only for booking-related state management. Search, sorting, and filtering remain component-local because they are page-specific concerns.

### Client-Side Filtering & Sorting

Given the small dataset size, filtering and sorting are performed on the client to keep the implementation simple while maintaining responsiveness.

### Validation

All user inputs are validated using Zod schemas integrated with React Hook Form.

---

## Future Improvements

- Server-side pagination
- Real backend integration
- Authentication & user accounts
- Multi-city flight search
- Price range filtering
- Flight comparison
- Booking history

---

## Author

Rifadul Islam Khushnobish Siam
