import * as React from "react";


const TaskFaq = () => {
  return (
    <div>
      <div className="flex">
        <h1 className="text-center text-8xl text-black">FAQ?</h1>
      </div>
      <div className="collapse collapse-arrow bg-base-200 text-4xl" style={{marginBottom:"1rem" }}>
        <input type="radio" name="my-accordion-2" checked="checked" />
        <div className="collapse-title text-2xl font-medium">Step1: How to Add Task</div>
        <div className="collapse-content">
          <p>Click on the add btn available at the top left corner after selecting task menu from the sidebar</p>
        </div>
      </div>
      <div className="collapse-arrow collapse bg-base-200  text-4xl" style={{marginBottom:"1rem"}}>
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-2xl font-medium">Step2:Filling the details</div>
        <div className="collapse-content">
          <p>A pop-up box appears where you have to fill the details like <strong>Task Name , Date Field , Assigned By, Status , Importance Level</strong> 
            Fill each details according to your wish and <i className="font-extrabold">select the date field to get activated.</i>
          </p>
        </div>
      </div>
      <div className="collapse-arrow collapse bg-base-200 text-4xl" style={{marginBottom:"1rem"}}>
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-2xl font-medium">Step3: Save the details or Close the box</div>
        <div className="collapse-content">
          <p>Please Click  on the Save Changes button to save it , then it will be added in your task queue list or if you dont want to
            save you can cancel it also.
          </p>
        </div>
      </div>
      <div className="collapse-arrow collapse bg-base-200 text-4xl" style={{marginBottom:"1rem"}}>
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-2xl font-medium">Step4: Task List Table View</div>
        <div className="collapse-content">
          <p>After saving your tasks you can view them in your task queue table which will be visible on your screen,
            Here you can delete the task if you have completed it .
          </p>
        </div>
      </div>
    </div>
  );
};

export default TaskFaq;
