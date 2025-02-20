# Automated-Ticket-Assignment-in-ITSM

**Scenario:** When an incident is created in ServiceNow, it should be automatically assigned to the correct support group based on the category and subcategory.
**Solution Approach:**
**Business Rule:** Use a Business Rule to define conditions based on the category and subcategory of the incident.

**Assignment Rule:** Set up an Assignment Rule to auto-assign tickets to the correct group.

**Flow Designer (Optional):** Use Flow Designer to send notifications when the ticket assignment changes.

**Solution Implementation:**

**1. Business Rule Script:**

Create a Business Rule that triggers on Insert or Update of an Incident record. This will check the category and subcategory of the incident and auto-assign it to the correct group.

<img width="959" alt="Image" src="https://github.com/user-attachments/assets/e8e7447d-24d2-49df-bc22-6ecff56497b4" />

