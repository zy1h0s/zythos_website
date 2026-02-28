import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Link from "next/link";

export const metadata = {
  title: "Cloud Infrastructure & DevOps Engineering Services | Zytheq",
  description:
    "AWS, GCP, Azure infrastructure as code, CI/CD pipelines, Kubernetes, Docker, and monitoring. Enterprise-grade cloud architecture that scales with your product.",
  keywords: [
    "cloud infrastructure",
    "DevOps engineering",
    "AWS consulting",
    "Kubernetes",
    "CI/CD pipelines",
    "infrastructure as code",
    "cloud migration",
    "site reliability engineering",
  ],
};

const platforms = [
  {
    name: "Amazon Web Services (AWS)",
    services: [
      { name: "Compute", tools: "EC2, ECS, EKS, Lambda, Fargate, App Runner" },
      { name: "Storage", tools: "S3, EBS, EFS, Glacier, CloudFront CDN" },
      { name: "Database", tools: "RDS (PostgreSQL, MySQL), DynamoDB, ElastiCache, Aurora" },
      { name: "Networking", tools: "VPC, ALB/NLB, Route 53, CloudFront, WAF, Transit Gateway" },
      { name: "Messaging", tools: "SQS, SNS, EventBridge, Kinesis, MSK (Kafka)" },
      { name: "Security", tools: "IAM, KMS, Secrets Manager, GuardDuty, Security Hub" },
    ],
  },
  {
    name: "Google Cloud Platform (GCP)",
    services: [
      { name: "Compute", tools: "GKE, Cloud Run, Compute Engine, Cloud Functions" },
      { name: "Data", tools: "BigQuery, Cloud SQL, Firestore, Bigtable, Pub/Sub" },
      { name: "AI/ML", tools: "Vertex AI, AutoML, Cloud Vision, Natural Language API" },
      { name: "Networking", tools: "Cloud CDN, Cloud Armor, Cloud DNS, Load Balancing" },
    ],
  },
  {
    name: "Microsoft Azure",
    services: [
      { name: "Compute", tools: "AKS, App Service, Azure Functions, Container Instances" },
      { name: "Data", tools: "Azure SQL, Cosmos DB, Azure Cache for Redis, Blob Storage" },
      { name: "DevOps", tools: "Azure DevOps, Azure Pipelines, Azure Repos" },
      { name: "Identity", tools: "Azure AD, B2C, Key Vault, Managed Identity" },
    ],
  },
];

const devopsServices = [
  {
    title: "Infrastructure as Code (IaC)",
    desc: "Version-controlled, reproducible infrastructure using Terraform, Pulumi, or AWS CDK. No more clicking through consoles - every resource is defined in code, reviewed in PRs, and deployed through CI/CD.",
    tools: ["Terraform", "Pulumi", "AWS CDK", "CloudFormation", "Ansible"],
  },
  {
    title: "CI/CD Pipeline Engineering",
    desc: "Automated build, test, and deployment pipelines that take code from commit to production in minutes. Blue-green deployments, canary releases, and automatic rollbacks.",
    tools: ["GitHub Actions", "GitLab CI", "CircleCI", "ArgoCD", "Flux", "Jenkins"],
  },
  {
    title: "Container Orchestration",
    desc: "Docker containerization and Kubernetes orchestration for microservices architectures. Service mesh, autoscaling, and self-healing infrastructure.",
    tools: ["Docker", "Kubernetes", "Helm", "Istio", "Linkerd", "Kustomize"],
  },
  {
    title: "Monitoring & Observability",
    desc: "Full-stack observability with metrics, logs, and traces. Real-time dashboards, intelligent alerting, and incident response automation.",
    tools: ["Datadog", "Grafana", "Prometheus", "OpenTelemetry", "PagerDuty", "Sentry"],
  },
  {
    title: "Security & Compliance",
    desc: "DevSecOps practices baked into every pipeline. Vulnerability scanning, secrets management, compliance automation (SOC2, HIPAA, PCI-DSS), and zero-trust networking.",
    tools: ["Snyk", "Trivy", "HashiCorp Vault", "AWS Security Hub", "Checkov", "OPA"],
  },
  {
    title: "Cloud Cost Optimization",
    desc: "Right-sizing, reserved instance planning, spot instance strategies, and resource lifecycle management. Average client savings: 30-45% on monthly cloud spend.",
    tools: ["AWS Cost Explorer", "Infracost", "Kubecost", "CloudHealth", "Spot.io"],
  },
];

