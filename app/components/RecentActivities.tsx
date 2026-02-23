export default function RecentActivities() {
  const activities = [
    {
      date: "March 2026",
      title: "Hackathon Name",
      description: "Brief description of what you built or accomplished at the hackathon."
    },
    {
      date: "February 2026",
      title: "Trip to City Name",
      description: "Quick note about the trip or what made it memorable."
    },
    {
      date: "January 2026",
      title: "Conference/Event Name",
      description: "What you learned or key takeaways from the event."
    },
        {
      date: "March 2026",
      title: "Hackathon Name",
      description: "Brief description of what you built or accomplished at the hackathon."
    },
    {
      date: "February 2026",
      title: "Trip to City Name",
      description: "Quick note about the trip or what made it memorable."
    },
    {
      date: "January 2026",
      title: "Conference/Event Name",
      description: "What you learned or key takeaways from the event."
    }
  ];

  return (
    <section id="recent-activities" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-zinc-800">
      <div className="container mx-auto max-w-5xl">
        <div className="space-y-12">
          <div>
            <h2 className="text-3xl font-bold text-zinc-100 mb-2">Recent Activities</h2>
            <div className="h-1 w-16 bg-blue-500" />
          </div>

          <div 
            className="max-h-[560px] overflow-y-auto space-y-6 pr-2 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-zinc-900 [&::-webkit-scrollbar-track]:rounded [&::-webkit-scrollbar-thumb]:bg-blue-500 [&::-webkit-scrollbar-thumb]:rounded [&::-webkit-scrollbar-thumb]:hover:bg-blue-600"
            style={{
              scrollbarWidth: 'thin',
              scrollbarColor: '#3b82f6 #18181b'
            }}
          >
            {activities.map((activity, index) => (
              <div 
                key={index}
                className="border border-zinc-800 rounded-lg p-6 bg-zinc-900/50 hover:border-zinc-700 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                  <h3 className="text-xl font-semibold text-zinc-100">{activity.title}</h3>
                  <span className="text-zinc-500 text-sm">{activity.date}</span>
                </div>
                <p className="text-zinc-400 text-sm">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
