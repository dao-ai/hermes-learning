import stages from "@/data/stages";
import ProgressBar from "@/components/ProgressBar";
import StageCard from "@/components/StageCard";

export default function StagesPage() {
  return (
    <>
      <section className="max-w-3xl mx-auto px-5 pt-10 pb-4">
        <h1 className="text-2xl font-bold">📚 学习阶段</h1>
        <p className="text-muted text-sm mt-1">6 个阶段，从安装到开发者级别</p>
      </section>
      <ProgressBar />
      <div className="max-w-3xl mx-auto px-5 pb-20">
        {stages.map((stage) => (
          <StageCard key={stage.id} stage={stage} defaultOpen={stage.id === 1} />
        ))}
      </div>
    </>
  );
}
