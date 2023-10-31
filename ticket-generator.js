const crypto = require('crypto');
const { v4: uuidv4 } = require('uuid');

function generateTicket(categoryCode) {
  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().slice(0, 10).replace(/-/g, '');

  // Generate a unique alphanumeric code
  const uniqueCode = uuidv4().split('-').join('').substring(0, 5);

  // Calculate checksum (SHA-256 hash) for data integrity
  const dataToHash = `CM-${categoryCode}-${formattedDate}-${uniqueCode}`;
  const checksum = crypto.createHash('sha256').update(dataToHash).digest('hex').substring(0, 2);

  // Generate ticket ID
  const ticketID = `CM-${categoryCode}-${formattedDate}-${uniqueCode}-${checksum}`;
  return ticketID;
}

// Example usage
const categoryCode = 'PRD'; // Example category code (Product)
const ticketID = generateTicket(categoryCode);
console.log('Generated Ticket ID:', ticketID);
