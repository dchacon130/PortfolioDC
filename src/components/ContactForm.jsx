// src/components/ContactForm.jsx
import React, { useState } from 'react';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para enviar el formulario (Formspree, etc.)
    console.log('Form submitted:', { name, email, message });
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold text-ebony mb-4">CONTACT FORM</h2>
      <div className="mb-4">
        <label htmlFor="name" className="block text-ebony text-sm font-medium mb-2">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-red-orange text-gray-800"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-ebony text-sm font-medium mb-2">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-red-orange text-gray-800"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-ebony text-sm font-medium mb-2">Message</label>
        <textarea
          name="message"
          id="message"
          rows="4"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-red-orange text-gray-800"
          required
        ></textarea>
      </div>
      <div>
        <button
          type="submit"
          className="bg-red-orange hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-md transition duration-300"
        >
          Enviar!
        </button>
      </div>
    </form>
  );
}

export default ContactForm;