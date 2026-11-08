import LegalLayout, { type Section } from "@/components/LegalLayout";
import { LegalSection, P, Bullets, ContactCard } from "@/components/legal-ui";
import { ShieldCheck } from "@phosphor-icons/react";
import { company, site } from "@/data/site";
import { useI18n } from "@/i18n/LanguageContext";

const sections: Section[] = [
  { id: "children", title: "Children's privacy" },
  { id: "collect", title: "Information we collect" },
  { id: "use", title: "How we use it" },
  { id: "purchases", title: "Purchases" },
  { id: "third-party", title: "Third-party services" },
  { id: "sharing", title: "Data sharing" },
  { id: "security", title: "Retention & security" },
  { id: "rights", title: "Parents' rights" },
  { id: "changes", title: "Changes" },
  { id: "contact", title: "Contact us" },
];

export default function Privacy() {
  const { t } = useI18n();
  return (
    <LegalLayout
      eyebrow={t("legal.eyebrow")}
      title={t("privacy.title")}
      intro={t("privacy.intro")}
      updated="November 7, 2026"
      Icon={ShieldCheck}
      accent="from-dora-violet via-dora-purple to-dora-blue"
      sections={sections}
    >
      <P>
        This Privacy Policy explains how {company.name} ("we", "us" or "our") handles
        information in connection with the mobile application{" "}
        <strong>{site.appName}</strong> (the "App") and this promotional website (the
        "Site").
      </P>

      <div className="mt-8 space-y-8">
        <LegalSection id="children" index={1} title="Our commitment to children's privacy">
          <P>
            The App is intended for toddlers, preschoolers and younger children. We design
            it to comply with applicable children's privacy laws, including the Children's
            Online Privacy Protection Act (COPPA) and the UK Age Appropriate Design Code.
            We do not knowingly collect personal information from children for advertising,
            profiling or marketing purposes.
          </P>
        </LegalSection>

        <LegalSection id="collect" index={2} title="Information we collect">
          <P>
            We aim to collect as little information as possible. Depending on how the App is
            used, the following limited data may be collected and is not linked to a child's
            identity:
          </P>
          <Bullets
            items={[
              "Purchase and subscription information (processed by the app stores).",
              "Device identifiers used for app functionality and diagnostics.",
              "Anonymous usage and performance data to improve stability and gameplay.",
              "Crash and diagnostic reports.",
            ]}
          />
          <P>
            We do not ask children to provide personal details such as their name, address,
            email or phone number in order to play.
          </P>
        </LegalSection>

        <LegalSection id="use" index={3} title="How we use information">
          <P>
            We use the limited information above to operate and improve the App, process
            in-app purchases and subscriptions, keep the experience safe and kid-friendly,
            fix bugs, and understand overall (aggregated) usage patterns. We do not use
            children's data for behavioral advertising.
          </P>
        </LegalSection>

        <LegalSection id="purchases" index={4} title="In-app purchases & subscriptions">
          <P>
            The App may offer optional monthly or yearly subscriptions and in-app purchases.
            All payments are handled securely by Apple's App Store or Google Play — we never
            receive or store your payment card details. Purchases are intended to be made by
            a parent or guardian.
          </P>
        </LegalSection>

        <LegalSection id="third-party" index={5} title="Third-party services">
          <P>
            The App and Site may use trusted third-party providers (such as the app stores
            and analytics or crash-reporting tools) that process data on our behalf under
            strict, child-appropriate conditions. This Site also embeds a trailer from
            YouTube; when you choose to play it, YouTube may set cookies in accordance with
            its own privacy policy.
          </P>
        </LegalSection>

        <LegalSection id="sharing" index={6} title="Data sharing">
          <P>
            We do not sell children's personal information. We only share limited data with
            service providers who help us run the App, or where required by law.
          </P>
        </LegalSection>

        <LegalSection id="security" index={7} title="Data retention & security">
          <P>
            We keep data only as long as needed for the purposes described here and apply
            reasonable technical and organizational measures to protect it against
            unauthorized access, loss or misuse.
          </P>
        </LegalSection>

        <LegalSection id="rights" index={8} title="Parents' rights & choices">
          <P>
            Parents and guardians can review, request deletion of, or refuse further
            collection of their child's information by contacting us at{" "}
            <a className="font-semibold text-dora-pink hover:underline" href={`mailto:${company.email}`}>
              {company.email}
            </a>
            . You can also manage subscriptions and limit ad tracking through your device's
            settings and your app store account.
          </P>
        </LegalSection>

        <LegalSection id="changes" index={9} title="Changes to this policy">
          <P>
            We may update this Privacy Policy from time to time. When we do, we will revise
            the "Last updated" date above and, where appropriate, provide additional notice.
          </P>
        </LegalSection>

        <LegalSection id="contact" index={10} title="Contact us">
          <P>
            If you have any questions about this Privacy Policy or our data practices, please
            contact:
          </P>
          <ContactCard />
        </LegalSection>
      </div>
    </LegalLayout>
  );
}
