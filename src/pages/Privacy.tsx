import LegalLayout from "@/components/LegalLayout";
import { company, site } from "@/data/site";

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-8 font-display text-xl font-extrabold text-dora-purple-deep">
      {children}
    </h2>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-3">{children}</p>;
}

export default function Privacy() {
  return (
    <LegalLayout title="Privacy Policy" updated="November 7, 2026">
      <P>
        This Privacy Policy explains how {company.name} ("we", "us" or "our")
        handles information in connection with the mobile application{" "}
        <strong>{site.appName}</strong> (the "App") and this promotional website
        (the "Site"). Because the App is designed for children, protecting
        children's privacy is at the core of how we build and operate it.
      </P>

      <H2>1. Our commitment to children's privacy</H2>
      <P>
        The App is intended for toddlers, preschoolers and younger children. We
        design it to comply with applicable children's privacy laws, including the
        Children's Online Privacy Protection Act (COPPA) and the UK Age Appropriate
        Design Code. We do not knowingly collect personal information from children
        for advertising, profiling or marketing purposes.
      </P>

      <H2>2. Information we collect</H2>
      <P>
        We aim to collect as little information as possible. Depending on how the
        App is used, the following limited data may be collected and is not linked
        to a child's identity:
      </P>
      <ul className="mt-3 list-disc space-y-1.5 pl-6">
        <li>Purchase and subscription information (processed by the app stores).</li>
        <li>Device identifiers used for app functionality and diagnostics.</li>
        <li>Anonymous usage and performance data to improve stability and gameplay.</li>
        <li>Crash and diagnostic reports.</li>
      </ul>
      <P>
        We do not ask children to provide personal details such as their name,
        address, email or phone number in order to play.
      </P>

      <H2>3. How we use information</H2>
      <P>
        We use the limited information above to operate and improve the App, process
        in-app purchases and subscriptions, keep the experience safe and
        kid-friendly, fix bugs, and understand overall (aggregated) usage patterns.
        We do not use children's data for behavioral advertising.
      </P>

      <H2>4. In-app purchases &amp; subscriptions</H2>
      <P>
        The App may offer optional monthly or yearly subscriptions and in-app
        purchases. All payments are handled securely by Apple's App Store or Google
        Play — we never receive or store your payment card details. Purchases are
        intended to be made by a parent or guardian.
      </P>

      <H2>5. Third-party services</H2>
      <P>
        The App and Site may use trusted third-party providers (such as the app
        stores and analytics or crash-reporting tools) that process data on our
        behalf under strict, child-appropriate conditions. This Site also embeds a
        trailer from YouTube; when you choose to play it, YouTube may set cookies in
        accordance with its own privacy policy.
      </P>

      <H2>6. Data sharing</H2>
      <P>
        We do not sell children's personal information. We only share limited data
        with service providers who help us run the App, or where required by law.
      </P>

      <H2>7. Data retention &amp; security</H2>
      <P>
        We keep data only as long as needed for the purposes described here and apply
        reasonable technical and organizational measures to protect it against
        unauthorized access, loss or misuse.
      </P>

      <H2>8. Parents' rights &amp; choices</H2>
      <P>
        Parents and guardians can review, request deletion of, or refuse further
        collection of their child's information by contacting us at{" "}
        <a className="font-semibold text-dora-pink" href={`mailto:${company.email}`}>
          {company.email}
        </a>
        . You can also manage subscriptions and limit ad tracking through your
        device's settings and your app store account.
      </P>

      <H2>9. Changes to this policy</H2>
      <P>
        We may update this Privacy Policy from time to time. When we do, we will
        revise the "Last updated" date above and, where appropriate, provide
        additional notice.
      </P>

      <H2>10. Contact us</H2>
      <P>
        If you have any questions about this Privacy Policy or our data practices,
        please contact:
      </P>
      <div className="mt-3 rounded-2xl bg-dora-cream p-5 text-sm">
        <p className="font-bold text-dora-purple-deep">{company.name}</p>
        <p>Company No. {company.number}</p>
        <p>{company.address}</p>
        <p className="mt-2">
          Email:{" "}
          <a className="font-semibold text-dora-pink" href={`mailto:${company.email}`}>
            {company.email}
          </a>
        </p>
        <p>
          Phone:{" "}
          <a className="font-semibold text-dora-pink" href={`tel:${company.phoneHref}`}>
            {company.phone}
          </a>
        </p>
      </div>
    </LegalLayout>
  );
}
