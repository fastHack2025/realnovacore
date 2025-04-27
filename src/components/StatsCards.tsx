"use client";

import { FaCalendarCheck, FaDollarSign, FaUserFriends } from "react-icons/fa";

const stats = [
  {
    title: "Rendez-vous",
    value: 125,
    icon: <FaCalendarCheck size={28} className="text-indigo-600" />,
  },
  {
    title: "Paiements",
    value: 89,
    icon: <FaDollarSign size={28} className="text-green-500" />,
  },
  {
    title: "Clients",
    value: 54,
    icon: <FaUserFriends size={28} className="text-yellow-500" />,
  },
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg flex items-center space-x-4 transition-transform hover:scale-105"
        >
          <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-full">
            {stat.icon}
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">{stat.title}</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
