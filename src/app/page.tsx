import { Link } from "@nextui-org/link";

import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1>Make&nbsp;</h1>
        <h1>beautiful&nbsp;</h1>
        <br />
        <h1>websites regardless of your design experience.</h1>
        <h2>Beautiful, fast and modern React UI library.</h2>
      </div>

      <div className="flex gap-3">
        <Link isExternal>Documentation</Link>
        <Link isExternal>GitHub</Link>
      </div>

      <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <span>
            Get started by editing <Code color="primary">app/page.tsx</Code>
          </span>
        </Snippet>
      </div>
    </section>
  );
}
