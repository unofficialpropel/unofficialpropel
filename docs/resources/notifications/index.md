---
sidebar_position: 100
---
# Notifications

Everyone's favorite topic!  We dive into understanding our notification options on the Salesforce platform and details of how they are used in Propel.  Finally some resources of how you can standardize and enhance your notifications with Propel.

## Salesforce Notifications Overview

### Email Template Types

Salesforce offers various types of email templates to cater to different needs and use cases. Here are the primary types:

1. **Text Templates (aka Classic)**:
   - Simple and straightforward, containing only plain text.
   - No formatting options, ideal for basic email notifications and quick messages.
   - Pros
     - Simple
   - Cons
     - Limited formatting
     - Requires Admin to setup
     - Being phased out by Salesforce

2. **HTML with Letterhead Templates**:
   - Combine HTML content with a predefined letterhead.
   - Provides a consistent and branded look for emails.
   - Ideal for marketing emails and newsletters.
   - Pros
     - Simple
     - Enhanced design
   - Cons
     - Requires Admin to setup
     - Being phased out by Salesforce

3. **Visualforce Templates**:
   - Use Visualforce markup to create dynamic and sophisticated email content.
   - Can pull data from multiple Salesforce objects and present it in complex formats.
   - Ideal for highly personalized and dynamic emails.
   - Pros
     - Unlimited flexibility
   - Cons
     - Requires developer expirence

4. **Lightning Templates**:
   - Built using the Lightning Email Builder.
   - Drag-and-drop interface for creating responsive and visually appealing emails.
   - Suitable for users who prefer a more modern and intuitive design experience.
   - Pros
     - Easy enough that power users can maintain templates
     - Latest feature set from Salesforce
   - Cons
     - Not all functions in Salesforce can send this template type

### Email Notification Options

Salesforce provides several email notification options to keep users informed about various activities and updates. We are going to focus only on the options used with Propel. Here are some notification options you will encounter:

1. **Approval Process Notifications**:
   - Send email notifications during different stages of an approval process.
   - Inform approvers and requesters about the status of approval requests.

2. **Salesforce Chatter Email Notifications**:
   - Notify users about Chatter activity such as posts, comments, and mentions.
   - Help users stay engaged with real-time collaboration updates.
   - There are both global and user specific controls over these emails.
   - Check out [Trailhead](https://trailhead.salesforce.com/search/learning?keywords=chatter+email) to learn how to configure.

3. **Task and Event Reminders**:
   - Email notifications for upcoming tasks and events.
   - Help users manage their schedules and stay on top of important activities.

4. **Custom Notification Triggers**:
   - Use Apex triggers to create custom email notifications based on specific criteria or events.
   - Provide maximum flexibility for custom business logic and notifications.
   - Used internally by Propel to trigger notifications.

5. **Flow Email Notification**:
   - Use Flow actions to create  email notifications based on specific criteria or events.
   - Provide flexibility for custom business logic and notifications.

Salesforce's robust email template and notification options allow organizations to tailor their communication strategies to meet their specific needs, ensuring timely and effective communication with users and customers.  There are many different options and its important to pick the process that works best for your process and skill set.

## Customizing Propel Notifications

- [Approval Template Customization](./approval_customization.md)