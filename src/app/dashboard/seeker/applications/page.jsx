import { getApplicationsByApplicant } from '@/lib/api/applications';
import { getUserSession } from '@/lib/core/session';
import React from 'react';

const page = async() => {
    const user = await getUserSession();
    const jobs = await getApplicationsByApplicant(user.id)
    return (
        <div>
            <h2>Applications: {jobs.length}</h2>
        </div>
    );
};

export default page;