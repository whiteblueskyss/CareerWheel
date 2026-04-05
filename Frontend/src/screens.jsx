import {
  ScreenCard,
  Card,
  Button,
  Chip,
  Tag,
  Input,
  Textarea,
  Toggle,
  BottomNav,
  IconBookmark,
} from "./components/ui";
import {
  jobs,
  recruiterJobs,
  applicants,
  experienceLevels,
  jobSkills,
  jobTypes,
} from "./data/mockData";

export function SplashScreen() {
  return (
    <ScreenCard title="Splash" subtitle="Brand moment">
      <div className="splash">
        <div className="splash__logo">CareerWheel</div>
        <p className="splash__tagline">Focused hiring. Zero noise.</p>
        <Button>Get Started</Button>
      </div>
    </ScreenCard>
  );
}

export function AuthScreen() {
  return (
    <ScreenCard title="Sign in" subtitle="Simple and fast">
      <div className="stack">
        <Input label="Email" placeholder="you@email.com" type="email" />
        <Input label="Password" placeholder="Enter your password" type="password" />
        <Button>Continue</Button>
        <Button variant="ghost">Create new account</Button>
      </div>
    </ScreenCard>
  );
}

export function RoleSelectScreen() {
  return (
    <ScreenCard title="Choose your role" subtitle="Tailor your experience">
      <div className="stack">
        <Card className="role-card role-card--active">
          <h3>Job Seeker</h3>
          <p>Find roles that fit your skills in seconds.</p>
          <span className="role-card__pill">Primary</span>
        </Card>
        <Card className="role-card">
          <h3>Recruiter</h3>
          <p>Post roles and review qualified applicants.</p>
        </Card>
        <Button>Continue</Button>
      </div>
    </ScreenCard>
  );
}

export function OnboardingScreen() {
  return (
    <ScreenCard title="Quick onboarding" subtitle="Tell us what you want">
      <div className="stack">
        <div className="section">
          <p className="section__title">Experience level</p>
          <div className="chip-row">
            {experienceLevels.map((level, index) => (
              <Chip key={level} label={level} isActive={index === 1} />
            ))}
          </div>
        </div>
        <div className="section">
          <p className="section__title">Skills</p>
          <div className="chip-row">
            {jobSkills.slice(0, 6).map((skill, index) => (
              <Chip key={skill} label={skill} isActive={index < 2} />
            ))}
          </div>
        </div>
        <div className="section">
          <p className="section__title">Job preference</p>
          <div className="chip-row">
            {jobTypes.map((type, index) => (
              <Chip key={type} label={type} isActive={index === 0} />
            ))}
          </div>
        </div>
        <Button>Finish setup</Button>
      </div>
    </ScreenCard>
  );
}

export function JobFeedScreen() {
  return (
    <ScreenCard title="Job feed" subtitle="Only roles, no noise">
      <div className="stack">
        <div className="filters">
          <p className="section__title">Filters</p>
          <div className="chip-row">
            <Chip label="Experience" isActive />
            <Chip label="Job type" />
            <Chip label="Skills" />
          </div>
        </div>
        <div className="stack">
          {jobs.slice(0, 3).map((job, index) => (
            <Card key={job.id} className="job-card">
              <div className="job-card__header">
                <div>
                  <h3>{job.title}</h3>
                  <p className="muted">{job.company}</p>
                </div>
                <button className="icon-button" type="button">
                  <IconBookmark filled={index === 0} />
                </button>
              </div>
              <div className="tag-row">
                {job.tags.map((tag) => (
                  <Tag key={tag} label={tag} />
                ))}
              </div>
              <p className="job-card__desc">{job.description}</p>
              <Button variant="outline" size="sm">
                View details
              </Button>
            </Card>
          ))}
        </div>
        <div className="infinite-scroll">Loading more roles...</div>
      </div>
      <BottomNav />
    </ScreenCard>
  );
}

