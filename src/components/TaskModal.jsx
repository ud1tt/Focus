import { useState, useEffect } from 'react';
import RemoveModal from './RemoveModal';

function TaskModal({ task, onClose, onSave, onDelete }) {
  const [editedTask, setEditedTask] = useState(task);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  // Close modal on Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        if (showDeleteConfirm) {
          setShowDeleteConfirm(false);
        } else {
          onClose();
        }
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose, showDeleteConfirm]);

  // Update local state if the selected task changes while modal is open
  useEffect(() => {
    setEditedTask(task);
    setShowDeleteConfirm(false);
  }, [task]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedTask(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!editedTask.name.trim()) return;
    onSave(editedTask);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200">
      {/* Modal Dialog Box */}
      <div 
        className="w-full max-w-2xl bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border border-slate-200 overflow-hidden relative transform transition-all animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Delete Confirmation Overlay */}
        <RemoveModal 
          isOpen={showDeleteConfirm}
          title="Delete this task?"
          message="This action cannot be undone. Are you sure you want to permanently delete this task?"
          confirmText="Yes, Delete"
          cancelText="Cancel"
          onConfirm={() => onDelete(task.id)}
          onCancel={() => setShowDeleteConfirm(false)}
        />

        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-blue-600"></div>
        
        <div className="flex justify-between items-center p-6 border-b border-slate-100 bg-slate-50/50">
          <h2 className="text-xl font-extrabold text-slate-800">
            Task Details
          </h2>
          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200 rounded-full transition-all"
            aria-label="Close dialog"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="group">
            <label className="block text-xs font-bold tracking-wider text-slate-500 uppercase mb-2 group-focus-within:text-blue-600 transition-colors">Task Name</label>
            <input
              type="text"
              name="name"
              value={editedTask.name}
              onChange={handleChange}
              className="w-full px-5 py-3 rounded-xl bg-slate-50 text-slate-900 font-medium border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-400"
              placeholder="E.g., Complete the React dashboard"
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="group">
              <label className="block text-xs font-bold tracking-wider text-slate-500 uppercase mb-2 group-focus-within:text-blue-600 transition-colors">Start Date</label>
              <input
                type="date"
                name="startDate"
                value={editedTask.startDate}
                onChange={handleChange}
                className="w-full px-5 py-3 rounded-xl bg-slate-50 text-slate-900 font-medium border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              />
            </div>
            <div className="group">
              <label className="block text-xs font-bold tracking-wider text-slate-500 uppercase mb-2 group-focus-within:text-blue-600 transition-colors">End Date</label>
              <input
                type="date"
                name="endDate"
                value={editedTask.endDate}
                onChange={handleChange}
                className="w-full px-5 py-3 rounded-xl bg-slate-50 text-slate-900 font-medium border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              />
            </div>
          </div>

          <div className="group">
            <label className="block text-xs font-bold tracking-wider text-slate-500 uppercase mb-2 group-focus-within:text-blue-600 transition-colors">Status</label>
            <div className="relative">
              <select
                name="status"
                value={editedTask.status}
                onChange={handleChange}
                className="w-full px-5 py-3 rounded-xl bg-slate-50 text-slate-900 font-medium border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all appearance-none cursor-pointer"
              >
                <option value="Not Started">Not Started</option>
                <option value="In Development">In Development</option>
                <option value="Testing">Testing</option>
                <option value="Under Review">Under Review</option>
                <option value="Completed">Completed</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 mt-4 border-t border-slate-100">
            <button
              type="button"
              onClick={() => setShowDeleteConfirm(true)}
              className="w-full sm:w-auto px-6 py-2.5 text-red-600 hover:text-white bg-red-50 hover:bg-red-500 rounded-lg font-bold transition-all duration-200"
            >
              Delete Task
            </button>
            <div className="flex w-full sm:w-auto gap-3">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 sm:flex-none px-6 py-2.5 text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg font-bold transition-all duration-200"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 sm:flex-none px-8 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              >
                Save Changes
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TaskModal;
