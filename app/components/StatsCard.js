'use client';

export function StatsCard({ icon: Icon, label, value }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group">
      <div className="flex items-center gap-4">
        <div className="p-3 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-xl group-hover:from-purple-200 group-hover:to-indigo-200 transition-colors duration-300">
          <Icon className="w-6 h-6 text-purple-600" />
        </div>
        <div>
          <p className="text-gray-600 text-sm font-medium">{label}</p>
          <p className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
            {value.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}