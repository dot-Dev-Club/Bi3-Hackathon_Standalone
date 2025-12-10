import { useState, type MouseEvent } from "react";
import { Database, Brain, Zap, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
const PRIMARY_TEXT_COLOR = "#410F43";
const BACKGROUND_COLOR = "#E9B7F0";

export default function AboutSection(): React.JSX.Element {
  const [activeService, setActiveService] = useState<number>(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const services = [
    {
      icon: <Database className="w-12 h-12" />,
      title: "Data & Analytics",
      description:
        "Turning raw data into actionable insights through modern data architectures and reporting systems.",
      features: [
        "Cloud Data Warehouses",
        "Real-time Analytics",
        "Data Visualization & Dashboards",
      ],
      color: "from-[#410F43] to-[#B83280]",
      statTag: "10TB+ Data Managed",
    },
    {
      icon: <Brain className="w-12 h-12" />,
      title: "Artificial Intelligence",
      description:
        "Building intelligent, enterprise-grade solutions for tomorrow using Machine Learning and NLP.",
      features: [
        "Machine Learning Models",
        "Natural Language Processing (NLP)",
        "Computer Vision & Predictive Models",
      ],
      color: "from-[#410F43] to-[#9F1239]",
      statTag: "95% Model Accuracy",
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Automation & Integration",
      description:
        "Enhancing efficiency through intelligent process automation and seamless API connectivity.",
      features: [
        "Intelligent Process Automation",
        "Robust API Integration",
        "Workflow Optimization & Robotics",
      ],
      color: "from-[#7C2D12] to-[#9F1239]",
      statTag: "70% Faster Processes",
    },
  ];

  const serviceDetailVariants = {
    initial: { y: 20, opacity: 0, transition: { duration: 0.4 } },
    animate: { y: 0, opacity: 1, transition: { duration: 0.4 } },
    exit: { y: -20, opacity: 0, transition: { duration: 0.3 } },
  };

  return (
    <section
      className="min-h-screen py-24 px-6 overflow-hidden relative"
      style={{ backgroundColor: BACKGROUND_COLOR }}
    >
      {/* Background blobs */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -top-24 -left-16 w-64 h-64 bg-white/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-10 w-72 h-72 bg-fuchsia-300/50 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-[#410F43] via-[#662768] to-[#B83280] bg-clip-text text-transparent drop-shadow-lg">
            ABOUT BI3 TECHNOLOGIES
          </h1>

          <h2
            className="text-3xl md:text-4xl font-semibold tracking-wide"
            style={{ color: PRIMARY_TEXT_COLOR }}
          >
            Empowering the World with Data & AI
          </h2>
        </motion.div>

        {/* Main intro card */}
        <motion.div
          className="mb-20 relative group"
          onMouseMove={handleMouseMove}
          whileHover={{ scale: 1.01, y: -4 }}
          transition={{ type: "spring", stiffness: 120, damping: 15 }}
        >
          <motion.div
            className="absolute inset-0 rounded-3xl blur-3xl transition-opacity duration-300"
            style={{
              background:
                "radial-gradient(circle at 10% 0%, rgba(65,15,67,0.35), transparent 60%), radial-gradient(circle at 90% 100%, rgba(184,50,128,0.4), transparent 60%)",
              transform: `translate(${mousePos.x * 0.02}px, ${
                mousePos.y * 0.02
              }px)`,
            }}
            animate={{ rotate: [0, 0.5, -0.5, 0] }}
            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
          />

          <motion.div
            className="relative bg-white/25 backdrop-blur-lg rounded-3xl p-10 md:p-12 border border-white/60 shadow-2xl transition-all duration-300 group-hover:border-[#B83280]"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid md:grid-cols-[1.7fr_1.3fr] gap-10 items-center">
              <div>
                <p
                  className="text-xl md:text-2xl mb-6 font-medium leading-relaxed"
                  style={{ color: PRIMARY_TEXT_COLOR }}
                >
                  BI3 Technologies is a global powerhouse in data, analytics,
                  and AI helping organizations unlock the hidden potential
                  inside their data through modern architectures, intelligent
                  automation, and enterprise-grade AI systems.
                </p>
                <p
                  className="text-xl md:text-2xl leading-relaxed"
                  style={{ color: PRIMARY_TEXT_COLOR }}
                >
                  Guided by the vision{" "}
                  <span
                    className="font-extrabold italic"
                    style={{ color: PRIMARY_TEXT_COLOR }}
                  >
                    “Data that empowers. Innovation that transforms.”
                  </span>{" "}
                  BI3 builds scalable, secure, future-ready solutions that
                  accelerate digital transformation.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <img 
                  src="/images/bi3.png" 
                  alt="BI3 Technologies Logo" 
                  className="w-32 h-32 xs:w-40 xs:h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 object-contain"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* INSIGHT / INNOVATION / IMPACT cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {/* INSIGHT */}
          <motion.div
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 160, damping: 16 }}
            className="bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-white shadow-xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#410F43] text-white text-lg shadow-md">
                🔷
              </span>
              <h4
                className="text-xl font-extrabold tracking-wide uppercase"
                style={{ color: PRIMARY_TEXT_COLOR }}
              >
                INSIGHT
              </h4>
            </div>
            <p
              className="text-lg font-semibold mb-3"
              style={{ color: PRIMARY_TEXT_COLOR }}
            >
              Turning Data Into Intelligent Decisions
            </p>
            <p className="text-sm mb-2" style={{ color: PRIMARY_TEXT_COLOR }}>
              BI3 transforms raw, scattered data into meaningful insights using
              modern analytics, cloud platforms, and intelligent dashboards.
            </p>
            <p className="text-sm" style={{ color: PRIMARY_TEXT_COLOR }}>
              We help organizations understand trends, predict outcomes, and
              make decisions backed by real evidence — not assumptions.
            </p>
          </motion.div>

          {/* INNOVATION */}
          <motion.div
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 160, damping: 16 }}
            className="bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-white shadow-xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#410F43] text-white text-lg shadow-md">
                🔮
              </span>
              <h4
                className="text-xl font-extrabold tracking-wide uppercase"
                style={{ color: PRIMARY_TEXT_COLOR }}
              >
                INNOVATION
              </h4>
            </div>
            <p
              className="text-lg font-semibold mb-3"
              style={{ color: PRIMARY_TEXT_COLOR }}
            >
              Engineering the Future With AI & Automation
            </p>
            <p className="text-sm mb-2" style={{ color: PRIMARY_TEXT_COLOR }}>
              From machine learning to advanced automation, BI3 builds next-gen
              solutions that push the boundaries of technology.
            </p>
            <p className="text-sm" style={{ color: PRIMARY_TEXT_COLOR }}>
              We transform traditional operations with AI-driven systems, smart
              integrations, and future-ready digital experiences.
            </p>
          </motion.div>

          {/* IMPACT */}
          <motion.div
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 160, damping: 16 }}
            className="bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-white shadow-xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#410F43] text-white text-lg shadow-md">
                🚀
              </span>
              <h4
                className="text-xl font-extrabold tracking-wide uppercase"
                style={{ color: PRIMARY_TEXT_COLOR }}
              >
                IMPACT
              </h4>
            </div>
            <p
              className="text-lg font-semibold mb-3"
              style={{ color: PRIMARY_TEXT_COLOR }}
            >
              Creating Lasting, Measurable Business Value
            </p>
            <p className="text-sm mb-2" style={{ color: PRIMARY_TEXT_COLOR }}>
              BI3 delivers scalable, secure, end-to-end solutions that generate
              real business impact.
            </p>
            <p className="text-sm" style={{ color: PRIMARY_TEXT_COLOR }}>
              Whether it’s operational efficiency, customer experience, or
              strategic growth — our solutions create outcomes that matter.
            </p>
          </motion.div>
        </div>

        {/* Services */}
        {/* <div className="mb-10">
          <h3
            className="text-4xl font-bold text-center mb-10"
            style={{ color: PRIMARY_TEXT_COLOR }}
          >
            Our Core Technology Services
          </h3>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {services.map((s, i) => (
              <motion.button
                key={i}
                onClick={() => setActiveService(i)}
                whileHover={{ scale: 1.06, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 150 }}
                className={`relative px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 focus:outline-none focus:ring-4 ring-offset-2 ${
                  activeService === i
                    ? `bg-gradient-to-r ${s.color} text-white shadow-xl ring-[#FBB6CE]/70 scale-105`
                    : "bg-white/70 text-[#410F43] hover:bg-white ring-transparent"
                }`}
              >
                {s.title}
              </motion.button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeService}
              className="bg-white/70 backdrop-blur-lg rounded-3xl p-10 border border-white shadow-2xl overflow-hidden"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={serviceDetailVariants}
            >
              <div className="flex flex-col md:flex-row items-start gap-10">
                <div
                  className={`text-white p-6 rounded-2xl bg-gradient-to-br ${services[activeService].color} flex-shrink-0 shadow-xl flex flex-col items-center justify-center gap-3 min-w-[140px]`}
                >
                  {services[activeService].icon}
                  <span className="text-xs uppercase tracking-wide font-semibold bg-white/20 px-3 py-1 rounded-full">
                    {services[activeService].statTag}
                  </span>
                </div>

                <div className="flex-grow">
                  <h3
                    className="text-4xl font-extrabold mb-3"
                    style={{ color: PRIMARY_TEXT_COLOR }}
                  >
                    {services[activeService].title}
                  </h3>
                  <p
                    className="text-xl mb-6 font-light italic"
                    style={{ color: PRIMARY_TEXT_COLOR }}
                  >
                    {services[activeService].description}
                  </p>

                  <div className="space-y-4 pt-2">
                    {services[activeService].features.map((feat, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ x: 10 }}
                        transition={{ type: "spring", stiffness: 100 }}
                        className="flex items-center gap-4 text-lg font-medium group cursor-pointer"
                        style={{ color: PRIMARY_TEXT_COLOR }}
                      >
                        <div className="w-8 h-8 rounded-full bg-[#410F43] flex items-center justify-center shadow-md group-hover:bg-[#B83280] transition-colors duration-300">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <span className="group-hover:text-black transition-colors duration-300">
                          {feat}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div> */}
      </div>
    </section>
  );
}
