import React from "react";
import { CalendarDays, Award, Star } from "lucide-react";

export default function Notifications() {
  const notifications = [
    {
      icon: <CalendarDays className="text-blue-600 w-5 h-5" />,
      title: "Assignment Due",
      description: "React project submission due in 2 days",
      time: "2 hours ago",
      bgColor: "bg-blue-50",
    },
    {
      icon: <Award className="text-orange-600 w-5 h-5" />,
      title: "Achievement Unlocked",
      description: 'Completed "Code Master" badge',
      time: "1 day ago",
      bgColor: "bg-green-50",
    },
    {
      icon: <Star className="text-orange-500 w-5 h-5" />,
      title: "New Course Available",
      description: "Advanced Node.js just released",
      time: "3 days ago",
      bgColor: "bg-yellow-50",
    },
  ];

  return (
    <section className="bg-white shadow-md p-6 w-full max-w-xl mx-auto rounded-xl  border ">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Notifications</h2>
      <ul className="space-y-3 text-sm text-gray-700">
        {notifications.map((n, idx) => (
          <li key={idx} className={`${n.bgColor} p-3 rounded-md flex gap-3`}>
            <div className="mt-1">{n.icon}</div>
            <div className="flex flex-col">
              <strong>{n.title}</strong>
              <div>{n.description}</div>
              <time className="text-xs text-gray-400 mt-1">{n.time}</time>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
