import Job from "./Job";
import Wrapper from "../assets/wrappers/JobsContainer";
import { useAllJobContext } from "../pages/AllJobs";

const JobsContainer = () => {
  const { data } = useAllJobContext();
  const { jobs } = data;

  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>No jobs to display...</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div className="jobs">
        {jobs.map((job) => {
          return <Job key={job._id} {...job}></Job>;
        })}
      </div>
    </Wrapper>
  );
};

export default JobsContainer;
