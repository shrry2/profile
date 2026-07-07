import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// ISR / On-demand Revalidation を使わない静的中心のサイトのため、
// incrementalCache などの追加設定は不要。デフォルト構成で運用する。
export default defineCloudflareConfig();
