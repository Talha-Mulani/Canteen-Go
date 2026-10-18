# CanteenGo

> A smart, cashless food-ordering experience for college canteens.

**CanteenGo** is an in-progress smart food ordering system designed to make
college-canteen ordering faster, more predictable, and easier to manage. The
platform will allow students to browse the live menu, place and pay for an
order, choose a pickup slot, and follow the order until it is ready. Canteen
staff and owners will get focused tools for managing menus, order queues,
offers, and feedback.

This repository is currently at the **project foundation and planning stage**.
The product direction and requirements are defined in the CanteenGo Software
Requirements Specification (SRS), Version 1.1. Implementation will be added
incrementally.

## Why CanteenGo?

College canteens often depend on queues, manual order handling, and limited
visibility into order progress. CanteenGo is being planned around three simple
goals:

- **Less waiting:** students can order before reaching the counter.
- **Clearer operations:** staff can manage one live order queue and update
  status from a dashboard.
- **Safer transactions:** payment and authorization decisions are verified by
  the backend instead of being trusted from the client.

## Planned experience

### For students

- Register and sign in with college-account verification.
- Browse menu items by category, price, and availability.
- Add items to a cart and choose an available pickup slot.
- Pay through a UPI-compatible payment gateway.
- Receive a unique order token after verified payment.
- Track current and previous orders.
- Receive a notification when an order is ready.
- Rate and review orders after they have been collected.

### For canteen staff

- View and process the incoming order queue.
- Move orders through the operational states:
  `Placed` -> `Accepted` -> `Preparing` -> `Ready` -> `Collected`.
- Accept or reject eligible orders.
- Add, edit, remove, and temporarily disable menu items.
- Publish daily offers.
- Upload menus from CSV or text-based PDF files for review.

### For the canteen owner or administrator

- Use all staff capabilities.
- View sales reports and feedback trends.
- Grant or revoke canteen-staff access.

## Product scope

The first version is planned around the following capabilities:

| Area | Planned capability |
| --- | --- |
| Identity | Firebase Authentication with backend token verification |
| Menu | Categorized items with price and availability |
| Cart and checkout | Server validation, pickup-slot capacity checks, and order confirmation |
| Payments | Razorpay or another UPI-compatible gateway |
| Order operations | Role-controlled order queue and lifecycle transitions |
| Notifications | Firebase Cloud Messaging notification when an order becomes ready |
| Offers | Staff-created offers served by the CanteenGo backend |
| Bulk menu entry | CSV and text-based PDF extraction into reviewable drafts |
| Feedback | Ratings and comments for a student's collected orders |
| Reporting | Owner-facing sales and aggregated feedback views |

## Planned architecture

```text
Student Android app -------+
                           +-- HTTPS REST API -- Node.js + Express.js
Staff/Owner web dashboard -+                         |
                                                     +-- MongoDB Atlas
                                                     +-- Firebase Authentication
                                                     +-- Firebase Cloud Messaging
                                                     +-- Razorpay / UPI gateway
```

The backend is intended to be the single trusted application boundary:

- Firebase Authentication will establish identity.
- The backend will independently verify Firebase ID tokens and enforce roles.
- MongoDB will be the system of record for application data.
- The payment gateway will process payment details; CanteenGo will not store
  raw card numbers, UPI PINs, or wallet credentials.
- Orders will be created only after the backend verifies successful payment.

## Technology direction

The current SRS defines the following technology direction:

- **Student client:** Android application, Android 8.0 (API 26) and above
- **Staff and owner client:** Responsive web dashboard
- **Backend:** Node.js with Express.js and a RESTful JSON API
- **Database:** MongoDB Atlas
- **Authentication:** Firebase Authentication
- **Notifications:** Firebase Cloud Messaging
- **Payments:** Razorpay or a compatible UPI payment gateway
- **Deployment direction:** Cloud-hosted backend, such as Render

These choices describe the planned system and may be refined as implementation
begins. They are not a claim that these components are already integrated.

## Requirements highlights

The SRS establishes several important product rules:

- Only verified, currently enrolled students may create student accounts.
- Staff and owner permissions are enforced by the backend on every protected
  request.
- A student's cart, item prices, item availability, and pickup-slot capacity
  are revalidated immediately before payment.
- A client-reported payment result is never sufficient to create an order.
- Checkout attempts use idempotency protection so a retried payment callback
  cannot create duplicate orders.
- A student may cancel only within two minutes of placement and before staff
  acceptance.
- Bulk-uploaded menu entries remain drafts until staff explicitly reviews and
  publishes them.
- Offline menu and offer data must be clearly marked as potentially outdated.

## Project status

**Status: Requirements finalized; implementation foundation started.**

| Workstream | Status |
| --- | --- |
| Product requirements and user roles | Defined in SRS v1.1 |
| Initial repository setup | Started |
| Backend API foundation | Started |
| Student Android client | Planned |
| Staff/owner dashboard | Planned |
| Authentication and role authorization | Planned |
| Menu, cart, and pickup-slot flow | Planned |
| Payment verification and order lifecycle | Planned |
| Notifications, offers, bulk upload, and feedback | Planned |
| Automated testing and deployment | Planned |

## Suggested development sequence

1. Establish the backend service structure, configuration, and health endpoint.
2. Define MongoDB entities and repository boundaries.
3. Add Firebase token verification and role-based authorization.
4. Implement menu, cart, pickup-slot, and order APIs.
5. Add payment initiation, verification, idempotency, and refund handling.
6. Build the staff/owner order and menu dashboard.
7. Build the student Android ordering flow.
8. Add notifications, offers, bulk-upload review, feedback, and reports.
9. Add automated tests, observability, security checks, and deployment setup.

## Run the starter service

The repository currently includes a minimal backend foundation. It is not the
complete ordering system yet.

```powershell
npm install
npm start
```

Then open `http://localhost:3000/health` to check that the service is running.

## Repository structure

```text
.
├── app.js              # Minimal backend entry point
├── package.json        # Node.js project configuration
├── README.md           # Product overview and project direction
└── CONTRIBUTING.md     # Contribution and development guidance
```

## Documentation

The accompanying **Software Requirements Specification (SRS), Version 1.1**
is the source of truth for detailed functional requirements,
non-functional requirements, business rules, and the requirements traceability
matrix. The repository documentation will evolve alongside the implementation.

## Contributing

CanteenGo is being developed as a structured academic software project.
Before starting a change:

1. Check the relevant requirement in the SRS.
2. Keep student, staff, and owner permissions explicit.
3. Keep security-sensitive validation on the backend.
4. Add or update tests with each implemented feature.
5. Update this README when the project status or supported workflow changes.

## License

No license has been selected for this project yet.