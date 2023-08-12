import { useEffect, useState } from 'react'

const Layout = () => {
    const [apiResponse, setApiResponse] = useState({
            "tickets":[
                {
                    "id":"CAM-1",
                    "title":"Update User Profile Page UI",
                    "tag":["Feature request"],
                    "userId":"usr-1",
                    "status":"Todo",
                    "priority":4
                },
                {
                    "id":"CAM-2",
                    "title":"Add Multi-Language Support - Enable multi-language support within the application.",
                    "tag":["Feature Request"],
                    "userId":"usr-2",
                    "status":"In progress",
                    "priority":3
                },
                {
                    "id":"CAM-3",
                    "title":"Optimize Database Queries for Performance",
                    "tag":["Feature Request"],
                    "userId":"usr-2",
                    "status":"In progress",
                    "priority":1
                },
                {
                    "id":"CAM-4",
                    "title":"Implement Email Notification System",
                    "tag":["Feature Request"],
                    "userId":"usr-1",
                    "status":"In progress",
                    "priority":3
                },
                {
                    "id":"CAM-5",
                    "title":"Enhance Search Functionality",
                    "tag":["Feature Request"],
                    "userId":"usr-5",
                    "status":"In progress",
                    "priority":0
                },
                {
                    "id":"CAM-6",
                    "title":"Third-Party Payment Gateway",
                    "tag":["Feature Request"],
                    "userId":"usr-2",
                    "status":"Todo",
                    "priority":1
                },
                {
                    "id":"CAM-7",
                    "title":"Create Onboarding Tutorial for New Users",
                    "tag":["Feature Request"],
                    "userId":"usr-1",
                    "status":"Backlog",
                    "priority":2
                },
                {
                    "id":"CAM-8",
                    "title":"Implement Role-Based Access Control (RBAC)",
                    "tag":["Feature Request"],
                    "userId":"usr-3",
                    "status":"In progress",
                    "priority":3
                },
                {
                    "id":"CAM-9",
                    "title":"Upgrade Server Infrastructure",
                    "tag":["Feature Request"],
                    "userId":"usr-5",
                    "status":"Todo",
                    "priority":2
                },
                {
                    "id":"CAM-10",
                    "title":"Conduct Security Vulnerability Assessment",
                    "tag":["Feature Request"],
                    "userId":"usr-4",
                    "status":"Backlog",
                    "priority":1
                }
            ],
            "users": [
                {
                    "id":"usr-1",
                    "name":"Anoop sharma",
                    "available":false
                },
                {
                    "id":"usr-2",
                    "name":"Yogesh",
                    "available":true
                },
                {
                    "id":"usr-3",
                    "name":"Shankar Kumar",
                    "available":true
                },
                {
                    "id":"usr-4",
                    "name":"Ramesh",
                    "available":true
                },
                {
                    "id":"usr-5",
                    "name":"Suresh",
                    "available":true
                }
            ]
        }
    );

    useEffect(() => {
        // Simulated API response data
        const apiResponseData = {
            // ... (the JSON response you provided)
        };

        setApiResponse(apiResponseData);
    }, []);

    // Calculate the count of each status
    const statusCounts = apiResponse.tickets.reduce((acc, ticket) => {
        const status = ticket.status;
        acc[status] = (acc[status] || 0) + 1;
        return acc;
    }, {});

    return (
        <div>
            <h1>Ticket Status Counts:</h1>
            <ul>
                {Object.entries(statusCounts).map(([status, count]) => (
                    <li key={status}>{status}: {count}</li>
                ))}
            </ul>
        </div>
    );
}

export default Layout;