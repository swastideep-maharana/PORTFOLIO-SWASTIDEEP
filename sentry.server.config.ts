// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://b3ae51bf9ecd342cecd9ce75184113c2@o4508590127906816.ingest.us.sentry.io/4508593871519744",

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
