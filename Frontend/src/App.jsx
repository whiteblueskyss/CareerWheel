import "./App.css";
import {
  SplashScreen,
  AuthScreen,
  RoleSelectScreen,
  OnboardingScreen,
  JobFeedScreen,
  JobDetailsScreen,
  ApplyFlowScreen,
  SavedJobsScreen,
  ProfileScreen,
  RecruiterPostJobScreen,
  RecruiterManageJobsScreen,
  RecruiterApplicantsScreen,
} from "./screens";

const screenList = [
  SplashScreen,
  AuthScreen,
  RoleSelectScreen,
  OnboardingScreen,
  JobFeedScreen,
  JobDetailsScreen,
  ApplyFlowScreen,
  SavedJobsScreen,
  ProfileScreen,
  RecruiterPostJobScreen,
  RecruiterManageJobsScreen,
  RecruiterApplicantsScreen,
];

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <div>
          <p className="app-kicker">CareerWheel UI Kit</p>
          <h1>Focused job discovery and hiring</h1>
          <p className="app-subtitle">
            Minimal, fast, mobile-first screens with a clean design system.
          </p>
        </div>
        <div className="app-meta">
          <span>Mobile-first</span>
          <span>Card-based</span>
          <span>API-ready</span>
        </div>
      </header>

      <main className="screen-grid">
        {screenList.map((Screen, index) => (
          <Screen key={index} />
        ))}
      </main>
    </div>
  );
}

export default App;
