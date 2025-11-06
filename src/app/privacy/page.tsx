/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import { generateMetadata } from '@/lib/seo'

export const metadata: Metadata = generateMetadata({
  title: 'Privacy Policy - Dental Solutions',
  description: 'Privacy Policy for Dental Solutions. Learn how we collect, use, and protect your personal information.',
  keywords: 'privacy policy, data protection, dental clinic privacy, patient information security',
  canonical: '/privacy',
})

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto container-padding py-16 md:py-20 pt-24 lg:pt-28">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Privacy Policy
          </h1>
          
          <p className="text-gray-600 mb-8">
            <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div className="prose prose-lg max-w-none space-y-8">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                Dental Solutions ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
              </p>
            </section>

            {/* Information We Collect */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">2.1 Personal Information</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Book an appointment through our website</li>
                <li>Contact us via phone, email, or contact forms</li>
                <li>Subscribe to our newsletter or promotional communications</li>
                <li>Visit our clinic and become a patient</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                This information may include:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Date of birth</li>
                <li>Medical and dental history</li>
                <li>Insurance information</li>
                <li>Payment information</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">2.2 Automatically Collected Information</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you visit our website, we may automatically collect certain information about your device, including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website addresses</li>
                <li>Device identifiers</li>
              </ul>
            </section>

            {/* How We Use Your Information */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>To schedule and manage your dental appointments</li>
                <li>To provide dental care and treatment services</li>
                <li>To communicate with you about your appointments, treatments, and follow-ups</li>
                <li>To process payments and maintain billing records</li>
                <li>To send you appointment reminders and health-related information</li>
                <li>To improve our website and services</li>
                <li>To respond to your inquiries and provide customer support</li>
                <li>To comply with legal obligations and regulatory requirements</li>
                <li>To send promotional communications (with your consent)</li>
                <li>To analyze website usage and optimize user experience</li>
              </ul>
            </section>

            {/* Disclosure of Your Information */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Disclosure of Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may share your information in the following situations:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Healthcare Providers:</strong> With other healthcare professionals involved in your care</li>
                <li><strong>Service Providers:</strong> With third-party vendors who perform services on our behalf (e.g., payment processors, email service providers)</li>
                <li><strong>Insurance Companies:</strong> To process insurance claims and verify coverage</li>
                <li><strong>Legal Requirements:</strong> When required by law, court order, or government regulation</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, sale, or acquisition of our practice</li>
                <li><strong>With Your Consent:</strong> When you have given us explicit permission to share your information</li>
              </ul>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
              <p className="text-gray-700 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-4">
                <li>Encryption of sensitive data during transmission (SSL/TLS)</li>
                <li>Secure storage of patient records in compliance with healthcare regulations</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication procedures</li>
                <li>Staff training on data protection and confidentiality</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee its absolute security.
              </p>
            </section>

            {/* Your Privacy Rights */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Privacy Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You have the following rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Access:</strong> Request access to your personal information we hold</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal requirements)</li>
                <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time</li>
                <li><strong>Data Portability:</strong> Request a copy of your data in a portable format</li>
                <li><strong>Restriction:</strong> Request restriction of processing in certain circumstances</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
              </p>
            </section>

            {/* Cookies and Tracking */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Cookies and Tracking Technologies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use cookies and similar tracking technologies to enhance your experience on our website. Cookies are small data files stored on your device that help us:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Remember your preferences and settings</li>
                <li>Understand how you use our website</li>
                <li>Improve website functionality and performance</li>
                <li>Provide personalized content and advertisements</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                You can control cookies through your browser settings. However, disabling cookies may affect your ability to use certain features of our website.
              </p>
            </section>

            {/* Third-Party Links */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Third-Party Links</h2>
              <p className="text-gray-700 leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Children's Privacy</h2>
              <p className="text-gray-700 leading-relaxed">
                Our services are not directed to children under the age of 13. We do not knowingly collect personal information from children under 13 without parental consent. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
              </p>
            </section>

            {/* Data Retention */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Data Retention</h2>
              <p className="text-gray-700 leading-relaxed">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Patient medical records are retained in accordance with applicable healthcare regulations and professional standards.
              </p>
            </section>

            {/* International Data Transfers */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. International Data Transfers</h2>
              <p className="text-gray-700 leading-relaxed">
                Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
              </p>
            </section>

            {/* Changes to Privacy Policy */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Changes to This Privacy Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this Privacy Policy periodically.
              </p>
            </section>

            {/* Contact Us */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
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

            {/* Consent */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Your Consent</h2>
              <p className="text-gray-700 leading-relaxed">
                By using our website and services, you consent to the collection, use, and disclosure of your information as described in this Privacy Policy.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
