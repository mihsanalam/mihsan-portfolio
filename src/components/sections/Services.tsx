"use client";

import { motion } from "framer-motion";
import { Globe, ShoppingCart, LayoutDashboard, Boxes, Cpu, Sparkles } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Business Websites",
    description: "High-performance, modern websites designed to establish your brand credibility, capture leads, and showcase services with polished aesthetics.",
    features: ["Responsive layout", "Lead generation forms", "SEO optimization"],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Stores",
    description: "Fully featured online shops with smooth product browsing, shopping carts, secure checkout flows, and payment gateway integrations.",
    features: ["Product management", "Payment integration", "Secure checkouts"],
  },
  {
    icon: LayoutDashboard,
    title: "Admin Dashboards",
    description: "Tailored management interfaces providing operational control, custom analytics, reporting tools, and seamless data management.",
    features: ["Data visualization", "Role permissions", "Operational control"],
  },
  {
    icon: Boxes,
    title: "Inventory Systems",
    description: "Robust tracking systems designed to control stock levels, log sales/returns transactions, and keep records synced in real-time.",
    features: ["Stock level alerts", "Barcode scanner ready", "Real-time sync"],
  },
  {
    icon: Cpu,
    title: "Custom Web Applications",
    description: "Bespoke SaaS applications and software solutions built to streamline complex workflows, automate business tasks, and scale easily.",
    features: ["Scalable architecture", "API integrations", "Task automation"],
  },
  {
    icon: Sparkles,
    title: "Landing Pages",
    description: "Fast-loading, high-conversion landing pages focused on promoting specific marketing campaigns, products, or driving client calls-to-action.",
    features: ["Conversion optimized", "Ultra-fast load time", "Interactive elements"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-surface/30 pointer-events-none" />
      <div className="absolute top-1/3 -right-64 w-96 h-96 bg-accent-2/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-sm font-mono text-accent">02. Services</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mt-2">
            What I Can Build
          </h2>
          <div className="w-16 h-1 bg-accent/30 rounded-full mt-4" />
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative p-8 rounded-2xl bg-surface border border-border hover:border-accent/40 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(123,111,232,0.1)] flex flex-col justify-between overflow-hidden"
              >
                {/* Accent glow on hover */}
                <div className="absolute -right-16 -top-16 w-32 h-32 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-colors duration-300" />
                
                <div>
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent size={24} aria-hidden="true" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-text-primary group-hover:text-accent transition-colors mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Mini features */}
                <div className="pt-4 border-t border-border/50 flex flex-wrap gap-2">
                  {service.features.map((feat) => (
                    <span
                      key={feat}
                      className="text-[11px] font-medium px-2 py-0.5 rounded bg-surface-2 text-text-secondary border border-border/40"
                    >
                      {feat}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
