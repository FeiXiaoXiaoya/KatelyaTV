export async function GET(request, { env }) {
  try {
    if (!env?.DB) throw new Error("D1数据库未绑定");
    const result = await env.DB.prepare("SELECT name FROM sqlite_master WHERE type='table'").all();
    return Response.json({ success: true, tables: result.results });
  } catch (err) {
    return Response.json({ success: false, error: err.message }, { status: 500 });
  }
}