export function JobDetailsScreen() {
  const job = jobs[0];

  return (
    <ScreenCard title="Job details" subtitle="Everything you need">
      <div className="stack">
        <div>
          <h3>{job.title}</h3>
          <p className="muted">{job.company}</p>
        </div>
        <div className="tag-row">
          {job.tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
        <div className="section">
          <p className="section__title">Description</p>
          <p className="body-text">{job.description}</p>
        </div>
        <div className="section">
          <p className="section__title">Requirements</p>
          <ul className="list">
            {job.requirements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="section">
          <p className="section__title">Skills</p>
          <div className="chip-row">
            {job.skills.map((skill) => (
              <Chip key={skill} label={skill} isActive />
            ))}
          </div>
        </div>
      </div>
      <div className="sticky-bar">
        <Button>Apply</Button>
        <Button variant="outline">Save</Button>
      </div>
    </ScreenCard>
  );
}

export function ApplyFlowScreen() {
  return (
    <ScreenCard title="Apply" subtitle="Submit in seconds">
      <Card className="apply-card">
        <div className="stack">
          <div className="upload">
            <span className="upload__title">Upload CV</span>
            <span className="muted">PDF, DOC, or link</span>
          </div>
          <Textarea label="Message (optional)" placeholder="Short note to the recruiter" />
          <Button>Submit application</Button>
          <div className="success">
            <span className="success__title">Application sent</span>
            <span className="muted">We will keep you posted.</span>
          </div>
        </div>
      </Card>
    </ScreenCard>
  );
}

export function SavedJobsScreen() {
  return (
    <ScreenCard title="Saved jobs" subtitle="Your shortlist">
      <div className="stack">
        {jobs.slice(1, 4).map((job) => (
          <Card key={job.id} className="job-card">
            <div className="job-card__header">
              <div>
                <h3>{job.title}</h3>
                <p className="muted">{job.company}</p>
              </div>
              <button className="icon-button" type="button">
                <IconBookmark filled />
              </button>
            </div>
            <div className="tag-row">
              {job.tags.map((tag) => (
                <Tag key={tag} label={tag} />
              ))}
            </div>
            <p className="job-card__desc">{job.description}</p>
          </Card>
        ))}
      </div>
      <BottomNav />
    </ScreenCard>
  );
}

export function ProfileScreen() {
  return (
    <ScreenCard title="Profile" subtitle="Keep it updated">
      <div className="stack">
        <Card className="profile-card">
          <div>
            <h3>Sam Carter</h3>
            <p className="muted">Product Designer</p>
          </div>
          <div className="section">
            <p className="section__title">Skills</p>
            <div className="chip-row">
              {jobSkills.slice(0, 5).map((skill) => (
                <Chip key={skill} label={skill} isActive />
              ))}
            </div>
          </div>
          <div className="section">
            <p className="section__title">Experience</p>
            <Chip label="Mid" isActive />
          </div>
          <Toggle label="Open to Work" checked />
          <Button variant="outline">Upload CV</Button>
        </Card>
      </div>
      <BottomNav />
    </ScreenCard>
  );
}

export function RecruiterPostJobScreen() {
  return (
    <ScreenCard title="Post a job" subtitle="Recruiter tools">
      <div className="stack">
        <Input label="Title" placeholder="Senior Backend Engineer" />
        <Textarea label="Description" placeholder="Describe the role" />
        <Input label="Skills" placeholder="Node, APIs, Databases" />
        <Input label="Salary" placeholder="$120k-$150k" />
        <Input label="Experience level" placeholder="Senior" />
        <Input label="Job type" placeholder="Remote" />
        <Button>Publish job</Button>
      </div>
    </ScreenCard>
  );
}

export function RecruiterManageJobsScreen() {
  return (
    <ScreenCard title="Manage jobs" subtitle="Recruiter tools">
      <div className="stack">
        {recruiterJobs.map((job) => (
          <Card key={job.id} className="manage-card">
            <div>
              <h3>{job.title}</h3>
              <p className="muted">{job.applicants} applicants</p>
            </div>
            <Tag label={job.status} />
          </Card>
        ))}
      </div>
    </ScreenCard>
  );
}

export function RecruiterApplicantsScreen() {
  return (
    <ScreenCard title="Applicants" subtitle="Recruiter tools">
      <div className="stack">
        {applicants.map((applicant) => (
          <Card key={applicant.id} className="applicant-card">
            <div>
              <h3>{applicant.name}</h3>
              <p className="muted">{applicant.experience} level</p>
            </div>
            <div className="chip-row">
              {applicant.skills.map((skill) => (
                <Chip key={skill} label={skill} />
              ))}
            </div>
            <div className="button-row">
              <Button variant="outline" size="sm">
                View profile
              </Button>
              <Button variant="ghost" size="sm">
                Shortlist
              </Button>
              <Button variant="ghost" size="sm">
                Reject
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </ScreenCard>
  );
}
