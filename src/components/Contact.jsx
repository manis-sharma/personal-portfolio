import { motion } from 'framer-motion';
import { useState } from 'react';

const interests = ['Web Development', 'UX/UI Design', 'Branding', 'App Development', 'Motion Design'];
const budgets = ['$2k-$5k', '$5k-$10k', '$10k-$20k', '$30k-$40k', '$50k+'];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    company: '',
    email: '',
    message: '',
  });
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [selectedBudget, setSelectedBudget] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [apiError, setApiError] = useState('');

  const toggleInterest = (item) => {
    setSelectedInterests((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.company.trim()) newErrors.company = 'Company name is required';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setApiError('');
    setSuccess(false);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          interests: selectedInterests,
          budget: selectedBudget,
        }),
      });
      if (!response.ok) throw new Error('Failed to send message');
      setSuccess(true);
      setFormData({ name: '', phone: '', company: '', email: '', message: '' });
      setSelectedInterests([]);
      setSelectedBudget('');
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      setApiError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Purple gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/80 via-[#1a1040] to-[#0d0a1a] -z-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-500/30 rounded-full blur-[120px] -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-3">
            Have Great Idea?
          </h2>
          <p className="text-gray-300 text-lg">Tell Us About It</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-x-12 gap-y-8">
            {/* Left column - Form fields */}
            <div className="lg:col-span-3 space-y-6">
              {/* Name + Phone row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <div className="flex justify-between mb-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
                    <span className="text-xs text-orange-400 font-medium">Required</span>
                  </div>
                  <input
                    id="name"
                    type="text"
                    placeholder="Alexandre"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#1a1535]/80 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-500/20 text-sm"
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-300">Phone Number</label>
                    <span className="text-xs text-orange-400 font-medium">Required</span>
                  </div>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="Alexandre"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#1a1535]/80 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-500/20 text-sm"
                  />
                  {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                </div>
              </div>

              {/* Company + Email row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <div className="flex justify-between mb-2">
                    <label htmlFor="company" className="text-sm font-medium text-gray-300">Company Name</label>
                    <span className="text-xs text-orange-400 font-medium">Required</span>
                  </div>
                  <input
                    id="company"
                    type="text"
                    placeholder="Alexandre"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-[#1a1535]/80 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-500/20 text-sm"
                  />
                  {errors.company && <p className="text-red-400 text-xs mt-1">{errors.company}</p>}
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-300">Your Email</label>
                    <span className="text-xs text-orange-400 font-medium">Required</span>
                  </div>
                  <input
                    id="email"
                    type="email"
                    placeholder="Alexandre"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#1a1535]/80 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-500/20 text-sm"
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                </div>
              </div>

              {/* Message */}
              <div>
                <div className="flex justify-between mb-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-300">Tell Us More About Your Project</label>
                  <span className="text-xs text-orange-400 font-medium">Required</span>
                </div>
                <textarea
                  id="message"
                  placeholder="Something about your great idea"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#1a1535]/80 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-500/20 resize-none text-sm"
                />
                {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 text-base rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {loading ? 'Sending...' : 'Submit The Request'}
              </button>

              {success && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-sm text-green-400 bg-green-900/20 border border-green-600/30 rounded-lg py-3"
                >
                  Message sent successfully! I'll get back to you soon.
                </motion.p>
              )}
              {apiError && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-sm text-red-400 bg-red-900/20 border border-red-600/30 rounded-lg py-3"
                >
                  {apiError}
                </motion.p>
              )}
            </div>

            {/* Right column - Interests & Budget */}
            <div className="lg:col-span-2 space-y-10">
              {/* Interests */}
              <div>
                <h3 className="text-xl text-white italic mb-5">I'm Interested In...</h3>
                <div className="flex flex-wrap gap-3">
                  {interests.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => toggleInterest(item)}
                      className={`px-5 py-2.5 rounded-full text-sm font-medium border transition-colors ${
                        selectedInterests.includes(item)
                          ? 'bg-purple-600 border-purple-500 text-white'
                          : 'bg-transparent border-purple-500/40 text-gray-300 hover:border-purple-400 hover:text-white'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              {/* Budget */}
              <div>
                <h3 className="text-xl text-white font-medium mb-5">Project Budget (USD)</h3>
                <div className="flex flex-wrap gap-3">
                  {budgets.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setSelectedBudget(item)}
                      className={`px-5 py-2.5 rounded-full text-sm font-medium border transition-colors ${
                        selectedBudget === item
                          ? 'bg-purple-600 border-purple-500 text-white'
                          : 'bg-transparent border-purple-500/40 text-gray-300 hover:border-purple-400 hover:text-white'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </form>
      </motion.div>
    </section>
  );
}
