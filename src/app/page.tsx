'use client'
import Sidebar from './components/Sidebar';
import Joblist from './components/Joblist';
import { useState } from 'react';

interface Job {
  id: number;
  title: string;
  category: string;
  salary: number;
}

export default function Homepage() {
  //Sidebarコンポーネントで選ばれたカテゴリーを表示用にセットされ初期値は空配列
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  //Sidebarコンポーネントで選ばれた年収を表示用にセットされ初期値は0
  const [selectedSalary, setSelectedSalary] = useState<number>(0);

  //joblistコンポーネントで求人を表示させるために保持
  const [jobs, setJobs] =useState<Job[]>([]);
  
  return (
    <div className='flex'>
      <Sidebar
        //useEffectで使うためのSidebarで選ばれたカテゴリや年収のチェックを保存
        selectedCategories={selectedCategories}
        selectedSalary={selectedSalary}
        onFilterChange={(categories, salary) => {
          setSelectedCategories(categories);
          setSelectedSalary(salary);
        }}
      />
      <Joblist jobs={jobs || []}/>
    </div>
  );
}