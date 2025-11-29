import { useEffect, useState } from 'react';
import {
  Calendar,
  Clock,
  Edit,
  Trash2,
  Users,
  Plus,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import axiosInstance from '../../../../utils/axiosinstance';
import Layout from '../../../layout/page';

export default function ManagerTaskAssignment() {
  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('pending');
  const [members, setMembers] = useState([]);
  const [extraWork, setExtraWork] = useState({});

  const taskTitleSuggestions = [
    "Add Lead",
    "Convert Lead Client",
    "Convert Lead Vendor",
  ];

  const [formData, setFormData] = useState({
    title: '',
    taskNumber: '',
    description: '',
    assignDate: '',
    deadline: '',
    created_at: '',
    priority: 'medium',
    status: 'pending',
  });
  console.log(tasks);

  useEffect(() => {
    fetchTasks();
    fetchMembers();
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await axiosInstance.get("api/admin/teamManagement/member-tasks");
      setTasks(res.data);
      console.log(res.data);

    } catch (error) {
      console.log("Error fetching tasks:", error);
    }
  };

  const fetchMembers = async () => {
    try {
      const res = await axiosInstance.get("api/admin/teamManagement/sale-members");

      // ✅ Transform backend members → add task fields
      const formatted = res.data.map(member => ({
        id: member.id,
        name: member.fullName,
        email: member.email,
        taskstatus: "pending",      // Default
        solvedTaskNumber: "0"       // Default
      }));

      setMembers(formatted);
    } catch (error) {
      console.error("Error fetching members:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    if (!formData.title || !formData.assignDate || !formData.deadline || !formData.taskNumber) {
      alert('Please fill all required fields');
      return;
    }

    try {
      const taskData = {
        ...formData,
        created_at: editingTask ? editingTask.created_at : new Date().toLocaleString(),
        assignedToAll: members,
      };

      if (editingTask) {
        // ✅ Remove filteredMembers before sending update
        const { filteredMembers, ...taskWithoutMembers } = editingTask;
        const updatedTask = { ...taskWithoutMembers, ...taskData };

        await axiosInstance.put(`api/admin/teamManagement/member-tasks/${editingTask.id}`, updatedTask);

        setTasks(tasks.map(task =>
          task.id === editingTask.id ? updatedTask : task
        ));
      } else {
        // ✅ Create Task
        const res = await axiosInstance.post('api/admin/teamManagement/createmembertask', taskData);
        setTasks([...tasks, res.data]);
      }

      resetForm();
      fetchTasks();
      alert(editingTask ? "Task Updated ✅" : "Task Added ✅");

    } catch (error) {
      console.error("Error submitting task:", error);
      alert("Error while saving task ❌");
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      assignDate: '',
      deadline: '',
      taskNumber: '',
      priority: 'medium',
      status: 'pending',
    });
    setShowForm(false);
    setEditingTask(null);
  };

  const handleEdit = (task) => {
const formatDate = (date) => {
  if (!date) return "";

  const dt = new Date(date);
  dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());
  return dt.toISOString().split("T")[0];
};


    setFormData({
      title: task.title || "",
      taskNumber: task.taskNumber || "",
      description: task.description || "",
      assignDate: formatDate(task.assignDate),
      deadline: formatDate(task.deadline),
      priority: task.priority || "medium",
      status: task.status || "pending",
    });

    setEditingTask(task);
    setShowForm(true);
  };

  const formatDisplayDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB"); // DD/MM/YYYY
  };

  const handleDelete = async (taskId) => {
    if (!window.confirm("Are you sure you want to delete this task?")) return;

    try {
      await axiosInstance.delete(`api/admin/teamManagement/member-tasks/${taskId}`);
      setTasks(tasks.filter(task => task.id !== taskId));
      fetchTasks(); // refresh task list
      alert("Task deleted successfully ✅");
    } catch (error) {
      console.error("Delete error:", error);
      alert("Failed to delete task ❌");
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-700 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-700 border-green-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getFilteredTasks = () => {
    return tasks
      .map(task => {
        const members = Array.isArray(task.assignedToAll) ? task.assignedToAll : [];

        const normalizedMembers = members.map(member => {
          let fixedStatus = member.taskstatus;

          if (fixedStatus === "pending") fixedStatus = "pending";
          else if (fixedStatus === "progress") fixedStatus = "progress";
          else if (fixedStatus === "complte") fixedStatus = "complete"; // ✅ fix spelling

          return {
            ...member,
            status: fixedStatus // ✅ now we store the corrected value here
          };
        });

        const filteredMembers = normalizedMembers.filter(
          member => member.status === activeTab
        );

        if (filteredMembers.length === 0) return null;

        return { ...task, filteredMembers };
      })
      .filter(Boolean);
  };


  const getTaskCountByStatus = (status) => {
    return tasks.reduce((count, task) => {
      const members = Array.isArray(task.assignedToAll) ? task.assignedToAll : [];

      const normalizedMembers = members.map(member => {
        const correctedStatus =
          member.taskstatus === "complte"
            ? "complete"
            : member.taskstatus;
        return correctedStatus;
      });

      return count + normalizedMembers.filter(s => s === status).length;
    }, 0);
  };


  const getTabIcon = (status) => {
    switch (status) {
      case 'pending': return <Clock className="w-5 h-5" />;
      case 'progress': return <AlertCircle className="w-5 h-5" />;
      case 'complete': return <CheckCircle className="w-5 h-5" />;
      default: return null;
    }
  };

  const handleCheckTask = async (taskId) => {
    try {
      const res = await axiosInstance.put(`api/admin/teamManagement/member-tasks/${taskId}/check`);
      const updatedTask = res.data;

      setTasks(prev =>
        prev.map(t => (t.id === taskId ? updatedTask : t))
      );

      alert("✅ Task checked successfully!");
    } catch (err) {
      console.error(err);
      alert("❌ Failed to check task");
    }
  };

  const handleConfirmTaskCompletion = async (taskId) => {
    try {
      await axiosInstance.delete(`api/admin/teamManagement/member-tasks/${taskId}/confirm`);
      setTasks(prev => prev.filter(t => t.id !== taskId));
      alert("🎯 Task confirmed and removed successfully!");
    } catch (err) {
      console.error(err);
      alert("❌ Failed to confirm task completion");
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Task Manager
                </h1>
                <p className="text-gray-600 mt-2">Assign and track tasks for all 5 team members</p>
              </div>
              <button
                onClick={() => setShowForm(!showForm)}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all flex items-center gap-2"
              >
                <Plus className="w-5 h-5" />
                {showForm ? 'Cancel' : 'New Task'}
              </button>
            </div>
          </div>

          {/* Task Form */}
          {showForm && (
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                {editingTask ? 'Edit Task' : 'Create New Task'}
              </h2>

              <div className="space-y-6">
                <div className="flex flex-wrap gap-6">
                  <div className="flex-1 min-w-[250px]">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Task Title *</label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors"
                      placeholder="Enter first task title..."
                      list="suggestions"
                    />
                    <datalist id="suggestions">
                      {taskTitleSuggestions?.map((title, index) => (
                        <option key={index} value={title} />
                      ))}
                    </datalist>
                  </div>

                  <div className="flex-1 min-w-[250px]">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Number Of {formData.title} *</label>
                    <input
                      type="number"
                      name="taskNumber"
                      value={formData.taskNumber}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors"
                      placeholder="Enter Number of Task..."
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors"
                    placeholder="Enter task description"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Assign Date *</label>
                    <input
                      type="date"
                      name="assignDate"
                      value={formData.assignDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Deadline *</label>
                    <input
                      type="date"
                      name="deadline"
                      value={formData.deadline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Priority</label>
                    <select
                      name="priority"
                      value={formData.priority}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors"
                    >
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                    </select>
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    onClick={resetForm}
                    className="flex-1 px-6 py-3 border-2 border-gray-300 rounded-xl text-gray-700 font-semibold hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSubmit}
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all"
                  >
                    {editingTask ? 'Update Task' : 'Add Task'}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Search Bar */}
          {/* <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search tasks..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors"
            />
          </div>
        </div> */}

          {/* Tabs */}
          <div className="bg-white rounded-2xl shadow-xl p-2 mb-6">
            <div className="grid grid-cols-3 gap-2">
              {['pending', 'progress', 'complete']?.map((status) => (
                <button
                  key={status}
                  onClick={() => setActiveTab(status)}
                  className={`flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-semibold transition-all ${activeTab === status
                    ? `bg-gradient-to-r ${status === 'pending'
                      ? 'from-gray-600 to-gray-700'
                      : status === 'progress'
                        ? 'from-blue-600 to-blue-700'
                        : 'from-green-600 to-green-700'
                    } text-white shadow-lg`
                    : 'text-gray-600 hover:bg-gray-50'
                    }`}
                >
                  {getTabIcon(status)}
                  <span className="capitalize">{status}</span>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-bold ${activeTab === status
                      ? 'bg-white text-gray-700'
                      : 'bg-gray-200 text-gray-700'
                      }`}
                  >
                    {getTaskCountByStatus(status)}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Tasks List */}
          {getFilteredTasks().length === 0 ? (
            <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
              <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">No Tasks Found</h3>
              <p className="text-gray-500">
                {tasks.length === 0
                  ? 'Start by adding your first task'
                  : `No ${activeTab} tasks match your search`}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4">
              {getFilteredTasks()?.map(task => (
                <div key={task.id} className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">{task.title}</h3>
                      <p className="text-gray-600 mb-4">{task.description}</p>

                      <div className="flex flex-wrap items-center gap-6 text-sm mb-4">
                        <span className="flex items-center gap-2 text-gray-600">
                          <Calendar className="w-4 h-4" />
                          <strong>Assigned:</strong> {formatDisplayDate(task.assignDate)}
                        </span>
                        <span className="flex items-center gap-2 text-gray-600">
                          <Clock className="w-4 h-4" />
                          <strong>Deadline:</strong> {formatDisplayDate(task.deadline)}
                        </span>
                        <span className="flex items-center gap-2 text-gray-600">
                          <Clock className="w-4 h-4" />
                          <strong>Created:</strong> {task.created_at}
                        </span>
                        <div className="mt-2">
                          {(() => {
                            const now = new Date();
                            const deadline = new Date(task.deadline);

                            const diffMs = deadline - now;

                            if (diffMs <= 0) {
                              return (
                                <p className="text-red-600 font-semibold">
                                  Deadline Overdue
                                </p>
                              );
                            }

                            const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
                            const diffHours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                            const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

                            return (
                              <p className="text-green-700 font-semibold">
                                Remaining: {diffDays}d {diffHours}h {diffMinutes}m
                              </p>
                            );
                          })()}
                        </div>

                        <span className="flex items-center gap-2 text-gray-600">
                          <Clock className="w-4 h-4" />
                          <strong>Task Number:</strong> {task.taskNumber}
                        </span>
                        <span className={`px-4 py-1 rounded-lg text-sm font-bold border-2 ${getPriorityColor(task.priority)}`}>
                          {task.priority?.toUpperCase()} PRIORITY
                        </span>
                      </div>
                    </div>

                    <div className="flex gap-2 ml-4 items-center">
                      <button
                        onClick={() => handleEdit(task)}
                        className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors flex items-center gap-2"
                      >
                        <Edit className="w-4 h-4" />
                        Edit
                      </button>

                      <button
                        onClick={() => handleDelete(task.id)}
                        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors flex items-center gap-2"
                      >
                        <Trash2 className="w-4 h-4" />
                        Delete
                      </button>

                      {/* ✅ Common Check Button */}
                      <button
                        onClick={() => handleCheckTask(task.id)}
                        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
                      >
                        <CheckCircle className="w-4 h-4" />
                        Check
                      </button>
                    </div>

                  </div>
                  <div>
                    {/* Assigned Team Members */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {task.filteredMembers.slice(0, 4).map((member, i) => (
                        <div
                          key={i}
                          className="flex justify-between items-center bg-gray-50 border rounded-lg px-4 py-2"
                        >
                          {/* Member Info */}
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-full bg-indigo-600 text-white flex items-center justify-center font-medium">
                              {member.name.charAt(0)}
                            </div>
                            <div>
                              <p className="font-semibold text-gray-800">{member.name}</p>
                              <p className="text-xs text-gray-500">{member.email}</p>
                            </div>
                          </div>

                          {/* Status + Solved */}
                          <div className="text-right">
                            <span
                              className={`px-3 py-1 text-xs font-semibold capitalize rounded-full ${member.taskstatus === "complete"
                                ? "bg-green-100 text-green-700"
                                : member.taskstatus === "progress"
                                  ? "bg-yellow-100 text-yellow-700"
                                  : "bg-gray-200 text-gray-700"
                                }`}
                            >
                              {member.taskstatus}
                            </span>
                            <p className="text-xs text-gray-600 mt-1">
                              Solved: {member.solvedTaskNumber}
                            </p>
                          </div>
                        </div>
                      ))}

                      {/* ✅ Confirm button only if all members are complete */}
                      {(new Date() > new Date(task.deadline) ||
                        Math.ceil((new Date(task.deadline) - new Date()) / (1000 * 60 * 60 * 24)) <= 0) && (
                          <div className="text-right mt-4 col-span-full">
                            <button
                              onClick={() => handleConfirmTaskCompletion(task.id)}
                              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                            >
                              Confirm Task Completion
                            </button>
                          </div>
                        )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
