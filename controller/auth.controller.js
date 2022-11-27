const { Client, Account, ID } = require('appwrite');

const appwrite = new window.Appwrite();

const client = new Client()
    .setEndpoint('https://localhost/v1') // Your API Endpoint
    .setProject('63833a4365deb3bd5c1c');               // Your project ID


    // Register User with app write
    const account = new Account(client);

// Register User
account.create(
    ID.unique(),
    'me@example.com',
    'password',
    'Jane Doe'
).then(response => {
    console.log(response);
}, error => {
    console.log(error);
});

// Subscribe to files channel
client.subscribe('files', response => {
    if(response.events.includes('buckets.*.files.*.create')) {
        // Log when a new file is uploaded
        console.log(response.payload);
    }
});