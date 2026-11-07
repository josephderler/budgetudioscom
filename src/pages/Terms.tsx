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

export default function Terms() {
  return (
    <LegalLayout title="Terms of Use" updated="November 7, 2026">
      <P>
        Welcome! These Terms of Use ("Terms") govern your use of the mobile
        application <strong>{site.appName}</strong> (the "App") and this
        promotional website (the "Site"), both provided by {company.name} ("we",
        "us" or "our"). By downloading, accessing or using the App or Site, you
        agree to these Terms. The App is intended to be used by children under the
        supervision of a parent or guardian.
      </P>

      <H2>1. License to use the App</H2>
      <P>
        We grant you a limited, non-exclusive, non-transferable, revocable license
        to download and use the App for your personal, non-commercial enjoyment on
        devices you own or control, subject to these Terms and the rules of the
        applicable app store.
      </P>

      <H2>2. Parental supervision</H2>
      <P>
        The App is designed for young children. A parent or guardian is responsible
        for supervising use, managing device settings, and authorizing any in-app
        purchases or subscriptions.
      </P>

      <H2>3. In-app purchases &amp; subscriptions</H2>
      <ul className="mt-3 list-disc space-y-1.5 pl-6">
        <li>The App may offer optional monthly or yearly subscriptions.</li>
        <li>
          Subscriptions renew automatically unless auto-renew is turned off at least
          24 hours before the end of the current period.
        </li>
        <li>
          Your app store account is charged for renewal within 24 hours before the
          end of the current period.
        </li>
        <li>
          You can manage or cancel subscriptions any time in your app store account
          settings.
        </li>
      </ul>

      <H2>4. Acceptable use</H2>
      <P>
        You agree not to misuse the App or Site, including by attempting to reverse
        engineer, copy, resell, disrupt, or gain unauthorized access to any part of
        the service, or by using it in a way that violates applicable law.
      </P>

      <H2>5. Intellectual property</H2>
      <P>
        The App and Site, including all software, graphics, characters, audio and
        text, are protected by intellectual property rights. Dora and all related
        titles, logos and characters are trademarks of their respective owners and
        are used under license. You may not use these materials except as expressly
        permitted by these Terms.
      </P>

      <H2>6. Disclaimers</H2>
      <P>
        The App and Site are provided "as is" and "as available" without warranties
        of any kind, whether express or implied, to the fullest extent permitted by
        law. We do not warrant that the service will be uninterrupted or error-free.
      </P>

      <H2>7. Limitation of liability</H2>
      <P>
        To the maximum extent permitted by law, {company.name} will not be liable
        for any indirect, incidental, special or consequential damages arising out
        of or related to your use of the App or Site.
      </P>

      <H2>8. Changes to the App and these Terms</H2>
      <P>
        We may update the App, Site or these Terms from time to time. Continued use
        after changes take effect constitutes acceptance of the updated Terms. The
        "Last updated" date above reflects the latest revision.
      </P>

      <H2>9. Governing law</H2>
      <P>
        These Terms are governed by the laws of England and Wales, without regard to
        conflict-of-law principles, except where mandatory local consumer-protection
        laws apply.
      </P>

      <H2>10. Contact us</H2>
      <P>If you have any questions about these Terms, please contact:</P>
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
