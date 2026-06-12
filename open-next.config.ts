// OpenNext Cloudflare adapter configuration
// Docs: https://opennext.js.org/cloudflare
import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default defineCloudflareConfig({
  // Defaults are sufficient for this static-heavy docs site.
  // Add incremental cache / image optimization here later if needed.
});
