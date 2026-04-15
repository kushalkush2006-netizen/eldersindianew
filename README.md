\## Approach



\### Understanding the Problem

The main goal was to build a simple service booking screen. Instead of just displaying services and allowing booking, I wanted to improve the user experience by adding an intelligent way to suggest the right service based on user needs.



\### How I Built the Solution

I started with a basic structure using HTML, CSS, and JavaScript to display services and handle bookings.  

Then I added a booking flow where users can enter their name and phone number and receive a confirmation message. Local storage is used to store booking details as no backend is required.





\### Adding GenAI Thinking (RAG-inspired)

To make the application smarter, I introduced an AI-based recommendation feature.



Users can describe their problem in natural language (for example, “I have fever” or “need care for elderly”).  

The system then tries to understand this input and match it with the most relevant service.



I implemented this using a simple version of a RAG (Retrieval-Augmented Generation) approach:



\- A small knowledge base (services list) contains keywords, service details, and available doctors/trainers/slots  

\- The system retrieves the most relevant service by matching user input with these keywords  

\- Based on the result, it generates a meaningful response showing the recommended service along with available professionals and time slots  



\---



\### Why I Took This Approach

Since the assignment does not require backend or API integration, I focused on demonstrating the concept of GenAI in a lightweight way using frontend logic. The idea was to show how user input can be interpreted, relevant data retrieved, and a useful response generated.



\---



\### Future Improvements

This can be further improved by:

\- Integrating a real LLM API for better understanding of user input  

\- Using embeddings for more accurate matching  

\- Connecting to a real database for dynamic service and availability data  

