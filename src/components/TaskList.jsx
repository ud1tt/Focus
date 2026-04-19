import { useState } from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, selectedTaskId, onTaskClick }) {
  // Default to showing 2 tasks initially
  const [visibleCount, setVisibleCount] = useState(2);

  if (tasks.length === 0) {
    return (
      <div className="text-center py-16 px-4 rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50">
        <div className="w-16 h-16 mx-auto mb-4 bg-white shadow-sm border border-slate-100 rounded-full flex items-center justify-center text-slate-400">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg>
        </div>
        <p className="text-slate-600 text-lg font-bold">Your task list is beautifully empty.</p>
        <p className="text-slate-500 text-sm mt-1">Add a task above to get started.</p>
      </div>
    );
  }

  // Calculate the tasks to show based on visibleCount
  const visibleTasks = tasks.slice(0, visibleCount);
  const hasMore = visibleCount < tasks.length;

  const handleShowMore = () => {
    // Show 3 more tasks each time the button is clicked
    setVisibleCount(prev => prev + 3);
  };

  return (
    <div className="space-y-6">
      <ul className="space-y-3">
        {visibleTasks.map((task) => (
          <TaskItem 
            key={task.id} 
            task={task} 
            isSelected={selectedTaskId === task.id} 
            onTaskClick={onTaskClick} 
          />
        ))}
      </ul>

      {hasMore && (
        <div className="flex justify-center pt-2">
          <button 
            onClick={handleShowMore}
            className="group flex flex-col items-center gap-1 text-slate-400 hover:text-blue-600 transition-colors duration-300 focus:outline-none"
            aria-label="Show more tasks"
          >
            <span className="text-xs font-bold uppercase tracking-widest">Show More</span>
            <div className="flex flex-col items-center -space-y-2 group-hover:translate-y-1 transition-transform duration-300">
              <svg className="w-5 h-5 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path>
              </svg>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </button>
        </div>
      )}
    </div>
  );
}

export default TaskList;
