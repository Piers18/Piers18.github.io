export interface Experience {
  company: string;
  role: string;
  period: string;
  tech: string;
  description: string;
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    company: "PachaTech",
    role: "Founder & Backend Lead",
    period: "Apr 2024 – Present",
    tech: "Java / Spring Boot / Kafka / Azure / Docker / Kubernetes",
    description:
      "Software factory focused on digital solutions for entrepreneurs and SMBs. Technical leadership in architecture and cloud operations.",
    highlights: [
      "Microservices architecture with Apache Kafka for asynchronous inter-service communication",
      "Reactive programming with Spring WebFlux for high-concurrency flows",
      "DevOps pipeline: Docker, Kubernetes, Azure VM and CI/CD with GitHub Actions",
      "Observability with Grafana + Prometheus for real-time monitoring and alerting",
    ],
  },
  {
    company: "Fractal",
    role: "Software Engineer",
    period: "Mar 2026 – Jun 2026",
    tech: "React / TypeScript / C# / .NET / SQL Server",
    description:
      "Collaborated with the .NET backend team designing API REST contracts and refactoring complex React components.",
    highlights: [
      "Designed API REST contracts under API First principles: layer separation, input validation and centralized error handling",
      "Refactored React components applying composition patterns and improving maintainability under peer review",
      "Executed queries and maintained Stored Procedures in SQL Server with end-to-end data flow visibility",
    ],
  },
  {
    company: "Conchucos Peru S.A.C",
    role: "Full Stack Developer",
    period: "Jan 2025 – Jan 2026",
    tech: "Java / Spring Boot / DDD / Hexagonal Arch / Azure / Docker",
    description:
      "Inventory management platform built with Domain-Driven Design and hexagonal architecture.",
    highlights: [
      "Designed and implemented using DDD: Aggregates, Entities and Value Objects with ubiquitous language",
      "Structured the backend as a modular monolith with hexagonal architecture (Ports & Adapters)",
      "Implemented end-to-end security with Spring Security + JWT and DevOps pipeline with Docker + Azure",
    ],
  },
  {
    company: "Softtek",
    role: "Junior Software Developer · Trainee",
    period: "Jul 2024 – Oct 2024",
    tech: "Flutter / Dart",
    description:
      "First experience in a multinational corporate environment with Flutter/Dart.",
    highlights: [
      "Developed tasks with Flutter/Dart and worked with Git workflows (branching, PRs, code review)",
      "Documented the complete publishing process for App Store and Google Play Store",
    ],
  },
];
