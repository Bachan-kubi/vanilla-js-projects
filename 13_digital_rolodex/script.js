 // --- CLASS DEFINITIONS ---

        /**
         * The Contact class is a blueprint for creating a single contact object.
         * Each contact has a name, email, and phone. We also give it a unique ID.
         */
        class Contact {
            constructor(name, email, phone) {
                this.name = name;
                this.email = email;
                this.phone = phone;
                // Create a simple unique ID based on the current time and a random number
                this.id = Date.now().toString() + Math.random().toString(36).substr(2, 9);
            }
        }

        /**
         * The AddressBook class manages all our contacts.
         * It handles adding, deleting, finding, and displaying contacts.
         */
        class AddressBook {
            constructor() {
                this.contacts = []; // An array to hold all Contact objects
            }

            // Method to add a new contact
            add(contact) {
                this.contacts.push(contact);
                this.display(); // Re-render the list after adding
            }

            // Method to delete a contact by its unique ID
            delete(contactId) {
                this.contacts = this.contacts.filter(contact => contact.id !== contactId);
                this.display(); // Re-render the list after deleting
            }
            
            // Method to render all contacts to the DOM
            display() {
                const contactListDiv = document.getElementById('contact-list');
                // Clear the current list
                contactListDiv.innerHTML = '<h2>My Contacts</h2>';

                // Get the search term
                const searchTerm = document.getElementById('search').value.toLowerCase();

                // Filter contacts based on the search term
                const filteredContacts = this.contacts.filter(contact => 
                    contact.name.toLowerCase().includes(searchTerm) ||
                    contact.email.toLowerCase().includes(searchTerm) ||
                    contact.phone.toLowerCase().includes(searchTerm)
                );

                // Create and append a card for each filtered contact
                filteredContacts.forEach(contact => {
                    const card = document.createElement('div');
                    card.className = 'contact-card';
                    card.innerHTML = `
                        <div class="contact-info">
                            <p><strong>Name:</strong> ${contact.name}</p>
                            <p><strong>Email:</strong> ${contact.email}</p>
                            <p><strong>Phone:</strong> ${contact.phone}</p>
                        </div>
                        <button class="delete-btn" data-id="${contact.id}">Delete</button>
                    `;
                    contactListDiv.appendChild(card);
                });
            }
        }

        // --- APPLICATION LOGIC ---

        // Create a single instance of our AddressBook
        const myAddressBook = new AddressBook();

        // Get references to our DOM elements
        const form = document.getElementById('add-contact-form');
        const searchInput = document.getElementById('search');
        const contactListDiv = document.getElementById('contact-list');

        // Event Listener: Handle form submission to add a new contact
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent the form from actually submitting/reloading the page

            // Get values from the form inputs
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;

            // Create a new Contact instance
            const newContact = new Contact(name, email, phone);

            // Add the new contact to our address book
            myAddressBook.add(newContact);

            // Clear the form fields
            form.reset();
        });

        // Event Listener: Handle clicks on the contact list (for deleting)
        // This uses EVENT DELEGATION for efficiency
        contactListDiv.addEventListener('click', (e) => {
            // Check if the clicked element is a delete button
            if (e.target.classList.contains('delete-btn')) {
                const contactId = e.target.dataset.id; // Get the ID from the data-id attribute
                console.log(e.target);
                myAddressBook.delete(contactId);
            }
        });
        
        // Event Listener: Handle typing in the search box
        searchInput.addEventListener('input', () => {
            // Re-display the contacts, which will apply the new filter
            myAddressBook.display();
        });