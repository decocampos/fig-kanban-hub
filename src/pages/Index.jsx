import { useState } from 'react';
import { Plus } from 'lucide-react';
import { useTasks } from '../hooks/useTasks';
import { SearchBar } from '../components/SearchBar';
import { KanbanColumn } from '../components/KanbanColumn';
import { TaskModal } from '../components/TaskModal';
import { TaskDetailModal } from '../components/TaskDetailModal';
import { Button } from '../components/ui/button';

const Index = () => {
  const { tasks, addTask, updateTask, deleteTask, moveTask, getTasksByStatus } = useTasks();
  const [searchQuery, setSearchQuery] = useState('');
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [editingTask, setEditingTask] = useState(null);

  // Filter tasks based on search query
  const filteredTasks = tasks.filter(task => 
    task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    task.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getFilteredTasksByStatus = (status) => {
    return filteredTasks.filter(task => task.status === status);
  };

  const handleTaskClick = (task) => {
    setSelectedTask(task);
    setIsDetailModalOpen(true);
  };

  const handleCreateTask = (taskData) => {
    addTask(taskData);
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
    setIsCreateModalOpen(true);
  };

  const handleSaveTask = (taskData) => {
    if (editingTask) {
      updateTask(editingTask.id, taskData);
      setEditingTask(null);
    } else {
      addTask(taskData);
    }
  };

  const handleDrop = (taskId, newStatus) => {
    moveTask(taskId, newStatus);
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-6">Kanban</h1>
          
          <div className="flex gap-4 items-center">
            <div className="flex-1">
              <SearchBar 
                value={searchQuery}
                onChange={setSearchQuery}
                placeholder="Buscar..."
              />
            </div>
            <Button
              onClick={() => {
                setEditingTask(null);
                setIsCreateModalOpen(true);
              }}
              className="flex items-center gap-2"
            >
              <Plus className="h-4 w-4" />
              Nova atividade
            </Button>
          </div>
        </div>

        {/* Kanban Board */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <KanbanColumn
            title="Pendente"
            status="pendente"
            tasks={getFilteredTasksByStatus('pendente')}
            onTaskClick={handleTaskClick}
            onDrop={handleDrop}
          />
          <KanbanColumn
            title="Realizando"
            status="realizando"
            tasks={getFilteredTasksByStatus('realizando')}
            onTaskClick={handleTaskClick}
            onDrop={handleDrop}
          />
          <KanbanColumn
            title="Concluída"
            status="concluida"
            tasks={getFilteredTasksByStatus('concluida')}
            onTaskClick={handleTaskClick}
            onDrop={handleDrop}
          />
        </div>

        {/* Modals */}
        <TaskModal
          task={editingTask}
          isOpen={isCreateModalOpen}
          onClose={() => {
            setIsCreateModalOpen(false);
            setEditingTask(null);
          }}
          onSave={handleSaveTask}
        />

        <TaskDetailModal
          task={selectedTask}
          isOpen={isDetailModalOpen}
          onClose={() => {
            setIsDetailModalOpen(false);
            setSelectedTask(null);
          }}
          onEdit={handleEditTask}
          onDelete={deleteTask}
          onStatusChange={(id, status) => {
            moveTask(id, status);
            setSelectedTask({ ...selectedTask, status });
          }}
        />
      </div>
    </div>
  );
};

export default Index;
