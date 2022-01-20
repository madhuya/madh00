import Container from "../components/Container";
import Project from "../components/projects";

export default function ProjectPage() {
  return (
    <Container
      title="Vivek Kumar - Developer, Entrepreneur and Memer"
      description="I develope Websites, Mobile Apps. Get in touch with me to know more."
    >
      <div className="justify-center">
        <Project />
      </div>
    </Container>
  );
}
