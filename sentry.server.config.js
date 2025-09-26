import * as Sentry from "@sentry/astro";

Sentry.init({
  dsn: "https://47ff5c4aaca2d1c2c4fc60fe4e0cc8e2@o4510083214802945.ingest.de.sentry.io/4510083218800720",
  // Adds request headers and IP for users, for more info visit:
  // https://docs.sentry.io/platforms/javascript/guides/astro/configuration/options/#sendDefaultPii
  sendDefaultPii: true,
});