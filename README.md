# ticket-id-gen Documentation

**ticket-id-gen** is a lightweight Node.js package designed to generate sophisticated and unique ticket IDs for managing customer service tickets effectively.

## Installation

To install the package, use npm or yarn:

```bash
npm install ticket-id-gen
```

## Usage

```javascript
const ticketIdGenerator = require('ticket-id-gen');

// Generate a ticket ID with a specific category code
const categoryCode = 'PRD'; // Example category code (Product)
const ticketID = ticketIdGenerator.generateTicket(categoryCode);
console.log('Generated Ticket ID:', ticketID);
```

### Function: `generateTicket(categoryCode)`

Generates a ticket ID based on the specified category code.

- **Parameters:**
  - `categoryCode` (string): A short code representing the category of the service (e.g., 'PRD' for Product, 'SER' for Service).

- **Returns:**
  - A string representing the generated service ticket ID.

## Examples

### Generating a Ticket ID

```javascript
const ticketIdGenerator = require('ticket-id-gen');
const categoryCode = 'PRD';
const ticketID = ticketIdGenerator.generateTicket(categoryCode);
console.log('Generated Ticket ID:', ticketID);
```

## License

This package is licensed under the [MIT License](LICENSE).