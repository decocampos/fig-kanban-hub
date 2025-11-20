import { useState, useEffect } from 'react';

const STORAGE_KEY = 'kanban-tasks';

// Initial sample tasks to demonstrate the app
const initialTasks = [
  {
    id: '1',
    title: 'Tablet view',
    description: 'Create tablet view layout',
    status: 'pendente',
    priority: 'high',
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    title: 'Audio recording in note',
    description: 'Allow audio files and playback UI',
    status: 'pendente',
    priority: 'high',
    createdAt: new Date().toISOString(),
  },
  {
    id: '3',
    title: 'Bookmark in note',
    description: 'Allow rich-link fill on a note, and feature to render website screenshot.',
    status: 'pendente',
    priority: 'low',
    createdAt: new Date().toISOString(),
  },
  {
    id: '4',
    title: 'Image viewer',
    description: 'Shows when clicking on any thumbnail',
    status: 'pendente',
    priority: 'low',
    createdAt: new Date().toISOString(),
  },
  {
    id: '5',
    title: 'Mobile view',
    description: 'Functions for both web responsive and native apps. Table-v-header and IOS will need unique share icons.',
    status: 'realizando',
    priority: 'low',
    createdAt: new Date().toISOString(),
  },
  {
    id: '6',
    title: 'Desktop view',
    description: 'PWA for website and native apps. Note: Windows layout differs, so we need unique share icons.',
    status: 'realizando',
    priority: 'low',
    createdAt: new Date().toISOString(),
  },
  {
    id: '7',
    title: 'Formatting options',
    description: 'Mobile formatting bar. Expands and Collapses when tapping the format icon.',
    status: 'realizando',
    priority: 'low',
    createdAt: new Date().toISOString(),
  },
  {
    id: '8',
    title: 'Media in note',
    description: 'Embed media content in notes',
    status: 'realizando',
    priority: 'low',
    createdAt: new Date().toISOString(),
  },
  {
    id: '9',
    title: 'Audio recording',
    description: 'Interface for when recording a new audio note',
    status: 'concluida',
    priority: 'low',
    createdAt: new Date().toISOString(),
  },
  {
    id: '10',
    title: 'Bookmarking',
    description: 'Interface for when creating a new link',
    status: 'concluida',
    priority: 'low',
    createdAt: new Date().toISOString(),
  },
  {
    id: '11',
    title: 'Mobile home screen',
    description: 'Mobile home: Tags and notes lists are sorted by recents.',
    status: 'concluida',
    priority: 'low',
    createdAt: new Date().toISOString(),
  },
];

export function useTasks() {
  const [tasks, setTasks] = useState(() => {
    // Try to load from localStorage first
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch (e) {
        console.error('Failed to parse stored tasks:', e);
        return initialTasks;
      }
    }
    return initialTasks;
  });

  // Save to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    const newTask = {
      ...task,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    };
    setTasks([...tasks, newTask]);
    return newTask;
  };

  const updateTask = (id, updates) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, ...updates } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const moveTask = (id, newStatus) => {
    updateTask(id, { status: newStatus });
  };

  const getTasksByStatus = (status) => {
    return tasks.filter(task => task.status === status);
  };

  return {
    tasks,
    addTask,
    updateTask,
    deleteTask,
    moveTask,
    getTasksByStatus,
  };
}
