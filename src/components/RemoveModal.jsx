function RemoveModal({ 
  isOpen, 
  title = "Are you sure?", 
  message = "This action cannot be undone.", 
  confirmText = "Yes, Confirm", 
  cancelText = "Cancel", 
  onConfirm, 
  onCancel 
}) {
  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 z-[110] bg-white/95 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center animate-in fade-in zoom-in-95 duration-200 rounded-2xl">
      <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mb-4 border border-red-100 shadow-sm">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
      </div>
      <h3 className="text-xl font-bold text-slate-800 mb-2">{title}</h3>
      <p className="text-slate-500 mb-8 max-w-sm">{message}</p>
      <div className="flex gap-3 w-full max-w-xs">
        <button 
          type="button" 
          onClick={onCancel} 
          className="flex-1 px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-slate-300"
        >
          {cancelText}
        </button>
        <button 
          type="button" 
          onClick={onConfirm} 
          className="flex-1 px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        >
          {confirmText}
        </button>
      </div>
    </div>
  );
}

export default RemoveModal;
