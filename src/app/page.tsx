"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: "40px", textAlign: "center" }}>
      <h1>Nexora AI 🚀</h1>
      <p>منصة تسويق ذكية لتجار سلة</p>

      <div style={{ marginTop: "30px" }}>
        <Link href="/login">
          <button style={{ padding: "10px 20px", marginRight: "10px" }}>
            تسجيل الدخول
          </button>
        </Link>

        <Link href="/dashboard">
          <button style={{ padding: "10px 20px" }}>
            لوحة التحكم
          </button>
        </Link>
      </div>
    </main>
  );
}
