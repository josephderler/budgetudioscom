import LegalLayout, { type Section } from "@/components/LegalLayout";
import { LegalSection, P, Bullets, ContactCard } from "@/components/legal-ui";
import { Scales } from "@phosphor-icons/react";
import { company, site } from "@/data/site";
import { useI18n } from "@/i18n/LanguageContext";

const sections: Section[] = [
  { id: "license", title: "License to use" },
  { id: "supervision", title: "Parental supervision" },
  { id: "purchases", title: "Purchases" },
  { id: "acceptable", title: "Acceptable use" },
  { id: "ip", title: "Intellectual property" },
  { id: "disclaimers", title: "Disclaimers" },
  { id: "liability", title: "Liability" },
  { id: "changes", title: "Changes" },
  { id: "law", title: "Governing law" },
  { id: "contact", title: "Contact us" },
];

export default function Terms() {
  const { t } = useI18n();
  return (
    <LegalLayout
      eyebrow={t("legal.eyebrow")}
      title={t("terms.title")}
      intro={t("terms.intro")}
      updated="November 7, 2026"
      Icon={Scales}
      accent="from-dora-pink via-dora-magenta to-dora-purple"
      sections={sections}
    >
      <P>
        Welcome! These Terms of Use ("Terms") govern your use of the mobile application{" "}
        <strong>{site.appName}</strong> (the "App") and this promotional website (the
        "Site"), both provided by {company.name} ("we", "us" or "our"). By downloading,
        accessing or using the App or Site, you agree to these Terms.
      </P>

      <div className="mt-8 space-y-8">
        <LegalSection id="license" index={1} title="License to use the App">
          <P>
            We grant you a limited, non-exclusive, non-transferable, revocable license to
            download and use the App for your personal, non-commercial enjoyment on devices
            you own or control, subject to these Terms and the rules of the applicable app
            store.
          </P>
        </LegalSection>

        <LegalSection id="supervision" index={2} title="Parental supervision">
          <P>
            The App is designed for young children. A parent or guardian is responsible for
            supervising use, managing device settings, and authorizing any in-app purchases
            or subscriptions.
          </P>
        </LegalSection>

        <LegalSection id="purchases" index={3} title="In-app purchases & subscriptions">
          <Bullets
            items={[
              "The App may offer optional monthly or yearly subscriptions.",
              "Subscriptions renew automatically unless auto-renew is turned off at least 24 hours before the end of the current period.",
              "Your app store account is charged for renewal within 24 hours before the end of the current period.",
              "You can manage or cancel subscriptions any time in your app store account settings.",
            ]}
          />
        </LegalSection>

        <LegalSection id="acceptable" index={4} title="Acceptable use">
          <P>
            You agree not to misuse the App or Site, including by attempting to reverse
            engineer, copy, resell, disrupt, or gain unauthorized access to any part of the
            service, or by using it in a way that violates applicable law.
          </P>
        </LegalSection>

        <LegalSection id="ip" index={5} title="Intellectual property">
          <P>
            The App and Site, including all software, graphics, characters, audio and text,
            are protected by intellectual property rights. Dora and all related titles,
            logos and characters are trademarks of their respective owners and are used
            under license. You may not use these materials except as expressly permitted by
            these Terms.
          </P>
        </LegalSection>

        <LegalSection id="disclaimers" index={6} title="Disclaimers">
          <P>
            The App and Site are provided "as is" and "as available" without warranties of
            any kind, whether express or implied, to the fullest extent permitted by law. We
            do not warrant that the service will be uninterrupted or error-free.
          </P>
        </LegalSection>

        <LegalSection id="liability" index={7} title="Limitation of liability">
          <P>
            To the maximum extent permitted by law, {company.name} will not be liable for
            any indirect, incidental, special or consequential damages arising out of or
            related to your use of the App or Site.
          </P>
        </LegalSection>

        <LegalSection id="changes" index={8} title="Changes to the App and these Terms">
          <P>
            We may update the App, Site or these Terms from time to time. Continued use
            after changes take effect constitutes acceptance of the updated Terms. The "Last
            updated" date above reflects the latest revision.
          </P>
        </LegalSection>

        <LegalSection id="law" index={9} title="Governing law">
          <P>
            These Terms are governed by the laws of England and Wales, without regard to
            conflict-of-law principles, except where mandatory local consumer-protection
            laws apply.
          </P>
        </LegalSection>

        <LegalSection id="contact" index={10} title="Contact us">
          <P>If you have any questions about these Terms, please contact:</P>
          <ContactCard />
        </LegalSection>
      </div>
    </LegalLayout>
  );
}
