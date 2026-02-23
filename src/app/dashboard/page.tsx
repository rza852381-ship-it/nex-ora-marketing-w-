export default function Dashboard() {
  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Nexora AI 🚀</h1>
      <p>منصة تسويق ذكية لتجار سلة</p>

      <div style={{ marginTop: "30px", display: "flex", gap: "15px" }}>
        <a href="/dashboard/campaigns">
          <button>إدارة الحملات</button>
        </a>

        <a href="/dashboard/seo">
          <button>تحسين محركات البحث</button>
        </a>
      </div>
    </div>
  );
}
