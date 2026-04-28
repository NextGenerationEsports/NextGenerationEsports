import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { lazy, Suspense, useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LoadingScreen } from "@/components/LoadingScreen";

import Home from "@/pages/Home";
import About from "@/pages/About";
import Achievements from "@/pages/Achievements";
import Talent from "@/pages/Talent";
import Careers from "@/pages/Careers";
import News from "@/pages/News";
import Nimbus from "@/pages/Nimbus";
import Links from "@/pages/Links";
import Partners from "@/pages/Partners";
import Store from "@/pages/Store";
import NotFound from "@/pages/not-found";

// Lazy load team pages
const TeamPage = lazy(() => import("@/pages/teams/TeamPage"));

const queryClient = new QueryClient();

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
          <Route path="/nimbus" component={Nimbus} />
          <Route path="/links" component={Links} />
          <Route path="/partners" component={Partners} />
          <Route path="/store" component={Store} />
          <Route path="/teams/:id">
            {() => (
              <Suspense fallback={<div className="min-h-screen bg-background flex items-center justify-center"><div className="w-8 h-8 rounded-full border-4 border-primary border-t-transparent animate-spin" /></div>}>
                <TeamPage />
              </Suspense>
            )}
          </Route>
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
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
