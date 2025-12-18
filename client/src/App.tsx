import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import Home from "@/pages/home";
import Countdown from "@/pages/countdown";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/countdown" component={Countdown} />
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  // Check if we should show countdown (only on first load)
  const shouldShowCountdown = !sessionStorage.getItem("countdownShown");
  
  if (shouldShowCountdown) {
    sessionStorage.setItem("countdownShown", "true");
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      {shouldShowCountdown ? <Countdown /> : <Router />}
    </QueryClientProvider>
  );
}

export default App;