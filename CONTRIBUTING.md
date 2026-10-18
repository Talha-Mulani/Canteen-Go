# Contributing to CanteenGo

Thank you for contributing to CanteenGo. The project is being developed
incrementally from the requirements in the CanteenGo Software Requirements
Specification (SRS), Version 1.1.

## Before you start

1. Read the relevant requirement in the SRS.
2. Check existing issues and open work before starting a larger change.
3. Keep student, canteen-staff, and owner/admin permissions explicit.
4. Do not place secrets, payment credentials, or private Firebase
   configuration in the repository.

## Development principles

- Treat the backend as the trusted boundary for authorization and validation.
- Never trust client-provided prices, availability, roles, or payment status.
- Keep payment credentials outside CanteenGo; store only gateway references and
  statuses.
- Prefer small, focused changes that can be reviewed independently.
- Add tests for implemented behavior and update documentation when behavior
  changes.

## Local development

The current backend entry point is a starter service:

```powershell
npm install
npm start
```

The service listens on `http://localhost:3000` by default. Set the `PORT`
environment variable to use another port.

The starter service currently exposes:

- `GET /health` — returns a basic service health response.

Authentication, database access, payments, order management, and client
applications will be introduced in later increments.

## Commit and pull request guidance

- Use a clear, imperative commit message.
- Keep unrelated formatting or refactoring out of feature changes.
- Explain the requirement or user workflow addressed by the change.
- Include validation steps in the pull request description.
- Do not include secrets or generated local configuration files.

## Reporting issues

When reporting a problem, include:

- The expected behavior.
- The actual behavior.
- Reproduction steps.
- Relevant logs or screenshots with sensitive information removed.
- The environment and steps used to reproduce the issue.
