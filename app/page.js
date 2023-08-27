import Editor from "@/components/Editor";
import EsBuildLoader from "@/components/block/EsbuildLoader";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="max-w-5xl w-full">
        <EsBuildLoader>
          <Editor />
        </EsBuildLoader>
      </div>
    </main>
  );
}
