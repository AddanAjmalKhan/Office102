'use client';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useState, FormEvent } from 'react';

export default function contactus() {
  useScrollReveal();

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      subject: (form.elements.namedItem('subject') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        const json = await res.json();
        setErrorMsg(json.error || 'Something went wrong. Please try again.');
        setStatus('error');
      }
    } catch {
      setErrorMsg('Network error. Please check your connection and try again.');
      setStatus('error');
    }
  }

  return (<>
<style>{`
  .custom-submit-btn-wrapper {
    display: flex;
    justify-content: center;
    margin-top: 60px;
    position: relative;
    z-index: 10;
  }
  .custom-submit-btn {
    width: 220px;
    height: 220px;
    border-radius: 50%;
    border: 1px solid rgba(255,255,255,0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    text-decoration: none;
    color: #fff;
    font-size: 16px;
    background: transparent;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  .custom-submit-btn:hover {
    background: rgba(255,255,255,0.05);
    color: #fff;
  }
  .custom-submit-btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  .custom-submit-btn i {
    margin-left: 8px;
    transform: rotate(-45deg);
  }
  .form-success {
    text-align: center;
    padding: 40px 20px;
    color: #fff;
  }
  .form-success h3 {
    font-size: 24px;
    margin-bottom: 12px;
    color: #e74c0a;
  }
  .form-error {
    color: #ff6b6b;
    margin-top: 12px;
    text-align: center;
  }
`}</style>
{/* Contact area start */}
<section className="contact__area-6 dark">
  <div className="container g-0 line pt-120 pb-110">
    <span className="line-3"></span>
    <div className="row">
      <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
        <div className="sec-title-wrapper">
          <h2 className="sec-title-2">Let's get in touch</h2>
        </div>
      </div>
      <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
        <div className="contact__text">
          <p>Great! We're excited to hear from you and let's start
            something special together. Call us for any inquiry.</p>
        </div>
      </div>
    </div>
    <div className="row contact__btm">
      <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
        <div className="contact__info">
          <h3>Don't be afraid man ! <br />say hello</h3>
          <ul>
            <li><a href="mailto:Info@office102llc.com">Info@office102llc.com</a></li>
          </ul>
        </div>
      </div>
      <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
        <div className="contact__form">
          {status === 'success' ? (
            <div className="form-success">
              <h3>Message Sent!</h3>
              <p>Thank you for reaching out. We've received your message and will get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-xxl-6 col-xl-6 col-12">
                  <input type="text" name="name" placeholder="Name *" required />
                </div>
                <div className="col-xxl-6 col-xl-6 col-12">
                  <input type="email" name="email" placeholder="Email *" required />
                </div>
              </div>
              <div className="row g-3">
                <div className="col-xxl-6 col-xl-6 col-12">
                  <input type="tel" className="phone-input" name="phone" placeholder="Phone" />
                </div>
                <div className="col-xxl-6 col-xl-6 col-12">
                  <input type="text" name="subject" placeholder="Subject *" required />
                </div>
              </div>
              <div className="row g-3">
                <div className="col-12">
                  <textarea name="message" placeholder="Messages *" required></textarea>
                </div>
              </div>
              <div className="row g-3">
                <div className="col-12">
                  <div className="d-flex align-items-start">
                    <input type="checkbox" name="tnc" className="me-2 mt-2 w-auto mb-0" required />
                    <label htmlFor="tnc" className="text-light">
                      By checking this box, you agree to receive text messages
                      from Office 102 LLC regarding customer support, and
                      project updates, ensuring timely assistance, efficient issue resolution,
                      and service notifications.
                      Messaging frequency may vary, and message and data rates may apply.
                      You can opt out anytime by texting STOP. You will receive no further
                      messages after you word STOP. For assistance, text HELP or email us at
                      <a href="mailto:Info@office102llc.com" style={{ color: '#e74c0a' }}>Info@office102llc.com</a>.
                      Read our <a href="/privacy-policy" style={{ color: '#e74c0a' }}>Privacy Policy</a>
                      and <a href="/terms-and-conditions" style={{ color: '#e74c0a' }}>Terms of Service</a> for
                      more details. Personal information
                      including name, email and phone number(s) will NOT be released to third parties. There are
                      no circumstances under which we sell personal information to third parties.
                    </label>
                  </div>
                </div>
              </div>
              {status === 'error' && (
                <p className="form-error">{errorMsg}</p>
              )}
              <div className="row g-3">
                <div className="col-12">
                  <div className="custom-submit-btn-wrapper">
                    <button type="submit" className="custom-submit-btn" disabled={status === 'loading'}>
                      <span>
                        {status === 'loading' ? 'Sending...' : (<>Send <br />Messages <i className="fa-solid fa-arrow-right"></i></>)}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  </div>
</section>
{/* Contact area end */}

</>); }
