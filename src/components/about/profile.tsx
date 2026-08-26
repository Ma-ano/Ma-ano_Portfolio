import { motion } from 'motion/react'
import { profile } from '../../data/profile'

export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="text-sm font-medium tracking-widest uppercase text-text-subtle">About</span>
          <h2 id="about-title" className="section-title mt-3">
            Building software that businesses actually run on.
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-12 lg:grid-cols-5 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="lg:col-span-3 space-y-6 text-lg leading-relaxed text-text-muted"
          >
            <p>
              I'm an Information Technology graduate and freelance full-stack developer based in{' '}
              <span className="text-text">{profile.location}</span>. I build production web
              applications for real businesses — not demos, not prototypes. Systems that handle
              payments, orders, grades, and the day-to-day operations people depend on.
            </p>
            <p>
              My work spans the full stack: frontend interfaces, backend logic, database design,
              REST APIs, authentication and RBAC, payment integration, and responsive UI. When
              something breaks, I dig for root causes — and when a client describes what they
              need in plain language, I translate it into reliable, maintainable systems.
            </p>
            <p>
              I work independently from requirements gathering through planning, implementation,
              testing, and deployment — communicating directly with clients at every step.
            </p>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            className="lg:col-span-2"
            aria-label="Areas of expertise"
          >
            <div className="card h-full">
              <h3 className="text-sm font-medium tracking-widest uppercase text-text-subtle">
                What I work with
              </h3>
              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-x-8 gap-y-3 text-base">
                {[
                  'Full-stack development',
                  'Backend development',
                  'Frontend development',
                  'Database design',
                  'REST APIs',
                  'Authentication & RBAC',
                  'Payment integration',
                  'Responsive UI',
                  'Debugging & root-cause analysis',
                  'Requirements gathering',
                  'Client communication',
                  'System design',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-text-muted">
                    <svg
                      className="mt-1.5 w-4 h-4 shrink-0 text-text-subtle"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  )
}