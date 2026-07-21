import PageIslandLayout from '@/components/PageIslandLayout';

export default function TermsOfService() {
  return (
    <PageIslandLayout title="Terms of Service">
      <div className="container py-8 max-w-4xl space-y-8 text-muted">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-dark">1. Terms</h2>
          <p>
            By accessing this Website, accessible from wecreateconsult.com, you are agreeing to be bound by these Website Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site. The materials contained in this Website are protected by copyright and trade mark law.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-dark">2. Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of the materials on Wecreate Consult's Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>modify or copy the materials;</li>
            <li>use the materials for any commercial purpose or for any public display;</li>
            <li>attempt to reverse engineer any software contained on Wecreate Consult's Website;</li>
            <li>remove any copyright or other proprietary notations from the materials; or</li>
            <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-dark">3. Limitations</h2>
          <p>
            Wecreate Consult or its suppliers will not be hold accountable for any damages that will arise with the use or inability to use the materials on Wecreate Consult's Website, even if Wecreate Consult or an authorize representative of this Website has been notified, orally or written, of the possibility of such damage. Some jurisdiction does not allow limitations on implied warranties or limitations of liability for incidental damages, these limitations may not apply to you.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-dark">4. Revisions and Errata</h2>
          <p>
            The materials appearing on Wecreate Consult's Website may include technical, typographical, or photographic errors. Wecreate Consult will not promise that any of the materials in this Website are accurate, complete, or current. Wecreate Consult may change the materials contained on its Website at any time without notice. Wecreate Consult does not make any commitment to update the materials.
          </p>
        </section>
      </div>
    </PageIslandLayout>
  );
}
