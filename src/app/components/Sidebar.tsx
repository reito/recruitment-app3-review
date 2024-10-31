//クライアントサイドでの処理
'use client'
import React, { useState } from 'react';

//型定義
type SidebarProps = {
  selectedCategories: string[];
  selectedSalary: number;
  onFilterChange: (category: string[], salary: number) => void;
};

//SidebarはReact関数型コンポーネントとしてpropsを受け取る
const Sidebar: React.FC<SidebarProps> = ({ selectedCategories, selectedSalary, onFilterChange}) => {

//string型の配列をReactで保持し初期値は親コンポーネントから渡されたselected〇〇を代入
const [categories, setCategories] = useState<string[]>(selectedCategories);
const [salary, setSalary] = useState<number>(selectedSalary);

const categoryOptions = ['エンジニア', 'デザイン', 'マーケティング', '人事', '財務・経理', '医療・介護']

//HTML要素の変更点に注目する
const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {

  //変更したカテゴリーを選択
  const category = e.target.value;
  let updatedCategories;
  
  if (e.target.checked) {
    //カテゴリーにチェックされていたら配列に追加する
    updatedCategories = [...categories, category];
  } else {
    //そうでなければ選択カテゴリー以外を配列に代入
    updatedCategories = categories.filter(c => c !== category);
  }

  setCategories(updatedCategories);
  onFilterChange(updatedCategories, salary);

}

const handleSalaryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  const newSalary = parseInt(e.target.value, 10);
  setSalary(newSalary);
  onFilterChange(categories, newSalary);
}

  return (
    <div>
      <aside>
        <h2>求人カテゴリー</h2>
        {categoryOptions.map(category => (
          <label key={category}>
            <input 
              type="checkbox"
              value={category}
              onChange={handleCategoryChange}
              checked={categories.includes(category)} 
            />
            {category}
          </label>
        ))}
      </aside>
      <h2>年収</h2>
      <select value={salary} onChange={handleSalaryChange}>
        <option value={0}>全ての年収</option>
        <option value={300}>300万円以上</option>
        <option value={5000}>500万円以上</option>
        <option value={700}>700万円以上</option>
      </select>
    </div>
  );
};

export default Sidebar;