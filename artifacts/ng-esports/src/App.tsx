import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { lazy, Suspense } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LoadingScreen } from "@/components/LoadingScreen";

// ── Page Imports ───────────────────────────────────────────────────────────────
// EDIT: To add a new page, import it here, then add a <Route> inside <Switch>.
// ──────────────────────────────────────────────────────────────────────────────
import Home from "@/pages/Home";
import About from "@/pages/About";
import Achievements from "@/pages/Achievements";
import Talent from "@/pages/Talent";
import Careers from "@/pages/Careers";
import News from "@/pages/News";
import Links from "@/pages/Links";
import Partners from "@/pages/Partners";
import Store from "@/pages/Store";
import StoreProduct from "@/pages/StoreProduct";
import Nimbus from "@/pages/Nimbus";
import NotFound from "@/pages/not-found";

// Team pages are lazy-loaded so they don't bloat the initial bundle
const TeamPage = lazy(() => import("@/pages/teams/TeamPage"));
const ManagementPage = lazy(() => import("@/pages/teams/ManagementPage"));

// Shared spinner shown while a lazy-loaded page is loading
const PageSpinner = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <div className="w-8 h-8 rounded-full border-4 border-primary border-t-transparent animate-spin" />
  </div>
);

const queryClient = new QueryClient();

// ── Router ─────────────────────────────────────────────────────────────────────
// EDIT: Add a new <Route path="/your-path" component={YourPage} /> here.
//       Routes are matched top-to-bottom; the final <Route> is the 404 fallback.
// ──────────────────────────────────────────────────────────────────────────────
function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/achievements" component={Achievements} />
          <Route path="/talent" component={Talent} />
          <Route path="/careers" component={Careers} />
          <Route path="/news" component={News} />
          <Route path="/links" component={Links} />
          <Route path="/partners" component={Partners} />
          <Route path="/store/:slug" component={StoreProduct} />
          <Route path="/store" component={Store} />
          {/* Nimbus — fan hub / upcoming feature. Not in the main nav yet. */}
          <Route path="/nimbus" component={Nimbus} />
          <Route path="/teams/management">
            {() => (
              <Suspense fallback={<PageSpinner />}>
                <ManagementPage />
              </Suspense>
            )}
          </Route>
          <Route path="/teams/:id">
            {() => (
              <Suspense fallback={<PageSpinner />}>
                <TeamPage />
              </Suspense>
            )}
          </Route>
          {/* Catch-all 404 — must be last */}
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LoadingScreen />
        {/* WouterRouter base is set from the VITE_BASE_PATH env var for GitHub Pages compatibility */}
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
