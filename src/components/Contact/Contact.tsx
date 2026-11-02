import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { siteConfig } from '@/data/siteConfig'
import { useScrollAnimation } from '@/hooks'
import {
  Send,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Linkedin,
  Twitter,
  Instagram,
  Github,
  CheckCircle,
  AlertCircle,
  Loader2,
} from 'lucide-react'

interface FormData {
  name: string
  company: string
  email: string
  phone: string
  service: string
  project: string
  details: string
}

interface FormErrors {
  name?: string
  email?: string
  project?: string
}

const serviceOptions = [
  'Website Development',
  'Web Application',
  'Business Automation',
  'E-commerce',
  'Website Maintenance',
  'Other',
]

export default function Contact() {
  const { ref, isInView } = useScrollAnimation<HTMLElement>({ threshold: 0.1 })
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    project: '',
    details: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.project.trim()) {
      newErrors.project = 'Please describe what you are looking to build'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setStatus('loading')

    // Simulate form submission
    // In production, replace with actual form backend integration
    // Example: Send to your API endpoint, Formspree, or similar service
    try {
      // For demonstration - in production, use environment variable for form endpoint
      // const response = await fetch(import.meta.env.VITE_FORM_ENDPOINT, {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // })

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // For now, show success and provide alternative contact methods
      setStatus('success')
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        service: '',
        project: '',
        details: '',
      })
    } catch {
      setStatus('error')
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const socialLinks = [
    { icon: Linkedin, href: siteConfig.social.linkedin, label: 'LinkedIn' },
    { icon: Twitter, href: siteConfig.social.twitter, label: 'Twitter' },
    { icon: Instagram, href: siteConfig.social.instagram, label: 'Instagram' },
    { icon: Github, href: siteConfig.social.github, label: 'GitHub' },
  ]

  return (
    <section
      id="contact"
      ref={ref}
      className="section-padding bg-primary-bg relative overflow-hidden"
    >
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
          className="text-center mb-12"
        >
          <span className="badge-teal mb-4">Get in Touch</span>
          <h2 className="heading-display mb-4">Let's Discuss Your Project</h2>
          <p className="text-body-lg text-text-body max-w-2xl mx-auto">
            Tell us about your requirements and we'll get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.19, 1, 0.22, 1] }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Direct Contact */}
            <div className="space-y-4">
              <h3 className="heading-3 mb-6">Contact Information</h3>

              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-white border border-primary-dark/5 hover:border-accent-teal/20 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-accent-teal/10 flex items-center justify-center group-hover:bg-accent-teal/20 transition-colors">
                  <Mail className="w-5 h-5 text-accent-teal" />
                </div>
                <div>
                  <div className="text-sm text-text-body">Email</div>
                  <div className="font-medium text-primary-dark">
                    {siteConfig.contact.email}
                  </div>
                </div>
              </a>

              <a
                href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-white border border-primary-dark/5 hover:border-accent-teal/20 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-accent-teal/10 flex items-center justify-center group-hover:bg-accent-teal/20 transition-colors">
                  <Phone className="w-5 h-5 text-accent-teal" />
                </div>
                <div>
                  <div className="text-sm text-text-body">Phone</div>
                  <div className="font-medium text-primary-dark">
                    {siteConfig.contact.phone}
                  </div>
                </div>
              </a>

              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-white border border-primary-dark/5 hover:border-accent-teal/20 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-accent-teal/10 flex items-center justify-center group-hover:bg-accent-teal/20 transition-colors">
                  <MessageCircle className="w-5 h-5 text-accent-teal" />
                </div>
                <div>
                  <div className="text-sm text-text-body">WhatsApp</div>
                  <div className="font-medium text-primary-dark">Quick Response</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-primary-dark/5">
                <div className="w-12 h-12 rounded-xl bg-accent-blue/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-accent-blue" />
                </div>
                <div>
                  <div className="text-sm text-text-body">Location</div>
                  <div className="font-medium text-primary-dark">
                    {siteConfig.contact.address.city}, {siteConfig.contact.address.state}
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-sm font-medium text-text-body mb-4">Follow Us</h4>
              <div className="flex gap-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-white border border-primary-dark/5 flex items-center justify-center hover:border-accent-teal/20 hover:bg-accent-teal/5 transition-all"
                    aria-label={label}
                  >
                    <Icon className="w-4 h-4 text-primary-dark" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-6 lg:p-8 border border-primary-dark/5 shadow-sm"
            >
              {/* Success Message */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 rounded-xl bg-green-50 border border-green-200 flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-green-800">Message received!</p>
                    <p className="text-sm text-green-700 mt-1">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                      You can also reach us directly via email or WhatsApp for faster response.
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Error Message */}
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 flex items-start gap-3"
                >
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-red-800">Something went wrong</p>
                    <p className="text-sm text-red-700 mt-1">
                      Please try again or contact us directly via email at{' '}
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="underline"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </p>
                  </div>
                </motion.div>
              )}

              <div className="grid sm:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="label">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`input ${errors.name ? 'input-error' : ''}`}
                    placeholder="Your name"
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1 text-sm text-red-500">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className="label">
                    Business / Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="input"
                    placeholder="Your company name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="label">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`input ${errors.email ? 'input-error' : ''}`}
                    placeholder="you@company.com"
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-sm text-red-500">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="label">
                    Phone (optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="input"
                    placeholder="+91 00000 00000"
                  />
                </div>

                {/* Service */}
                <div className="sm:col-span-2">
                  <label htmlFor="service" className="label">
                    What service are you interested in?
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="input"
                  >
                    <option value="">Select a service</option>
                    {serviceOptions.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Project */}
                <div className="sm:col-span-2">
                  <label htmlFor="project" className="label">
                    What are you looking to build? <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="project"
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                    className={`input ${errors.project ? 'input-error' : ''}`}
                    placeholder="e.g., Business website, Customer portal, E-commerce store"
                    aria-describedby={errors.project ? 'project-error' : undefined}
                  />
                  {errors.project && (
                    <p id="project-error" className="mt-1 text-sm text-red-500">
                      {errors.project}
                    </p>
                  )}
                </div>

                {/* Details */}
                <div className="sm:col-span-2">
                  <label htmlFor="details" className="label">
                    Project details (optional)
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    value={formData.details}
                    onChange={handleChange}
                    rows={4}
                    className="input resize-none"
                    placeholder="Tell us more about your project, timeline, or any specific requirements..."
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-6">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary w-full sm:w-auto disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </button>
              </div>

              {/* Privacy Note */}
              <p className="mt-4 text-xs text-text-body/60">
                By submitting this form, you agree to be contacted regarding your enquiry.
                Your information will be kept confidential and will not be shared with third parties.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
