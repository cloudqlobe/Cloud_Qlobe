import { useState, useEffect } from 'react';
import { Clock, Calendar, LogIn, LogOut, Award, AlertCircle, TrendingUp, CheckCircle, Coffee } from 'lucide-react';
import Layout from '../../../layout/page';

export default function AttendancePage() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isPunchedIn, setIsPunchedIn] = useState(false);
  const [todayAttendance, setTodayAttendance] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState('november');

  const [attendanceRecords, setAttendanceRecords] = useState([
    {
      id: 1,
      date: '2025-11-04',
      punchIn: '09:00 AM',
      punchOut: '06:00 PM',
      totalHours: '9h 0m',
      status: 'Present',
      isBreak: false
    },
    {
      id: 2,
      date: '2025-11-03',
      punchIn: '08:45 AM',
      punchOut: '05:30 PM',
      totalHours: '8h 45m',
      status: 'Present',
      isBreak: false
    },
    {
      id: 3,
      date: '2025-11-02',
      punchIn: null,
      punchOut: null,
      totalHours: '0h 0m',
      status: 'Leave',
      leaveType: 'Sick Leave',
      isBreak: false
    },
    {
      id: 4,
      date: '2025-11-01',
      punchIn: '09:15 AM',
      punchOut: '06:45 PM',
      totalHours: '9h 30m',
      status: 'Present',
      isBreak: false
    },
    {
      id: 5,
      date: '2025-10-31',
      punchIn: '09:30 AM',
      punchOut: '02:00 PM',
      totalHours: '4h 30m',
      status: 'Half Day',
      isBreak: false
    },
    {
      id: 6,
      date: '2025-10-30',
      punchIn: '08:50 AM',
      punchOut: null,
      totalHours: '0h 0m',
      status: 'Absent',
      isBreak: false
    },
    {
      id: 7,
      date: '2025-10-29',
      punchIn: '09:00 AM',
      punchOut: '06:15 PM',
      totalHours: '9h 15m',
      status: 'Present',
      isBreak: false
    }
  ]);

  const monthlyStats = {
    totalDays: 30,
    present: 22,
    absent: 2,
    leaves: 4,
    halfDays: 2,
    totalHours: 176,
    avgHours: 8.5,
    onTimeRate: 85
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Check if already punched in today
    const today = new Date().toISOString().split('T')[0];
    const todayRecord = attendanceRecords.find(r => r.date === today);
    if (todayRecord && todayRecord.punchIn && !todayRecord.punchOut) {
      setIsPunchedIn(true);
      setTodayAttendance(todayRecord);
    }

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      second: '2-digit',
      hour12: true 
    });
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'short',
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  const getCurrentDate = () => {
    return currentTime.toLocaleDateString('en-US', { 
      weekday: 'long',
      month: 'long', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  const calculateWorkHours = (punchInTime, punchOutTime) => {
    const [inHours, inMinutes] = punchInTime.split(':');
    const inPeriod = punchInTime.split(' ')[1];
    const [outHours, outMinutes] = punchOutTime.split(':');
    const outPeriod = punchOutTime.split(' ')[1];

    let inHour24 = parseInt(inHours);
    let outHour24 = parseInt(outHours);

    if (inPeriod === 'PM' && inHour24 !== 12) inHour24 += 12;
    if (inPeriod === 'AM' && inHour24 === 12) inHour24 = 0;
    if (outPeriod === 'PM' && outHour24 !== 12) outHour24 += 12;
    if (outPeriod === 'AM' && outHour24 === 12) outHour24 = 0;

    const inDate = new Date(2000, 0, 1, inHour24, parseInt(inMinutes));
    const outDate = new Date(2000, 0, 1, outHour24, parseInt(outMinutes));

    const diffMs = outDate - inDate;
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

    return `${diffHours}h ${diffMinutes}m`;
  };

  const handlePunchIn = () => {
    const now = new Date();
    const today = now.toISOString().split('T')[0];
    const time = formatTime(now);

    const newRecord = {
      id: attendanceRecords.length + 1,
      date: today,
      punchIn: time,
      punchOut: null,
      totalHours: '0h 0m',
      status: 'Present',
      isBreak: false
    };

    setAttendanceRecords([newRecord, ...attendanceRecords]);
    setIsPunchedIn(true);
    setTodayAttendance(newRecord);
  };

  const handlePunchOut = () => {
    if (!todayAttendance) return;

    const now = new Date();
    const time = formatTime(now);
    const totalHours = calculateWorkHours(todayAttendance.punchIn, time);

    const updatedRecords = attendanceRecords.map(r => 
      r.id === todayAttendance.id 
        ? { ...r, punchOut: time, totalHours }
        : r
    );

    setAttendanceRecords(updatedRecords);
    setIsPunchedIn(false);
    setTodayAttendance({ ...todayAttendance, punchOut: time, totalHours });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Present':
        return 'bg-green-100 text-green-800';
      case 'Absent':
        return 'bg-red-100 text-red-800';
      case 'Leave':
        return 'bg-blue-100 text-blue-800';
      case 'Half Day':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Present':
        return <CheckCircle size={18} className="text-green-600" />;
      case 'Absent':
        return <AlertCircle size={18} className="text-red-600" />;
      case 'Leave':
        return <Coffee size={18} className="text-blue-600" />;
      case 'Half Day':
        return <Clock size={18} className="text-orange-600" />;
      default:
        return <Clock size={18} className="text-gray-600" />;
    }
  };

  return (
    <Layout>
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Attendance</h1>
          <p className="text-gray-600">Track your daily attendance and work hours</p>
        </div>

        {/* Current Time & Punch Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg shadow-lg p-8 mb-6 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-sm opacity-90 mb-2">{getCurrentDate()}</p>
              <p className="text-5xl font-bold mb-2">{formatTime(currentTime)}</p>
              {todayAttendance && todayAttendance.punchIn && (
                <div className="mt-4 bg-white bg-opacity-20 rounded-lg p-4">
                  <p className="text-sm mb-1">Punch In Time</p>
                  <p className="text-2xl font-bold">{todayAttendance.punchIn}</p>
                  {todayAttendance.punchOut && (
                    <>
                      <p className="text-sm mt-3 mb-1">Punch Out Time</p>
                      <p className="text-2xl font-bold">{todayAttendance.punchOut}</p>
                      <p className="text-sm mt-3 mb-1">Total Working Hours</p>
                      <p className="text-xl font-bold text-green-300">{todayAttendance.totalHours}</p>
                    </>
                  )}
                </div>
              )}
            </div>

            <div className="flex flex-col gap-4">
              {!isPunchedIn ? (
                <button
                  onClick={handlePunchIn}
                  className="flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-bold text-lg shadow-lg"
                >
                  <LogIn size={28} />
                  Punch In
                </button>
              ) : (
                <button
                  onClick={handlePunchOut}
                  className="flex items-center gap-3 bg-red-500 text-white px-8 py-4 rounded-lg hover:bg-red-600 transition-colors font-bold text-lg shadow-lg"
                >
                  <LogOut size={28} />
                  Punch Out
                </button>
              )}
              <p className="text-center text-sm opacity-90">
                {isPunchedIn ? 'Click to punch out' : 'Start your work day'}
              </p>
            </div>
          </div>
        </div>

        {/* Monthly Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex flex-col items-center">
              <Calendar className="text-blue-600 mb-2" size={24} />
              <p className="text-2xl font-bold text-gray-800">{monthlyStats.totalDays}</p>
              <p className="text-xs text-gray-600 text-center">Total Days</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex flex-col items-center">
              <CheckCircle className="text-green-600 mb-2" size={24} />
              <p className="text-2xl font-bold text-gray-800">{monthlyStats.present}</p>
              <p className="text-xs text-gray-600 text-center">Present</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex flex-col items-center">
              <AlertCircle className="text-red-600 mb-2" size={24} />
              <p className="text-2xl font-bold text-gray-800">{monthlyStats.absent}</p>
              <p className="text-xs text-gray-600 text-center">Absent</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex flex-col items-center">
              <Coffee className="text-blue-600 mb-2" size={24} />
              <p className="text-2xl font-bold text-gray-800">{monthlyStats.leaves}</p>
              <p className="text-xs text-gray-600 text-center">Leaves</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex flex-col items-center">
              <Clock className="text-orange-600 mb-2" size={24} />
              <p className="text-2xl font-bold text-gray-800">{monthlyStats.halfDays}</p>
              <p className="text-xs text-gray-600 text-center">Half Days</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex flex-col items-center">
              <TrendingUp className="text-purple-600 mb-2" size={24} />
              <p className="text-2xl font-bold text-gray-800">{monthlyStats.totalHours}</p>
              <p className="text-xs text-gray-600 text-center">Total Hours</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex flex-col items-center">
              <Clock className="text-indigo-600 mb-2" size={24} />
              <p className="text-2xl font-bold text-gray-800">{monthlyStats.avgHours}</p>
              <p className="text-xs text-gray-600 text-center">Avg Hours</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex flex-col items-center">
              <Award className="text-yellow-600 mb-2" size={24} />
              <p className="text-2xl font-bold text-gray-800">{monthlyStats.onTimeRate}%</p>
              <p className="text-xs text-gray-600 text-center">On Time</p>
            </div>
          </div>
        </div>

        {/* Attendance History */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Attendance History</h2>
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            >
              <option value="november">November 2025</option>
              <option value="october">October 2025</option>
              <option value="september">September 2025</option>
            </select>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Date</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Punch In</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Punch Out</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Total Hours</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                </tr>
              </thead>
              <tbody>
                {attendanceRecords.map((record) => (
                  <tr key={record.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-gray-400" />
                        <span className="font-medium text-gray-800">{formatDate(record.date)}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      {record.punchIn ? (
                        <div className="flex items-center gap-2">
                          <LogIn size={16} className="text-green-600" />
                          <span className="text-gray-800">{record.punchIn}</span>
                        </div>
                      ) : (
                        <span className="text-gray-400">--</span>
                      )}
                    </td>
                    <td className="py-4 px-4">
                      {record.punchOut ? (
                        <div className="flex items-center gap-2">
                          <LogOut size={16} className="text-red-600" />
                          <span className="text-gray-800">{record.punchOut}</span>
                        </div>
                      ) : (
                        <span className="text-gray-400">--</span>
                      )}
                    </td>
                    <td className="py-4 px-4">
                      <span className={`font-semibold ${
                        record.totalHours !== '0h 0m' ? 'text-blue-600' : 'text-gray-400'
                      }`}>
                        {record.totalHours}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        {getStatusIcon(record.status)}
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(record.status)}`}>
                          {record.status}
                          {record.leaveType && ` (${record.leaveType})`}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {attendanceRecords.length === 0 && (
            <div className="text-center py-12">
              <Clock className="mx-auto text-gray-300 mb-4" size={48} />
              <p className="text-gray-500">No attendance records found</p>
            </div>
          )}
        </div>
      </div>
    </div>
    </Layout>
  );
}