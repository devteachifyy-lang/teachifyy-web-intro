import { BookOpen, BarChart2, Users, Repeat } from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: 'Learn Anytime',
    description:
      'Access your lessons and course materials wherever you are, even offline.',
    color: '#FF4667',
    bg: '#FFF0F2',
  },
  {
    icon: BarChart2,
    title: 'Track Progress',
    description:
      'Monitor your course completion, milestones, and certifications with ease.',
    color: '#2b5585',
    bg: '#EBF3FC',
  },
  {
    icon: Users,
    title: 'Mentor Support',
    description:
      'Stay connected with mentors, educators, and your learning community.',
    color: '#FF4667',
    bg: '#FFF0F2',
  },
  {
    icon: Repeat,
    title: 'Seamless Learning',
    description:
      'Pick up right where you left off across web and mobile, anytime.',
    color: '#2b5585',
    bg: '#EBF3FC',
  },
];

export default function AppFeatures() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        {/* Heading */}
        <div className="text-center mb-12">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full border  bg-[#DDE6F2] px-4 py-1.5 shadow-sm mb-5">
            <span className="text-xs  text-slate-700 tracking-widest uppercase">APP FEATURES</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3 tracking-tight">
            Why Use the Teachifyy App
          </h2>
          <p className="text-slate-500 text-base max-w-xl mx-auto leading-relaxed">
            Everything you need to grow as an educator beautifully packaged for mobile.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-[#F8FAFC] border border-slate-100 rounded-2xl p-6 hover:shadow-md transition-shadow duration-300 flex flex-col gap-4"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: feature.bg }}
                >
                  <Icon className="w-5 h-5" style={{ color: feature.color }} strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="text-[16px] font-bold text-slate-800 mb-2">{feature.title}</h3>
                  <p className="text-slate-500 text-[14px] leading-relaxed">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
