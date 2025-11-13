"use client";
import React from "react";
import {
  CheckCircle2,
  Shield,
  Award,
  Calendar,
  Heart,
  Users,
  CircleCheckBig,
  Star,
} from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-[#F8F7F6]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Text Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-[#222]">
              Meet  La Belle Aesthetics


              <span className="block text-primary">    
</span>
            </h2>
<p className="text-[#555] mb-6 leading-relaxed">
  Welcome to <strong>La Belle Aesthetics</strong> — a modern, luxury aesthetic studio dedicated to enhancing your natural beauty with precision and care.  
  Founded with a passion for skin, confidence, and artistry, La Belle Aesthetics brings experience, professionalism, and a warm personal touch to every treatment.
</p>

<p className="text-[#666] mb-8 leading-relaxed">
  We provide advanced aesthetic, skincare, and wellness treatments using high-quality products and the latest techniques ✨  
  Whether you’re here to rejuvenate, refine, or simply relax, our focus is always on delivering beautiful, natural results that help you feel confident and empowered.
</p>







            {/* Feature List */}
            <div className="space-y-3 mb-6">
              {[
                "Registered Nurse",
                "Aesthetic Medicine Certified",
                "5+ Years Experience",
                "Continuous Professional Development",
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <CircleCheckBig className="h-5 w-5 text-primary" />
                  <span className="text-[#333]">{item}</span>
                </div>
              ))}
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              <Badge icon={<Shield />} text="NMC Registered" />
              <Badge icon={<Award />} text="Aesthetic Certified" />
              <Badge icon={<Calendar />} text="Est. 2019" />
            </div>
          </div>

          {/* Right Column - Image & Cards */}
          <div className="space-y-6">
            {/* Profile Card */}
           <div className="rounded-xl border border-[#EAEAEA] shadow-sm overflow-hidden">
  <div className="relative">
    <img
      src="/hero.jpeg"
      alt="Omobthe Hair Stylist"
      className="object-contain w-135 h-135"
    />
  </div>
</div>


            {/* Info Cards */}
            <div className="grid grid-cols-2 gap-4">
              <InfoCard
                icon={<Award className="h-8 w-8 text-primary" />}
                title="Qualified Professional"
                text="Registered nurse with specialized training"
              />
              <InfoCard
                icon={<Heart className="h-8 w-8 text-primary" />}
                title="Personalized Care"
                text="Tailored treatments for individual needs"
              />
              <InfoCard
                icon={<Users className="h-8 w-8 text-primary" />}
                title="500+ Clients"
                text="Trusted by hundreds of satisfied clients"
              />
              <InfoCard
                icon={<CheckCircle2 className="h-8 w-8 text-primary" />}
                title="Natural Results"
                text="Subtle enhancements that look beautiful"
              />
            </div>
          </div>
        </div>

        {/* Testimonials Header */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-2 text-[#222]">
            What Our Clients Say
          </h3>
          <p className="text-[#777]">Real reviews from real clients</p>
        </div>
{/* Testimonials */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {[
    {
      name: "Sophie Turner",
      service: "Skin Rejuvenation Facial",
      review:
        "From the moment I arrived, I felt completely at ease. My skin looked radiant and felt so refreshed afterward. The team took time to explain everything and made the entire experience truly luxurious. I’m already booked in for my next visit!",
      stylist: "La Belle Aesthetics",
    },
    {
      name: "Natalie Brooks",
      service: "Dermaplaning & Luxury Facial",
      review:
        "Such a beautiful experience! My skin feels unbelievably soft and smooth. The treatment was gentle yet effective, and I could instantly see the glow. You can tell how passionate they are about skincare — I left feeling amazing!",
      stylist: "La Belle Aesthetics",
    },
    {
      name: "Chloe Matthews",
      service: "Anti-Wrinkle Treatment",
      review:
        "I couldn’t be happier with my results. The consultation was professional and reassuring, and the treatment was carried out with such precision. The outcome is subtle, natural, and exactly what I hoped for — I feel confident and refreshed.",
      stylist: "La Belle Aesthetics",
    },
  ].map((item, i) => (
    <TestimonialCard key={i} {...item} />
  ))}
</div>


      </div>
    </section>
  );
}

/* Reusable Badge */
function Badge({ icon, text }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-md bg-primary text-white text-xs px-2 py-1">
      {icon}
      {text}
    </span>
  );
}

/* Reusable Info Card */
function InfoCard({ icon, title, text }) {
  return (
    <div className="text-center p-4 rounded-xl border border-[#EAEAEA] shadow-sm bg-white">
      <div className="mb-2 flex justify-center">{icon}</div>
      <h3 className="font-semibold text-sm mb-1 text-[#333]">{title}</h3>
      <p className="text-xs text-[#777]">{text}</p>
    </div>
  );
}

/* Reusable Testimonial Card */
function TestimonialCard({ name, service, review }) {
  return (
    <div className="rounded-xl border border-[#E5E2E1] shadow-sm bg-white/70 backdrop-blur-sm p-6 flex flex-col justify-between">
      {/* Star Rating */}
      <div className="flex mb-3 text-[#C5A67B]">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={16} fill="#C5A67B" stroke="#C5A67B" />
        ))}
      </div>

      {/* Review Text */}
      <p className="text-sm text-[#555] italic mb-4">“{review}”</p>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <div>
          <p className="font-semibold text-sm text-[#333]">{name}</p>
          <p className="text-xs text-[#777]">{service}</p>
        </div>
        <span className="text-xs text-[#555] border px-2 py-0.5 rounded-md">
          Verified Client
        </span>
      </div>
    </div>
  );
}
