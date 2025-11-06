/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import { generateMetadata } from '@/lib/seo'

export const metadata: Metadata = generateMetadata({
  title: 'Terms of Service - Dental Solutions',
  description: 'Terms of Service for Dental Solutions. Read our terms and conditions for using our website and services.',
  keywords: 'terms of service, terms and conditions, dental clinic terms, patient agreement',
  canonical: '/terms',
})

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto container-padding py-16 md:py-20 pt-24 lg:pt-28">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Terms of Service
          </h1>
          
          <p className="text-gray-600 mb-8">
            <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div className="prose prose-lg max-w-none space-y-8">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                Welcome to Dental Solutions. These Terms of Service ("Terms") govern your use of our website and services. By accessing or using our website, booking appointments, or receiving dental services from us, you agree to be bound by these Terms. If you do not agree with any part of these Terms, please do not use our website or services.
              </p>
            </section>

            {/* Definitions */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Definitions</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>"We," "Us," "Our"</strong> refers to Dental Solutions, our dental practice, and our staff</li>
                <li><strong>"You," "Your"</strong> refers to the user, patient, or visitor of our website and services</li>
                <li><strong>"Services"</strong> refers to all dental care, treatments, and related services provided by Dental Solutions</li>
                <li><strong>"Website"</strong> refers to our online platform accessible at our domain</li>
              </ul>
            </section>

            {/* Use of Website */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Use of Website</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">3.1 Permitted Use</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You may use our website for lawful purposes only, including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Viewing information about our dental services</li>
                <li>Booking appointments online</li>
                <li>Contacting us with inquiries</li>
                <li>Accessing educational dental health content</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">3.2 Prohibited Activities</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You agree not to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Use the website for any illegal or unauthorized purpose</li>
                <li>Attempt to gain unauthorized access to our systems or networks</li>
                <li>Transmit viruses, malware, or other harmful code</li>
                <li>Interfere with or disrupt the website's functionality</li>
                <li>Collect or harvest information about other users</li>
                <li>Impersonate any person or entity</li>
                <li>Post false, misleading, or defamatory content</li>
                <li>Violate any applicable laws or regulations</li>
              </ul>
            </section>

            {/* Appointment Booking */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Appointment Booking and Cancellation</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">4.1 Booking Process</h3>
              <p className="text-gray-700 leading-relaxed">
                When you book an appointment through our website, you will receive a confirmation. However, your appointment is not final until we contact you to confirm the date and time. We reserve the right to reschedule appointments due to emergencies or unforeseen circumstances.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">4.2 Cancellation Policy</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Please provide at least 24 hours' notice if you need to cancel or reschedule an appointment</li>
                <li>Late cancellations or no-shows may result in a cancellation fee</li>
                <li>Repeated missed appointments may affect your ability to book future appointments</li>
                <li>Emergency cancellations will be handled on a case-by-case basis</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">4.3 Late Arrivals</h3>
              <p className="text-gray-700 leading-relaxed">
                If you arrive more than 15 minutes late for your appointment, we may need to reschedule to accommodate other patients. We will make every effort to see you, but this cannot be guaranteed.
              </p>
            </section>

            {/* Patient Responsibilities */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Patient Responsibilities</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                As a patient, you agree to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Provide accurate and complete medical and dental history information</li>
                <li>Inform us of any changes to your health status or medications</li>
                <li>Follow pre-treatment and post-treatment instructions</li>
                <li>Attend scheduled appointments or provide adequate notice of cancellation</li>
                <li>Pay for services rendered according to our payment terms</li>
                <li>Treat our staff and other patients with respect and courtesy</li>
                <li>Inform us of any concerns or complications following treatment</li>
              </ul>
            </section>

            {/* Treatment and Services */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Treatment and Services</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">6.1 Professional Judgment</h3>
              <p className="text-gray-700 leading-relaxed">
                All treatment recommendations are based on our professional judgment and examination. We will discuss treatment options, risks, and benefits with you, but the final decision to proceed with treatment rests with you.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">6.2 Treatment Outcomes</h3>
              <p className="text-gray-700 leading-relaxed">
                While we strive to provide the highest quality dental care, we cannot guarantee specific treatment outcomes. Dental procedures carry inherent risks, and results may vary based on individual circumstances.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">6.3 Informed Consent</h3>
              <p className="text-gray-700 leading-relaxed">
                Before any treatment, we will obtain your informed consent. This includes explaining the procedure, potential risks, benefits, and alternatives. You have the right to ask questions and refuse treatment.
              </p>
            </section>

            {/* Payment Terms */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Payment Terms</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">7.1 Payment Responsibility</h3>
              <p className="text-gray-700 leading-relaxed">
                You are responsible for payment of all services rendered. Payment is due at the time of service unless other arrangements have been made in advance.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">7.2 Insurance</h3>
              <p className="text-gray-700 leading-relaxed">
                If you have dental insurance, we will assist with filing claims. However, you are ultimately responsible for payment. Any amount not covered by insurance is your responsibility.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">7.3 Payment Methods</h3>
              <p className="text-gray-700 leading-relaxed">
                We accept cash, credit cards, debit cards, and other payment methods as posted at our clinic.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">7.4 Outstanding Balances</h3>
              <p className="text-gray-700 leading-relaxed">
                Unpaid balances may be subject to interest charges and collection efforts. Continued treatment may be withheld until outstanding balances are resolved.
              </p>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Intellectual Property</h2>
              <p className="text-gray-700 leading-relaxed">
                All content on our website, including text, graphics, logos, images, and software, is the property of Dental Solutions or our licensors and is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works without our express written permission.
              </p>
            </section>

            {/* Privacy and Confidentiality */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Privacy and Confidentiality</h2>
              <p className="text-gray-700 leading-relaxed">
                We are committed to protecting your privacy and maintaining the confidentiality of your personal and medical information. Our collection, use, and disclosure of your information are governed by our Privacy Policy and applicable healthcare privacy laws. Please review our Privacy Policy for detailed information.
              </p>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                To the fullest extent permitted by law:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>We are not liable for any indirect, incidental, special, or consequential damages arising from your use of our website or services</li>
                <li>Our total liability for any claim related to our services shall not exceed the amount you paid for the specific service giving rise to the claim</li>
                <li>We are not responsible for any damages resulting from your failure to follow treatment instructions or attend follow-up appointments</li>
                <li>We are not liable for technical issues, website downtime, or errors in online appointment booking</li>
              </ul>
            </section>

            {/* Disclaimer of Warranties */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Disclaimer of Warranties</h2>
              <p className="text-gray-700 leading-relaxed">
                Our website and services are provided "as is" and "as available" without warranties of any kind, either express or implied. We do not warrant that our website will be uninterrupted, error-free, or free from viruses or other harmful components.
              </p>
            </section>

            {/* Indemnification */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Indemnification</h2>
              <p className="text-gray-700 leading-relaxed">
                You agree to indemnify, defend, and hold harmless Dental Solutions, its staff, and affiliates from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from your violation of these Terms or your use of our services.
              </p>
            </section>

            {/* Emergency Care */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Emergency Care</h2>
              <p className="text-gray-700 leading-relaxed">
                If you experience a dental emergency outside of our business hours, please seek immediate care at the nearest emergency room or urgent care facility. Our website and online booking system are not intended for emergency situations.
              </p>
            </section>

            {/* Medical Advice Disclaimer */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Medical Advice Disclaimer</h2>
              <p className="text-gray-700 leading-relaxed">
                Information provided on our website is for educational purposes only and does not constitute medical advice. Always consult with a qualified dental professional for diagnosis and treatment recommendations specific to your situation.
              </p>
            </section>

            {/* Third-Party Links */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Third-Party Links</h2>
              <p className="text-gray-700 leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the content, accuracy, or practices of these external sites. Your use of third-party websites is at your own risk and subject to their terms and conditions.
              </p>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">16. Governing Law and Jurisdiction</h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of India and the State of Punjab. Any disputes arising from these Terms or our services shall be subject to the exclusive jurisdiction of the courts in Zirakpur, Punjab.
              </p>
            </section>

            {/* Dispute Resolution */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">17. Dispute Resolution</h2>
              <p className="text-gray-700 leading-relaxed">
                In the event of any dispute, we encourage you to contact us first to seek an amicable resolution. If a dispute cannot be resolved informally, both parties agree to attempt mediation before pursuing litigation.
              </p>
            </section>

            {/* Severability */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">18. Severability</h2>
              <p className="text-gray-700 leading-relaxed">
                If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.
              </p>
            </section>

            {/* Entire Agreement */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">19. Entire Agreement</h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms, together with our Privacy Policy, constitute the entire agreement between you and Dental Solutions regarding your use of our website and services.
              </p>
            </section>

            {/* Changes to Terms */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">20. Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to our website. Your continued use of our website or services after changes are posted constitutes your acceptance of the modified Terms. We encourage you to review these Terms periodically.
              </p>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">21. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions or concerns about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-900 font-semibold mb-2">Dental Solutions</p>
                <p className="text-gray-700">SCO 2, Upper Ground Floor, VIP Central</p>
                <p className="text-gray-700">W VIP Rd, opposite Surya Tower</p>
                <p className="text-gray-700">Zirakpur, Punjab 140603</p>
                <p className="text-gray-700 mt-3">
                  <strong>Phone:</strong> <a href="tel:+919780025988" className="text-primary-600 hover:text-primary-700">+91 97800 25988</a>
                </p>
                <p className="text-gray-700">
                  <strong>Email:</strong> <a href="mailto:info@dentalsolutions.com" className="text-primary-600 hover:text-primary-700">info@dentalsolutions.com</a>
                </p>
              </div>
            </section>

            {/* Acknowledgment */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">22. Acknowledgment</h2>
              <p className="text-gray-700 leading-relaxed">
                By using our website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
