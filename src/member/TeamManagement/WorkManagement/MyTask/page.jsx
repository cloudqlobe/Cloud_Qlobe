import React, { useState } from 'react';
import { Plus, Check, Trash2, Circle } from 'lucide-react';
import Layout from '../../../layout/page';

export default function TaskManager() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Complete project documentation', completed: false, priority: 'high' },
    { id: 2, text: 'Review pull requests', completed: true, priority: 'medium' },
    { id: 3, text: 'Update dependencies', completed: false, priority: 'low' }
  ]);
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('all');

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, {
        id: Date.now(),
        text: newTask,
        completed: false,
        priority: 'medium'
      }]);
      setNewTask('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  const priorityColors = {
    high: 'border-l-red-500',
    medium: 'border-l-yellow-500',
    low: 'border-l-green-500'
  };

  return (
    <Layout>
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">My Tasks</h1>
          
          <div className="mb-6">
            <div className="flex gap-2">
              <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Add a new task..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <button
                onClick={addTask}
                className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition flex items-center gap-2 font-medium"
              >
                <Plus size={20} />
                Add
              </button>
            </div>
          </div>

          <div className="flex gap-2 mb-6">
            {['all', 'active', 'completed'].map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  filter === f
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>

          <div className="space-y-3">
            {filteredTasks.length === 0 ? (
              <div className="text-center py-12 text-gray-400">
                <p className="text-lg">No tasks found</p>
              </div>
            ) : (
              filteredTasks.map(task => (
                <div
                  key={task.id}
                  className={`flex items-center gap-3 p-4 bg-white border-l-4 ${priorityColors[task.priority]} rounded-lg shadow-sm hover:shadow-md transition`}
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition ${
                      task.completed
                        ? 'bg-indigo-600 border-indigo-600'
                        : 'border-gray-300 hover:border-indigo-600'
                    }`}
                  >
                    {task.completed ? (
                      <Check size={16} className="text-white" />
                    ) : (
                      <Circle size={16} className="text-transparent" />
                    )}
                  </button>
                  
                  <span
                    className={`flex-1 ${
                      task.completed
                        ? 'line-through text-gray-400'
                        : 'text-gray-800'
                    }`}
                  >
                    {task.text}
                  </span>
                  
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="text-red-500 hover:text-red-700 transition p-1"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              ))
            )}
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="flex justify-between text-sm text-gray-600">
              <span>{tasks.filter(t => !t.completed).length} tasks remaining</span>
              <span>{tasks.filter(t => t.completed).length} completed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
}