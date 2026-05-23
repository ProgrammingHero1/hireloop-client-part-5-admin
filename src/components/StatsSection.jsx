import {
  Briefcase,
  Factory,
  Magnifier,
  Star,
} from "@gravity-ui/icons";

export default function StatsSection() {
  const stats = [
    {
      id: 1,
      icon: <Briefcase className="h-5 w-5" />,
      value: "50K",
      label: "Active Jobs",
    },
    {
      id: 2,
      icon: <Factory className="h-5 w-5" />,
      value: "12K",
      label: "Companies",
    },
    {
      id: 3,
      icon: <Magnifier className="h-5 w-5" />,
      value: "2M",
      label: "Job Seekers",
    },
    {
      id: 4,
      icon: <Star className="h-5 w-5" />,
      value: "97%",
      label: "Satisfaction Rate",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-black py-28 text-white">
      {/* Background Globe */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
        style={{
          backgroundImage: "url('/images/globe.png')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Glow Effect */}
      <div className="absolute left-1/2 top-[25%] h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-violet-600/30 blur-[140px]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-medium leading-relaxed text-white/90">
            Assisting over 15,000 job seekers
            <br />
            find their dream positions.
          </h2>
        </div>

        {/* Stats Cards */}
        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition duration-300 hover:border-violet-500/30"
            >
              {/* Card Glow */}
              <div className="absolute bottom-0 right-0 h-32 w-32 rounded-full bg-white/10 blur-3xl transition duration-300 group-hover:bg-violet-500/20" />

              {/* Icon */}
              <div className="relative z-10 text-white/90">
                {stat.icon}
              </div>

              {/* Number */}
              <h3 className="relative z-10 mt-10 text-5xl font-bold tracking-tight">
                {stat.value}
              </h3>

              {/* Label */}
              <p className="relative z-10 mt-4 text-base text-gray-300">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}