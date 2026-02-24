export default function RecentActivities() {
  const activities = [
    {
      date: "January 2026",
      title: "Google Computer Vision Capstone",
      description: "Began an industry-sponsored capstone focused on action recognition for EHS incident detection in surveillance video, including structured report automation and roadmap development for temporal modeling."
    },
    {
      date: "January 2026",
      title: "Trip to the Bay Area",
      description: "Visited San Francisco and San Jose and spent time with friends working in tech."
    },
    {
      date: "December 2025",
      title: "Trip to India",
      description: "Traveled to Delhi and Haryana for my sister’s wedding and spent time with family."
    },
    {
      date: "October 2025",
      title: "Roo Hackathon",
      description: "Participated in the Roo Hackathon and collaborated on a rapid prototype under time constraints."
    },
    {
      date: "July 2025",
      title: "Relocated to Austin for MSBA at UT Austin",
      description: "Moved to Austin to begin the M.S. in Business Analytics at UT Austin, focusing on machine learning, optimization, and applied statistics."
    },
    {
      date: "April 2025",
      title: "Trip to Birmingham, AL",
      description: "Visited Dotdash Meredith test kitchens and went hiking outside the city."
    },
    {
      date: "December 2024",
      title: "Master’s Thesis Defense",
      description: "Successfully defended my M.S. thesis on protein structure prediction using statistical modeling over biological sequences."
    },
    {
      date: "March 2024",
      title: "American Chemical Society Conference",
      description: "Presented research applying statistical methods to protein structure prediction using sequence-based features."
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
