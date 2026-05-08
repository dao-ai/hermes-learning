import faq from "@/data/faq";
import FAQItem from "@/components/FAQItem";

export default function FAQPage() {
  return (
    <div className="max-w-3xl mx-auto px-5 pt-10 pb-20">
      <h1 className="text-2xl font-bold mb-1">❓ 常见问题</h1>
      <p className="text-muted text-sm mb-8">7 个高频问题及解决方案</p>

      {faq.map((item, i) => (
        <FAQItem key={i} question={item.question} answer={item.answer} index={i} />
      ))}
    </div>
  );
}
