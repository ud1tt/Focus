function TaskItem({ task, isSelected, onTaskClick }) {
  const isCompleted = task.status === 'Completed';

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Completed': 
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'In Development': 
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'Testing': 
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'Under Review': 
        return 'bg-purple-50 text-purple-700 border-purple-200';
      default: 
        return 'bg-slate-100 text-slate-600 border-slate-200';
    }
  };

  return (
    <li 
      onClick={() => onTaskClick(task)}
      className={`
        group relative flex flex-col sm:flex-row sm:items-center justify-between p-5 sm:px-6 rounded-2xl 
        cursor-pointer transition-all duration-200 ease-out border
        ${isSelected 
          ? 'bg-blue-50/50 border-blue-500 shadow-sm scale-[1.01] z-10' 
          : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-md hover:-translate-y-0.5'
        }
      `}
    >
      {/* Left Accent Bar for Selected state */}
      {isSelected && (
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-blue-600 rounded-l-2xl"></div>
      )}

      <div className="flex-1 min-w-0 mb-4 sm:mb-0 pl-2">
        <h3 className={`
          text-lg font-bold truncate transition-colors duration-200
          ${isCompleted ? 'line-through text-slate-400' : 'text-slate-800'}
          ${isSelected && !isCompleted ? 'text-blue-700' : ''}
        `}>
          {task.name}
        </h3>
        
        <div className="flex items-center gap-4 mt-2 text-sm font-semibold text-slate-500">
          {task.startDate && (
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              {task.startDate}
            </span>
          )}
          {task.endDate && (
            <span className="flex items-center gap-1.5">
              <span className="text-slate-300">→</span>
              <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              {task.endDate}
            </span>
          )}
        </div>
      </div>
      
      <div className="flex-shrink-0 flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto mt-2 sm:mt-0 pt-3 sm:pt-0 border-t sm:border-0 border-slate-100">
        <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-md border ${getStatusBadge(task.status)}`}>
          {task.status}
        </span>
        
        <svg 
          className={`w-5 h-5 transition-all duration-300 ${isSelected ? 'text-blue-500 rotate-90' : 'text-slate-300 group-hover:text-slate-400 group-hover:translate-x-1'}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path>
        </svg>
      </div>
    </li>
  );
}

export default TaskItem;
