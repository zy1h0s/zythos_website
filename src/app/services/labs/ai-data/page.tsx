import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Link from "next/link";

export const metadata = {
  title: "AI & Data Engineering Services - ML Pipelines, LLM Integration | Zytheq",
  description:
    "ML pipeline development, LLM integration, RAG systems, data platform engineering, and AI-powered product features. AI development baked into your product from day one.",
  keywords: [
    "AI engineering",
    "machine learning development",
    "LLM integration",
    "data engineering",
    "RAG systems",
    "ML pipelines",
    "AI consulting",
    "data platform engineering",
  ],
};

const aiServices = [
  {
    title: "LLM Integration & RAG Systems",
    desc: "Integrate large language models into your product with retrieval-augmented generation, prompt engineering, fine-tuning, and guardrails. Build AI features that are accurate, safe, and cost-effective.",
    stack: ["OpenAI GPT-4", "Anthropic Claude", "LangChain", "LlamaIndex", "Pinecone", "Weaviate", "ChromaDB", "pgvector"],
    useCases: ["AI-powered search", "Document Q&A", "Chatbots", "Content generation", "Code assistance"],
  },
  {
    title: "ML Pipeline Development",
    desc: "End-to-end machine learning pipelines: data ingestion, feature engineering, model training, evaluation, and deployment. Production-grade MLOps with model versioning and automated retraining.",
    stack: ["PyTorch", "TensorFlow", "scikit-learn", "MLflow", "Weights & Biases", "SageMaker", "Vertex AI", "Kubeflow"],
    useCases: ["Recommendation engines", "Fraud detection", "Demand forecasting", "Churn prediction", "Anomaly detection"],
  },
  {
    title: "Computer Vision & NLP",
    desc: "Image recognition, object detection, OCR, sentiment analysis, named entity recognition, and text classification. Custom models trained on your domain-specific data.",
    stack: ["PyTorch", "Hugging Face Transformers", "OpenCV", "YOLO", "spaCy", "Tesseract", "AWS Rekognition"],
    useCases: ["Document processing", "Quality inspection", "Content moderation", "Medical imaging", "Visual search"],
  },
  {
    title: "Data Platform Engineering",
    desc: "Modern data platform architecture: data lakes, lakehouses, real-time streaming, and batch processing. Build the foundation for analytics, ML, and AI-powered features.",
    stack: ["Apache Spark", "Apache Kafka", "Apache Airflow", "dbt", "Snowflake", "Databricks", "BigQuery", "Delta Lake"],
    useCases: ["Real-time analytics", "Customer 360", "Data warehouse modernization", "Event-driven architecture"],
  },
  {
    title: "ETL & Data Integration",
    desc: "Extract, transform, and load pipelines that connect your data sources, clean and standardize data, and deliver it to downstream consumers. Real-time and batch processing.",
    stack: ["Airflow", "dbt", "Fivetran", "Airbyte", "Apache Flink", "Debezium", "AWS Glue", "Meltano"],
    useCases: ["Data migration", "API integration", "CDC pipelines", "Data quality monitoring", "Schema evolution"],
  },
  {
    title: "Analytics & BI Development",
    desc: "Custom dashboards, embedded analytics, self-service BI platforms, and real-time reporting. Transform raw data into actionable business intelligence.",
    stack: ["Metabase", "Apache Superset", "Looker", "Tableau", "Grafana", "Cube.js", "PostHog", "Amplitude"],
    useCases: ["Executive dashboards", "Product analytics", "Operational reporting", "Customer analytics", "Embedded analytics"],
  },
];

const process = [
  { step: "01", title: "Data & AI Assessment", desc: "We audit your data infrastructure, ML readiness, and AI opportunities. Deliverable: a prioritized roadmap of AI/data initiatives with ROI estimates.", duration: "1-2 weeks" },
  { step: "02", title: "Proof of Concept", desc: "Validate the approach with a focused POC on real data. We build a working prototype that demonstrates feasibility and expected performance.", duration: "2-4 weeks" },
  { step: "03", title: "Production Development", desc: "Build production-grade pipelines, models, and integrations. Full MLOps setup with model versioning, automated testing, and deployment automation.", duration: "6-16 weeks" },
  { step: "04", title: "Monitoring & Iteration", desc: "Post-deployment monitoring for model drift, data quality, and performance degradation. Automated retraining triggers and continuous improvement cycles.", duration: "Ongoing" },
];

const stats = [
  { value: "40+", label: "AI/ML models in production" },
  { value: "15PB", label: "Data processed monthly" },
  { value: "99.7%", label: "Pipeline uptime SLA" },
  { value: "3x", label: "Average ROI on AI investment" },
];

export default function AIDataPage() {
  return (
    <>
      <Navigation />
      <main>
        <PageHero
          tag="AI & Data Engineering Services"
          title="AI-Powered Software Development From the"
          accent="Ground Up."
          description="ML pipelines, LLM integration, RAG systems, and data platform engineering. We don't bolt AI onto products - we architect it into the core. Real AI engineering, not demos."
        />

        {/* Stats */}
        <section className="py-16 bg-bg-secondary">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((s) => (
                <div key={s.label} className="text-center p-6 rounded-2xl border border-border-subtle bg-bg-primary/30">
                  <div className="text-3xl font-display font-bold text-accent">{s.value}</div>
                  <div className="mt-2 text-xs text-text-secondary">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display font-bold text-3xl mb-4">AI & Data Services</h2>
            <p className="text-text-secondary mb-12 max-w-2xl">From LLM integration to data lake architecture - every service delivered by senior engineers with production ML experience.</p>
            <div className="space-y-6">
              {aiServices.map((svc) => (
                <div key={svc.title} className="p-8 rounded-2xl border border-border-subtle bg-bg-secondary/30 hover:border-accent/20 transition-all duration-300">
                  <h3 className="font-display font-bold text-xl mb-3">{svc.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-5">{svc.desc}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">Technology Stack</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {svc.stack.map((tech) => (
                          <span key={tech} className="px-2.5 py-1 text-xs rounded-lg border border-border-subtle bg-bg-primary/50 text-text-muted">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">Use Cases</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {svc.useCases.map((uc) => (
                          <span key={uc} className="px-2.5 py-1 text-xs rounded-lg border border-accent/20 bg-accent/5 text-text-secondary">
                            {uc}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-bg-secondary">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="font-display font-bold text-3xl mb-12">Our AI Development Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((p) => (
                <div key={p.step} className="p-6 rounded-2xl border border-border-subtle bg-bg-primary/30 hover:border-accent/20 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center font-display font-bold text-accent mb-4">
                    {p.step}
                  </div>
                  <h3 className="font-display font-bold text-lg mb-1">{p.title}</h3>
                  <span className="text-xs font-mono text-accent">{p.duration}</span>
                  <p className="mt-3 text-sm text-text-secondary leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-display font-bold text-3xl mb-4">Ready to Build AI Into Your Product?</h2>
            <p className="text-text-secondary mb-8">Start with a free AI readiness assessment. We&apos;ll identify the highest-ROI AI opportunities in your product.</p>
            <Link
              href="/contact"
              className="inline-flex px-8 py-4 bg-accent text-bg-primary font-semibold rounded-full hover:bg-accent-hover transition-colors duration-300 hover:shadow-[0_0_30px_rgba(255,184,0,0.3)]"
            >
              Get a Free AI Assessment
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
