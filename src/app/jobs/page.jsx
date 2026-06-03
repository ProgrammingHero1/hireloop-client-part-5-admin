import JobCard from "@/components/jobs/JobCard";
import { getJobs } from "@/lib/api/jobs";


const sampleData = {
    _id: { $oid: "6a20319eaf8692fc9374958d" },
    jobTitle: "Cloud Solutions Architect",
    companyName: "Microsoft",
    companyLogo: "https://i.ibb.co/kVBxB7cD/microsoft.png",
    jobType: "full-time",
    minSalary: "160000",
    maxSalary: "220000",
    location: "USA",
    responsibilities: "Design enterprise cloud solutions.",
    requirements: "Azure, AWS, architecture design",
    benefits: "Stock options",
    isRemote: false
};

export default async function Page() {

    const jobs = await getJobs();

    return (
        <div className="p-8 bg-zinc-950 min-h-screen flex justify-center items-center">
            <h2>jobs: {jobs.length}</h2>
            <JobCard job={jobs[16]} />
        </div>
    );
}