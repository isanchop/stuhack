# Changelog

## [0.5.7] - 2025-05-08

- **Refactored all main JavaScript files to use `const` and `let` for variable declarations** instead of undeclared variables, preventing accidental global scope pollution and improving code clarity.
- **Extracted repeated logic into reusable functions**:
  - Created utility functions for updating logos, adding download buttons, and removing elements, reducing code duplication and improving maintainability.
- **Added element existence checks before accessing properties or methods**:
  - Ensured all DOM queries are checked for null/undefined before use, preventing runtime errors if elements are missing.
- **Improved error handling**:
  - Enhanced error logs with more context for easier debugging.
- **General code cleanup**:
  - Added 'use strict' to all scripts for safer JavaScript execution.
  - Improved loop variable declarations and used modern JavaScript best practices.
- **No functional changes to user-facing features**; all improvements are internal for maintainability, reliability, and future-proofing.
