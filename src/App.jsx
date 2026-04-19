import { useState, useEffect } from 'react'
import TodoForm from './components/TodoForm'
import TaskList from './components/TaskList'
import TaskModal from './components/TaskModal'

const initialTasks = [
  {
    id: '1',
    name: 'Research modern UI trends',
    startDate: new Date().toISOString().split('T')[0],
    endDate: new Date().toISOString().split('T')[0],
    status: 'Completed'
  },
  {
    id: '2',
    name: 'Build responsive layout for task list',
    startDate: new Date().toISOString().split('T')[0],
    endDate: '',
    status: 'In Development'
  },
  {
    id: '3',
    name: 'Implement backend API integration',
    startDate: '',
    endDate: '',
    status: 'Not Started'
  },
  {
    id: '4',
    name: 'Write unit tests for the components',
    startDate: '',
    endDate: '',
    status: 'Not Started'
  },
  {
    id: '5',
    name: 'Design the marketing landing page',
    startDate: '',
    endDate: '',
    status: 'Under Review'
  },
  {
    id: '6',
    name: 'Fix the navigation bug on mobile',
    startDate: '',
    endDate: '',
    status: 'Testing'
  }
];

function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks');
    if (saved) {
      return JSON.parse(saved);
    }
    return initialTasks;
  });
  
  const [selectedTask, setSelectedTask] = useState(null);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTaskName) => {
    const newTask = {
      id: Date.now().toString(),
      name: newTaskName,
      startDate: new Date().toISOString().split('T')[0],
      endDate: '',
      status: 'Not Started'
    };
    setTasks([newTask, ...tasks]);
  };

  const updateTask = (updatedTask) => {
    setTasks(tasks.map(t => t.id === updatedTask.id ? updatedTask : t));
    setSelectedTask(null);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(t => t.id !== taskId));
    setSelectedTask(null);
  };

  const completedCount = tasks.filter(t => t.status === 'Completed').length;
  const progressPercentage = tasks.length === 0 ? 0 : Math.round((completedCount / tasks.length) * 100);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col items-center py-12 px-4 sm:px-6 font-sans">
      <div className="max-w-4xl w-full z-10">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Manage your day.
          </h1>
          <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto">
            Stay focused and efficient.
          </p>
        </div>

        {/* Main App Container */}
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-200 p-6 md:p-10 transition-all duration-500">
          <TodoForm addTask={addTask} />
          
          <div className="mt-12 mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-slate-100 pb-4">
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-1">Your Tasks</h2>
              <p className="text-sm font-medium text-slate-500">
                You have completed {completedCount} out of {tasks.length} tasks
              </p>
            </div>
            
            {/* Progress Bar Mini */}
            <div className="w-full sm:w-48">
              <div className="flex justify-between text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">
                <span>Progress</span>
                <span className="text-blue-600">{progressPercentage}%</span>
              </div>
              <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-blue-600 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
            </div>
          </div>

          <TaskList 
            tasks={tasks} 
            selectedTaskId={selectedTask?.id}
            onTaskClick={(task) => setSelectedTask(task)} 
          />
        </div>

        {/* Popup Task Modal */}
        {selectedTask && (
          <TaskModal 
            task={selectedTask} 
            onClose={() => setSelectedTask(null)}
            onSave={updateTask}
            onDelete={deleteTask}
          />
        )}
      </div>
    </div>
  )
}

export default App