const engagements = [
  {
    title: "Cloud Architecture Review",
    timeline: "1-2 weeks",
    desc: "A comprehensive audit of your current infrastructure with a prioritized roadmap for improvements. Security, cost, performance, and reliability assessments.",
    price: "From $8,000",
  },
  {
    title: "Cloud Migration",
    timeline: "4-16 weeks",
    desc: "Migrate from on-premises or legacy cloud to modern infrastructure. Assessment, planning, execution, and validation with zero-downtime migration strategies.",
    price: "From $25,000",
  },
  {
    title: "DevOps Transformation",
    timeline: "8-16 weeks",
    desc: "End-to-end DevOps implementation: IaC, CI/CD, monitoring, incident response, and team training. Transform your engineering team's deployment velocity.",
    price: "From $40,000",
  },
  {
    title: "Managed DevOps",
    timeline: "Ongoing",
    desc: "Dedicated DevOps/SRE team managing your infrastructure, deployments, monitoring, and incident response. 24/7 coverage available.",
    price: "From $12,000/mo",
  },
];

export default function CloudDevOpsPage() {
  return (
    <>
      <Navigation />
      <main>
        <PageHero
          tag="Cloud Infrastructure & DevOps Engineering"
          title="Infrastructure That Scales When Your"
          accent="Product Does."
          description="AWS, GCP, Azure - infrastructure as code, CI/CD pipelines, Kubernetes orchestration, and full-stack observability. We build the foundation your software runs on."
        />

        {/* Cloud Platforms */}
        <section className="py-20 bg-bg-secondary">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display font-bold text-3xl mb-4">Cloud Platform Expertise</h2>
            <p className="text-text-secondary mb-12 max-w-2xl">Deep expertise across all three major cloud providers. We recommend the right platform for your use case - no vendor lock-in bias.</p>
            <div className="space-y-8">
              {platforms.map((platform) => (
                <div key={platform.name} className="p-6 rounded-2xl border border-border-subtle bg-bg-primary/30">
                  <h3 className="font-display font-bold text-xl text-accent mb-4">{platform.name}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {platform.services.map((svc) => (
                      <div key={svc.name} className="p-3 rounded-xl border border-border-subtle bg-bg-secondary/50">
                        <h4 className="font-display font-semibold text-sm mb-1">{svc.name}</h4>
                        <p className="text-xs text-text-muted">{svc.tools}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DevOps Services */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display font-bold text-3xl mb-4">DevOps Engineering Services</h2>
            <p className="text-text-secondary mb-12 max-w-2xl">From infrastructure provisioning to incident response - every layer of your operations, automated and observable.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {devopsServices.map((svc) => (
                <div key={svc.title} className="p-8 rounded-2xl border border-border-subtle bg-bg-secondary/50 hover:border-accent/20 transition-all duration-300">
                  <h3 className="font-display font-bold text-xl mb-3">{svc.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-4">{svc.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {svc.tools.map((tool) => (
                      <span key={tool} className="px-2.5 py-1 text-xs rounded-lg border border-border-subtle bg-bg-primary/50 text-text-muted">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Engagement Models */}
        <section className="py-20 bg-bg-secondary">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="font-display font-bold text-3xl mb-12">Engagement Models</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {engagements.map((eng) => (
                <div key={eng.title} className="p-8 rounded-2xl border border-border-subtle bg-bg-primary/30 hover:border-accent/20 transition-all duration-300">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-display font-bold text-xl">{eng.title}</h3>
                    <span className="text-xs font-mono text-accent bg-accent/10 px-3 py-1 rounded-full">{eng.timeline}</span>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed mb-4">{eng.desc}</p>
                  <span className="text-accent font-display font-bold">{eng.price}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-display font-bold text-3xl mb-4">Need Cloud & DevOps Engineering?</h2>
            <p className="text-text-secondary mb-8">Start with a free infrastructure review. We&apos;ll identify quick wins and long-term improvements.</p>
            <Link
              href="/contact"
              className="inline-flex px-8 py-4 bg-accent text-bg-primary font-semibold rounded-full hover:bg-accent-hover transition-colors duration-300 hover:shadow-[0_0_30px_rgba(255,184,0,0.3)]"
            >
              Get a Free Infrastructure Review
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
