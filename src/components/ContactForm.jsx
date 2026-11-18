import { useState } from 'react';
import { SERVICE_CATEGORIES_OPTIONS } from '../data/contactData.js';
import { CheckIcon } from './icons.jsx';

export default function ContactForm({ prefilledService = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: prefilledService || '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  if (submitted) {
    return (
      <div className='bg-white rounded-xl p-8 border border-neutral-200 shadow-sm text-center'>
        <div className='w-12 h-12 rounded-full bg-accent/10 text-accent grid place-items-center mx-auto mb-3.5'>
          <CheckIcon className='w-6 h-6' />
        </div>
        <h3 className='text-xl font-semibold text-ink mb-1.5'>Inquiry Received</h3>
        <p className='text-muted text-xs sm:text-sm max-w-md mx-auto mb-6 leading-relaxed'>
          Thank you, <strong className='text-ink font-medium'>{formData.name}</strong>. Our engineering and estimation team at I.S.T. will review your specifications and contact you shortly.
        </p>
        <button
          type='button'
          onClick={() => {
            setSubmitted(false);
            setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' });
          }}
          className='h-10 px-5 rounded-lg bg-ink text-white font-medium text-xs hover:bg-accent transition-colors'
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='bg-white rounded-xl p-5 sm:p-8 border border-neutral-200/80 shadow-sm'
    >
      <h3 className='text-lg sm:text-xl font-semibold text-ink mb-1 tracking-tight'>
        Request a Consultation or Equipment Quote
      </h3>
      <p className='text-xs sm:text-[13px] text-muted mb-6 leading-relaxed'>
        Submit your project specifications or equipment requirements. We respond to industrial inquiries promptly.
      </p>

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4'>
        <div>
          <label className='block text-[11.5px] font-medium text-ink mb-1.5'>
            Full Name <span className='text-accent'>*</span>
          </label>
          <input
            type='text'
            name='name'
            required
            value={formData.name}
            onChange={handleChange}
            placeholder='e.g. John Doe'
            className='w-full h-10 px-3 text-xs sm:text-sm rounded-lg border border-neutral-200 text-ink focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors bg-white'
          />
        </div>

        <div>
          <label className='block text-[11.5px] font-medium text-ink mb-1.5'>
            Corporate Email <span className='text-accent'>*</span>
          </label>
          <input
            type='email'
            name='email'
            required
            value={formData.email}
            onChange={handleChange}
            placeholder='e.g. j.doe@company.com'
            className='w-full h-10 px-3 text-xs sm:text-sm rounded-lg border border-neutral-200 text-ink focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors bg-white'
          />
        </div>

        <div>
          <label className='block text-[11.5px] font-medium text-ink mb-1.5'>
            Phone Number
          </label>
          <input
            type='tel'
            name='phone'
            value={formData.phone}
            onChange={handleChange}
            placeholder='e.g. +60 12-345 6789'
            className='w-full h-10 px-3 text-xs sm:text-sm rounded-lg border border-neutral-200 text-ink focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors bg-white'
          />
        </div>

        <div>
          <label className='block text-[11.5px] font-medium text-ink mb-1.5'>
            Company / Organization
          </label>
          <input
            type='text'
            name='company'
            value={formData.company}
            onChange={handleChange}
            placeholder='e.g. Energy Corp'
            className='w-full h-10 px-3 text-xs sm:text-sm rounded-lg border border-neutral-200 text-ink focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors bg-white'
          />
        </div>
      </div>

      <div className='mb-4'>
        <label className='block text-[11.5px] font-medium text-ink mb-1.5'>
          Service / Equipment Category
        </label>
        <select
          name='service'
          value={formData.service}
          onChange={handleChange}
          className='w-full h-10 px-3 text-xs sm:text-sm rounded-lg border border-neutral-200 text-ink focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors bg-white'
        >
          <option value=''>Select a service or equipment of interest...</option>
          {SERVICE_CATEGORIES_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div className='mb-6'>
        <label className='block text-[11.5px] font-medium text-ink mb-1.5'>
          Project Scope &amp; Details
        </label>
        <textarea
          name='message'
          rows='4'
          value={formData.message}
          onChange={handleChange}
          placeholder='Please describe operating conditions, dimensions, location, turnaround dates, or pump pressure requirements...'
          className='w-full p-3 text-xs sm:text-sm rounded-lg border border-neutral-200 text-ink focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-y bg-white'
        ></textarea>
      </div>

      <button
        type='submit'
        className='w-full sm:w-auto min-h-[44px] px-6 rounded-lg bg-accent text-white font-medium text-xs sm:text-sm hover:bg-accent/90 transition-colors shadow-sm flex items-center justify-center gap-2'
      >
        <span>Submit Inquiry</span>
        <span>&rarr;</span>
      </button>
    </form>
  );
}
