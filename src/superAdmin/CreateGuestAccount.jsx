import { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosinstance";
import Layout from "./layout/Layout";

const GuestManagement = () => {
  const [customerId, setCustomerId] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [guests, setGuests] = useState([]);

  const [editGuest, setEditGuest] = useState(null);
  const [editCustomerId, setEditCustomerId] = useState("");
  const [editPassword, setEditPassword] = useState("");

  /* ---------------- Fetch Guests ---------------- */
  const fetchGuests = async () => {
    try {
      const res = await axiosInstance.get("/api/guests");
      setGuests(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchGuests();
  }, []);

  /* ---------------- Create Guest ---------------- */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");

    try {
      const res = await axiosInstance.post("/api/guest/create", {
        customerId,
        password,
      });

      setMessage(res.data.message);
      setCustomerId("");
      setPassword("");
      fetchGuests();
    } catch (err) {
      setError(err.response?.data?.message || "Failed to create guest");
    } finally {
      setLoading(false);
    }
  };

  /* ---------------- Toggle Status ---------------- */
  const toggleStatus = async (id, status) => {
    const newStatus = status === "active" ? "blocked" : "active";

    try {
      await axiosInstance.put(`/api/guest/${id}/status`, {
        status: newStatus,
      });
      fetchGuests();
    } catch {
      alert("Status update failed");
    }
  };

  /* ---------------- Edit Guest ---------------- */
  const openEditModal = (guest) => {
    setEditGuest(guest);
    setEditCustomerId(guest.customerId);
    setEditPassword("");
  };

  const updateGuest = async () => {
    try {
      await axiosInstance.put(`/api/guest/${editGuest.id}`, {
        customerId: editCustomerId,
        password: editPassword || undefined,
      });

      setEditGuest(null);
      fetchGuests();
    } catch {
      alert("Update failed");
    }
  };

  return (
    <Layout>
      <div className="p-6 bg-gray-100 min-h-screen space-y-10">

        {/* CREATE */}
        <div className="bg-white p-6 rounded-xl shadow max-w-md">
          <h2 className="text-xl font-bold mb-4">Create Guest</h2>

          {message && <div className="bg-green-100 p-2 mb-3">{message}</div>}
          {error && <div className="bg-red-100 p-2 mb-3">{error}</div>}

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              className="w-full p-3 border rounded"
              placeholder="Customer ID"
              value={customerId}
              onChange={(e) => setCustomerId(e.target.value)}
              required
            />
            <input
              className="w-full p-3 border rounded"
              placeholder="Temporary Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              disabled={loading}
              className="bg-blue-600 text-white px-4 py-2 rounded w-full"
            >
              {loading ? "Creating..." : "Create Guest"}
            </button>
          </form>
        </div>

        {/* LIST */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-bold mb-4">Guest List</h2>

          <table className="w-full border">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 text-left">Customer ID</th>
                <th>Status</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {guests.map((g) => (
                <tr key={g.id} className="border-t">
                  <td className="p-3">{g.customerId}</td>
                  <td
                    className={`font-semibold ${
                      g.status === "active"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {g.status}
                  </td>
                  <td className="text-center space-x-2">
                    <button
                      onClick={() => openEditModal(g)}
                      className="px-3 py-1 bg-yellow-500 text-white rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => toggleStatus(g.id, g.status)}
                      className={`px-3 py-1 text-white rounded ${
                        g.status === "active"
                          ? "bg-red-600"
                          : "bg-green-600"
                      }`}
                    >
                      {g.status === "active" ? "Block" : "Unblock"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* EDIT MODAL */}
        {editGuest && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
            <div className="bg-white p-6 rounded-xl w-full max-w-md">
              <h3 className="text-lg font-bold mb-4">Edit Guest</h3>

              <input
                className="w-full p-3 border rounded mb-3"
                value={editCustomerId}
                onChange={(e) => setEditCustomerId(e.target.value)}
              />

              <input
                className="w-full p-3 border rounded mb-4"
                placeholder="New Password (optional)"
                value={editPassword}
                onChange={(e) => setEditPassword(e.target.value)}
              />

              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setEditGuest(null)}
                  className="px-4 py-2 border rounded"
                >
                  Cancel
                </button>
                <button
                  onClick={updateGuest}
                  className="px-4 py-2 bg-blue-600 text-white rounded"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default GuestManagement;
