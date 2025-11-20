import { TaskCard } from './TaskCard';

export function KanbanColumn({ title, tasks, status, onTaskClick, onDrop }) {
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData('taskId');
    onDrop(taskId, status);
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className="bg-card rounded-2xl p-4 min-h-[500px]"
    >
      <h2 className="text-foreground font-bold text-lg mb-4">{title}</h2>
      <div className="space-y-3">
        {tasks.map(task => (
          <TaskCard
            key={task.id}
            task={task}
            onClick={() => onTaskClick(task)}
          />
        ))}
      </div>
    </div>
  );
}
