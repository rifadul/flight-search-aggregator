# Architecture Overview

## High-Level Architecture

```text
Search Form
      │
      ▼
Flight Search Page
      │
      ▼
Mock API Layer
      │
      ▼
Service Layer
      │
      ▼
Flight Results
      │
      ▼
Flight Selection
      │
      ▼
Redux Store
      │
      ▼
Booking Page
      │
      ▼
Confirmation Page
```

---

## Design Principles

The application was designed around the following principles:

- Separation of concerns
- Reusability
- Scalability
- Type safety
- Maintainability
- Clear data flow

---

## Folder Structure

### app/

Contains Next.js App Router pages and route handlers.

```text
app
├── page.tsx
├── flights
├── booking
├── confirmation
└── api
```

---

### components/

Reusable UI and feature components.

```text
components
├── booking
├── flights
├── search
├── shared
└── ui
```

---

### services/

Responsible for data retrieval and business logic.

```text
services
├── flight.service.ts
└── booking.service.ts
```

The UI never directly accesses mock data.

---

### store/

Redux Toolkit store configuration and booking state.

```text
store
├── index.ts
├── bookingSlice.ts
└── hooks.ts
```

---

## State Management Strategy

### Local Component State

Used for:

- Sorting
- Airline Filtering
- Stops Filtering

Reason:

These states are page-scoped and do not need global access.

### Redux Toolkit

Used for:

- Selected Flight
- Passenger Information
- Search Criteria
- Booking Status
- Booking Confirmation

Reason:

These states are shared across multiple pages during the booking flow. Storing them centrally avoids prop drilling and allows the booking and confirmation pages to access the data required to complete the user journey.

---

## API Layer

The application uses Next.js Route Handlers to simulate backend endpoints.

### Endpoints

```text
GET  /api/flights
GET  /api/flights/[id]
POST /api/bookings
```

This approach allows the frontend architecture to closely resemble a real production environment.

---

## Validation Strategy

All forms use:

- React Hook Form
- Zod

Benefits:

- Type-safe validation
- Shared validation rules
- Better user feedback
- Reduced runtime errors

---

## Error Handling

Implemented states:

- Loading State
- Empty State
- Error State

This ensures users always receive meaningful feedback regardless of application state.

---

## Testing Strategy

The application includes unit tests for:

- Redux reducers and business logic
- Utility functions
- Zod validation schemas

Vitest was selected due to its fast execution speed, modern TypeScript support, and seamless integration with React applications.

The testing approach focuses on validating business logic and data integrity rather than testing third-party UI components.

---

## Scalability Considerations

The architecture allows future support for:

- Server-side pagination
- Authentication
- Real backend integration
- Caching strategies
- Search history
- Multi-city flights
- Advanced filtering

without requiring significant architectural changes.

---

## Trade-Offs

### Native Date Input / Lightweight UI Components

A native HTML date input was chosen over a custom date picker to reduce complexity and focus on delivering core booking functionality.

### Client-Side Sorting & Filtering

Given the small mock dataset, client-side operations provide a simpler implementation while maintaining excellent performance.

### Mock Backend

A mock API layer was used instead of a real backend to keep the assignment focused on frontend architecture and user experience.

---

## Author

Rifadul Islam Khushnobish Siam
