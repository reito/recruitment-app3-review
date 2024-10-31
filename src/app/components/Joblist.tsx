import React, { useLayoutEffect } from 'react';

type Job = {
  id: number;
  title: string;
  category: string;
  salary: number;
}

type JoblistProps =  {
  jobs: Job[];
}

const Joblist: React.FC<JoblistProps> = ({ jobs }) => {
  return (
    <div>
      <h2>求人投稿</h2>
      {jobs.length > 0 ? (
        <ul>
          {jobs.map((job) => (
            <li key={job.id}>
              <h3></h3>
              <p>カテゴリ: {job.category}</p>
              <p>年収: {job.salary}万円</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>該当す求人はありません。</p>
      )}
    </div>
  );
};

export default Joblist;