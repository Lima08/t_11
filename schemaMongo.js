// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// Select the database to use.
use('trybeDB');

// The drop() command destroys all data from a collection.
// Make sure you run it against the correct database and collection.
db.students.drop();

// Insert a few documents into the sales collection.
db.students.insertMany([
  { 'name': 'Lima', 'middleName': 'Lima', 'lastName': 'Lima', 'city': 'Lima', 'photoURL':'https://ca.slack-edge.com/TMDDFEPFU-U01Q1HH1MKM-be515a81f66a-512' ,'lastModification': null, 'createdAt': new Date('2014-03-01T08:00:00Z'), 'phrase': 'Batatinha quando esparrama' },
  { 'name': 'Lima', 'middleName': 'Lima', 'lastName': 'Lima', 'city': 'Lima', 'photoURL':'https://ca.slack-edge.com/TMDDFEPFU-U01Q1HH1MKM-be515a81f66a-512' ,'lastModification': null, 'createdAt': new Date('2014-03-01T08:00:00Z'), 'phrase': 'Batatinha quando esparrama' }
]);


