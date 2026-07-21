import PageIslandLayout from '@/components/PageIslandLayout';

export default function PrivacyPolicy() {
  return (
    <PageIslandLayout title="Privacy Policy">
      <div className="container py-8 max-w-4xl space-y-8 text-muted">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-dark">1. Information We Collect</h2>
          <p>
            We collect information you provide directly to us, such as when you create or modify your account, request services, contact customer support, or otherwise communicate with us. This information may include: name, email, phone number, postal address, profile picture, payment method, and other information you choose to provide.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-dark">2. How We Use Information</h2>
          <p>
            We use the information we collect about you to provide, maintain, and improve our services, such as to facilitate payments, send receipts, provide products and services you request (and send related information), develop new features, provide customer support, develop safety features, authenticate users, and send product updates and administrative messages.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-dark">3. Sharing of Information</h2>
          <p>
            We may share the information we collect about you as described in this Statement or as described at the time of collection or sharing, including as follows: With third party Service Providers; in response to a request for information by a competent authority if we believe disclosure is in accordance with, or is otherwise required by, any applicable law, regulation, or legal process.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-dark">4. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Statement, please contact us at privacy@wecreateconsult.com.
          </p>
        </section>
      </div>
    </PageIslandLayout>
  );
}
