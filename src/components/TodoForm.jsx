import { useState } from 'react';

function TodoForm({ addTask }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    
    addTask(inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col sm:flex-row gap-3 items-stretch">
        <input
          type="text"
          placeholder="What needs to be done?"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="flex-1 px-5 py-4 rounded-xl bg-slate-50 text-slate-900 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-lg shadow-inner placeholder:text-slate-400"
        />
        <button
          type="submit"
          className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold tracking-wide rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4"></path></svg>
          Add Task
        </button>
      </div>
    </form>
  );
}

export default TodoForm;
