import { useState } from 'react';

const statusColors = {
  pendente: 'bg-status-pending text-status-pending-foreground',
  realizando: 'bg-status-in-progress text-status-in-progress-foreground',
  concluida: 'bg-status-completed text-status-completed-foreground',
};

const priorityLabels = {
  low: 'Low',
  medium: 'Medium',
  high: 'High',
};

export function TaskCard({ task, onClick }) {
  const [isDragging, setIsDragging] = useState(false);

  return (
    <div
      onClick={onClick}
      draggable
      onDragStart={(e) => {
        e.dataTransfer.setData('taskId', task.id);
        setIsDragging(true);
      }}
      onDragEnd={() => setIsDragging(false)}
      className={`${statusColors[task.status]} rounded-xl p-4 cursor-pointer transition-all hover:scale-[1.02] hover:shadow-lg ${
        isDragging ? 'opacity-50' : ''
      }`}
    >
      <h3 className="font-semibold mb-2 text-sm">{task.title}</h3>
      <p className="text-xs opacity-90 mb-3 line-clamp-2">{task.description}</p>
      <span className="inline-block bg-priority-low text-priority-low-foreground text-xs px-2 py-1 rounded">
        {priorityLabels[task.priority]}
      </span>
    </div>
  );
}
