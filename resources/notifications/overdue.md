---
sidebar_position: 105
---
# Overdue Approvers

> Skill Level: 🟡 Intermediate

In this tutorial we will talk about how to develop reports and notifications on overdue approvals.  This often includes esclation to manageers as well.

Prerequisites:
- Users Manager field must be accurate on each SF User

## Query Overdue Change Approvals

Below is a SOQL query that can extract a list of users pending approval on changes as well as their managers information.

```sql
SELECT Id,
	TYPEOF Actor WHEN User THEN Id, Name, Email, Manager.Id, Manager.Name, Manager.Email ELSE Id, Name END,
	CreatedDate, ElapsedTimeInHours, ElapsedTimeInDays, ProcessInstance.Status,
	TYPEOF ProcessInstance.TargetObject WHEN PDLM__Change_Phase__c THEN Id, ALG_Change_Category__c, ALG_Change_Number__c, Change_Title__c, Name, PDLM__ORG_URL__c ELSE Id END
FROM ProcessInstanceWorkitem
WHERE ProcessInstance.Status NOT IN ('Approved', 'Rejected', 'Removed')
	AND ProcessInstance.TargetObject.Type = 'PDLM__Change_Phase__c'
	AND ElapsedTimeInDays > 7
ORDER BY CreatedDate DESC
```

TODO:
- Use Cases
- Examples