import { AnimateIn } from "@/components/ui/animate-in";
import { Section } from "@/components/ui/section";
import { certifications, education } from "@/data/credentials";

export function CredentialsSection() {
  return (
    <Section className="pt-0 md:pt-0">
      <AnimateIn>
        <h2 className="text-2xl font-medium text-text-primary">
          Education & Credentials
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-text-secondary">
          A concise view of the academic and practical training behind the work.
        </p>
      </AnimateIn>

      <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <AnimateIn delay={0.1}>
          <div className="rounded-lg border border-border bg-surface p-6 md:p-8">
            <h3 className="text-sm font-medium uppercase tracking-[0.16em] text-text-secondary">
              Education
            </h3>
            <div className="mt-6 space-y-5">
              {education.map((item) => (
                <div key={item.institution}>
                  <p className="text-base font-medium text-text-primary">
                    {item.program}
                  </p>
                  <p className="mt-1 text-sm text-text-secondary">
                    {item.institution}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.15}>
          <div className="rounded-lg border border-border bg-surface p-6 md:p-8">
            <h3 className="text-sm font-medium uppercase tracking-[0.16em] text-text-secondary">
              Certifications
            </h3>
            <div className="mt-6 space-y-5">
              {certifications.map((item) => (
                <div key={item.name}>
                  <p className="text-base font-medium text-text-primary">
                    {item.name}
                  </p>
                  <p className="mt-1 text-sm text-text-secondary">
                    {item.issuer}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </AnimateIn>
      </div>
    </Section>
  );
}
