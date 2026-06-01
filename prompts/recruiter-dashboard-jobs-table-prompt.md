### First prompt
provide objective, background info, data, current component state and hero ui V3 code
```
for my hireloop project. 
NextJS using JavaScript ( no TS), heor ui, gravity icons, tailwind css: i need a table to display jobs of a company: 
here is the jobs data: 
{
  "_id": {
    "$oid": "6a1cdf624886ed879654a5fd"
  },
  "jobTitle": "My First hiring",
  "jobCategory": "technology",
  "jobType": "full-time",
  "minSalary": "25000",
  "maxSalary": "30000",
  "currency": "USD",
  "location": "Dhaka",
  "deadline": "2026-06-13",
  "responsibilities": "Develop smartly",
  "requirements": "Tech noledge",
  "benefits": "Free Code",
  "isRemote": false,
  "companyId": "company_123",
  "status": "active",
  "isPubliclyVisible": true
}

pick: 3-4 important column that are important and keep the status column,  and last column will be actions like: video details, edit, delete. these actions will be icons button. 

i already have the data loaded in the component. here is the component: 
import { getCompanyJobs } from '@/lib/api/jobs';
import React from 'react';

const RecruiterJobs = async() => {
    const companyId = 'company_123'; // todo
    const jobs = await getCompanyJobs(companyId); 
    console.log("Jobs for company:", jobs);
    return (
        <div>
            <h2>Recruiter/company Manage All Jobs</h2>
        </div>
    );
};

export default RecruiterJobs;

and use this hero ui component to follow the code style: 
import {Chip, Table} from "@heroui/react";

export function ColumnResizing() {
  return (
    <Table>
      <Table.ResizableContainer>
        <Table.Content aria-label="Table with resizable columns" className="min-w-[700px]">
          <Table.Header>
            <Table.Column isRowHeader defaultWidth="1fr" id="name" minWidth={160}>
              Name
              <Table.ColumnResizer />
            </Table.Column>
            <Table.Column defaultWidth="1fr" id="role" minWidth={220}>
              Role
              <Table.ColumnResizer />
            </Table.Column>
            <Table.Column defaultWidth="1fr" id="status" minWidth={100}>
              Status
              <Table.ColumnResizer />
            </Table.Column>
            <Table.Column defaultWidth="1fr" id="email" minWidth={200}>
              Email
            </Table.Column>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Kate Moore</Table.Cell>
              <Table.Cell>CEO</Table.Cell>
              <Table.Cell>
                <Chip color="success" size="sm" variant="soft">
                  Active
                </Chip>
              </Table.Cell>
              <Table.Cell>kate@acme.com</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>John Smith</Table.Cell>
              <Table.Cell>CTO</Table.Cell>
              <Table.Cell>
                <Chip color="success" size="sm" variant="soft">
                  Active
                </Chip>
              </Table.Cell>
              <Table.Cell>john@acme.com</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Sara Johnson</Table.Cell>
              <Table.Cell>CMO</Table.Cell>
              <Table.Cell>
                <Chip color="warning" size="sm" variant="soft">
                  On Leave
                </Chip>
              </Table.Cell>
              <Table.Cell>sara@acme.com</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Michael Brown</Table.Cell>
              <Table.Cell>CFO</Table.Cell>
              <Table.Cell>
                <Chip color="success" size="sm" variant="soft">
                  Active
                </Chip>
              </Table.Cell>
              <Table.Cell>michael@acme.com</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Emily Davis</Table.Cell>
              <Table.Cell>Product Manager</Table.Cell>
              <Table.Cell>
                <Chip color="danger" size="sm" variant="soft">
                  Inactive
                </Chip>
              </Table.Cell>
              <Table.Cell>emily@acme.com</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Content>
      </Table.ResizableContainer>
    </Table>
  );
}
```

### Second Prompt
generated typescript and also provided reusable Table component. however, i wanted a simple table so that actions are in the same page (for simplicity)
```
I am not using TS: I am using JS. and give me one component
```