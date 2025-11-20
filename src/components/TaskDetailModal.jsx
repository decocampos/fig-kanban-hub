import { X } from 'lucide-react';
import { Button } from './ui/button';

const statusLabels = {
  pendente: 'Pendente',
  realizando: 'Realizando',
  concluida: 'Concluída',
};

const priorityLabels = {
  low: 'Low',
  medium: 'Medium',
  high: 'High',
};

export function TaskDetailModal({ task, isOpen, onClose, onEdit, onDelete, onStatusChange }) {
  if (!isOpen || !task) return null;

  const handleDelete = () => {
    if (window.confirm('Tem certeza que deseja deletar esta atividade?')) {
      onDelete(task.id);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-background border border-border rounded-2xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-foreground">{task.title}</h2>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-2">
              Descrição
            </label>
            <div className="bg-input border border-border rounded-lg px-4 py-3 text-foreground min-h-[100px]">
              {task.description}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-2">
                Status
              </label>
              <select
                value={task.status}
                onChange={(e) => onStatusChange(task.id, e.target.value)}
                className="w-full bg-input border border-border rounded-lg px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="pendente">Pendente</option>
                <option value="realizando">Realizando</option>
                <option value="concluida">Concluída</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-2">
                Prioridade
              </label>
              <div className="bg-input border border-border rounded-lg px-4 py-2 text-foreground">
                {priorityLabels[task.priority]}
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <Button 
            onClick={handleDelete}
            variant="destructive"
            className="flex-1"
          >
            Deletar atividade
          </Button>
          <Button 
            onClick={() => {
              onEdit(task);
              onClose();
            }}
            className="flex-1"
          >
            Editar informações
          </Button>
        </div>
      </div>
    </div>
  );
}
