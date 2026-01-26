import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { SpotlightCard } from "@/components/common/cards";

export const Stacks = () => {
  return (
    <SpotlightCard>
      <div className="flex flex-col gap-4">
        <CardHeader>
          <CardTitle>Stacks</CardTitle>
          <CardDescription>All my tools</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-6 whitespace-nowrap">
            <div>
              <h3 className="text-sm font-semibold mb-2">Languages</h3>
              <div className="flex flex-col space-y-1">
                <span className="text-xs">• JavaScript</span>
                <span className="text-xs">• TypeScript</span>
                <span className="text-xs ">
                  • Rust <span className="text-orange-400">Studying</span>
                </span>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-2">Frontend</h3>
              <div className="flex flex-col space-y-1">
                <span className="text-xs">• React</span>
                <span className="text-xs">• Next.js</span>
                <span className="text-xs">• TanStack Query</span>
                <span className="text-xs">• Zustand</span>
                <span className="text-xs">• Tailwind CSS</span>
                <span className="text-xs">• Shadcn UI</span>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-2">Backend</h3>
              <div className="flex flex-col space-y-1">
                <span className="text-xs">• Node.js</span>
                <span className="text-xs">• NestJS</span>
                <span className="text-xs">• Drizzle ORM</span>
                <span className="text-xs">• Redis</span>
                <span className="text-xs">• PostgreSQL</span>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-2">Infra</h3>
              <div className="flex flex-col space-y-1">
                <span className="text-xs">• Vercel</span>
                <span className="text-xs">• AWS (EC2, RDS)</span>
                <span className="text-xs">• Docker</span>
                <span className="text-xs">• GitActions CI/CD</span>
              </div>
            </div>
          </div>
        </CardContent>
      </div>
    </SpotlightCard>
  );
};

export default Stacks;
