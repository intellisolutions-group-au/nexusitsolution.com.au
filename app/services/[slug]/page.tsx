import { services } from "@/data/services";
import ServiceDetailClient from "./ServiceDetailClient";

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default function Page() {
  return <ServiceDetailClient />;
}
