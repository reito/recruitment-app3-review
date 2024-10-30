import React, { useState } from 'react';

type SidebarProps = {
  selectedCategories: string[];
  selectedSalary: number;
  onFilterChange: (category: string[], salary: number) => void;
};

const Sidebar: React.FC<SidebarProps> = ({ selectedCategories, selectedSalary, onFilterChange}) => {
  return (
    <div></div>
  );
}