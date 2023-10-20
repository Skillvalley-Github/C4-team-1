import React, { useState } from 'react';

function AccordionItem({ title, content, isChecked, onToggle }) {
  return (
    <div className="collapse collapse-arrow bg-base-200 mb-3">
      <input type="radio" name="my-accordion-2" checked={isChecked} onChange={onToggle} />
      <div className="collapse-title text-sm font-medium">{title}</div>
      <div className="collapse-content">
        <p className='text-sm'>{content}</p>
      </div>
    </div>
  );
}

function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  const accordionData = [
    {
      title: 'Step 1: How to Add Task',
      content: 'Click on the add button available at the top left corner after selecting the task menu from the sidebar.',
    },
    {
      title: 'Step 2: Filling the Details',
      content: 'A pop-up box appears where you have to fill in the details like Task Name, Date Field, Assigned By, Status, Importance Level. Fill in each detail according to your wish and select the date field to get activated.',
    },
    {
      title: 'Step 3: Save the Details or Close the Box',
      content: 'Please click on the Save Changes button to save it, then it will be added to your task queue list. If you don\'t want to save, you can cancel it as well.',
    },
    {
      title: 'Step 4: Task List Table View',
      content: 'After saving your tasks, you can view them in your task queue table, which will be visible on your screen. Here you can delete the task if you have completed it.',
    },
  ];

  const handleToggle = (index) => {
    setActiveIndex(index);
  };

  return (
    <div>
      {accordionData.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isChecked={index === activeIndex}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
}

export default Accordion;
